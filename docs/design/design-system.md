# BlinkNetworks Design System

**Status:** Approved  
**Purpose:** Canonical source of truth for reusable BlinkNetworks visual and UX decisions.  
**Primary visual direction:** Modern enterprise technology / premium managed IT consultancy with a Microsoft-first emphasis.

---

## 1. Design Authority

This document defines the reusable visual system for BlinkNetworks.com.

Approved visual references are stored under:

`docs/design/reference/`

Production-ready website assets are stored under:

`app/public/`

For the homepage, the primary approved visual reference is:

`docs/design/reference/blinknetworks-homepage-concept.png`

The implementation should reproduce the approved reference's visual hierarchy, density, section rhythm, dark/light alternation, typography character, blue/cyan accents, and enterprise-technology aesthetic as closely as practical while preserving accessibility, responsive behavior, performance, and maintainability.

The reference image must never be embedded as the webpage itself.

---

## 2. Brand Direction

BlinkNetworks should feel:

- Modern
- Enterprise-ready
- Technically sophisticated
- Professional
- Approachable
- Security-conscious
- Microsoft-first
- Clean and spacious
- Local to Toronto and the GTA

The site should **not** resemble:

- A generic computer-repair business
- A consumer electronics site
- A gaming or cyberpunk interface
- A stock-photo-heavy MSP site
- A SaaS dashboard
- An excessively animated technology demo

Use custom diagrams, restrained technology graphics, clean iconography, and intentional whitespace.

---

## 3. Approved Brand Assets

### Reference / master assets

Approved brand references belong under:

`docs/design/reference/brand/`

Expected canonical files:

- `blinknetworks-logo-dark-background.png`
- `blinknetworks-logo-light-background.png`
- `blinknetworks-mark.png`

These files document the approved visual appearance of the BlinkNetworks identity.

### Production website assets

Web-ready assets belong under:

`app/public/brand/`

Expected production files:

- `blinknetworks-logo-dark-background.png`
- `blinknetworks-logo-light-background.png`
- `blinknetworks-mark.png`

The two logo lockup files are cropped from the reference masters to trim
excess transparent canvas margin (the master files have significant empty
space above/below the artwork); the artwork itself is untouched. Production
intrinsic size: `2016×422`. Update this crop if the master reference files
are replaced.

SVG versions may replace PNG production files later if clean approved vector artwork is available.

### Usage

**Dark/navy backgrounds**
- Use the logo variant with the blue/cyan BlinkNetworks mark and white wordmark.

**White/light backgrounds**
- Use the logo variant with the blue/cyan BlinkNetworks mark and dark navy wordmark.

**Mark only**
- Use the standalone BlinkNetworks symbol for compact brand applications such as favicons, diagrams, small UI contexts, or social/icon uses.

### Brand protection

Implementation agents must use the approved assets.

Do not:

- redraw the logo
- recreate the logo in CSS
- substitute a generated logo
- alter the proportions
- alter the wordmark
- change the gradient
- recolor the mark outside approved variants
- stretch or distort the artwork
- add shadows, outlines, or effects that are not part of the approved identity

Maintain sufficient clear space around the logo.

---

## 4. Color System

| Token | Name | Value | Primary use |
|---|---|---:|---|
| `--color-blink-navy` | Blink Navy | `#071A2D` | Hero, dark sections, dark header |
| `--color-secondary-navy` | Secondary Navy | `#0C2948` | High-contrast text, controls, dark UI |
| `--color-blink-blue` | Blink Blue | `#1976E9` | Brand accents, links, diagrams, highlights |
| `--color-network-cyan` | Network Cyan | `#2AC5E8` | Accent text, network lines, dark-surface CTAs |
| `--color-soft-azure` | Soft Azure | `#EAF5FF` | Light accent backgrounds, dark-section secondary text |
| `--color-cloud-background` | Cloud Background | `#F6F9FC` | Alternating light sections |
| `--color-white` | White | `#FFFFFF` | Light surfaces and dark-surface primary text |
| `--color-text-primary` | Primary Text | `#132238` | Main text on light backgrounds |
| `--color-text-secondary` | Secondary Text | `#5D6B7A` | Supporting text on light backgrounds |
| `--color-border` | Border | `#DDE6EE` | Light separators and card borders |

### Signature gradient

Use sparingly:

`#1976E9 → #2AC5E8`

Appropriate uses include:

- BlinkNetworks mark
- selected diagram elements
- subtle glows
- restrained visual accents

Do not use the gradient as a default background for large content sections.

### Contrast rules

Blink Blue is primarily an **accent color**.

Do not assume white text on Blink Blue meets WCAG AA for normal-size text.

On dark surfaces, prefer:

- Network Cyan background + Blink Navy text for prominent CTAs
- White or Soft Azure for body/navigation text
- Network Cyan for highly visible focus treatment

On light surfaces, prefer Secondary Navy where Blink Blue does not provide sufficient contrast for normal-size text.

Accessibility takes priority over exact color matching when the visual reference and contrast requirements conflict.

---

## 5. Typography

### Primary typeface

Preferred brand typeface:

**Inter**

Until approved self-hosted font files are added, use a performant system fallback stack:

```css
font-family:
  "Inter",
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  Roboto,
  Arial,
  sans-serif;
```

Do not load fonts from an external third-party service without an explicit decision.

### Type scale

| Element | Desktop | Mobile |
|---|---:|---:|
| Hero H1 | approximately `54–64px` | approximately `40–44px` |
| Section H2 | approximately `40–46px` | approximately `31–34px` |
| Card H3 | approximately `22–24px` | responsive as appropriate |
| Body | approximately `16–17px` | minimum `16px` |

### Typography principles

- Headings should be strong, compact, and confident.
- Keep hero line lengths controlled.
- Avoid excessively narrow text columns.
- Normal body text must not drop below 16px.
- Use weight and spacing deliberately rather than excessive font-size changes.
- The hero headline should preserve the intended two-line visual treatment on normal desktop widths when practical. The BlinkNetworks homepage Hero currently uses the lower end of the Hero H1 range (~54.4px desktop) to preserve this two-line composition.

---

## 6. Layout System

### Container

Maximum content width:

`1240px`

### Horizontal gutters

- Desktop: `32px`
- Tablet: `24px`
- Mobile: `20px`

### Section spacing

Typical vertical spacing:

- Desktop: approximately `104–120px`
- Tablet: approximately `80px`
- Mobile: approximately `64px`

These are guides, not rigid requirements. The approved homepage intentionally has a polished, compact rhythm and should not develop oversized empty bands between sections.

### Responsive breakpoints

Current shared implementation uses:

- Mobile: `<640px`
- Tablet / compact layout: `640–959px`
- Desktop: `>=960px`

Prefer existing breakpoints unless a concrete layout problem justifies another.

---

## 7. Shape and Surface Language

### Border radii

- Buttons: `8px`
- Cards: `14–16px`
- Large visual containers: `20–24px`

### Shadows

Use restrained shadows only.

Cards should feel clean and professional rather than floating heavily above the page.

### Borders

Use subtle borders to establish structure.

Avoid excessive outlines and boxes.

### Pills

Avoid excessive pill-shaped UI.

Pills should be reserved for controls or labels where the shape has a functional purpose.

---

## 8. Iconography

Preferred visual language:

- Clean
- Rounded
- Technical
- Approximately 2px stroke
- Blue/cyan accents
- Consistent optical size

Do not mix unrelated icon families.

Avoid importing an icon library for only one or two icons when a small approved SVG or CSS treatment is sufficient.

### Third-party technology icons

Where the homepage references third-party technologies BlinkNetworks works
with (e.g. the Technology Strip), do not reproduce, redraw, or approximate
the vendor's official logo or wordmark. Use small original,
BlinkNetworks-styled category icons paired with the plain technology name
as real text. The name — not the icon — is the accessible label; decorative
icon images use `alt=""`.

Production icon assets for this pattern live under
`app/public/images/homepage/icons/` (SVG, named for the generic concept —
e.g. `cloud-infrastructure.svg`, `cybersecurity.svg` — not the vendor
product name). SVG is preferred over WebP for this line-art icon style
since it stays crisp at any size/density and needs no build-time image
tooling. Each icon uses a bolder gradient stroke (Blink Blue → Network
Cyan) with a soft glow filter, and is placed in a small rounded "glow
badge" (subtle radial gradient, hairline border, restrained shadow) so the
set reads as more dimensional/premium and consistent with the Hero, while
remaining simple, flat, and readable at small sizes.

---

## 9. Header / Primary Navigation

The shared Header should support controlled visual variants.

### Light variant

Used on white or light pages.

- White/light background
- Dark navy wordmark/logo variant
- Primary text in approved dark colors
- High-contrast hover/focus states

### Dark / hero variant

Used on the homepage hero and other explicitly approved dark surfaces.

- Blink Navy background
- White logo/wordmark variant
- White or Soft Azure navigation text
- Network Cyan hover/focus treatment
- Network Cyan focus rings on navy
- Dark mobile navigation panel
- No visible divider between the Header and a matching navy Hero
- Primary CTA: Network Cyan background with Blink Navy text

### Header dimensions

Desktop target height:

Approximately `76px`

### Navigation

Approved primary navigation:

- Services
- Solutions
- Why BlinkNetworks
- Insights
- About
- Contact

Primary header CTA:

**Book a Consultation**

Target:

`/contact/`

### Mobile behavior

The mobile menu must use progressive enhancement.

Without JavaScript:

- primary navigation remains available and keyboard-accessible

With JavaScript:

- a real menu button enhances the Header into a collapsed mobile navigation
- maintain `aria-expanded`
- maintain `aria-controls`
- Escape closes an open menu
- focus behavior remains sensible

Minimum practical interactive target:

Approximately `44px`

---

## 10. Buttons and Calls to Action

### Primary dark-surface CTA

Use:

- Network Cyan background
- Blink Navy text
- 8px radius
- minimum practical height around 44px
- clearly visible focus state

### Secondary dark-surface CTA

Use:

- transparent or dark background
- visible light border
- white/light text
- cyan hover/focus treatment where appropriate

### Light-surface CTA

Use a high-contrast combination from the approved palette.

Do not use color combinations that fail WCAG AA merely to match a mockup exactly.

### Button behavior

- Keep labels concise.
- Do not make buttons excessively pill-shaped.
- Use links for navigation actions and buttons for actual in-page actions.
- Preserve keyboard accessibility.

---

## 11. Homepage Hero Visual Language

The homepage Hero is a primary brand-defining surface.

Its approved visual target is:

`docs/design/reference/blinknetworks-homepage-concept.png`

### Hero character

- Full-width deep navy presentation
- Header visually integrated with the Hero
- Strong left-column content hierarchy
- Bright cyan second line in the headline
- Blue/cyan network glow atmosphere
- Toronto/GTA visual context
- Enterprise infrastructure/network illustration
- Compact, polished first-screen density

### Hero illustration strategy (current implementation)

Production structure:

`app/public/images/hero/`

The live Hero renders a single composite asset,
`hero-composite.webp` (1536×1024, ~125KB), which already bakes in the
Toronto skyline, isometric objects, glowing connections, hub, and labels.
It is masked with a CSS radial gradient (stronger on the left/top/bottom,
lighter on the right) so it blends into the Blink Navy Hero rather than
reading as a pasted rectangle. `alt=""` since it is purely decorative.

The earlier layered build (`hero-skyline.webp`, `isometric/` object assets,
`hero-network-diagram.svg`, `blinknetworks-mark.png`, and the inline SVG
connection-lines/grid layers) remains in the repository as reference/
history but is no longer rendered by `Hero.astro`.

Do not build the network illustration from dozens of presentational HTML elements.

Do not use the full homepage mockup as a background image.

---

## 12. Cards and Content Sections

Cards should generally use:

- White or light backgrounds
- Subtle borders
- 14–16px radius
- Restrained shadow
- Clear heading hierarchy
- Consistent icon placement
- Comfortable but compact internal spacing

The homepage deliberately alternates:

- Blink Navy
- White
- Cloud Background
- Soft Azure / pale blue treatments

This creates visual rhythm without relying on decorative clutter.

---

## 13. Motion

Motion must be restrained.

Typical transition duration:

`200–500ms`

Appropriate motion:

- subtle fades
- short slides
- restrained network-line effects
- gentle hover transitions

Avoid:

- bouncing
- spinning
- typewriter effects
- continuous attention-seeking animation
- large parallax effects

All non-essential animation must respect:

`prefers-reduced-motion`

---

## 14. Accessibility

Accessibility is part of the design system, not a later audit.

Required baseline:

- Semantic HTML
- Keyboard navigation
- Visible focus states
- WCAG AA contrast
- Practical touch targets around 44px
- Clear heading hierarchy
- Responsive layouts without horizontal scrolling
- No meaning communicated by color alone
- Reduced-motion support
- Responsive images
- Appropriate alternative text

Decorative images should generally use empty alt text:

```html
alt=""
```

Do not add ARIA where native semantic HTML already communicates the correct meaning.

---

## 15. Performance Principles

The visual system should remain lightweight.

Prefer:

- Astro static rendering
- Plain CSS
- CSS custom properties
- Scoped Astro component styles
- Optimized SVG for vector artwork
- WebP/AVIF for suitable raster artwork
- Explicit image dimensions/aspect ratios
- Minimal JavaScript

Avoid:

- unnecessary UI libraries
- unnecessary CSS frameworks
- icon libraries for trivial use
- JavaScript-driven decorative effects
- large unoptimized PNG/JPEG assets
- third-party font requests without approval

Above-the-fold hero artwork should be evaluated for LCP impact once final assets are integrated.

---

## 16. Asset Organization

### Design references

`docs/design/reference/`

Use for:

- approved homepage mockups
- approved brand/logo references
- approved visual treatments that implementation agents need to inspect

Do not use this as a production web-asset folder.

### Production brand assets

`app/public/brand/`

Use for:

- full logos
- reversed/dark-background logos
- standalone brand mark
- stable brand SVG/PNG assets

### Production hero artwork

`app/public/images/hero/`

Use for:

- network illustration
- Toronto skyline
- hero-only composed artwork

### Future processed content imagery

`app/src/assets/`

May be used later for content images that benefit from Astro image processing.

Do not create speculative asset folders before they are needed.

---

## 17. Content Integrity

Do not invent:

- Testimonials
- Customer names
- Customer logos
- Partner status
- Certifications
- Usage metrics
- Uptime guarantees
- Compliance claims
- Awards
- Case-study results

Claims must be supported by real business information.

The design must not pressure implementation agents into filling visually empty areas with unsupported marketing claims.

---

## 18. Implementation Governance

For UI/UX work:

1. Review this document and relevant files under `docs/design/`.
2. Review the approved visual reference when working on the homepage.
3. Follow approved design decisions instead of improvising replacements.
4. Identify conflicts explicitly.
5. Preserve accessibility and performance even when the reference mockup requires adaptation.
6. Update design documentation when an approved design decision changes.
7. Use approved brand assets rather than recreating them.

Architecture decisions remain governed separately by ADRs under:

`docs/adr/`

---

## 19. Current Approved Design Assets

At the time this design system was established:

- Homepage visual concept: approved
- Dark-background BlinkNetworks logo: approved
- Light-background BlinkNetworks logo: approved
- Standalone BlinkNetworks mark: approved
- Hero network illustration: pending
- Toronto skyline hero asset: pending
- Footer implementation: pending

This section should be updated as additional reusable visual assets become approved.
