
// ---------------- i18n dictionary ----------------
const STRINGS = {
  en:{
    logoSub:"Bureau of Indian Standards · AI Prototype",
    navHome:"Home", navAsk:"Ask Setu", navRecommend:"Recommend", navExplore:"Explore",
    navDashboard:"Dashboard", navDocuments:"Documents", profilePage:"Profile", profileDashboard:"Dashboard", profileDocuments:"My Documents", profileLogout:"Log out",
    authKicker:"SECURE ACCESS · PROTOTYPE", authTitle:"Welcome to <em>Setu</em>", authSub:"Sign in to access the BIS standards assistant, your documents and the platform dashboard.", emailLabel:"Email address", passwordLabel:"Password", showPassword:"Show", rememberMe:"Remember me", demoAccess:"Demo access", signIn:"Sign in to Setu", demoLogin:"Continue with Demo Account",
    workspaceKicker:"SETU WORKSPACE", dashboardTitle:"Dashboard", dashboardSub:"Everything you need to work with Indian Standards in one place.", uploadDocumentBtn:"＋ Upload document",
    dashAssistantLabel:"ASSISTANT", dashAssistantTitle:"Setu AI", dashAssistantSub:"Ask anything about BIS and Indian Standards.", dashAssistantBtn:"Open Setu →",
    dashDocumentsLabel:"DOCUMENTS", dashDocumentsSub:"Upload reference files for your workspace.", dashDocumentsBtn:"Manage documents →",
    dashCatalogueLabel:"CATALOGUE", dashCatalogueTitle:"Standards explorer", dashCatalogueSub:"Browse the prototype BIS catalogue.", dashCatalogueBtn:"Explore →",
    dashStatusLabel:"STATUS", dashStatusTitle:"System ready", dashStatusSub:"RAG assistant prototype is online.", dashStatusOperational:"● Operational",
    documentWorkspaceKicker:"DOCUMENT WORKSPACE", documentsTitle:"My Documents", documentsSub:"Upload PDFs and reference files for the Setu knowledge workspace.", backAssistant:"← Back to assistant",
    uploadTitle:"Upload reference documents", uploadSub:"Drag & drop files here or choose from your device.", uploadHint:"PDF, DOC, DOCX · MAX 20 MB", chooseFiles:"Choose files", knowledgeBase:"KNOWLEDGE BASE", uploadedDocuments:"Uploaded documents", noDocuments:"No documents uploaded yet.<br><small>Your uploaded files will appear here.</small>", demoNoteLabel:"For SIH demo:", demoNote:"uploaded files are stored locally in this browser. In production, this area can connect to the backend ingestion pipeline and RAG index.",
    profileKicker:"ACCOUNT", profileTitle:"My Profile", profileSub:"Manage your Setu account and workspace preferences.", profileRole:"USER ACCOUNT", profileActive:"● Active account", profileDetailsLabel:"ACCOUNT DETAILS", profileNameLabel:"Name", profileEmailLabel:"Email", profileAccessLabel:"Access", profileAccessValue:"Standard User", profileWorkspaceLabel:"WORKSPACE", profileDocsStat:"Documents", profileAssistantStat:"Assistant", profileLanguageStat:"Languages", profileManageDocs:"Manage my documents →", profileLogoutBtn:"Log out of Setu", protoBadge:"Prototype · Mock Data",
    eyebrow:"SIH26107 · AI-Powered Intelligent Assistant",
    heroTitle:"Every product has<br>a standard. <em>Find it</em><br>in one line.",
    heroSub:"Setu reads the Indian Standards catalogue so procurement officers, manufacturers and consumers don't have to. Ask a question in plain language, or describe what you're building — get the exact IS code, its scope, and whether it's mandatory.",
    consoleLabel1:"Quick lookup", consoleHint:"// try a product or IS code",
    heroSearchPlaceholder:"e.g. drinking water quality, IS 456, LPG cylinder…",
    searchBtn:"Search",
    chip1:"Drinking water", chip2:"Cement & concrete", chip3:"Electrical wiring", chip4:"Toy safety", chip5:"Steel reinforcement",
    sealStatus:"Verified Standard",
    sectionAskHeading:"Chat with Setu", sectionAskNum:"01 — BIS standards AI assistant",
    tabAsk:"Setu AI Bot", tabRecommend:"Recommendation Engine",
    mandatoryPhrase:"This is mandatory for BIS/ISI certification.", voluntaryPhrase:"This is a voluntary standard.",
    mandatoryPhraseShort:"Mandatory for BIS certification.", voluntaryPhraseShort:"Voluntary standard.",
    recCatLabel:"Procurement category", allCategories:"All categories",
    recQueryLabel:"Describe the item (optional)", recQueryPlaceholder:"e.g. reinforced concrete for bridge piers",
    recBtn:"Find standards", recSource:"Source: BIS catalogue (mock)",
    recShowingAll:"Showing all standards",
    recNoResults:"No matching standards in the prototype dataset. Try a different term, or browse by category.",
    recNoResultsMeta:"No results",
    sectionExploreHeading:"Explore by category", sectionExploreNum:"02 — Browse the catalogue",
    footerLeft:"Setu — built for Smart India Hackathon 2026 · SIH26107",
    footerRight:"Prototype interface — data is illustrative, not live BIS records",
    tagMandatory:"Mandatory", tagVoluntary:"Voluntary", tagIsiOn:"ISI Marked", tagIsiOff:"No ISI mark",
    stdSuffix:"standards", stdSuffixSingular:"standard"
  },
  hi:{
    logoSub:"भारतीय मानक ब्यूरो · एआई प्रोटोटाइप",
    navHome:"होम", navAsk:"सेतु से पूछें", navRecommend:"सुझाव", navExplore:"खोजें",
    navDashboard:"डैशबोर्ड", navDocuments:"दस्तावेज़", profilePage:"प्रोफ़ाइल", profileDashboard:"डैशबोर्ड", profileDocuments:"मेरे दस्तावेज़", profileLogout:"लॉग आउट",
    authKicker:"सुरक्षित प्रवेश · प्रोटोटाइप", authTitle:"<em>सेतु</em> में आपका स्वागत है", authSub:"BIS मानक सहायक, अपने दस्तावेज़ और प्लेटफ़ॉर्म डैशबोर्ड तक पहुँचने के लिए साइन इन करें।", emailLabel:"ईमेल पता", passwordLabel:"पासवर्ड", showPassword:"दिखाएँ", rememberMe:"मुझे याद रखें", demoAccess:"डेमो एक्सेस", signIn:"सेतु में साइन इन करें", demoLogin:"डेमो अकाउंट से जारी रखें",
    workspaceKicker:"सेतु कार्यक्षेत्र", dashboardTitle:"डैशबोर्ड", dashboardSub:"भारतीय मानकों के साथ काम करने के लिए आवश्यक सभी सुविधाएँ एक जगह।", uploadDocumentBtn:"＋ दस्तावेज़ अपलोड करें",
    dashAssistantLabel:"सहायक", dashAssistantTitle:"सेतु से पूछें", dashAssistantSub:"सामान्य भाषा में मानक खोजें।", dashAssistantBtn:"सहायक खोलें →",
    dashDocumentsLabel:"दस्तावेज़", dashDocumentsSub:"अपने कार्यक्षेत्र के लिए संदर्भ फ़ाइलें अपलोड करें।", dashDocumentsBtn:"दस्तावेज़ प्रबंधित करें →",
    dashCatalogueLabel:"कैटलॉग", dashCatalogueTitle:"मानक एक्सप्लोरर", dashCatalogueSub:"प्रोटोटाइप BIS कैटलॉग ब्राउज़ करें।", dashCatalogueBtn:"खोजें →",
    dashStatusLabel:"स्थिति", dashStatusTitle:"सिस्टम तैयार है", dashStatusSub:"RAG सहायक प्रोटोटाइप ऑनलाइन है।", dashStatusOperational:"● सक्रिय",
    documentWorkspaceKicker:"दस्तावेज़ कार्यक्षेत्र", documentsTitle:"मेरे दस्तावेज़", documentsSub:"सेतु नॉलेज वर्कस्पेस के लिए PDF और संदर्भ फ़ाइलें अपलोड करें।", backAssistant:"← सहायक पर वापस जाएँ",
    uploadTitle:"संदर्भ दस्तावेज़ अपलोड करें", uploadSub:"फ़ाइलें यहाँ ड्रैग और ड्रॉप करें या अपने डिवाइस से चुनें।", uploadHint:"PDF, DOC, DOCX · अधिकतम 20 MB", chooseFiles:"फ़ाइलें चुनें", knowledgeBase:"नॉलेज बेस", uploadedDocuments:"अपलोड किए गए दस्तावेज़", noDocuments:"अभी कोई दस्तावेज़ अपलोड नहीं हुआ है।<br><small>आपकी अपलोड की गई फ़ाइलें यहाँ दिखाई देंगी।</small>", demoNoteLabel:"SIH डेमो के लिए:", demoNote:"अपलोड की गई फ़ाइलें इस ब्राउज़र में स्थानीय रूप से संग्रहीत हैं। प्रोडक्शन में इसे बैकएंड ingestion pipeline और RAG index से जोड़ा जा सकता है।",
    profileKicker:"अकाउंट", profileTitle:"मेरी प्रोफ़ाइल", profileSub:"अपने सेतु अकाउंट और कार्यक्षेत्र की प्राथमिकताएँ प्रबंधित करें।", profileRole:"यूज़र अकाउंट", profileActive:"● सक्रिय अकाउंट", profileDetailsLabel:"अकाउंट विवरण", profileNameLabel:"नाम", profileEmailLabel:"ईमेल", profileAccessLabel:"पहुँच", profileAccessValue:"सामान्य यूज़र", profileWorkspaceLabel:"कार्यक्षेत्र", profileDocsStat:"दस्तावेज़", profileAssistantStat:"सहायक", profileLanguageStat:"भाषाएँ", profileManageDocs:"मेरे दस्तावेज़ प्रबंधित करें →", profileLogoutBtn:"सेतु से लॉग आउट करें", protoBadge:"प्रोटोटाइप · नमूना डेटा",
    eyebrow:"SIH26107 · एआई-संचालित बुद्धिमान सहायक",
    heroTitle:"हर उत्पाद का एक<br><em>मानक होता है</em>।<br>इसे तुरंत खोजें।",
    heroSub:"सेतु भारतीय मानक सूची को पढ़ता है ताकि खरीद अधिकारियों, निर्माताओं और उपभोक्ताओं को यह स्वयं न करना पड़े। सामान्य भाषा में प्रश्न पूछें, या बताएं कि आप क्या बना रहे हैं — सटीक IS कोड, उसका दायरा, और वह अनिवार्य है या नहीं, जानें।",
    consoleLabel1:"त्वरित खोज", consoleHint:"// उत्पाद या IS कोड आज़माएँ",
    heroSearchPlaceholder:"जैसे: पेयजल गुणवत्ता, IS 456, एलपीजी सिलेंडर…",
    searchBtn:"खोजें",
    chip1:"पेयजल", chip2:"सीमेंट और कंक्रीट", chip3:"विद्युत वायरिंग", chip4:"खिलौना सुरक्षा", chip5:"स्टील सुदृढ़ीकरण",
    sealStatus:"सत्यापित मानक",
    sectionAskHeading:"सेतु से बात करें", sectionAskNum:"01 — BIS मानक AI सहायक",
    tabAsk:"सेतु AI बॉट", tabRecommend:"अनुशंसा इंजन",
    mandatoryPhrase:"यह BIS/ISI प्रमाणन के लिए अनिवार्य है।", voluntaryPhrase:"यह एक स्वैच्छिक मानक है।",
    mandatoryPhraseShort:"BIS प्रमाणन के लिए अनिवार्य।", voluntaryPhraseShort:"स्वैच्छिक मानक।",
    recCatLabel:"खरीद श्रेणी", allCategories:"सभी श्रेणियाँ",
    recQueryLabel:"वस्तु का विवरण दें (वैकल्पिक)", recQueryPlaceholder:"जैसे: पुल के खंभों के लिए प्रबलित कंक्रीट",
    recBtn:"मानक खोजें", recSource:"स्रोत: BIS सूची (नमूना)",
    recShowingAll:"सभी मानक दिखाए जा रहे हैं",
    recNoResults:"प्रोटोटाइप डेटासेट में कोई मेल खाता मानक नहीं मिला। कोई अन्य शब्द आज़माएँ, या श्रेणी अनुसार ब्राउज़ करें।",
    recNoResultsMeta:"कोई परिणाम नहीं",
    sectionExploreHeading:"श्रेणी अनुसार खोजें", sectionExploreNum:"02 — सूची ब्राउज़ करें",
    footerLeft:"सेतु — स्मार्ट इंडिया हैकाथॉन 2026 हेतु निर्मित · SIH26107",
    footerRight:"प्रोटोटाइप इंटरफ़ेस — डेटा उदाहरणात्मक है, वास्तविक BIS रिकॉर्ड नहीं",
    tagMandatory:"अनिवार्य", tagVoluntary:"स्वैच्छिक", tagIsiOn:"ISI चिह्नित", tagIsiOff:"ISI चिह्न नहीं",
    stdSuffix:"मानक", stdSuffixSingular:"मानक"
  }
};

let currentLang = 'en';

// ---------------- mock dataset (bilingual) ----------------
const STANDARDS = [
  {code:"IS 10500:2012", category:"Food & Water",
    title:{en:"Drinking Water — Specification", hi:"पेयजल — विशिष्टता"},
    scope:{en:"Defines permissible physical, chemical and biological limits for water intended for direct human consumption.", hi:"सीधे मानव उपभोग हेतु जल में स्वीकार्य भौतिक, रासायनिक एवं जैविक सीमाओं को परिभाषित करता है।"},
    mandatory:true, isi:true, keywords:["water","drinking","quality","potable"], source:"BIS catalogue (mock)", page:12, confidence:"94%"},
  {code:"IS 14543:2024", category:"Food & Water",
    title:{en:"Packaged Drinking Water (Other than Packaged Natural Mineral Water) — Specification", hi:"पैकेज्ड पेयजल (पैकेज्ड प्राकृतिक मिनरल वाटर के अलावा) — विशिष्टता"},
    scope:{en:"Third revision of the Indian Standard for packaged drinking water other than packaged natural mineral water. Check the official BIS source for current amendments and certification requirements.", hi:"पैकेज्ड प्राकृतिक मिनरल वाटर के अलावा पैकेज्ड पेयजल के लिए भारतीय मानक का तीसरा संशोधन। वर्तमान संशोधनों और प्रमाणन आवश्यकताओं के लिए BIS के आधिकारिक स्रोत की जाँच करें।"},
    mandatory:false, isi:false, keywords:["water","packaged","bottled","drinking","14543"], source:"BIS official product manual (2025)", page:1, confidence:"verified"},
  {code:"IS 456:2000", category:"Construction",
    title:{en:"Plain and Reinforced Concrete — Code of Practice", hi:"सादा एवं प्रबलित कंक्रीट — व्यवहार संहिता"},
    scope:{en:"General design and construction provisions for plain and reinforced cement concrete structures.", hi:"सादा एवं प्रबलित सीमेंट कंक्रीट संरचनाओं के लिए सामान्य डिज़ाइन एवं निर्माण प्रावधान।"},
    mandatory:false, isi:false, keywords:["concrete","cement","construction","structure","reinforced"], source:"BIS catalogue (mock)", page:24, confidence:"93%"},
  {code:"IS 1786:2008", category:"Construction",
    title:{en:"High Strength Deformed Steel Bars — Specification", hi:"उच्च शक्ति विकृत स्टील बार्स — विशिष्टता"},
    scope:{en:"Mechanical and dimensional requirements for TMT and deformed bars used in concrete reinforcement.", hi:"कंक्रीट सुदृढ़ीकरण में प्रयुक्त TMT एवं विकृत बार्स के लिए यांत्रिक एवं आयामी आवश्यकताएँ।"},
    mandatory:true, isi:true, keywords:["steel","bars","reinforcement","tmt","construction"], source:"BIS catalogue (mock)", page:31, confidence:"95%"},
  {code:"IS 269:2015", category:"Construction",
    title:{en:"Ordinary Portland Cement — Specification", hi:"साधारण पोर्टलैंड सीमेंट — विशिष्टता"},
    scope:{en:"Chemical and physical requirements for 33, 43 and 53 grade ordinary Portland cement.", hi:"33, 43 और 53 ग्रेड साधारण पोर्टलैंड सीमेंट के लिए रासायनिक एवं भौतिक आवश्यकताएँ।"},
    mandatory:true, isi:true, keywords:["cement","opc","construction","concrete"]},
  {code:"IS 732:2019", category:"Electrical",
    title:{en:"Electrical Wiring Installations — Code of Practice", hi:"विद्युत वायरिंग संस्थापन — व्यवहार संहिता"},
    scope:{en:"Guidelines for design, erection and testing of low-voltage electrical wiring in buildings.", hi:"भवनों में निम्न-वोल्टेज विद्युत वायरिंग के डिज़ाइन, स्थापना एवं परीक्षण हेतु दिशानिर्देश।"},
    mandatory:false, isi:false, keywords:["electrical","wiring","installation","building"]},
  {code:"IS 8828:2019", category:"Electrical",
    title:{en:"Miniature Circuit Breakers (MCB) — Specification", hi:"लघु परिपथ वियोजक (MCB) — विशिष्टता"},
    scope:{en:"Ratings, construction and short-circuit test requirements for AC circuit breakers up to 125A.", hi:"125A तक की एसी सर्किट ब्रेकरों के लिए रेटिंग, निर्माण एवं शॉर्ट-सर्किट परीक्षण आवश्यकताएँ।"},
    mandatory:true, isi:true, keywords:["mcb","circuit breaker","electrical","short circuit"]},
  {code:"IS 302:2008", category:"Electrical",
    title:{en:"Household Electrical Appliances — Safety", hi:"घरेलू विद्युत उपकरण — सुरक्षा"},
    scope:{en:"General safety requirements for domestic electrical appliances against shock, fire and mechanical hazards.", hi:"बिजली के झटके, आग एवं यांत्रिक खतरों के विरुद्ध घरेलू विद्युत उपकरणों हेतु सामान्य सुरक्षा आवश्यकताएँ।"},
    mandatory:true, isi:true, keywords:["appliance","household","electrical","safety"]},
  {code:"IS 9873", category:"Consumer & Toys",
    title:{en:"Toy Safety — Mechanical, Flammability & Chemical Requirements", hi:"खिलौना सुरक्षा — यांत्रिक, ज्वलनशीलता एवं रासायनिक आवश्यकताएँ"},
    scope:{en:"Safety requirements for toys intended for children, covering small parts, flammability and toxic elements.", hi:"बच्चों के लिए बने खिलौनों हेतु सुरक्षा आवश्यकताएँ, जिसमें छोटे पुर्जे, ज्वलनशीलता एवं विषैले तत्व शामिल हैं।"},
    mandatory:true, isi:true, keywords:["toys","children","safety","toy"]},
  {code:"IS 15410", category:"Consumer & Toys",
    title:{en:"LPG Cylinders — Specification", hi:"एलपीजी सिलेंडर — विशिष्टता"},
    scope:{en:"Design, material and pressure-testing requirements for household LPG cylinders.", hi:"घरेलू एलपीजी सिलेंडरों के लिए डिज़ाइन, सामग्री एवं दाब-परीक्षण आवश्यकताएँ।"},
    mandatory:true, isi:true, keywords:["lpg","cylinder","gas","pressure"]},
  {code:"IS 1608-1", category:"Industrial",
    title:{en:"Metallic Materials — Tensile Testing Method", hi:"धात्विक सामग्री — तन्य परीक्षण विधि"},
    scope:{en:"Standard method for tensile testing of metallic materials at room temperature.", hi:"कक्ष तापमान पर धात्विक सामग्री के तन्य परीक्षण की मानक विधि।"},
    mandatory:false, isi:false, keywords:["metal","tensile","testing","material","industrial"]},
  {code:"IS 2062:2011", category:"Industrial",
    title:{en:"Hot Rolled Structural Steel — Specification", hi:"हॉट रोल्ड संरचनात्मक स्टील — विशिष्टता"},
    scope:{en:"Chemical composition and mechanical properties for structural steel used in fabrication.", hi:"फैब्रिकेशन में प्रयुक्त संरचनात्मक स्टील हेतु रासायनिक संरचना एवं यांत्रिक गुण।"},
    mandatory:false, isi:false, keywords:["steel","structural","industrial","fabrication"]},
  {code:"IS 1239-1", category:"Industrial",
    title:{en:"Mild Steel Tubes — Specification", hi:"माइल्ड स्टील ट्यूब्स — विशिष्टता"},
    scope:{en:"Dimensional and quality requirements for welded and seamless mild steel pipes.", hi:"वेल्डेड एवं सीमलेस माइल्ड स्टील पाइपों हेतु आयामी एवं गुणवत्ता आवश्यकताएँ।"},
    mandatory:true, isi:true, keywords:["pipes","tubes","steel","industrial"]},
  {code:"IS 4031", category:"Construction",
    title:{en:"Methods of Physical Tests for Hydraulic Cement", hi:"हाइड्रोलिक सीमेंट के भौतिक परीक्षण की विधियाँ"},
    scope:{en:"Laboratory test procedures for fineness, setting time and strength of cement.", hi:"सीमेंट की सूक्ष्मता, सेटिंग समय एवं शक्ति हेतु प्रयोगशाला परीक्षण प्रक्रियाएँ।"},
    mandatory:false, isi:false, keywords:["cement","testing","construction","hydraulic"]},
  {code:"IS 13252-1", category:"Electrical",
    title:{en:"Information Technology Equipment — Safety", hi:"सूचना प्रौद्योगिकी उपकरण — सुरक्षा"},
    scope:{en:"Electrical and thermal safety requirements for IT and office equipment.", hi:"आईटी एवं कार्यालय उपकरणों हेतु विद्युत एवं तापीय सुरक्षा आवश्यकताएँ।"},
    mandatory:false, isi:false, keywords:["it equipment","computer","electrical","safety"]},
];

const CAT_LABELS = {
  en:{"Food & Water":"Food & Water","Construction":"Construction","Electrical":"Electrical","Consumer & Toys":"Consumer & Toys","Industrial":"Industrial"},
  hi:{"Food & Water":"खाद्य एवं जल","Construction":"निर्माण","Electrical":"विद्युत","Consumer & Toys":"उपभोक्ता एवं खिलौने","Industrial":"औद्योगिक"}
};
const CATEGORIES = [...new Set(STANDARDS.map(s=>s.category))];

function el(html){ const t=document.createElement('template'); t.innerHTML=html.trim(); return t.content.firstChild; }
function t(key){ return STRINGS[currentLang][key]; }

// ---------------- rendering ----------------
function renderExplore(){
  const grid = document.getElementById('exploreGrid');
  grid.innerHTML = '';
  CATEGORIES.forEach(cat=>{
    const items = STANDARDS.filter(s=>s.category===cat);
    const sample = items.slice(0,2).map(i=>i.code).join(', ');
    grid.appendChild(el(`
      <div class="cat-card" onclick="jumpToCategory('${cat}')">
        <div class="count mono">${items.length} ${t('stdSuffix')}</div>
        <div class="name">${CAT_LABELS[currentLang][cat]}</div>
        <div class="hint">${sample}…</div>
      </div>
    `));
  });
}

function jumpToCategory(cat){
  document.getElementById('rec-panel').classList.add('active');
  document.getElementById('ask-panel').classList.remove('active');
  document.querySelectorAll('.tab').forEach(tb=>tb.classList.remove('active'));
  document.querySelector('.tab[data-tab="rec-panel"]').classList.add('active');
  document.getElementById('recCategory').value = cat;
  document.getElementById('ask').scrollIntoView({behavior:'smooth'});
  runRecommend();
}

function populateCategorySelect(){
  const sel = document.getElementById('recCategory');
  const prevVal = sel.value;
  sel.innerHTML = '';
  const allOpt = document.createElement('option');
  allOpt.value = ''; allOpt.textContent = t('allCategories');
  sel.appendChild(allOpt);
  CATEGORIES.forEach(c=>{
    const o = document.createElement('option');
    o.value = c; o.textContent = CAT_LABELS[currentLang][c];
    sel.appendChild(o);
  });
  sel.value = prevVal || '';
}

function renderStdCard(s){
  return `
    <div class="std-card ${s.mandatory?'mandatory':''}">
      <div class="code">${s.code}</div>
      <div class="title">${s.title[currentLang]}</div>
      <div class="scope">${s.scope[currentLang]}</div>
      <div class="tag-row">
        <span class="tag ${s.mandatory?'mand':''}">${s.mandatory ? t('tagMandatory') : t('tagVoluntary')}</span>
        <span class="tag ${s.isi?'on':''}">${s.isi ? t('tagIsiOn') : t('tagIsiOff')}</span>
        <span class="tag">${CAT_LABELS[currentLang][s.category]}</span>
      </div>
    </div>
  `;
}

function runRecommend(){
  const cat = document.getElementById('recCategory').value;
  const q = document.getElementById('recQuery').value.trim().toLowerCase();
  let results = STANDARDS;
  if(cat) results = results.filter(s=>s.category===cat);
  if(q){
    const terms = q.split(/\s+/);
    results = results.filter(s=>{
      const hay = (s.title.en+' '+s.scope.en+' '+s.keywords.join(' ')).toLowerCase();
      return terms.some(term=>hay.includes(term));
    });
  }
  const grid = document.getElementById('recGrid');
  const meta = document.getElementById('recCount');
  if(results.length===0){
    grid.innerHTML = '';
    grid.appendChild(el(`<div class="empty-state">${t('recNoResults')}</div>`));
    meta.textContent = t('recNoResultsMeta');
    return;
  }
  if(!cat && !q){
    meta.textContent = t('recShowingAll');
  } else {
    const suffix = results.length>1 ? t('stdSuffix') : t('stdSuffixSingular');
    meta.textContent = (currentLang==='hi')
      ? `${results.length} ${suffix} दिखाए जा रहे हैं`
      : `Showing ${results.length} ${suffix}`;
  }
  grid.innerHTML = results.map(renderStdCard).join('');
}

function closePlatformForNavigation(){
  const pages=document.getElementById('platformPages');
  if(pages && !pages.classList.contains('hidden')){
    pages.classList.add('hidden');
    document.querySelectorAll('.platform-page').forEach(p=>p.classList.remove('active'));
  }
}

function setNavActive(key){
  document.querySelectorAll('header nav > a').forEach(a=>a.classList.remove('active'));
  const link=document.querySelector(`header nav > a[data-i18n="nav${key.charAt(0).toUpperCase()+key.slice(1)}"]`);
  if(link) link.classList.add('active');
}

function goHome(event){
  if(event) event.preventDefault();
  closePlatformForNavigation();
  setNavActive('home');
  window.scrollTo({top:0,behavior:'smooth'});
}

function goToSection(event,id){
  if(event) event.preventDefault();
  closePlatformForNavigation();
  setNavActive(id==='explore'?'explore':'ask');

  // When returning to Ask, always restore the main AI chat tab.
  // This is important after the user has opened Recommendation Engine.
  if(id==='ask'){
    const askBtn=document.querySelector('.tab[data-tab="ask-panel"]');
    if(askBtn) switchTab('ask-panel', askBtn);
  }

  const target=document.getElementById(id);
  if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
}

function goToRecommendations(event){
  if(event) event.preventDefault();
  closePlatformForNavigation();
  setNavActive('ask');
  const btn=document.querySelector('.tab[data-tab="rec-panel"]');
  if(btn) switchTab('rec-panel', btn);
  runRecommend();
  const target=document.getElementById('ask');
  if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
}

function openRecommendations(event){
  return goToRecommendations(event);
}

function switchTab(id, btn){
  document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(tb=>tb.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
}

// ---------------- chat logic: handled by bot.js ----------------

function runHeroSearch(){
  const val = document.getElementById('heroSearch').value.trim();
  if(!val) return;
  document.getElementById('recQuery').value = val;
  document.getElementById('recCategory').value = '';
  switchTab('rec-panel', document.querySelector('.tab[data-tab="rec-panel"]'));
  runRecommend();
  document.getElementById('ask').scrollIntoView({behavior:'smooth'});
}

function quickSearch(term){
  document.getElementById('heroSearch').value = term;
  runHeroSearch();
}

// ---------------- language toggle ----------------
function applyStaticStrings(){
  document.querySelectorAll('[data-i18n]').forEach(node=>{
    const key = node.getAttribute('data-i18n');
    node.innerHTML = t(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(node=>{
    const key = node.getAttribute('data-i18n-placeholder');
    node.setAttribute('placeholder', t(key));
  });
  document.getElementById('heroTitle').innerHTML = t('heroTitle');
  document.documentElement.lang = currentLang;
  updateDocumentCounts();
  if(document.getElementById('documentList')) renderDocuments();
  if(document.getElementById('loginEmail')){
    document.getElementById('loginEmail').placeholder = currentLang==='hi' ? 'aap@example.com' : 'you@example.com';
    document.getElementById('loginPassword').placeholder = currentLang==='hi' ? 'अपना पासवर्ड दर्ज करें' : 'Enter your password';
  }
}

function toggleLang(){
  currentLang = currentLang === 'en' ? 'hi' : 'en';
  document.getElementById('optEN').classList.toggle('active', currentLang==='en');
  document.getElementById('optHI').classList.toggle('active', currentLang==='hi');
  applyStaticStrings();
  populateCategorySelect();
  renderExplore();
  runRecommend();
  if(window.BotChat) BotChat.refreshLang();
initPlatform();
}



// ---------------- platform / authentication ----------------
let currentUser = null;
let uploadedDocuments = JSON.parse(localStorage.getItem('setuDocuments') || '[]');

function showApp(){
  document.getElementById('authScreen').classList.add('hidden');
  document.getElementById('appShell').classList.remove('hidden');
}
function demoLogin(){
  currentUser={name:'Demo User',email:'demo@setu.ai',role:'User'};
  localStorage.setItem('setuSession',JSON.stringify(currentUser));
  updateProfile(); showApp();
}
function handleLogin(e){
  e.preventDefault();
  const email=document.getElementById('loginEmail').value.trim();
  const pass=document.getElementById('loginPassword').value;
  const err=document.getElementById('loginError');
  if(pass.length<4){err.textContent=currentLang==='hi'?'पासवर्ड में कम से कम 4 अक्षर होने चाहिए।':'Password must contain at least 4 characters.';return;}
  currentUser={name:email.split('@')[0] || 'User',email,role:'User'};
  if(document.getElementById('rememberMe').checked) localStorage.setItem('setuSession',JSON.stringify(currentUser));
  else sessionStorage.setItem('setuSession',JSON.stringify(currentUser));
  err.textContent=''; updateProfile(); showApp();
}
function logout(){
  localStorage.removeItem('setuSession'); sessionStorage.removeItem('setuSession'); currentUser=null;
  document.getElementById('profileDropdown').classList.remove('open');
  document.getElementById('platformPages').classList.add('hidden');
  document.querySelectorAll('.platform-page').forEach(p=>p.classList.remove('active'));
  document.getElementById('authScreen').classList.remove('hidden');
  document.getElementById('loginPassword').value='';
}
function updateProfile(){
  const name=currentUser?.name || 'Demo User';
  const email=currentUser?.email || 'demo@setu.ai';
  document.getElementById('profileName').textContent=name;
  document.getElementById('profileInitial').textContent=name.charAt(0).toUpperCase();
  updateProfilePage();
}
function updateProfilePage(){
  const name=currentUser?.name || 'Demo User';
  const email=currentUser?.email || 'demo@setu.ai';
  const initial=name.charAt(0).toUpperCase();
  const ids={profilePageName:name,profilePageEmail:email,profileDetailName:name,profileDetailEmail:email,profileAvatarLarge:initial};
  Object.entries(ids).forEach(([id,value])=>{const el=document.getElementById(id);if(el)el.textContent=value;});
  const c=document.getElementById('profileDocCount'); if(c)c.textContent=uploadedDocuments.length;
}
function togglePassword(){
  const input=document.getElementById('loginPassword');
  const btn=input.parentElement.querySelector('button');
  input.type=input.type==='password'?'text':'password'; btn.textContent=input.type==='password'?t('showPassword'):(currentLang==='hi'?'छिपाएँ':'Hide');
}
function toggleProfile(){document.getElementById('profileDropdown').classList.toggle('open')}
document.addEventListener('click',e=>{
  const menu=document.querySelector('.profile-menu');
  if(menu && !menu.contains(e.target)) document.getElementById('profileDropdown').classList.remove('open');
});
function openPlatform(page){
  document.getElementById('platformPages').classList.remove('hidden');
  document.querySelectorAll('.platform-page').forEach(p=>p.classList.remove('active'));
  const pageMap={dashboard:'dashboardPage',documents:'documentsPage',profile:'profilePage'};
  const target=document.getElementById(pageMap[page]||'dashboardPage');
  if(target) target.classList.add('active');
  document.getElementById('profileDropdown')?.classList.remove('open');
  if(page==='documents') renderDocuments(); else if(page==='profile'){ updateDocumentCounts(); updateProfilePage(); } else updateDocumentCounts();
  window.scrollTo({top:0,behavior:'smooth'});
}
function closePlatform(){
  document.getElementById('platformPages').classList.add('hidden');
  document.querySelectorAll('.platform-page').forEach(p=>p.classList.remove('active'));
  window.scrollTo({top:0,behavior:'smooth'});
}
function formatFileSize(bytes){
  if(bytes<1024) return bytes+' B'; if(bytes<1024*1024) return (bytes/1024).toFixed(1)+' KB'; return (bytes/1024/1024).toFixed(1)+' MB';
}
function openFilePicker(){
  const input=document.getElementById('documentInput');
  if(input) input.click();
}

function handleDocumentUpload(e){
  const files=[...e.target.files];
  files.forEach(file=>{
    if(file.size>20*1024*1024) return;
    const ext=(file.name.split('.').pop()||'FILE').toUpperCase();
    uploadedDocuments.unshift({id:Date.now()+Math.random(),name:file.name,size:file.size,type:ext,status:'Ready'});
  });
  localStorage.setItem('setuDocuments',JSON.stringify(uploadedDocuments));
  e.target.value=''; renderDocuments(); updateDocumentCounts();
}
function renderDocuments(){
  const list=document.getElementById('documentList'), count=document.getElementById('documentCount');
  count.textContent=uploadedDocuments.length;
  if(!uploadedDocuments.length){list.innerHTML='<div class="document-empty">'+t('noDocuments')+'</div>';return;}
  list.innerHTML=uploadedDocuments.map((d,i)=>`<div class="document-item"><div class="doc-icon">${d.type}</div><div class="doc-info"><div class="doc-name" title="${d.name}">${d.name}</div><div class="doc-meta">${formatFileSize(d.size)} · ${currentLang==='hi'?'तैयार':'Ready'}</div></div><button class="doc-delete" onclick="deleteDocument(${i})" aria-label="${currentLang==='hi'?'दस्तावेज़ हटाएँ':'Delete document'}">×</button></div>`).join('');
}
function deleteDocument(index){uploadedDocuments.splice(index,1);localStorage.setItem('setuDocuments',JSON.stringify(uploadedDocuments));renderDocuments();updateDocumentCounts()}
function updateDocumentCounts(){const n=document.getElementById('dashDocCount');if(n)n.textContent=currentLang==='hi'?`${uploadedDocuments.length} दस्तावेज़`:`${uploadedDocuments.length} document${uploadedDocuments.length===1?'':'s'}`}
function initPlatform(){
  const saved=localStorage.getItem('setuSession')||sessionStorage.getItem('setuSession');
  if(saved){try{currentUser=JSON.parse(saved);updateProfile();showApp()}catch{}} 
  updateDocumentCounts();
  const dz=document.getElementById('dropZone');
  if(dz){['dragenter','dragover'].forEach(ev=>dz.addEventListener(ev,e=>{e.preventDefault();dz.classList.add('dragging')}));['dragleave','drop'].forEach(ev=>dz.addEventListener(ev,e=>{e.preventDefault();dz.classList.remove('dragging')}));dz.addEventListener('drop',e=>{const input=document.getElementById('documentInput');const dt=new DataTransfer();[...e.dataTransfer.files].forEach(f=>dt.items.add(f));input.files=dt.files;handleDocumentUpload({target:input})})}
}

// ---------------- init ----------------
applyStaticStrings();
populateCategorySelect();
renderExplore();
runRecommend();
