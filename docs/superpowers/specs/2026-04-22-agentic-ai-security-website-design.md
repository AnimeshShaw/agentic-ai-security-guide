# Design Spec: Agentic AI Security Guide Website

**Date:** 2026-04-22  
**Status:** Approved — building

---

## Decisions Recorded

| Decision | Choice | Reason |
|----------|--------|--------|
| Framework | Astro 4.x | Content-first, islands architecture, compiles to static HTML |
| Styling | Tailwind CSS + custom CSS variables | Full design control + utility speed |
| Interactivity | Vanilla JS in Astro `<script>` tags | No framework overhead, fast |
| Fonts | Syne (headlines), Inter (body), JetBrains Mono (code) | Google Fonts CDN |
| Theme | Light base + dark accent sections | Readable for long content, dramatic for threat sections |
| Hosting | Local dev only for now | User choice |
| Content | All written from scratch (AI-authored) | No pre-existing content |
| Interactive patterns | All 4 types (flip cards, walkthroughs, scenario toggles, checklist) | User confirmed D (all) |

---

## Content Map (~30 pages)

```
/                          Landing page (executive hero + reading paths)
/foundations/what-is-agentic-ai
/foundations/how-agents-work
/foundations/why-security-matters
/threats/attack-surface
/threats/prompt-injection
/threats/real-world-incidents
/llm-top-10/               Hub (overview + grid)
/llm-top-10/[1-10]         10 individual pages
/agentic-top-10/           Hub (overview + grid)
/agentic-top-10/[1-10]     10 individual pages
/technologies/mcp-protocol
/technologies/litellm-proxy
/technologies/nemo-guardrails
/technologies/sandboxing
/technologies/tools-landscape
/governance/ai-governance-basics
/governance/compliance-frameworks
/governance/leadership-checklist  (interactive 50-question)
/future/emerging-technologies
/future/action-plan
/glossary
```

---

## Design System

### Colors
```
Light base:  #F8F9FA bg, #FFFFFF surface, #0F172A text, #475569 secondary
Dark accent: #0F172A bg, #1E293B surface, #F1F5F9 text, #38BDF8 accent
Danger:      #EF4444 | Warning: #F59E0B | Defense: #22C55E | Info: #38BDF8
Brand:       #6366F1 (indigo)
```

### Layout
- Sidebar: 280px fixed, collapsible on mobile
- Content: max 780px, centered in remaining space
- Reading progress bar: 3px gradient line at top of page

### Interactive Components
1. **FlipCard** — click to reveal threat explanation
2. **StepWalkthrough** — animated step-by-step attack walkthroughs
3. **ScenarioToggle** — toggle between Attacker/Defender view
4. **InteractiveChecklist** — 50-question leadership checklist with localStorage

### OWASP LLM Top 10 (2025)
LLM01 Prompt Injection, LLM02 Sensitive Info Disclosure, LLM03 Supply Chain,
LLM04 Data Poisoning, LLM05 Improper Output Handling, LLM06 Excessive Agency,
LLM07 System Prompt Leakage, LLM08 Vector Weaknesses, LLM09 Misinformation,
LLM10 Unbounded Consumption

### Agentic AI Top 10
AGT01 Prompt Injection, AGT02 Excessive Agency, AGT03 Unsafe Tool Execution,
AGT04 Inter-Agent Attacks, AGT05 Memory Poisoning, AGT06 Privilege Escalation,
AGT07 Uncontrolled Action Loops, AGT08 Data Exfiltration, AGT09 Insufficient Oversight,
AGT10 Supply Chain Compromise
