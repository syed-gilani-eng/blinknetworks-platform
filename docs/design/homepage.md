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

Sections 11–15 below (Who We Help through Final CTA) and the Footer are
**not** implemented yet and remain placeholders for future steps. Sections
3–10 (Technology Strip, Business Problem, Core Services, Microsoft Feature,
Automation & AI, Why BlinkNetworks, Systems Thinking / Differentiator, How
It Works) are implemented — see the Step 6, Step 7, Step 8, Step 9, Step
10, Step 11, Step 12, and Step 13 notes below.

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

### Step 6 note: Technology Strip implemented

`TechnologyStrip.astro` renders the compact band directly below the Hero
(`app/src/pages/index.astro`) on a `var(--color-cloud-bg)` background —
the color change from Blink Navy to Cloud Background is the only separation
from the Hero, no gap or border — and a visually-hidden `<h2>` ("Technologies
we work with") since the approved mockup has no visible heading. The white
Business Problem section below (see Step 7) begins where this Cloud
background ends; that subtle Cloud → White change is what separates the two
sections.

Current six technologies (plain text, real BlinkNetworks copy, no vendor
artwork): Microsoft 365, Azure, Entra ID, Intune, Microsoft Defender,
VMware. Each item pairs a technology name with a production SVG icon under
`app/public/images/homepage/icons/` (`productivity-collaboration.svg`,
`cloud-infrastructure.svg`, `identity-access.svg`, `endpoint-management.svg`,
`cybersecurity.svg`, `virtualization-operations.svg`). These are original
geometric concept icons, not reproductions of Microsoft/VMware logos or
wordmarks. Each icon sits in a small "glow badge" (white base surface, soft
Blink Blue/Network Cyan radial tint, subtle border, restrained shadow — the
white base keeps the badge visible against the strip's own Cloud
background) for a more dimensional, premium feel consistent with the Hero;
the icons themselves are decorative (`alt=""`) since the visible text name
is the accessible label.

Layout: single row, evenly distributed (`justify-content: space-between`)
at ≥960px; a balanced 3-column/2-row grid at 640–959px; a balanced
2-column/3-row grid below 640px. Text stays at 16px minimum at every
breakpoint.

### Step 7 note: Business Problem implemented

`BusinessProblem.astro` renders directly below the Technology Strip
(`app/src/pages/index.astro`), on a plain white background with no border
or divider — the same "whitespace-only" transition pattern used between
the Hero and the Technology Strip.

Copy (approved, real text, no invented claims): eyebrow "THE CHALLENGE";
H2 "Technology shouldn't become another job you have to manage."; supporting
paragraph "Your business has enough on its plate. We take the complexity out
of IT with a strategic, fully managed approach, so you can focus on what you
do best."; CTA "See How We Help →" to `/services/`.

Structure: a two-column composition at ≥960px (`grid-template-columns:
0.8fr 1.1fr`, ~42%/58% text/visual, vertically centered, 48px gap) that
stacks to a single column (content first, image second) at <960px. The
right side is a single production composite image,
`app/public/images/business-problem/business-problem-composite.webp`
(1448×1086, ~41KB) — purely decorative (`alt=""`), not assembled from
separate icons, pills, or connection lines. It is rendered with no card,
border, or shadow treatment so it reads as part of the white section.

The eyebrow uses `var(--color-secondary-navy)` rather than Blink Blue, and
the CTA uses a Secondary Navy background rather than Blink Blue, because
Blink Blue does not reliably meet WCAG AA for text/button labels at this
size on a white background (see design-system.md Section 4).

### Step 8 note: Core Services implemented

`CoreServices.astro` renders directly below Business Problem
(`app/src/pages/index.astro`), on a `var(--color-cloud-bg)` background —
the color change alone marks the boundary with the white Business Problem
section above (no border/divider).

Centered eyebrow "OUR SERVICES" and H2 "Complete IT services for a
stronger, more secure business." sit above a list of six white service
cards: Managed IT & Help Desk, Microsoft 365 & Endpoint Management,
Cybersecurity, Cloud & Infrastructure, Network Services, and Backup &
Business Continuity, each with a short description and a "Learn More →"
link. All six links currently point to `/services/` (no individual service
subpages exist yet); each gets an `aria-label="Learn more about {title}"`
since the visible link text repeats across cards.

Each card uses a circular icon badge (46px, soft-azure radial-gradient
surface, hairline border, restrained shadow — the same restrained
dimensional family as the Technology Strip's badges, adapted to a circle
for this section) at 26px icon size. Three new icons were added to
`app/public/images/homepage/icons/`: `managed-it-support.svg`,
`network-services.svg`, `business-continuity.svg` (same gradient-stroke +
restrained glow-filter recipe as the existing icon set). Cybersecurity,
Cloud & Infrastructure, and Microsoft 365 & Endpoint Management reuse the
existing `cybersecurity.svg`, `cloud-infrastructure.svg`, and
`productivity-collaboration.svg` icons.

Layout: six columns in one row at ≥960px; a 3-column/2-row grid at
640–959px; a single stacked column below 640px. The "Learn More" link
color uses `var(--color-secondary-navy)` rather than Blink Blue for the
same AA-contrast reason documented for the Business Problem CTA.

### Step 9 note: Microsoft Feature implemented

`MicrosoftFeature.astro` renders directly after Core Services
(`app/src/pages/index.astro`), on a `var(--color-blink-navy)` background —
the Cloud-surface → Blink Navy color change alone marks the boundary with
Core Services above (no border/divider), matching the light → dark
transition pattern in the approved mockup.

Copy (approved, real text, no invented partnership/certification claims):
eyebrow "MICROSOFT-FIRST"; H2 "Get more from the Microsoft technology you
already use."; supporting paragraph "We help you unlock the full potential
of Microsoft 365 with secure, integrated, and expertly managed solutions.";
CTA "Explore Microsoft Solutions →" to `/services/`.

Structure: a two-column composition at ≥960px (`grid-template-columns:
0.8fr 1.1fr`, ~42%/58% text/visual, vertically centered, 48px gap) that
stacks to a single column (content first, image second) at <960px — the
same pattern used by Business Problem. The right side is a single
production composite image,
`app/public/images/microsoft-feature/microsoft-ecosystem.webp`
(1672×941, ~52KB) — purely decorative (`alt=""`), not assembled from
separate runtime nodes, lines, or positioned icons. It is rendered with no
card, border, or shadow treatment so it reads as part of the navy section.

The eyebrow and CTA use Network Cyan (on this dark surface Network Cyan
provides accessible contrast, consistent with the Hero's dark-surface CTA
treatment) rather than Blink Blue, for the same AA-contrast reason
documented for the Hero and Business Problem CTAs.

**Open item:** the current `microsoft-ecosystem.webp` composite renders
actual Microsoft product marks (the Microsoft 365 tile logo, Azure, Entra
ID, Intune, Defender, Teams, and Copilot icons) baked into the artwork.
This asset was not altered as part of this implementation task. If the
project maintains its earlier decision not to publish official Microsoft
logos/marks (see Section 8 of `design-system.md`), this production graphic
should be reviewed and likely replaced with a generic-icon version before
this section ships publicly.

### Step 10 note: Automation & AI implemented

`AutomationAI.astro` renders directly after Microsoft Feature
(`app/src/pages/index.astro`), on a plain `var(--color-white)` background —
the Blink Navy → White color change alone marks the boundary with Microsoft
Feature above (no border/divider), returning to a light surface as in the
approved mockup.

Copy (approved, exact, no invented claims): eyebrow "AUTOMATION & AI"; H2
"Automate the repetitive. Focus on what matters."; supporting paragraph
"Modern tools. Practical solutions. Real results. We help you leverage
automation and AI to save time, reduce risk, and empower your team."; CTA
"Learn More →" to `/services/` (same temporary-route pattern used by
Business Problem, Core Services, and Microsoft Feature — no dedicated
automation/AI page exists yet).

Structure: a two-column composition at ≥960px (`grid-template-columns:
0.8fr 1.2fr`, vertically centered, 40px gap) — content (eyebrow, H2, lead,
CTA) on the left, four capability items on the right. Unlike Core Services,
the four capability items (Workflow Automation, Microsoft Copilot,
Infrastructure Automation, Systems Integration) are deliberately
lightweight: a plain icon, `<h3>` title, and description with no card
background, border, or shadow, so the section reads as visibly lighter and
more compact than Core Services. Four new SVG icons were added to
`app/public/images/homepage/icons/` (`workflow-automation.svg`,
`copilot-ai.svg`, `infrastructure-automation.svg`,
`systems-integration.svg`) using the same gradient-stroke line-icon
language as the existing set, rendered directly (no glow badge). For
Microsoft Copilot, `copilot-ai.svg` is an original generic AI
sparkle/assistant symbol — not the official Microsoft Copilot logo — per
the vendor-logo policy in `design-system.md` Section 8.

Layout: four columns in one row at ≥960px; a 2×2 grid at 640–959px; a
single stacked column below 640px, in that order: content first, then the
capability list.

### Step 11 note: Why BlinkNetworks implemented

`WhyBlinkNetworks.astro` renders directly after Automation & AI
(`app/src/pages/index.astro`), on a `var(--color-soft-azure)` background —
the White → Soft Azure color change alone marks the boundary with
Automation & AI above (no border/divider). This is the first homepage
section to use Soft Azure as a full section background rather than a badge
fill.

Copy (approved, no lead paragraph, no CTA): eyebrow "WHY BLINKNETWORKS";
H2 "A different kind of IT partner."; four differentiators — Business
First ("We align IT with your business goals."), One Accountable Partner
("End-to-end support, no finger pointing."), Proactive by Design ("Prevent
issues before they impact your business."), and Built for SMBs
("Right-sized solutions for growing businesses."). **The approved mockup's
eyebrow for this section duplicated "MICROSOFT-FIRST" from the Microsoft
Feature section above it; this was a clear section-labeling error in the
mockup and was corrected to "WHY BLINKNETWORKS" for production**, matching
the section's own name and its `/why-blinknetworks/` nav destination.

Structure: a two-column composition at ≥960px (`grid-template-columns:
0.8fr 1.2fr`, vertically centered, 40px gap) — eyebrow and H2 only (no
lead, no CTA) on the left, four differentiator items on the right. Like
Automation & AI, each item is deliberately lightweight: a plain icon,
`<h3>` title, and description with no card background, border, or shadow.
Four new SVG icons were added to `app/public/images/homepage/icons/`
(`business-first.svg`, `accountable-partner.svg`, `proactive-design.svg`,
`built-for-smbs.svg`) using the same gradient-stroke line-icon language as
the existing set, rendered directly (no glow badge).

Layout: four columns in one row at ≥960px; a 2×2 grid at 640–959px; a
single stacked column below 640px, in that order: eyebrow, heading, then
the four differentiators.

### Step 12 note: The Bigger Picture (Systems Thinking / Differentiator) implemented

`BiggerPicture.astro` renders directly after Why BlinkNetworks
(`app/src/pages/index.astro`), on a plain `var(--color-white)` background —
the Soft Azure → White color change alone marks the boundary with Why
BlinkNetworks above (no border/divider), matching this section's role as
Section 9 ("Systems Thinking / Differentiator") in the approved section
order.

Copy (approved, exact, no invented claims): eyebrow "THE BIGGER PICTURE";
H2 "We see more than the individual technology."; supporting paragraph "IT
works best when everything works together. We take a holistic approach,
aligning people, process and technology to drive real business outcomes.";
CTA "Learn More →" to `/services/` (same temporary-route pattern used by
the other homepage sections without a dedicated page yet).

Structure: a two-column composition at ≥960px (`grid-template-columns:
0.8fr 1.1fr`, vertically centered, 48px gap) that stacks to a single column
(content first, image second) below 960px — the same pattern used by
Business Problem. The right side is a single production composite image,
`app/public/images/bigger-picture/bigger-picture-stack.webp` (2172×724,
~70KB) — purely decorative (`alt=""`), not assembled from separate icons
or shapes. It is rendered with no card, border, or shadow so it reads as
part of the white section.

Layout: content (eyebrow, H2, lead, CTA) on the left, illustration on the
right, in that order at every breakpoint.

### Step 13 note: How It Works implemented

`HowItWorks.astro` renders directly after Bigger Picture
(`app/src/pages/index.astro`), on a `var(--color-cloud-bg)` background —
the White → Cloud color change alone marks the boundary with Bigger
Picture above (no border/divider), matching the approved mockup's pale
cool surface for this section.

Copy (approved, exact, matching the mockup, no lead paragraph, no CTA):
eyebrow "HOW IT WORKS"; H2 "A simple process. Real results."; four ordered
stages — Assess ("Understand your needs, risks and opportunities."),
Secure & Stabilize ("Address immediate risks and strengthen your
foundation."), Modernize ("Implement the right solutions to enable
growth."), and Manage & Improve ("Ongoing support, monitoring and
strategic guidance.").

Structure: an `<ol>` of four `<li>` steps (no non-`<li>` children, so
sequence remains programmatically determinate independent of the visible
number). Each step is a compact, wide, shallow process tile — deliberately
lower and more horizontal than a Core Services card — using a two-row
internal CSS grid (`grid-template-columns: 40px 30px minmax(0, 1fr);
grid-template-rows: auto auto;`): row 1 holds the numbered circle
(`grid-column: 1; grid-row: 1;`), the icon (`grid-column: 2; grid-row: 1;`),
and the title (`grid-column: 3; grid-row: 1;`); row 2 holds the description,
spanning the full card width (`grid-column: 1 / -1; grid-row: 2;`) so it
gets nearly the entire card's horizontal space rather than being squeezed
into a third column. White surface, `var(--color-border)` hairline border,
`var(--radius-card)` corners, `var(--shadow-sm)` only, and tight `14px 16px`
padding. The numbered circle (40px, Blink Blue fill, white number,
`aria-hidden="true"` since the ordered list already conveys sequence) sits
beside a small 28px line-art icon. `.how-it-works__steps` uses
`align-items: start` so the row does not stretch every card to the height
of the tallest one. This two-row internal structure is used consistently
across every breakpoint — there is no separate mobile card-layout override.
Four new SVG icons were added to `app/public/images/homepage/icons/`
(`process-assess.svg`, `process-secure-stabilize.svg`,
`process-modernize.svg`, `process-manage-monitor-improve.svg`) using the
same gradient-stroke line-icon language as the existing set.

Desktop (≥960px) connectors between cards are implemented as a CSS-only
`::after` chevron on each non-last `.how-it-works__step` (a rotated
bordered box in the brighter `var(--color-blink-blue)` tone, sized to sit
in the reduced card gap) — no connector markup, no image, no JavaScript.
Connectors are not rendered at all below 960px (the pseudo-element's
`content` is only set inside the ≥960px media query).

Responsive behavior: at ≥960px, four process cards in one row with CSS
chevrons between them; at 640–959px, a 2×2 process grid with chevrons
hidden; below 640px, a single-column process grid with chevrons hidden.
The two-row internal card structure (number + icon + title, then a
full-width description) is identical at all three of these breakpoints.

1. Header
2. Hero
3. Technology Strip
4. Business Problem
5. Core Services
6. Microsoft Feature
7. Automation & AI
8. Why BlinkNetworks
9. The Bigger Picture (Systems Thinking / Differentiator)
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
