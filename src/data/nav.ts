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
      { title: 'AGT01: Prompt Injection', href: '/agentic-top-10/prompt-injection' },
      { title: 'AGT02: Excessive Agency', href: '/agentic-top-10/excessive-agency' },
      { title: 'AGT03: Unsafe Tool Execution', href: '/agentic-top-10/unsafe-tool-execution' },
      { title: 'AGT04: Inter-Agent Attacks', href: '/agentic-top-10/inter-agent-attacks' },
      { title: 'AGT05: Memory Poisoning', href: '/agentic-top-10/memory-poisoning' },
      { title: 'AGT06: Privilege Escalation', href: '/agentic-top-10/privilege-escalation' },
      { title: 'AGT07: Uncontrolled Loops', href: '/agentic-top-10/uncontrolled-loops' },
      { title: 'AGT08: Data Exfiltration', href: '/agentic-top-10/data-exfiltration' },
      { title: 'AGT09: Insufficient Oversight', href: '/agentic-top-10/insufficient-oversight' },
      { title: 'AGT10: Supply Chain', href: '/agentic-top-10/supply-chain' },
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
