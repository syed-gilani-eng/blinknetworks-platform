# Phase 4 — Insights content system

## Outcome

Insights become repository-managed content with consistent article pages, metadata, filtering data, and draft control.

## Recommended content fields

`title`, `description`, `slug` or filename-derived slug, `category`, `publishedAt`, `updatedAt`, `featured`, `image`, `imageAlt`, `author`, `draft`, and optional `canonical`.

## Agent prompt

```text
Implement Phase 4 on branch feat/insights-content-system. Phase 2 is merged. Do not edit shared navigation, the homepage, the global layout, astro.config.*, or package files unless the approved architecture proves that a content integration cannot work otherwise; flag that collision before editing.

Inspect the installed Astro version and use its supported content-collection API. Build a typed Insights collection, an /insights/ listing page, and a dynamic article route. The listing should support a featured article and category metadata without requiring client-side JavaScript for basic discovery. Article pages need unique metadata, canonical URLs, Open Graph article data, published/updated dates, Article JSON-LD, breadcrumbs, accessible hero images, and space for related content and a CTA.

Draft items must not produce public pages or sitemap entries. Dates must render consistently. Missing required metadata should fail validation during the build. Preserve the established BlinkNetworks design; use reference/insights-cms-page-mockup.png as layout direction, not a pixel-perfect mandate.

Create one clearly marked non-production fixture only if needed for testing, and ensure it cannot be emitted in production. Run build/check scripts and test empty, one-item, featured-item, category, and draft behavior.
```

## Acceptance criteria

- Content validation fails usefully for missing required fields.
- Draft content is absent from generated routes and public lists.
- Listing and article pages work without JavaScript for core reading/navigation.
- Article metadata and JSON-LD reflect collection values.
- Images have dimensions or aspect-ratio handling that prevents layout shift.

