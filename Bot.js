/* Setu — BIS standards AI bot (based on Adii_BOT), embedded in the former "Ask" panel.
   API key is entered via the ⚙ settings and kept only in this browser.

   ── RAG integration (added) ────────────────────────────────────────────────
   The original OpenRouter call is unchanged: same provider, same model list,
   same key handling (localStorage), same UI. What is new is a retrieval step
   before each request:
     1. retrieval.js loads bis_dataset.json and builds TF-IDF vectors
     2. the user's question is vectorised and compared with every record
     3. the best records are injected into the system prompt as CONTEXT
     4. the model is told to answer from that context and to say when the
        knowledge base has nothing relevant
     5. the retrieved records are rendered under the answer as citations
   Nothing here can mark an answer "verified": the badge and the sources come
   only from the dataset records themselves (record.verified).
*/
(function () {
  const CONFIG = { DEFAULT_MODEL: "openai/gpt-4o-mini", SITE_NAME: "Setu BIS Standards Assistant" };
  const KEYS = { API_KEY: "setu_bot_openrouter_key", MODEL: "setu_bot_openrouter_model" };
  const URL = "https://openrouter.ai/api/v1/chat/completions";

  const SYSTEM_PROMPT = `You are Setu, an AI assistant for the Bureau of Indian Standards (BIS), built for the Setu — Standards Assistant platform.

Your scope: answer questions about BIS and Indian Standards (IS codes) and related topics, including:
- Finding the applicable IS standard for a product, material or process (e.g. cement, steel, electrical, toys, packaged drinking water, LPG cylinders, helmets, appliances).
- What a standard covers (scope, requirements, test methods) and its revision/year.
- BIS certification: ISI mark, Compulsory Registration Scheme (CRS), Hallmarking, Quality Control Orders (QCOs), licence/registration process, fees, testing labs, and whether a product needs mandatory certification.
- Standardization, conformity assessment, quality, product safety and compliance topics linked to BIS.
- Procurement, manufacturing and import guidance as it relates to Indian Standards.

Rules:
- Be accurate. Never invent IS numbers, clauses, dates, fees or legal requirements. If unsure, say so plainly and point the user to the official sources: bis.gov.in, the BIS Standards portal, or a BIS branch office.
- Quote the IS code (e.g. IS 10500:2012) when you know it, and say briefly what it covers and whether certification is mandatory or voluntary, if known.
- Standards and QCOs get revised, so remind the user to verify the latest version on the official BIS website for anything legal or commercial.
- Be clear and well organised: short paragraphs or bullets; give more detail when the question needs it, but stay concise.
- Reply in the same language the user writes in (English or Hindi).
- You are a helpful general-purpose assistant as well as a BIS assistant. Answer ordinary questions outside BIS (for example science, maths, programming, writing, study help, history, geography, everyday advice and general knowledge) normally and helpfully. Do not refuse or redirect a user merely because a question is unrelated to BIS.
- For non-BIS questions, do not force BIS terminology into the answer and do not cite the BIS knowledge base unless a retrieved record genuinely supports the answer.
- For questions that mix a general topic with BIS, answer both parts and clearly distinguish general explanation from BIS-specific information.
- You are an informational assistant, not an official BIS representative and not legal advice.`;

  /* Instructions appended to the system prompt on every turn, depending on what
     the retrieval step found. These are the rules that keep answers grounded and
     stop the model from inventing BIS facts. */
  const RAG_RULES_STRONG = `RETRIEVAL CONTEXT (relevant BIS knowledge-base extracts):
The extracts below were retrieved from SETU's BIS knowledge base.
- First decide whether the user's question is actually about BIS, Indian Standards, certification, hallmarking, compliance or a related subject.
- If it is an ordinary non-BIS question, answer it normally using your general knowledge; do not force the extracts into the answer.
- If it is BIS-related, use the extracts as the only source for specific BIS claims in this answer. Do not add standard numbers, clauses, fees, timelines, legal requirements or product scopes that are not supported by the extracts.
- If the extracts only partly answer a BIS question, explain what is supported and say what is not covered. Direct the user to the official BIS website for current or missing details.
- Refer to records by ID in square brackets, e.g. [BIS017], only for claims they support.
- Never call an AI-generated answer officially verified. The citation panel identifies the dataset records and their verification status.`;

  const RAG_RULES_WEAK = `RETRIEVAL CONTEXT (possible partial matches):
The extracts below may or may not answer the question.
- Do not assume a partial text match means the question is BIS-related.
- For an ordinary non-BIS question, answer normally and helpfully using general knowledge. Ignore irrelevant BIS extracts.
- For a BIS-related question, use an extract only if it genuinely supports the requested fact. Do not guess IS numbers, editions, fees, timelines, legal requirements or product scopes.
- If the extracts do not answer the BIS-specific part, say that the prototype knowledge base does not contain a matching verified record and point to the official BIS source.
- Cite record IDs only for facts actually supported by those records.`;

  const RAG_RULES_NONE = `RETRIEVAL CONTEXT: EMPTY — no record matched in the local BIS dataset.
- IMPORTANT: This does NOT mean you must refuse the question. If the user asks an ordinary non-BIS question (general knowledge, science, maths, coding, writing, education, travel, food, history, geography, or everyday help), answer it normally and fully using your general knowledge.
- Do not say that the user must ask only about BIS. Do not add a BIS disclaimer to an unrelated general answer.
- If the question IS about BIS, Indian Standards, a product's BIS certification, hallmarking or a BIS legal/compliance requirement, explain that the local prototype dataset has no matching verified record. You may give safe high-level background if you know it, but do not guess or invent IS numbers, revisions, fees, timelines, mandatory-product lists, legal requirements or product scopes. Recommend checking bis.gov.in for current authoritative details.
- If a question has both general and BIS-specific parts, answer the general part and clearly flag the unsupported BIS-specific part.
- Never describe unsupported BIS information as verified or official.`;

  const $ = (id) => document.getElementById(id);
  const log = $("bot-messages"), form = $("bot-form"), input = $("bot-input"), sendBtn = $("bot-send");
  const modal = $("bot-modal"), keyInput = $("bot-key"), modelSel = $("bot-model");
  if (!log) return;

  const history = [];

  const store = {
    get: (k) => { try { return localStorage.getItem(k); } catch { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch {} },
    del: (k) => { try { localStorage.removeItem(k); } catch {} },
  };
  const getKey = () => (store.get(KEYS.API_KEY) || "").trim();
  const getModel = () => store.get(KEYS.MODEL) || CONFIG.DEFAULT_MODEL;

  /* ---------------------------------------------------------------- dataset */
  let kbStatus = "loading"; // loading | ready | failed
  let kbError = "";

  function setKbStatus(text, ok) {
    const badge = $("bot-kb-status");
    if (!badge) return;
    badge.textContent = text;
    badge.classList.toggle("kb-failed", ok === false);
  }

  async function ensureKnowledgeBase() {
    if (kbStatus !== "loading") return kbStatus === "ready";
    try {
      if (!window.SetuRAG) throw new Error("retrieval.js did not load");
      await window.SetuRAG.init("bis_dataset.json");
      kbStatus = "ready";
      setKbStatus(`BIS knowledge base · ${window.SetuRAG.size} records loaded`, true);
      return true;
    } catch (err) {
      kbStatus = "failed";
      kbError = err && err.message ? err.message : String(err);
      setKbStatus("BIS knowledge base unavailable", false);
      console.error("Setu: could not load the BIS knowledge base", err);
      return false;
    }
  }

  /* ------------------------------------------------------------ formatting */
  const CATEGORY_LABELS = {
    standards: "Indian Standards",
    certification: "Product certification",
    hallmarking: "Hallmarking",
    testing: "Testing & labs",
    consumer: "Consumer",
  };

  function add(text, type) {
    const wrap = document.createElement("div");
    wrap.className = "msg" + (type === "user" ? " user" : "") + (type === "error" ? " bot-err" : "");
    const who = document.createElement("div");
    who.className = "who";
    who.textContent = type === "user" ? (document.documentElement.lang === "hi" ? "आप" : "You") : "Setu";
    const bubble = document.createElement("div");
    bubble.className = "bubble" + (type === "loading" ? " typing" : "");
    bubble.style.whiteSpace = "pre-wrap";
    bubble.textContent = text;
    wrap.append(who, bubble);
    log.appendChild(wrap);
    log.scrollTop = log.scrollHeight;
    return wrap;
  }

  /* Renders the retrieved records under an answer: the citation block. */
  function addSources(wrap, retrieval) {
    const box = document.createElement("div");
    box.className = "msg-sources";

    if (retrieval.confidence === "none") {
      const note = document.createElement("div");
      note.className = "src-none";
      note.textContent =
        "No matching record in the local BIS knowledge base. General questions can still be answered; for BIS-specific facts, verify details at bis.gov.in.";
      box.appendChild(note);
      wrap.appendChild(box);
      log.scrollTop = log.scrollHeight;
      return;
    }

    const head = document.createElement("div");
    head.className = "src-head";
    head.textContent =
      "From the SETU BIS knowledge base" +
      (retrieval.confidence === "weak" ? " (partial match — check the sources)" : "");
    box.appendChild(head);

    const list = document.createElement("ul");
    list.className = "src-list";

    for (const m of retrieval.matches) {
      const rec = m.record;
      const li = document.createElement("li");

      const id = document.createElement("span");
      id.className = "src-id mono";
      id.textContent = rec.id;

      const label = document.createElement("span");
      label.className = "src-q";
      label.textContent = rec.question;

      const cat = document.createElement("span");
      cat.className = "src-cat";
      cat.textContent = CATEGORY_LABELS[rec.category] || rec.category;

      const link = document.createElement("a");
      link.className = "src-link";
      link.href = rec.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = rec.source || rec.url;

      li.append(id, label, cat, link);

      if (rec.verified !== true) {
        const flag = document.createElement("span");
        flag.className = "src-unverified";
        flag.textContent = "unverified";
        flag.title = rec.note || "This record could not be independently verified against an official BIS source.";
        li.appendChild(flag);
      }
      if (rec.time_sensitive) {
        const ts = document.createElement("span");
        ts.className = "src-flag";
        ts.textContent = "can change";
        ts.title = rec.note || "Figure may be revised by BIS; confirm the current value.";
        li.appendChild(ts);
      }
      list.appendChild(li);
    }

    box.appendChild(list);
    wrap.appendChild(box);
    log.scrollTop = log.scrollHeight;
  }

  /* Builds the context block handed to the model. */
  function buildContext(retrieval) {
    return retrieval.matches
      .map((m) => {
        const rec = m.record;
        const status = rec.verified === true ? "verified against an official BIS page" : "NOT independently verified";
        return [
          `[${rec.id}] category: ${rec.category}`,
          `Question: ${rec.question}`,
          `Answer: ${rec.answer}`,
          `Source: ${rec.source} — ${rec.url}`,
          `Status: ${status}`,
        ].join("\n");
      })
      .join("\n\n");
  }

  function systemPromptFor(retrieval) {
    if (retrieval.confidence === "strong") {
      return `${SYSTEM_PROMPT}\n\n${RAG_RULES_STRONG}\n\n--- BEGIN EXTRACTS ---\n${buildContext(retrieval)}\n--- END EXTRACTS ---`;
    }
    if (retrieval.confidence === "weak") {
      return `${SYSTEM_PROMPT}\n\n${RAG_RULES_WEAK}\n\n--- BEGIN EXTRACTS ---\n${buildContext(retrieval)}\n--- END EXTRACTS ---`;
    }
    return `${SYSTEM_PROMPT}\n\n${RAG_RULES_NONE}`;
  }

  /* ------------------------------------------------------------- chat flow */
  function greet() {
    log.innerHTML = "";
    add("Namaste! I'm Setu. Ask me about BIS, Indian Standards, certification and hallmarking — or ask a general question about study, science, technology and everyday topics. What would you like to know?", "bot");
  }

  function openModal() {
    keyInput.value = store.get(KEYS.API_KEY) || "";
    modelSel.value = getModel();
    modal.hidden = false;
    keyInput.focus();
  }
  const closeModal = () => { modal.hidden = true; };

  async function send(text) {
    const key = getKey();
    if (!key) {
      add("Add your OpenRouter API key in Settings (gear icon) to enable Setu.", "error");
      openModal();
      return;
    }

    history.push({ role: "user", content: text });
    const loading = add("Searching the BIS knowledge base…", "loading");
    sendBtn.disabled = true;

    try {
      /* 1–3. Retrieve from the BIS dataset. If the dataset cannot be loaded the
         chat still works, but without context — and the user is told. */
      let retrieval = { matches: [], best: 0, confidence: "none", reason: "knowledge base unavailable" };
      const kbReady = await ensureKnowledgeBase();
      const loadingBubble = loading.querySelector(".bubble");

      if (kbReady) {
        retrieval = window.SetuRAG.retrieve(text);
        loadingBubble.textContent = "Checking the BIS knowledge base… drafting answer…";
      } else {
        loadingBubble.textContent = "Thinking…";
        add(
          `The BIS knowledge base could not be loaded (${kbError}). Serve this folder over a local web server — for example "python -m http.server 8000" — instead of opening index.html directly, then reload. Answering without the knowledge base for now.`,
          "error"
        );
      }

      /* 4. Same OpenRouter endpoint, same key, same model — only the system
         prompt now carries the retrieved context. */
      const res = await fetch(URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${key}`,
          "Content-Type": "application/json",
          "HTTP-Referer": /^https?:/.test(window.location.origin) ? window.location.origin : "https://localhost",
          "X-Title": CONFIG.SITE_NAME,
        },
        body: JSON.stringify({
          model: getModel(),
          messages: [{ role: "system", content: systemPromptFor(retrieval) }, ...history.slice(-12)],
          max_tokens: 700,
          temperature: 0.3,
        }),
      });
      const data = await res.json().catch(() => ({}));
      loading.remove();
      if (!res.ok) {
        history.pop();
        add(`Could not reach Setu: ${data?.error?.message || data?.message || "Request failed (" + res.status + ")"}`, "error");
        return;
      }
      const reply = data?.choices?.[0]?.message?.content?.trim() || "Sorry, I could not generate a reply. Try again.";
      history.push({ role: "assistant", content: reply });

      /* 5–6. Show the answer, then the records it drew on. */
      const msg = add(reply, "bot");
      addSources(msg, retrieval);
    } catch (e) {
      loading.remove();
      history.pop();
      add("Network error. Check your connection and try again.", "error");
      console.error(e);
    } finally {
      sendBtn.disabled = false;
    }
  }

  function handle(text) {
    const t = text.trim();
    if (!t) return;
    add(t, "user");
    send(t);
  }

  form.addEventListener("submit", (e) => { e.preventDefault(); const v = input.value; input.value = ""; handle(v); });
  $("bot-suggestions").addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (chip && chip.dataset.prompt) handle(chip.dataset.prompt);
  });
  $("bot-settings").addEventListener("click", openModal);
  $("bot-save").addEventListener("click", () => {
    const k = keyInput.value.trim();
    k ? store.set(KEYS.API_KEY, k) : store.del(KEYS.API_KEY);
    store.set(KEYS.MODEL, modelSel.value || CONFIG.DEFAULT_MODEL);
    closeModal();
  });
  modal.querySelectorAll("[data-close-bot-modal]").forEach((el) => el.addEventListener("click", closeModal));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) closeModal(); });

  greet();
  ensureKnowledgeBase(); // warm the index so the first question is fast
  window.BotChat = { refreshLang() { /* bot replies are English-only; keep conversation intact */ } };
})();
