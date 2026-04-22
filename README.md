# 🤖🔐 Agentic AI & AI Security — The Leadership Guide

> **Who this is for:** CISOs, CIOs, CTOs, VPs of Engineering, Board Members, Risk Officers, and anyone in a leadership role who needs to *actually understand* what their teams are building with AI — and what can go wrong.
>
> **What this is not:** A developer tutorial. No code to memorize. Just clear, deep thinking.

---

## Why This Repository Exists

Agentic AI is the fastest-moving shift in enterprise technology since cloud computing. Unlike traditional software, AI agents don't just respond — they **plan, decide, act, and chain actions together autonomously**. They browse the web, write and execute code, send emails, call APIs, and interact with each other.

This creates an entirely new category of security risk that most organizations are not prepared for.

This guide gives leaders a **complete, honest, deeply explained mental model** of this space — covering what agentic AI is, how it works, what can go wrong, what tools exist to protect you, and what's coming next.

---

## 📚 Table of Contents

### Part 1 — Foundations
| File | Topic |
|------|-------|
| [01-what-is-agentic-ai.md](./01-foundations/01-what-is-agentic-ai.md) | How agents differ from chatbots; what autonomy really means |
| [02-how-agents-work.md](./01-foundations/02-how-agents-work.md) | LLMs, tools, memory, orchestration — the anatomy of an agent |
| [03-why-security-matters.md](./01-foundations/03-why-security-matters.md) | The paradigm shift; what traditional defenses miss |

### Part 2 — Threat Landscape
| File | Topic |
|------|-------|
| [01-attack-surface.md](./02-threat-landscape/01-attack-surface.md) | Where agents are vulnerable and why |
| [02-prompt-injection.md](./02-threat-landscape/02-prompt-injection.md) | The most dangerous attack, explained plainly |
| [03-real-world-incidents.md](./02-threat-landscape/03-real-world-incidents.md) | What has already happened |

### Part 3 — Core Technologies (Explained Simply)
| File | Topic |
|------|-------|
| [01-mcp-model-context-protocol.md](./03-core-technologies/01-mcp-model-context-protocol.md) | The new standard connecting agents to everything |
| [02-litellm-proxy.md](./03-core-technologies/02-litellm-proxy.md) | The traffic controller for AI models in your enterprise |
| [03-nemo-guardrails.md](./03-core-technologies/03-nemo-guardrails.md) | NVIDIA's programmable safety layer for AI |
| [04-sandboxing-agents.md](./03-core-technologies/04-sandboxing-agents.md) | How to contain agents so they can't cause harm |
| [05-tools-landscape.md](./03-core-technologies/05-tools-landscape.md) | Every major tool category, mapped and explained |

### Part 4 — Governance & Frameworks
| File | Topic |
|------|-------|
| [01-ai-governance-basics.md](./04-governance-and-frameworks/01-ai-governance-basics.md) | What you need to govern: models, agents, data, people |
| [02-compliance-frameworks.md](./04-governance-and-frameworks/02-compliance-frameworks.md) | NIST AI RMF, EU AI Act, ISO 42001 and more |
| [03-leadership-checklist.md](./04-governance-and-frameworks/03-leadership-checklist.md) | 50 questions every leader should be asking right now |

### Part 5 — Future Trends
| File | Topic |
|------|-------|
| [01-emerging-technologies.md](./05-future-trends/01-emerging-technologies.md) | Multi-agent systems, computer use, post-quantum AI |
| [02-what-leaders-must-do.md](./05-future-trends/02-what-leaders-must-do.md) | Prioritized 12-month action plan for CIOs and CISOs |

### Reference
| File | Topic |
|------|-------|
| [glossary.md](./glossary.md) | Every technical term explained in plain English |
| [CONTRIBUTING.md](./CONTRIBUTING.md) | How to improve this guide |

---

## 🧭 How to Read This

**20 minutes:** Read Part 1 → then [Leadership Checklist](./04-governance-and-frameworks/03-leadership-checklist.md)

**2 hours:** Parts 1–4 in order. Skip nothing in Part 2.

**Board presentation prep:** Part 1 + Part 2 + [Compliance Frameworks](./04-governance-and-frameworks/02-compliance-frameworks.md)

**CISO / VP Security:** All of it. Part 3 is critical for informed vendor conversations.

---

## 🔑 The Core Idea in 3 Sentences

Traditional AI (ChatGPT, Copilot) is a very smart tool that *responds* when asked. **Agentic AI acts on its own** — it has goals, makes plans, uses tools, and takes real actions in the world. When something that can *act* is also potentially manipulable, the security stakes are categorically higher than anything we've faced before.

---

> *"The question is not whether AI agents will be deployed in your enterprise. The question is whether you'll understand them well enough to govern them."*
