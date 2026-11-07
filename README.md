# Setu: AI-Driven Bureau of Indian Standards (BIS) Compliance & RAG Assistant

> **Setu** bridges standard regulatory guidelines and end users (consumers and small business owners) by deploying a customized Retrieval-Augmented Generation (RAG) workflow over Bureau of Indian Standards (BIS) documents.

---

## 🚀 Overview
Navigating complex product safety regulations, standard marks (like ISI and Hallmarking), and Compulsory Registration Scheme (CRS) numbers can be difficult for small business owners and everyday consumers. **Setu** solves this by providing an intelligent, zero-hallucination compliance assistant powered by hybrid search and vector embeddings over official regulatory documents.

---

## 🛠️ Key Technical Architecture & Features
* **Hybrid Search Engine:** Combines **BM25 keyword matching** with **dense vector embeddings** for high-precision retrieval across complex technical and regulatory PDF/JSON datasets.
* **Structured Document Chunking:** Custom text-splitting and dataset validation pipelines optimized for clause-by-clause indexing of BIS standards to minimize AI hallucinations.
* **Evaluation & Validation:** Automated dataset validation scripts (`validate_dataset.py`) and unit-tested retrieval logic (`test_retrieval.js`) ensuring high reliability.
* **RAG-Powered Clause Inspector:** Allows users to query specific product safety standards and get direct, cited responses mapped back to official standard clauses.
* **Compliance Dashboard UI:** A clean interface designed for small enterprises to track certification criteria, license validity, and vendor requirements.

---

## 📁 Repository Structure
```tree
setu/
├── app.js / bot.js       # Core application and bot logic
├── retrieval.js          # Hybrid search and RAG retrieval implementation
├── bis_dataset.json      # Structured regulatory dataset for compliance queries
├── validate_dataset.py   # Dataset validation utility
├── index.html / style.css# Frontend interface styling and layout
└── start_windows.bat     # Quickstart batch script for Windows environments
