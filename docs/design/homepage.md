# BlinkNetworks Homepage

## Status
This document records the **approved** homepage composition. It is a
planning reference — most sections listed below are not yet implemented.
See [docs/design/design-system.md](./design-system.md) for the reusable
tokens and global header specification referenced here.

## Primary Visual Reference

docs/design/reference/blinknetworks-homepage-concept.png

This image is the **approved visual target** for the BlinkNetworks homepage.
Implementation should reproduce its hierarchy, proportions, dark/light visual
rhythm, spacing density, enterprise-technology character, and blue/cyan
visual language as closely as practical, while preserving accessibility,
performance, responsiveness, and maintainability. The reference image is not
intended to be embedded directly as the webpage.

## Implementation Status (Step 5A)

Implemented so far:

- `BaseLayout.astro` (html/head/body shell, global styles, header, slot) —
  accepts an optional `headerVariant` prop (`"light"` default, `"dark"`),
  forwarded to `Header.astro`.
- `Header.astro` (site navigation) — supports a `variant` prop; the homepage
  uses `variant="dark"` so the header visually merges into the hero (no
  divider/seam, light text, Network Cyan hover/focus accents, Network
  Cyan + Blink Navy CTA). See `design-system.md` for the full contrast rules.
- `Hero.astro` — the homepage hero section (eyebrow, H1, supporting copy,
  primary/secondary CTAs, trust indicators, single composite illustration).
  The right-side artwork is one production image,
  `app/public/images/hero/hero-composite.webp` (skyline, isometric objects,
  connection lines, hub, and mark all baked in), masked with CSS so it
  blends into the Blink Navy Hero. See Step 5F note below — it supersedes
  the layered approach described in the Step 5B/5C notes.

Sections 3–15 below (Technology Strip through Final CTA) and the Footer are
**not** implemented yet and remain placeholders for future steps.

### Hero content (implemented)

- Eyebrow: "MANAGED IT SERVICES · TORONTO & GTA"
- Headline: "Your IT Department." / "Without the Overhead." (second line in
  the Network Cyan accent treatment)
- Supporting copy: "Managed IT, Microsoft 365, cybersecurity, cloud and
  infrastructure services for growing businesses across Toronto and the
  GTA."
- Primary CTA: "Book a Free Consultation" → `/contact/`
- Secondary CTA: "Explore Our Services" → `/services/`
- Trust indicators: "Microsoft-focused expertise", "Security-first
  approach", "Local GTA support"

### Step 5B note: skyline asset integrated

The approved production Toronto skyline photograph
(`app/public/images/hero/hero-skyline.webp`, 1672×941) is now integrated
behind the network diagram and BlinkNetworks mark, using CSS
masking/opacity/positioning only (no new dependencies, no JavaScript).
The detailed visual target for this composition is
`docs/design/reference/blinknetworks-hero-composition.png`.

Desktop (≥960px) was a two-column layout (content ~46% / illustration ~54%)
at the time of this note; see the Step 5F note below for the current ratio.
At 640–959px the illustration stacks below the content and its width is
constrained. Below 640px everything is single-column with wrapped/stacked
CTAs and trust indicators.

### Step 5C note: isometric composition

The Hero illustration was rebuilt from the flat SVG hub diagram into a
layered isometric scene using the approved production assets under
`app/public/images/hero/isometric/` (`hub-platform`, `infrastructure`,
`cloud`, `security`, `devices`, `mobile`, `team`, `business` — all `.webp`
with alpha transparency). `hero-network-diagram.svg` remains on disk but is
no longer referenced by `Hero.astro`; its connective-line role is now
played by an inline SVG layer. Object labels ("Infrastructure", "Cloud",
"Devices", "Security", "Mobile", "Your Team", "Your Business") remain real
HTML text, not baked into the images.

### Step 5F note: single composite image (current implementation)

`Hero.astro` now renders one production asset,
`app/public/images/hero/hero-composite.webp` (1536×1024, ~125KB), in place
of the Step 5C/5D layered assembly. The composite already contains the
skyline, isometric objects, connection lines, hub, and labels, so the Hero
no longer renders `hero-skyline.webp`, the isometric object assets, the
inline SVG lines/grid layers, `hub-platform.webp`, or the standalone
`blinknetworks-mark.png` as live elements. Those files remain in the
repository as reference/history. The image is masked with a CSS radial
gradient (heavier on the left/top/bottom, lighter on the right to keep the
CN Tower and hub visible) so it blends into the Hero rather than reading as
a pasted rectangle. The current desktop (≥960px) grid is
`0.92fr 1fr` (approximately 48% content / 52% illustration), superseding
the ~46%/54% split recorded in the Step 5B note.

## Approved Section Order

1. Header
2. Hero
3. Technology Strip
4. Business Problem
5. Core Services
6. Microsoft Feature
7. Automation & AI
8. Why BlinkNetworks
9. Systems Thinking / Differentiator
10. How It Works
11. Who We Help
12. Pain Points
13. Technology Stack
14. Insights
15. Final CTA
16. Footer

## Approved Hero Headline

> Your IT Department. Without the Overhead.

## Visual Rhythm

The page alternates dark navy, white, light-grey, and pale-blue sections
(see the color tokens in `design-system.md`) to create visual rhythm as the
user scrolls through the section order above.

## Header Navigation (content)

- Logo/wordmark → `/`
- Services → `/services/`
- Solutions → `/solutions/`
- Why BlinkNetworks → `/why-blinknetworks/`
- Insights → `/insights/`
- About → `/about/`
- Contact → `/contact/`
- Primary CTA: "Book a Consultation" → `/contact/`

Structural rules (height, responsive collapse) are defined once in
`design-system.md` since the header is shared across all pages, not just
the homepage.
