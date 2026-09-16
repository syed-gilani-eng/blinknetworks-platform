# BlinkNetworks About Page

## Status
This document records the **approved, implemented** About page. See
[docs/design/design-system.md](./design-system.md) for the shared tokens,
header, and card/motion/accessibility rules referenced throughout, and
[docs/design/services.md](./services.md) and
[docs/design/solutions.md](./solutions.md) for the pages this page reuses
patterns from.

## Purpose and Route

Route: `/about/` (`app/src/pages/about/index.astro`)

The page builds trust in BlinkNetworks as a technology partner through
practical business understanding, accountable delivery, clear
communication, security-minded recommendations, Canadian ownership,
Toronto/GTA service focus, and modern technical capability — without
inventing founders, employee profiles, company history, statistics,
awards, certifications, partnerships, customer logos, or testimonials.

## Approved Section Order

1. Header (`Header.astro`, shared, unchanged)
2. Hero (`AboutHero.astro`)
3. Our Purpose (`AboutPurpose.astro`)
4. Business and Technical Perspective (`AboutPerspective.astro`)
5. Values (`AboutValues.astro`)
6. How We Work (`AboutProcess.astro`, anchor `#how-we-work`)
7. Local Understanding (`AboutLocalUnderstanding.astro`)
8. Who We Help (`AboutWhoWeHelp.astro`)
9. Final Consultation CTA (shared `FinalCTA.astro`, page-specific copy)
10. Footer (`Footer.astro`, shared, unchanged)

## Components Created

- `app/src/components/AboutHero.astro`
- `app/src/components/AboutPurpose.astro`
- `app/src/components/AboutPerspective.astro`
- `app/src/components/AboutValues.astro`
- `app/src/components/AboutProcess.astro`
- `app/src/components/AboutLocalUnderstanding.astro`
- `app/src/components/AboutWhoWeHelp.astro`

## Shared Components Reused Unchanged

`Header.astro`, `Footer.astro`, `FinalCTA.astro`, `BaseLayout.astro`,
`global.css`, and `tokens.css` are reused exactly as they exist today — no
props, markup, or styles were added or modified. `FinalCTA.astro`'s
existing optional props (`heading`, `lead`, `ctaLabel`, `ctaHref`,
`caption`) already covered the approved About copy.

## Header Active-State Behaviour

No change was required. `Header.astro` already includes an `About` nav
item (`/about/`) and normalizes both the nav `href` and
`Astro.url.pathname` to a trailing slash before comparing them. Visiting
`/about/` applies `aria-current="page"` to the "About" link only; every
other route is unaffected.

## Exact Section Content

**Hero** — eyebrow "ABOUT BLINKNETWORKS"; the page's only `<h1>`, "A
technology partner you can rely on"; lead "Canadian-owned and focused on
growing businesses across Toronto and the GTA, BlinkNetworks brings
practical guidance, secure solutions and accountable support."; primary
CTA "Start a Conversation" to `/contact/`; secondary CTA "How We Work" to
`#how-we-work`.

**Our Purpose** — eyebrow "OUR PURPOSE"; H2 "Technology should support
your business—not complicate it."; lead "We help organizations make
confident technology decisions, strengthen their foundations and create
environments that are easier to manage, secure and grow."; three
principles — Understand the Business ("Start with your goals, challenges
and the way your team works."), Keep It Practical ("Recommend what is
useful, manageable and appropriate for your organization."), and Stay
Accountable ("Communicate clearly and remain responsible for the work we
deliver.").

**Business and Technical Perspective** — eyebrow "WHY BLINKNETWORKS"; H2
"Business understanding meets technical capability."; two paragraphs:
"Technology decisions affect people, operations, security and growth. That
is why we look beyond individual tools and consider how the full
environment supports the business." and "Our perspective brings together
managed IT, Microsoft 365, cybersecurity, cloud, infrastructure,
continuity and responsible AI adoption."

**Values** — eyebrow "WHAT GUIDES US"; H2 "A straightforward way of
working."; four values — Business First ("Technology choices should serve
a clear operational purpose."), Clear Communication ("Straightforward
guidance helps everyone understand priorities and next steps."),
Security-Minded ("Risk and data protection are considered in every
recommendation."), and Built to Evolve ("Solutions should work today and
remain adaptable as the organization grows.").

**How We Work** — eyebrow "HOW WE WORK"; H2 "Collaborative from the first
conversation."; four steps — Listen ("Understand your environment,
priorities and concerns."), Plan ("Create a practical path aligned with
risk, budget and timing."), Deliver ("Implement carefully with clear
communication."), and Stay Engaged ("Support, review and improve as needs
change.").

**Local Understanding** — eyebrow "LOCAL UNDERSTANDING"; H2 "Proudly
serving Toronto and the GTA."; lead "Being close to the businesses we
support helps us understand the realities of growing organizations in our
community. We combine local accountability with modern cloud, security
and infrastructure capabilities."; three supporting points — Canadian-
Owned, Responsive Partnership, and Modern Technical Capability (short
labels only, no additional invented claims).

**Who We Help** — eyebrow "WHO WE HELP"; H2 "Built for growing
organizations."; three audiences — Growing Businesses ("Organizations
that need dependable technology without unnecessary complexity."),
Internal IT Teams ("Teams that need added capability, project support or
specialized guidance."), and Organizations Modernizing ("Businesses
improving Microsoft 365, cloud, security, infrastructure or AI adoption.").

**Final CTA** — heading "Let's build a technology partnership that
works."; lead "Tell us what your organization needs today and where you
want to go next."; CTA "Book a Consultation" to `/contact/`; `caption=""`
to omit the homepage-only closing caption line (same pattern already used
by the Services and Solutions pages).

## Existing SVG Icon Mappings

All icons are reused from `app/public/images/homepage/icons/` — no new
icon assets were created.

| Section | Item | Icon |
|---|---|---|
| Our Purpose | Understand the Business | `process-assess.svg` |
| Our Purpose | Keep It Practical | `built-for-smbs.svg` |
| Our Purpose | Stay Accountable | `accountable-partner.svg` |
| Values | Business First | `business-first.svg` |
| Values | Clear Communication | `productivity-collaboration.svg` |
| Values | Security-Minded | `cybersecurity.svg` |
| Values | Built to Evolve | `growing-organizations.svg` |
| How We Work | Listen | `process-assess.svg` |
| How We Work | Plan | `process-plan.svg` |
| How We Work | Deliver | `process-modernize.svg` |
| How We Work | Stay Engaged | `process-manage-monitor-improve.svg` |
| Local Understanding | Canadian-Owned | `location-pin.svg` |
| Local Understanding | Responsive Partnership | `proactive-design.svg` |
| Local Understanding | Modern Technical Capability | `cloud-infrastructure.svg` |
| Who We Help | Growing Businesses | `businesses-without-it.svg` |
| Who We Help | Internal IT Teams | `small-it-teams.svg` |
| Who We Help | Organizations Modernizing | `virtualization-operations.svg` |

`process-assess.svg` is intentionally reused for both "Understand the
Business" and "Listen" since both describe the same listening/discovery
concept, matching the existing site pattern of reusing one icon per
concept across sections (e.g. `cybersecurity.svg` already appears on the
Homepage, Services, and Solutions pages).

## Raster Assets

Production illustrations live under `app/public/images/about/` (approved,
pre-existing assets integrated by this task, not generated or modified):

| Asset | File | Intrinsic size | Background |
|---|---|---|---|
| Hero | `about-hero.webp` | 1536×1024 | Transparent (alpha) |
| Business and Technical Perspective | `business-technical-perspective.webp` | 1448×1086 | Pale-azure (baked into the artwork) |
| Local Understanding | `local-partnership.webp` | 1448×1086 | Pale-azure (baked into the artwork) |

## Image Loading Decisions

- **Hero image**: `decoding="async"` and `fetchpriority="high"`, **no**
  `loading="lazy"` — it is above the fold, rendered with `object-fit:
  contain` directly over Blink Navy with no surrounding panel to preserve
  its alpha transparency.
- **Perspective and Local Understanding illustrations**: `loading="lazy"`
  + `decoding="async"` — below the fold. Each is presented as a contained
  image (`object-fit: contain`, restrained `var(--radius-card)` rounding,
  no cropping, no additional shadow) since both already carry their own
  pale-azure background.
- All small SVG icons: `loading="lazy"` + `decoding="async"`.
- Every image has explicit `width`/`height` attributes matching its actual
  file to prevent layout shift.

## Desktop, Tablet, and Mobile Layouts

**Hero** — two-column grid at ≥960px (content left, image right,
vertically centered); single column below 960px.

**Our Purpose** — at ≥960px, an outer two-column layout (`0.8fr 1.2fr`):
eyebrow/heading/lead on the left, the three principles in one row on the
right. Below 960px the header stacks above the principles, which render
as a 3-column row at ≥640px and a single stacked column below 640px.

**Business and Technical Perspective** — two-column text/illustration
layout at ≥960px (equal `1fr 1fr` columns, vertically centered); single
column below 960px, content first.

**Values** — at ≥960px, an outer two-column layout (`0.8fr 1.2fr`):
eyebrow/heading on the left, the four values in one row on the right. A
2×2 grid at 640–959px; a single stacked column below 640px.

**How We Work** — the four-step ordered-list process pattern (numbered
circle, icon, title, description, desktop-only chevron connectors), now
on a Blink Navy background with Secondary Navy step cards: four columns
at ≥960px, 2×2 grid at 640–959px (connectors hidden), single column below
640px (connectors hidden).

**Local Understanding** — two-column illustration/text layout at ≥960px
(illustration left, content and three supporting points right, vertically
centered); single column below 960px, illustration first.

**Who We Help** — three-column card row at ≥640px (comfortable at both
tablet and desktop widths since three items divide evenly); single
stacked column below 640px.

## Accessibility Decisions

- Exactly one `<h1>` on the page (Hero); sequential `<h2>` per section;
  `<h3>` for every principle, value, process step, local supporting point,
  and audience card title.
- Every section is `aria-labelledby` its own heading `id`.
- Semantic `<ul>/<li>` for principles, values, supporting points, and
  audience cards; semantic `<ol>/<li>` for the four How We Work steps,
  with each numbered circle marked `aria-hidden="true"` since the ordered
  list already conveys sequence.
- All decorative images and icons use `alt=""`.
- `#how-we-work` has `scroll-margin-top: 96px` so the Hero's secondary CTA
  anchor link doesn't hide the heading behind the header — matching the
  `#services-list` / `#solutions-list` pattern.
- Visible focus states reuse the site's existing `:focus-visible`
  treatment, with the Network Cyan override on the dark Hero and How We
  Work sections.
- No new motion was introduced; the site-wide `prefers-reduced-motion`
  rule in `global.css` continues to apply unchanged.
- Minimum 44px touch targets preserved on all CTAs.

## `#how-we-work` Anchor Handling

The Hero's secondary CTA (`href="#how-we-work"`) resolves to exactly one
matching id — the `<section id="how-we-work">` root of
`AboutProcess.astro`. This is a native anchor link; no JavaScript was
added.

## Content-Integrity Restrictions

No fabricated founders, employee profiles, team size, company history,
founding dates, years of experience, office locations, statistics, awards,
certifications, partnerships, customer logos, testimonials, or unsupported
client claims appear anywhere on the page. The "Canadian-Owned" supporting
point states ownership only and does not imply a physical office or
headquarters location, since none is documented elsewhere in the
repository. Canadian-owned/Toronto-GTA positioning uses existing approved
language, with no flags, maple-leaf decoration, or exaggerated national
imagery.

## Forward Reference to `/contact/`

The Hero primary CTA and the Final CTA both link to `/contact/`, which
does not yet exist as a built route. This mirrors the same forward-
reference pattern already used across the Homepage, Services, and
Solutions pages and is not a gap introduced by this page. No Contact page
was created as part of this task.

## Framework and Dependency Confirmation

No new framework, UI library, CSS framework, or npm dependency was
introduced. The page uses only Astro, plain CSS, and the existing design
tokens in `app/src/styles/tokens.css`. All icons and the three raster
illustrations were pre-existing approved assets, not generated or
modified by this task.

## ADR Confirmation

No new Architecture Decision Record was required.
[ADR-0001](../adr/0001-use-astro-for-website.md) (Astro, `/app` isolation)
and [ADR-0002](../adr/0002-use-plain-css-design-tokens.md) (plain CSS +
custom-property tokens) remain fully applicable; this page introduces no
new architectural pattern beyond normal component and prop reuse.
