# BlinkNetworks Design System

## Status
This document is the canonical source of truth for approved, reusable
visual design decisions for the BlinkNetworks website. It is referenced by
`app/src/styles/tokens.css`, `app/src/styles/global.css`, and shared
layout/components such as `Header.astro`. See
[docs/design/homepage.md](./homepage.md) for homepage-specific composition.

## Brand Direction
- Modern enterprise technology / premium MSP consultancy.
- Microsoft-first visual emphasis.
- Professional, technically sophisticated, approachable.
- Clean and spacious — not a generic computer-repair/MSP aesthetic.
- No fake testimonials, metrics, customer logos, partnerships, or claims.
- Light/dark alternating page sections.
- Custom diagrams and restrained technology graphics rather than
  stock-photo clutter.

## Colors

| Token | Hex | CSS Variable |
|---|---|---|
| Blink Navy | `#071A2D` | `--color-blink-navy` |
| Secondary Navy | `#0C2948` | `--color-secondary-navy` |
| Blink Blue | `#1976E9` | `--color-blink-blue` |
| Network Cyan | `#2AC5E8` | `--color-network-cyan` |
| Soft Azure | `#EAF5FF` | `--color-soft-azure` |
| Cloud Background | `#F6F9FC` | `--color-cloud-bg` |
| White | `#FFFFFF` | `--color-white` |
| Primary Text | `#132238` | `--color-text-primary` |
| Secondary Text | `#5D6B7A` | `--color-text-secondary` |
| Border | `#DDE6EE` | `--color-border` |

Accent gradient (used sparingly): `--color-accent-gradient`, from
`#1976E9` to `#2AC5E8`.

Color must never be the only cue for meaning (e.g., link/active states
must also use underline, weight, or an icon).

### Color Usage & Contrast

Blink Blue is a brand accent color; at normal text sizes it does not
reliably meet WCAG AA contrast against white/light backgrounds (or as a
solid background behind white text). Prefer **Secondary Navy** for
normal-sized text (e.g., hover/focus states) and for solid CTA backgrounds
where AA contrast against white/light backgrounds is required. Blink Blue
remains appropriate for accents, gradients, icons, and large-scale graphics.

## Layout

- Maximum content width: `1240px` (`--container-max-width`).
- Horizontal padding: desktop `32px`, tablet `24px`, mobile `20px`
  (`--container-padding-desktop` / `--container-padding-tablet` /
  `--container-padding-mobile`).
- Section vertical spacing: desktop approximately `104–120px`, tablet
  approximately `80px`, mobile approximately `64px`
  (`--space-section-desktop` / `--space-section-tablet` /
  `--space-section-mobile`).
- Breakpoints: mobile `< 640px`, tablet `640–959px`, desktop `>= 960px`.
  The site header collapses to the mobile navigation below `960px`.

## Typography

- Preferred brand typeface: Inter. For this phase, use a CSS font stack
  that begins with `Inter` and falls back to system UI fonts
  (`--font-family-base`). No font binaries or `@font-face` are added yet.
- Hero H1 desktop: approximately `58–64px`; mobile: approximately `40–44px`.
- Section H2 desktop: approximately `40–46px`; mobile: approximately
  `31–34px`.
- Card H3: approximately `22–24px`.
- Body: `16–17px`. Body copy must never drop below `16px`.

## Shape / UI

- Buttons: `8px` border radius (`--radius-button`).
- Cards: `14–16px` border radius (`--radius-card`).
- Large visual containers: `20–24px` border radius
  (`--radius-container-lg`).
- Shadows are restrained (`--shadow-sm`, `--shadow-md`); avoid heavy or
  decorative shadows.
- Avoid excessive pill shapes.
- Icon style: consistent 2px rounded-outline stroke.

## Motion

- Restrained only: small fade/slide entrances.
- Normal transitions approximately `200–500ms` (`--duration-fast`,
  `--duration-base`, `--duration-slow`).
- No bouncing, spinning, or typewriter effects.
- All motion must respect `prefers-reduced-motion` (see
  `app/src/styles/global.css`).

## Accessibility

- Semantic HTML throughout.
- Full keyboard navigation.
- Visible focus states on every interactive element (`:focus-visible`).
- Sufficient color contrast (WCAG AA) for text and meaningful UI.
- Minimum practical touch target size of approximately `44px`.
- Color is never the sole information cue.

## Global Header / Navigation (shared chrome)

- Approximate height: `76px` desktop.
- Contents: BlinkNetworks logo/wordmark, primary navigation (Services,
  Solutions, Why BlinkNetworks, Insights, About, Contact), and a primary
  CTA ("Book a Consultation").
- Responsive: collapses to a mobile navigation pattern below the `960px`
  breakpoint, disclosed via an accessible toggle button.
- The header is shared site-wide chrome, implemented once in
  `Header.astro` and reused via `BaseLayout.astro` — it is not
  homepage-specific.
