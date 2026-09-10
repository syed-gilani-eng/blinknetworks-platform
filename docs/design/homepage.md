# BlinkNetworks Homepage

## Status
This document records the **approved** homepage composition. It is a
planning reference — most sections listed below are not yet implemented.
See [docs/design/design-system.md](./design-system.md) for the reusable
tokens and global header specification referenced here.

## Implementation Status (Step 4)

Only the shared page shell and header are implemented in this step:

- `BaseLayout.astro` (html/head/body shell, global styles, header, slot)
- `Header.astro` (site navigation)

The hero and every section below the header (items 2–15 below) are **not**
implemented yet and remain placeholders for future steps.

Primary visual reference:

docs/design/reference/blinknetworks-homepage-concept.png

This image is the approved visual target for the BlinkNetworks homepage.
Implementations should reproduce its composition, visual hierarchy, section
rhythm, color treatment, spacing, and overall character as closely as
practical while preserving accessibility, responsive behavior, semantic HTML,
performance, and maintainable implementation.

The reference image is not intended to be embedded directly as the webpage.

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
