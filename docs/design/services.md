# BlinkNetworks Services Page

## Status
This document records the **approved, implemented** Services page. See
[docs/design/design-system.md](./design-system.md) for the shared tokens,
header, and card/motion/accessibility rules referenced throughout, and
[docs/design/homepage.md](./homepage.md) for the homepage this page reuses
patterns from.

## Purpose and Route

Route: `/services/` (`app/src/pages/services/index.astro`)

The page explains what BlinkNetworks manages, the business problems each
service solves, and how a prospective customer can start a conversation. It
is a Canadian-owned managed IT services provider serving growing businesses
across Toronto and the GTA.

## Approved Section Order

1. Services Hero (`ServicesHero.astro`)
2. Introductory Value (`ServicesIntro.astro`)
3. Detailed Services (`ServicesList.astro`, anchor `#services-list`)
4. Featured AI Service (`ServicesAIFeature.astro`)
5. How We Work (`ServicesProcess.astro`)
6. Why BlinkNetworks (`ServicesWhyBlink.astro`)
7. Final Consultation CTA (shared `FinalCTA.astro`, page-specific copy)
8. Footer (shared `Footer.astro`, unchanged)

## Components Created

- `app/src/components/ServicesHero.astro`
- `app/src/components/ServicesIntro.astro`
- `app/src/components/ServicesList.astro`
- `app/src/components/ServicesAIFeature.astro`
- `app/src/components/ServicesProcess.astro`
- `app/src/components/ServicesWhyBlink.astro`

## Shared Components Extended

- **`FinalCTA.astro`** — now accepts optional `eyebrow`, `heading`, `lead`,
  `ctaLabel`, `ctaHref`, and `caption` props. Defaults reproduce the
  homepage's original copy exactly, so the homepage is unaffected. The
  Services page overrides `heading`, `lead`, and `ctaLabel`/`ctaHref`, and
  passes `caption=""` to omit the homepage-only closing caption line.
- **`Header.astro`** — now computes the current page path via `Astro.url.pathname`
  and applies `aria-current="page"` to the matching primary-nav link. This
  works for this route and will work automatically for any future route
  (Solutions, About, Contact, Insights) without further changes to `Header.astro`.

## Header Active-State Behaviour

`Header.astro` normalizes both the nav item `href` and the current
`Astro.url.pathname` to include a trailing slash, then compares them. The
matching link receives `aria-current="page"` and a CSS rule reuses the
existing hover/focus accent color (Secondary Navy on the light header
variant, Network Cyan on the dark variant) with `font-weight: 700` — no new
color was introduced. On `/services/`, the "Services" nav link is active; no
other route is affected, and the homepage (path `/`, which matches no nav
item) renders identically to before.

## Six Service Categories

Rendered by `ServicesList.astro` from one data array (no per-service
components): Managed IT & Help Desk, Microsoft 365 & Endpoint Management,
Cybersecurity, Cloud & Infrastructure, Network Services, and Backup &
Business Continuity. Each entry has a concise business-focused description
and three to four representative capabilities. No "Learn more" links are
included, since individual service-detail routes do not exist yet.

## Service-Image Filenames and Mappings

Production illustrations live under `app/public/images/services/`:

| Service | File | Intrinsic size |
|---|---|---|
| Managed IT & Help Desk | `managed-it-help-desk.webp` | 1518×1036 |
| Microsoft 365 & Endpoint Management | `microsoft-365-endpoint-management.webp` | 1514×1039 |
| Cybersecurity | `cybersecurity.webp` | 1514×1039 |
| Cloud & Infrastructure | `cloud-infrastructure.webp` | 1536×1024 |
| Network Services | `network-services.webp` | 1536×1024 |
| Backup & Business Continuity | `backup-business-continuity.webp` | 1514×1039 |

Each service card also keeps its existing small homepage SVG icon
(`managed-it-support.svg`, `productivity-collaboration.svg`,
`cybersecurity.svg`, `cloud-infrastructure.svg`, `network-services.svg`,
`business-continuity.svg`) as a 24px accent beside the service heading — the
illustration is the primary visual, the icon is a semantic heading accent.

## Featured AI Service

`ServicesAIFeature.astro` renders directly after Detailed Services and
before How We Work, on a full-width `var(--color-blink-navy)` background —
the Cloud → Navy → White color changes alone mark the boundaries with the
sections above and below (no border/divider). It is a standalone section,
not a seventh `ServicesList` card, so the six approved service cards and
their grid are untouched.

Copy (approved, exact, no invented claims): eyebrow "FEATURED SERVICE"; H2
"AI Enablement & Automation"; supporting paragraph "Adopt useful AI and
automation securely, with a practical plan built around your people,
processes and existing technology."; five capabilities — AI readiness and
use-case assessment, Microsoft 365 Copilot planning and rollout, Workflow
automation and system integration, Security, governance and
responsible-use guidance, and User training, adoption and ongoing
optimization; CTA "Discuss Your AI Goals" to `/contact/`. The copy makes no
claim that BlinkNetworks develops proprietary AI models, guarantees
results, or performs vague enterprise-scale "AI transformation."

The section reuses the existing homepage `copilot-ai.svg` icon (40px,
unbadged, decorative, `alt=""`) as a single section marker above the
eyebrow — no new icon or raster image was created, and the asset itself
was not modified.

Structure: a two-column composition at ≥960px (`grid-template-columns:
0.8fr 1.2fr`, vertically centered, 40px gap) — icon, eyebrow, H2, lead, and
CTA on the left; the five capabilities on the right as a plain `<ul>/<li>`
list (no per-item icons, no cards, no borders) in two equal columns
(`repeat(2, minmax(0, 1fr))`), preserving semantic source order so the
fifth capability naturally falls into the first position of the second
row. Below 960px the section stacks to a single column (content first,
then capabilities); the capability list itself is two columns from 640px
up and a single column below 640px. The CTA reproduces the existing
primary dark-surface button recipe (Network Cyan background, Blink Navy
text, Network Cyan border, Soft Azure hover, 44px minimum height, existing
button radius) locally in this component's own scoped styles rather than
importing it from `Hero.astro`.

`/contact/` is an intentional forward route for this CTA — see "Forward
Reference to `/contact/`" below.

## Hero Image

`app/public/images/services/services-hero.webp` (1942×809), served at
`/images/services/services-hero.webp`. Decorative (`alt=""`) since the
adjacent eyebrow/heading/lead copy communicates the page meaning.

## Image Loading Decisions

- **Hero image**: `decoding="async"` and `fetchpriority="high"`, **no**
  `loading="lazy"` — it is above-the-fold on page load.
- **Six service illustrations** and all small SVG icons: `loading="lazy"` +
  `decoding="async"` — below the fold.
- Every image has explicit `width`/`height` attributes matching its actual
  file to prevent layout shift. No new tint overlays, filters, or glows were
  applied to any approved image.

## Desktop, Tablet, and Mobile Layouts

**Services Hero** — two-column grid at ≥960px (content left, image right,
vertically centered); single column (content, then image) below 960px. The
hero image is never hidden at any breakpoint; its own wide aspect ratio
keeps it visually compact on narrow screens.

**Introductory Value** — at ≥960px, an outer two-column layout
(`0.8fr 1.2fr`, ~40%/60%, vertically centered): heading + intro paragraph on
the left, the three value items (Responsive Support, Security First, Ready
to Scale) in one row on the right, with slightly larger 44px icons. Below
960px, the intro content stacks above the value items, which render as a
3-column row at ≥640px and a single stacked column below 640px.

**Detailed Services** — each of the six entries uses an internal
image-and-content split: illustration ~42%, content (icon + heading,
description, capability list) ~58%, sharing the card's `radius-card`
corners (`overflow: hidden`, no separate image radius). At ≥960px, two
entries render per row (three rows total). At 640–959px, one entry per row,
keeping the internal side-by-side image/content split. Below 640px, each
entry stacks internally (image above content). Illustrations use
`object-fit: cover` with a shared `aspect-ratio: 3 / 2` so all six render
with identical proportions despite minor source-dimension differences.

**How We Work** — the existing four-step ordered-list process pattern
(numbered circle, icon, title, description, desktop-only chevron
connectors): four columns at ≥960px, 2×2 grid at 640–959px, single column
below 640px.

**Why BlinkNetworks** — two-column layout at ≥960px (heading left, four
differentiators in one row on the right); 2×2 grid at 640–959px; single
column below 640px.

**Featured AI Service** — two-column layout at ≥960px (icon/eyebrow/H2/lead/CTA
left, two-column capability list right); single stacked column below
960px, with the capability list itself switching from two columns to one
at 640px.

## Accessibility Decisions

- Exactly one `<h1>` on the page (Services Hero); sequential `<h2>` per
  section; `<h3>` for every card/step/theme/differentiator title (the
  Featured AI Service section has one `<h2>` and no `<h3>`s, since its five
  capabilities are plain list text, matching the same no-heading pattern
  already used for each service card's own capability sub-list).
- All decorative images (`alt=""`); no image repeats information already
  conveyed by adjacent text.
- Visible focus states reuse the site's existing `:focus-visible` treatment,
  with the Network Cyan override on dark sections (Hero, Final CTA, and now
  the Featured AI Service), consistent with the rest of the site.
- `#services-list` has `scroll-margin-top: 96px` so the Hero's secondary CTA
  anchor link doesn't hide the heading behind the header.
- No new motion was introduced; the site-wide `prefers-reduced-motion` rule
  in `global.css` continues to apply unchanged.
- Minimum 44px touch targets preserved on all CTAs.

## Content-Integrity Restrictions

No fabricated certifications, partnerships, response-time guarantees,
statistics, customer counts, or vendor status appear anywhere on the page.
Canadian-owned/Toronto-GTA positioning uses existing approved language, with
no flags, maple-leaf decoration, or exaggerated national imagery. All
contact information and the footer are the existing shared, unmodified
`Footer.astro`. The Featured AI Service copy does not claim BlinkNetworks
develops proprietary AI models, guarantees outcomes, or performs vague
enterprise-scale "AI transformation."

## Forward Reference to `/contact/`

The primary Hero CTA, the Final CTA, and the Featured AI Service CTA
("Discuss Your AI Goals") all link to `/contact/`, which does not yet exist
as a built route. This mirrors the same forward-reference pattern already
used across the homepage (Header, Hero, Footer) and is not a gap introduced
by this page.

## Visual-Review Decisions

- The Services Hero's decorative visual was revised during review from an
  inline SVG network diagram to the approved production image
  `services-hero.webp`, rendered with `object-fit: contain` and no overlay,
  glow, or color treatment.
- The Introductory Value section's desktop layout was revised from a
  single stacked column to a 40/60 two-column layout to remove excess
  whitespace and vertically center the content against the value grid.
- The "Built to Scale" icon in Why BlinkNetworks was changed to reuse the
  same growth icon (`growing-organizations.svg`) used for "Ready to Scale"
  in the Introductory Value section, since it communicates scalability more
  clearly than the original icon.

## Framework and Dependency Confirmation

No new framework, UI library, CSS framework, or npm dependency was
introduced. The page uses only Astro, plain CSS, and the existing design
tokens in `app/src/styles/tokens.css`. The Featured AI Service reuses the
existing `copilot-ai.svg` icon; no raster image was generated for it.

## ADR Confirmation

No new Architecture Decision Record was required. This page stays within
[ADR-0001](../adr/0001-use-astro-for-website.md)'s decision (Astro, `/app`
isolation, no new framework or infrastructure) and introduces no new
architectural pattern beyond normal component and prop additions. The
Featured AI Service addition follows the same reasoning.
