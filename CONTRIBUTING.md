# Contributing

Thank you for taking the time to improve this guide. Contributions are welcome — whether that's a factual correction, a new section, a clearer explanation, or a better interactive example.

## What belongs here

This is a **leadership-focused guide**, not a developer tutorial. Every contribution should serve a CISO, CTO, CIO, risk officer, or board member — not a software engineer building AI systems. If in doubt, ask: "Would a non-technical executive find this useful?"

Good contributions include:

- Factual corrections (outdated framework versions, wrong CVE details, changed regulations)
- New governance case studies or real-world incidents
- Clearer explanations of complex topics
- Additional glossary terms
- Improvements to interactive components (checklist, flip cards, walkthroughs)
- Accessibility improvements
- Bug fixes (broken links, layout issues, dark mode problems)

## Getting started

```bash
# Fork and clone
git clone https://github.com/YOUR_USERNAME/agentic-ai-security-guide.git
cd agentic-ai-security-guide

# Install dependencies
npm ci

# Start dev server
npm run dev
```

The site runs at `http://localhost:4321/agentic-ai-security-guide/`.

## Before opening a PR

```bash
# Must pass — blocks deployment if it fails
npm run build

# Type check
npx tsc --noEmit

# Security audit
npm run audit
```

All three must pass with zero errors. CI will check automatically when you open a PR.

## Content pages

Pages live in `src/pages/`. Each page uses `ContentLayout.astro` and follows this structure:

```astro
---
import ContentLayout from '../../layouts/ContentLayout.astro';
---

<ContentLayout
  title="Page Title"
  description="One sentence summary."
  category="Section Name"
  readingTime="8 min read"
  severity="high"
>
  <!-- content here -->
</ContentLayout>
```

Navigation order is controlled by `src/data/nav.ts` — add your page there to make it appear in the sidebar and prev/next links.

## Style guide

- Write for a non-technical leadership audience
- No code blocks unless unavoidable — use plain language analogies instead
- Avoid jargon without explaining it; add new terms to `src/pages/glossary.astro`
- No emojis in body text or navigation
- Keep sentences short and direct

## Commit messages

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add vendor risk assessment page
fix: correct NIST AI RMF version references
content: update OWASP LLM Top 10 entry for LLM03
docs: improve glossary definition for prompt injection
```

## Opening a pull request

1. Fork the repository
2. Create a branch: `git checkout -b content/your-topic` or `fix/issue-description`
3. Make your changes and verify the build passes
4. Open a PR against `main` — describe what you changed and why
5. CI runs automatically (audit, build, type check, CodeQL)

## Reporting issues

Use [GitHub Issues](https://github.com/AnimeshShaw/agentic-ai-security-guide/issues) for:

- Factual errors or outdated information
- Broken links or navigation
- Accessibility problems
- Missing topics that belong in this guide

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).
