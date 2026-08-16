# Changelog

All notable changes to the **Agentic AI Security Guide** project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

---

## [1.2.0] - 2026-08-16

### Added
- **Changelog**: Introduced `CHANGELOG.md` adhering to Keep a Changelog and Semantic Versioning standards.

### Changed
- **Framework Upgrades**:
  - Upgraded Astro to `v7.2.2`.
  - Upgraded `@astrojs/check` to `v0.9.10`.
  - Upgraded GitHub Actions in CI/CD workflows:
    - `actions/checkout` to `@v7`
    - `actions/setup-node` to `@v7`
    - `github/codeql-action` (`init`, `autobuild`, `analyze`) to `@v4`
- **Dependabot Configuration**:
  - Added semantic versioning ignore rule in `.github/dependabot.yml` for `typescript` major updates (`version-update:semver-major`) to maintain peer-dependency compatibility with `@astrojs/check`.

### Security
- **Vulnerability Remediation**:
  - Ran `npm audit fix` to eliminate 4 transitive high/moderate vulnerabilities (`fast-uri`, `js-yaml`, `nanoid`, `postcss`).
  - Audited 278 packages with **0 vulnerabilities**.
  - All CI security audit gates passing with strict moderate+ blocking.

---

## [1.1.0] - 2026-08-15

### Added
- **Threat Console UI**: Redesigned Threat Console with Geist electric cyan terminal-native aesthetic, status pills, and reactive indicators.
- **Global Search**: Modal search interface accessible via `Cmd+K` / `Ctrl+K` across all 40 guide pages.
- **Threat Matrix Explorer**: Interactive matrix mapping agent autonomy levels against vulnerability vectors.
- **Maturity Score Calculator**: Executive self-assessment calculator for organizational agentic AI security readiness.
- **Interactive Components**:
  - Added `FlipCard.astro` for adversarial vs. defensive scenario analysis.
  - Added `ScenarioToggle.astro` for side-by-side attack/defense walkthroughs.
  - Added `StepWalkthrough.astro` for sequential incident breakdown.

### Changed
- **SEO & Social Metadata**:
  - Added Open Graph (`og:*`), Twitter Card (`summary_large_image`), Canonical URLs, and JSON-LD structured data to `BaseLayout.astro`.
- **Typography & Design System**:
  - Overhauled typography scale and spacing tokens in `global.css`.
  - Added scoped styling and animations for `PageNav`, `StepWalkthrough`, `FlipCard`, and `ScenarioToggle`.
  - Added utility classes for `.dark-section`, `.defense-section`, `.threat-card`, `.callout`, and `.section-label`.

### Fixed
- Fixed invalid CSS line-height declarations in layout components.
- Pinned TypeScript to `^6.0.3` to resolve `@astrojs/check` peer-dependency conflicts.

---

## [1.0.0] - 2026-07-25

### Added
- **Initial Release**: 40 comprehensive pages dedicated to agentic AI security leadership.
- **Curated Sections**:
  - **Foundations**: *What is Agentic AI*, *How Agents Work*, *Why Security Matters*.
  - **Threat Landscape**: *Attack Surface*, *Prompt Injection*, *Real-World Incidents*.
  - **OWASP Top 10 for LLM Applications**: 10 in-depth vulnerability pages (LLM01–LLM10).
  - **Agentic AI Top 10**: 10 threat vectors specific to autonomous multi-agent architectures (AGT01–AGT10).
  - **Core Technologies**: MCP (Model Context Protocol), LiteLLM Proxy, NeMo Guardrails, Sandboxing, Tools Landscape.
  - **Governance**: AI Governance Basics, Compliance Frameworks (NIST AI RMF, EU AI Act, ISO 42001), 50-item persistent Leadership Checklist.
  - **Future Trends & Roadmap**: Emerging Technologies, 12-Month CISO/CIO Action Plan.
  - **Reference**: Full searchable glossary with 45+ security definitions.
- **CI/CD & Security Pipelines**:
  - Automated `npm audit` blocking gates.
  - GitHub Pages deployment workflow.
  - CodeQL static application security testing (SAST).
  - Dependabot automated weekly dependency monitoring.
- **Design System**:
  - Zero-framework lightweight Astro architecture with dark/light themes.
  - Responsive sidebar navigation and breadcrumb pathing.
