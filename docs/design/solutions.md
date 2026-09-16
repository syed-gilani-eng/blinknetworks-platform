# BlinkNetworks Solutions Page

## Status
This document records the **approved, implemented** Solutions page. See
[docs/design/design-system.md](./design-system.md) for the shared tokens,
header, and card/motion/accessibility rules referenced throughout, and
[docs/design/services.md](./services.md) for the Services page this page
is deliberately differentiated from.

## Purpose and Route

Route: `/solutions/` (`app/src/pages/solutions/index.astro`)

The page frames the business problems and outcomes BlinkNetworks solutions
address, complementing rather than duplicating the Services page:

- **Services** = what BlinkNetworks manages and delivers.
- **Solutions** = the business problems and outcomes those capabilities
  address.

## Approved Section Order

1. Header (`Header.astro`, shared, unchanged)
2. Solutions Hero (`SolutionsHero.astro`)
3. Introduction (`SolutionsIntro.astro`)
4. Primary Solutions (`SolutionsList.astro`, anchor `#solutions-list`)
5. Featured Practical AI Adoption (`SolutionsAIFeature.astro`, anchor `#practical-ai-adoption`)
6. How We Solve (`SolutionsProcess.astro`)
7. Why BlinkNetworks (`SolutionsWhyBlink.astro`)
8. Solution-Selection Callout (`SolutionsCallout.astro`)
9. Final Consultation CTA (shared `FinalCTA.astro`, page-specific copy)
10. Footer (`Footer.astro`, shared, unchanged)

## Components Created

- `app/src/components/SolutionsHero.astro`
- `app/src/components/SolutionsIntro.astro`
- `app/src/components/SolutionsList.astro`
- `app/src/components/SolutionsAIFeature.astro`
- `app/src/components/SolutionsProcess.astro`
- `app/src/components/SolutionsWhyBlink.astro`
- `app/src/components/SolutionsCallout.astro`

## Shared Components Reused Unchanged

`Header.astro`, `Footer.astro`, `FinalCTA.astro`, `BaseLayout.astro`,
`global.css`, and `tokens.css` are reused exactly as they exist today — no
props, markup, or styles were added or modified. `FinalCTA.astro`'s
existing optional props (`heading`, `lead`, `ctaLabel`, `ctaHref`,
`caption`) already covered the approved Solutions copy.

## Header Active-State Behaviour

No change was required. `Header.astro` already includes a `Solutions`
nav item (`/solutions/`) and normalizes both the nav `href` and
`Astro.url.pathname` to a trailing slash before comparing them. Visiting
`/solutions/` applies `aria-current="page"` to the "Solutions" link only;
every other route is unaffected.

## Six Solution Categories (Outcome Copy)

Rendered by `SolutionsList.astro` from one data array. Each card is an
outcome statement, not a capability list:

| Solution | Copy |
|---|---|
| Secure Hybrid Work | Give your team secure, dependable access to the tools and information they need—wherever work happens. |
| Microsoft 365 Modernization | Create a more secure, organized and productive Microsoft 365 environment. |
| Cybersecurity Readiness | Reduce risk with layered protection, clear priorities and practical security improvements. |
| Cloud Modernization | Move to flexible cloud services with a roadmap designed around your operations. |
| Reliable Infrastructure | Build a stable technology foundation that supports performance, connectivity and growth. |
| Business Continuity | Protect critical data and keep your organization moving when disruptions occur. |

## Image Filename/Category Mappings and Intrinsic Dimensions

Production illustrations live under `app/public/images/solutions/`
(approved, pre-existing assets; not generated or modified by this task):

| Solution | File | Intrinsic size |
|---|---|---|
| Hero | `solutions-hero.webp` | 1672×941 (transparent) |
| Secure Hybrid Work | `secure-hybrid-work.webp` | 800×600 |
| Microsoft 365 Modernization | `microsoft-365-modernization.webp` | 800×600 |
| Cybersecurity Readiness | `cybersecurity-readiness.webp` | 800×600 |
| Cloud Modernization | `cloud-modernization.webp` | 800×600 |
| Reliable Infrastructure | `reliable-infrastructure.webp` | 800×600 |
| Business Continuity | `business-continuity.webp` | 800×600 |

Each solution card also carries a small existing homepage SVG icon (24px,
`identity-access.svg`, `productivity-collaboration.svg`, `cybersecurity.svg`,
`virtualization-operations.svg`, `infrastructure-automation.svg`,
`business-continuity.svg`) beside its `<h3>` — reused from
`app/public/images/homepage/icons/`, no new icon assets were created.

## Image Loading Strategy

- **Hero image**: `decoding="async"` and `fetchpriority="high"`, **no**
  `loading="lazy"` — above the fold. Rendered with `object-fit: contain`
  and no background panel, preserving its transparent background over the
  Blink Navy hero.
- **Six solution illustrations** and all small SVG icons: `loading="lazy"`
  + `decoding="async"` — below the fold. Each illustration is shown
  `object-fit: contain` inside a padded, contained tile (not full-bleed
  cover), matching its native 800×600 proportions.
- Every image has explicit `width`/`height` attributes matching its actual
  intrinsic size to prevent layout shift.

## Practical AI Adoption Feature and Distinction from Services AI

`SolutionsAIFeature.astro` (`#practical-ai-adoption`) is structurally and
visually distinct from `ServicesAIFeature.astro`, which was **not**
modified:

| Aspect | `ServicesAIFeature` (unchanged) | `SolutionsAIFeature` (new) |
|---|---|---|
| Framing | Concrete delivery capabilities | Safe adoption journey and business outcomes |
| Layout | Two-column split (content left, plain `<ul>` right) | Centered eyebrow/H2/lead, then a four-card row beneath |
| Items | 5 plain-text capabilities, no icons, no cards | 4 themed cards, each a solid white surface with icon + `<h3>` + description over the navy section |
| Section marker icon | `copilot-ai.svg` above the eyebrow | Not used — no icon is repeated in that position |
| CTA | "Discuss Your AI Goals" → `/contact/`, left-aligned | Same label/route, centered beneath the card row |

Copy makes no claim of proprietary AI models, guaranteed outcomes, or vague
enterprise-scale "AI transformation."

## Desktop, Tablet, and Mobile Layouts

**Solutions Hero** — two-column grid at ≥960px (content left, image
right, vertically centered); single column below 960px. The image keeps
its transparent background with no surrounding panel at any breakpoint.

**Introduction** — at ≥960px, an outer two-column layout (`0.8fr 1.2fr`):
heading + lead on the left, three themes in one row on the right. Below
960px the content stacks above the themes, which render as a 3-column row
at ≥640px and a single stacked column below 640px.

**Primary Solutions** — three columns × two rows at ≥960px; two columns
at 640–959px; one column below 640px. Deliberately a 3-up grid (not
Services' 2-up), with each card's illustration contained above the
icon/heading/description (top-to-bottom), not image-left/content-right —
the key structural difference from `ServicesList`.

**Featured Practical AI Adoption** — centered header at all widths; the
four adoption cards render four-up at ≥960px, 2×2 at 640–959px, and a
single column below 640px.

**How We Solve** — the four-step ordered-list process pattern (numbered
circle, icon, title, description): four columns with desktop-only chevron
connectors at ≥960px, a connector-free 2×2 grid at 640–959px, single
column below 640px. Built independently in `SolutionsProcess.astro`
(no import of or coupling to `ServicesProcess.astro`).

**Why BlinkNetworks** — navy value-band. Two-column layout at ≥960px
(heading left, three values in one row on the right); stacked heading with
a 3-column value row at 640–959px; single column below 640px.

**Solution-Selection Callout** — text left, CTA right at ≥960px; stacked
and centered-left below 960px.

## Accessibility and Heading Hierarchy

- Exactly one `<h1>` on the page (Solutions Hero).
- Sequential `<h2>` per section: Introduction, Primary Solutions, Featured
  Practical AI Adoption, How We Solve, Why BlinkNetworks, Callout.
- `<h3>` for every card/theme/step title, including the four Practical AI
  Adoption cards (this section differs intentionally from
  `ServicesAIFeature`, which has no `<h3>`s for its plain-list capabilities).
- Semantic `<ul>/<li>` for all card grids and theme/value lists; semantic
  `<ol>/<li>` for the four-step How We Solve process.
- All decorative images use `alt=""`; no image repeats information already
  conveyed by adjacent text.
- `#solutions-list` has `scroll-margin-top: 96px` so the Hero's secondary
  CTA anchor link doesn't hide the heading behind the header.
- Visible focus states reuse the site's existing `:focus-visible`
  treatment, with the Network Cyan override on dark sections (Hero,
  Featured Practical AI Adoption, Why BlinkNetworks, Final CTA).
- Minimum 44px touch targets on all CTAs.
- No new motion was introduced; the site-wide `prefers-reduced-motion`
  rule in `global.css` continues to apply unchanged.

## Forward Reference to `/contact/`

The Hero primary CTA, the Practical AI Adoption CTA, the Callout CTA, and
the Final CTA all link to `/contact/`, which does not yet exist as a built
route. This mirrors the same forward-reference pattern already used across
the homepage and the Services page and is not a gap introduced by this
page.

## Content-Integrity Restrictions

No fabricated certifications, partnerships, guarantees, statistics, or
customer counts appear anywhere on the page. The Why BlinkNetworks section
makes no claim of guaranteed measurable improvement despite its heading
language. The Practical AI Adoption section does not claim proprietary AI
models, guaranteed outcomes, or vague enterprise-scale "AI transformation."

## Homepage CTA Update Deferred

The homepage `AutomationAI.astro` CTA continues to point to `/contact/` in
this branch. Updating it to `/solutions/#practical-ai-adoption` is
intentionally deferred to a small, separate follow-up branch after this
page has shipped and passed review; `AutomationAI.astro` and
`ServicesAIFeature.astro` were not modified as part of this task.

## Framework and Dependency Confirmation

No new framework, UI library, CSS framework, or npm dependency was
introduced. The page uses only Astro, plain CSS, and the existing design
tokens in `app/src/styles/tokens.css`. All icons are reused from
`app/public/images/homepage/icons/`; the seven Solutions illustrations were
pre-existing approved assets, not generated or modified by this task.

## ADR Confirmation

No new Architecture Decision Record was required.
[ADR-0001](../adr/0001-use-astro-for-website.md) (Astro, `/app` isolation)
and [ADR-0002](../adr/0002-use-plain-css-design-tokens.md) (plain CSS +
custom-property tokens) remain fully applicable; this page introduces no
new architectural pattern beyond normal component and prop reuse.
