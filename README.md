<div align="center">

<img src="public/favicon.svg" width="72" height="72" alt="Shield logo" />

# Agentic AI Security Guide

**The definitive leadership guide to agentic AI security — built for CISOs, CIOs, CTOs, and every executive who needs to govern AI that can act.**

<br/>

[![Deploy](https://img.shields.io/github/actions/workflow/status/AnimeshShaw/agentic-ai-security-guide/deploy.yml?label=GitHub%20Pages&logo=github&style=flat-square)](https://github.com/AnimeshShaw/agentic-ai-security-guide/actions/workflows/deploy.yml)
[![CI](https://img.shields.io/github/actions/workflow/status/AnimeshShaw/agentic-ai-security-guide/ci.yml?label=CI&logo=githubactions&logoColor=white&style=flat-square)](https://github.com/AnimeshShaw/agentic-ai-security-guide/actions/workflows/ci.yml)
[![Security](https://img.shields.io/github/actions/workflow/status/AnimeshShaw/agentic-ai-security-guide/security.yml?label=Security%20Scan&logo=dependabot&style=flat-square)](https://github.com/AnimeshShaw/agentic-ai-security-guide/actions/workflows/security.yml)
[![0 CVEs](https://img.shields.io/badge/npm%20audit-0%20vulnerabilities-brightgreen?style=flat-square&logo=npm)](https://github.com/AnimeshShaw/agentic-ai-security-guide/actions)
[![Built with Astro](https://img.shields.io/badge/Astro-6.x-FF5D01?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![40 Pages](https://img.shields.io/badge/40%20pages-of%20content-6366F1?style=flat-square)](https://animeshshaw.github.io/agentic-ai-security-guide)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

<br/>

[**Live Site**](https://animeshshaw.github.io/agentic-ai-security-guide) · [Foundations](#-foundations) · [Threat Landscape](#-threat-landscape) · [Governance](#-governance--frameworks) · [Reading Paths](#-reading-paths)

<br/>

</div>

---

## The Problem

> Agentic AI is the fastest-moving paradigm shift since cloud computing — and most organizations have no coherent security or governance model for it.

Traditional AI responds when asked. **Agentic AI acts on its own.** It plans, makes decisions, calls APIs, executes code, sends emails, and chains actions together autonomously — often without a human in the loop.

When something that can _act_ is also potentially manipulable via prompt injection, supply-chain compromise, or insecure tool permissions — the security stakes are categorically different from anything your existing controls were designed to handle.

This guide exists to bridge that gap. Forty deeply researched pages, written for leaders — not developers.

---

## What Makes This Different

<table>
<tr>
<td width="50%">

### For Decision-Makers, Not Developers
No code to memorize. No jargon walls. Every concept is explained from first principles so you can have informed conversations with your technical teams and vendors — and ask the questions that actually matter.

### Threat-First Thinking
Built around real attack patterns: prompt injection, tool abuse, supply chain compromise, multi-agent trust failures, and more. Not theoretical — grounded in documented incidents and OWASP's LLM Top 10.

</td>
<td width="50%">

### Interactive Learning
Flip cards for adversarial/defensive scenarios, guided step walkthroughs, a 50-question leadership checklist with persistent state (saves your progress), and a full searchable glossary.

### Production-Grade Security Posture
Zero npm vulnerabilities. CodeQL static analysis. Trufflehog secret scanning. CSP headers. Weekly Dependabot updates. This guide about AI security is itself built securely.

</td>
</tr>
</table>

---

## Site Architecture

```
agentic-ai-security-guide/
│
├── Foundations (3 pages)
│   ├── What Is Agentic AI
│   ├── How Agents Work
│   └── Why Security Matters
│
├── Threat Landscape (6 pages)
│   ├── Attack Surface
│   ├── Prompt Injection
│   ├── Real-World Incidents
│   ├── OWASP LLM Top 10
│   ├── Supply Chain Risks
│   └── Multi-Agent Trust
│
├── Core Technologies (8 pages)
│   ├── Model Context Protocol (MCP)
│   ├── LiteLLM Proxy
│   ├── NeMo Guardrails
│   ├── Sandboxing Agents
│   ├── Tools Landscape
│   ├── Monitoring & Observability
│   ├── Red-Teaming AI Systems
│   └── Incident Response
│
├── Governance & Frameworks (9 pages)
│   ├── AI Governance Basics
│   ├── Compliance Frameworks (NIST, EU AI Act, ISO 42001)
│   ├── Risk Assessment
│   ├── Vendor Risk Management
│   ├── Data Privacy & AI
│   ├── Human Oversight Design
│   ├── Policy Templates
│   ├── Board Communication
│   └── Leadership Checklist (50 questions, saves progress)
│
├── Future Trends (8 pages)
│   ├── Emerging Technologies
│   ├── Computer Use Agents
│   ├── Long-Horizon Planning
│   ├── Multi-Agent Systems
│   ├── Post-Quantum Considerations
│   ├── Regulatory Horizon
│   ├── Action Plan (12-month CISO/CIO roadmap)
│   └── Building a Security Culture
│
└── Reference
    └── Glossary (45+ terms, live search)
```

---

## Reading Paths

Not every leader needs to read all 40 pages. Here are the recommended entry points:

<table>
<thead>
<tr>
<th>Audience</th>
<th>Time</th>
<th>Path</th>
</tr>
</thead>
<tbody>
<tr>
<td><b>Board Members</b></td>
<td>20 min</td>
<td>Foundations → Why Security Matters → Board Communication</td>
</tr>
<tr>
<td><b>CISOs / VPs Security</b></td>
<td>3–4 hours</td>
<td>All of it — start Threat Landscape, then Governance, then Emerging Technologies</td>
</tr>
<tr>
<td><b>CIOs / CTOs</b></td>
<td>2 hours</td>
<td>Foundations → Core Technologies → Action Plan</td>
</tr>
<tr>
<td><b>Risk Officers</b></td>
<td>90 min</td>
<td>Threat Landscape → Compliance Frameworks → Leadership Checklist</td>
</tr>
<tr>
<td><b>Vendor / Procurement</b></td>
<td>45 min</td>
<td>Vendor Risk Management → Supply Chain Risks → Policy Templates</td>
</tr>
</tbody>
</table>

---

## Foundations

| Page | What You'll Learn |
|------|------------------|
| [What Is Agentic AI](https://animeshshaw.github.io/agentic-ai-security-guide/foundations/what-is-agentic-ai) | How agents differ from chatbots; what autonomy really means for your enterprise |
| [How Agents Work](https://animeshshaw.github.io/agentic-ai-security-guide/foundations/how-agents-work) | LLMs, tools, memory, orchestration — the anatomy of a modern AI agent |
| [Why Security Matters](https://animeshshaw.github.io/agentic-ai-security-guide/foundations/why-security-matters) | The paradigm shift and what traditional defenses miss |

---

## Threat Landscape

| Page | What You'll Learn |
|------|------------------|
| [Attack Surface](https://animeshshaw.github.io/agentic-ai-security-guide/threats/attack-surface) | Where agents are vulnerable and why the surface is larger than you think |
| [Prompt Injection](https://animeshshaw.github.io/agentic-ai-security-guide/threats/prompt-injection) | The most dangerous and widespread attack on AI systems, explained plainly |
| [Real-World Incidents](https://animeshshaw.github.io/agentic-ai-security-guide/threats/real-world-incidents) | Documented cases of what has already gone wrong |
| [OWASP LLM Top 10](https://animeshshaw.github.io/agentic-ai-security-guide/threats/llm-top-10) | Full breakdown of the industry's canonical vulnerability list |
| [Supply Chain Risks](https://animeshshaw.github.io/agentic-ai-security-guide/threats/supply-chain) | Model poisoning, compromised plugins, and third-party risks |
| [Multi-Agent Trust](https://animeshshaw.github.io/agentic-ai-security-guide/threats/multi-agent-trust) | Why agent-to-agent communication is an unsolved security problem |

---

## Governance & Frameworks

| Page | What You'll Learn |
|------|------------------|
| [AI Governance Basics](https://animeshshaw.github.io/agentic-ai-security-guide/governance/ai-governance) | What you need to govern: models, agents, data, and people |
| [Compliance Frameworks](https://animeshshaw.github.io/agentic-ai-security-guide/governance/compliance-frameworks) | NIST AI RMF, EU AI Act, ISO 42001, and how they map to your obligations |
| [Leadership Checklist](https://animeshshaw.github.io/agentic-ai-security-guide/governance/leadership-checklist) | 50 questions every leader should be asking — with persistent progress tracking |

---

## Security Posture

This project practices what it teaches.

| Control | Status |
|---------|--------|
| npm audit (moderate+) | Blocks CI & deployment |
| CodeQL static analysis | Weekly + every PR |
| Trufflehog secret scanning | Full git history on every PR |
| Dependabot | Weekly updates, Monday 09:00 IST |
| Content Security Policy | Strict CSP header via `_headers` |
| HTTP Security Headers | HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy |
| Known CVEs in dependencies | **0** (as of last audit) |

---

## Tech Stack

<div align="center">

<img src="https://skillicons.dev/icons?i=astro,ts,css,github,githubactions&theme=dark" alt="Tech stack icons" />

</div>

<br/>

| Technology | Role |
|-----------|------|
| [Astro 6.x](https://astro.build) | Static site generator — zero JS by default, island architecture |
| TypeScript | Type-safe components, data schemas, and navigation config |
| Custom CSS | Full design system with CSS variables, dark/light theme, zone tokens |
| GitHub Actions | CI (audit → build → typecheck), Pages deployment, Security scanning |
| CodeQL | Static analysis for JavaScript/TypeScript security vulnerabilities |
| Trufflehog | Verified secret scanning across full git history |
| Dependabot | Automated dependency update PRs |

No frameworks were harmed in the making of this site. No React, no Vue, no Tailwind — just Astro, TypeScript, and CSS that you can actually read.

---

## CI/CD

```
Push to main
    │
    ├── CI Workflow
    │   ├── npm audit (fail on moderate+)
    │   ├── astro build (fail on error)
    │   └── tsc --noEmit (type check)
    │
    ├── Deploy Workflow (after CI)
    │   ├── npm audit (second gate)
    │   ├── astro build → dist/
    │   └── GitHub Pages deployment
    │
    └── Security Workflow (also runs weekly)
        ├── npm audit --audit-level=high
        ├── CodeQL analysis
        └── Trufflehog secret scan
```

---

## Local Development

```bash
# Clone
git clone https://github.com/AnimeshShaw/agentic-ai-security-guide.git
cd agentic-ai-security-guide

# Install
npm ci

# Develop
npm run dev

# Build
npm run build

# Security audit
npm run audit
```

Requires Node.js 22+.

---

## Contributing

Found an error? Want to add a page, expand a section, or improve the interactive elements?

1. Fork the repository
2. Create a feature branch: `git checkout -b content/your-topic`
3. Make your changes (run `npm run build` to verify)
4. Open a pull request — CI will audit, build, and type-check automatically

Content PRs, factual corrections, and new governance case studies are especially welcome.

---

## License

MIT — free to use, adapt, and share. Attribution appreciated but not required.

---

<div align="center">

Built by [Animesh Shaw](https://github.com/AnimeshShaw) · Hosted on [GitHub Pages](https://animeshshaw.github.io/agentic-ai-security-guide)

*If this guide helped you think more clearly about AI security, consider starring the repo.*

[![Star on GitHub](https://img.shields.io/github/stars/AnimeshShaw/agentic-ai-security-guide?style=social)](https://github.com/AnimeshShaw/agentic-ai-security-guide/stargazers)

</div>
