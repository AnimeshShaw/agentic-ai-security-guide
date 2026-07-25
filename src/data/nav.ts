export interface NavItem {
  title: string;
  href: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const navigation: NavSection[] = [
  {
    title: 'Foundations',
    items: [
      { title: 'What is Agentic AI?', href: '/foundations/what-is-agentic-ai' },
      { title: 'How Agents Work', href: '/foundations/how-agents-work' },
      { title: 'Why Security Matters', href: '/foundations/why-security-matters' },
    ],
  },
  {
    title: 'Threat Landscape',
    items: [
      { title: 'Attack Surface', href: '/threats/attack-surface' },
      { title: 'Prompt Injection', href: '/threats/prompt-injection' },
      { title: 'Real-World Incidents', href: '/threats/real-world-incidents' },
    ],
  },
  {
    title: 'OWASP LLM Top 10',
    items: [
      { title: 'Overview', href: '/llm-top-10' },
      { title: 'LLM01: Prompt Injection', href: '/llm-top-10/prompt-injection' },
      { title: 'LLM02: Sensitive Info Disclosure', href: '/llm-top-10/sensitive-information-disclosure' },
      { title: 'LLM03: Supply Chain', href: '/llm-top-10/supply-chain' },
      { title: 'LLM04: Data Poisoning', href: '/llm-top-10/data-poisoning' },
      { title: 'LLM05: Improper Output Handling', href: '/llm-top-10/improper-output-handling' },
      { title: 'LLM06: Excessive Agency', href: '/llm-top-10/excessive-agency' },
      { title: 'LLM07: System Prompt Leakage', href: '/llm-top-10/system-prompt-leakage' },
      { title: 'LLM08: Vector Weaknesses', href: '/llm-top-10/vector-weaknesses' },
      { title: 'LLM09: Misinformation', href: '/llm-top-10/misinformation' },
      { title: 'LLM10: Unbounded Consumption', href: '/llm-top-10/unbounded-consumption' },
    ],
  },
  {
    title: 'Agentic AI Top 10',
    items: [
      { title: 'Overview', href: '/agentic-top-10' },
      { title: 'ASI01: Agent Goal Hijack', href: '/agentic-top-10/goal-hijack' },
      { title: 'ASI02: Tool Misuse & Exploitation', href: '/agentic-top-10/tool-misuse' },
      { title: 'ASI03: Identity & Privilege Abuse', href: '/agentic-top-10/identity-privilege-abuse' },
      { title: 'ASI04: Agentic Supply Chain', href: '/agentic-top-10/supply-chain' },
      { title: 'ASI05: Unexpected Code Execution', href: '/agentic-top-10/unexpected-code-execution' },
      { title: 'ASI06: Memory & Context Poisoning', href: '/agentic-top-10/memory-context-poisoning' },
      { title: 'ASI07: Insecure Inter-Agent Comm.', href: '/agentic-top-10/insecure-inter-agent-comm' },
      { title: 'ASI08: Cascading Failures', href: '/agentic-top-10/cascading-failures' },
      { title: 'ASI09: Human-Agent Trust Exploitation', href: '/agentic-top-10/human-agent-trust-exploitation' },
      { title: 'ASI10: Rogue Agents', href: '/agentic-top-10/rogue-agents' },
    ],
  },
  {
    title: 'Core Technologies',
    items: [
      { title: 'MCP Protocol', href: '/technologies/mcp-protocol' },
      { title: 'LiteLLM Proxy', href: '/technologies/litellm-proxy' },
      { title: 'NeMo Guardrails', href: '/technologies/nemo-guardrails' },
      { title: 'Sandboxing Agents', href: '/technologies/sandboxing' },
      { title: 'Tools Landscape', href: '/technologies/tools-landscape' },
    ],
  },
  {
    title: 'Governance',
    items: [
      { title: 'AI Governance Basics', href: '/governance/ai-governance-basics' },
      { title: 'Compliance Frameworks', href: '/governance/compliance-frameworks' },
      { title: 'Leadership Checklist', href: '/governance/leadership-checklist' },
    ],
  },
  {
    title: 'Future Trends',
    items: [
      { title: 'Emerging Technologies', href: '/future/emerging-technologies' },
      { title: '12-Month Action Plan', href: '/future/action-plan' },
    ],
  },
  {
    title: 'Reference',
    items: [{ title: 'Glossary', href: '/glossary' }],
  },
];

export const flatNav: NavItem[] = navigation.flatMap((s) => s.items);

export function getAdjacentPages(currentHref: string): {
  prev: NavItem | undefined;
  next: NavItem | undefined;
} {
  const idx = flatNav.findIndex((p) => p.href === currentHref);
  return {
    prev: idx > 0 ? flatNav[idx - 1] : undefined,
    next: idx < flatNav.length - 1 ? flatNav[idx + 1] : undefined,
  };
}
