# Phase 4 — Insights hardening pass

## Outcome

Phase 4 is a narrow hardening pass for the existing Insights system.

The repository already contains:

- a typed Insights content collection
- an `/insights/` listing page
- a dynamic article route
- draft filtering
- article metadata
- canonical URLs
- Open Graph article data
- breadcrumbs
- `BlogPosting` JSON-LD
- four published articles

This phase must not instruct agents to rebuild those foundations.

## Dependency and current foundation

- Phases 1, 2, and 3 are merged, deployed, and verified.
- Astro 7.3.2 Content Layer API is already in use.
- Current published Insights articles:
	- `managed-it-services-guide`
	- `microsoft-365-security-basics`
	- `business-continuity-plan`
	- `when-to-move-to-the-cloud`
- There are currently no draft Insights entries.

## Approved architecture decisions

- `docs/design/insights.md` remains the governing visual design source.
- `.github/seo-workpack/reference/insights-cms-page-mockup.png` is reference material only.
- Zero or one published non-draft article may be featured.
- More than one published non-draft featured article must fail the build.
- Keep filename-derived slugs.
- Keep the existing six-category taxonomy.
- Keep BlinkNetworks as the organization author.
- Keep route-derived canonical URLs.
- Defer search, filter tabs, reading time, related-content UI, per-entry authors, canonical overrides, and taxonomy expansion.

## Exact implementation scope

Approved files:

- `app/src/content.config.ts`
- `app/src/pages/insights/index.astro`
- `app/src/pages/insights/[slug].astro`
- `docs/design/insights.md`

No new production files are required.

## Explicit restrictions

Do not modify:

- `BaseLayout.astro`
- `ArticleLayout.astro` unless a verified `BlogPosting` defect is discovered and separately approved
- `astro.config.*`
- package files
- shared navigation/header
- homepage files
- deployment workflow
- service pages
- existing article Markdown copy

## Implementer prompt

```text
Implement Phase 4 as a narrow Insights hardening pass. Do not rebuild the existing Insights system.

The repository already has a typed content collection, /insights/ listing page, dynamic article route, draft filtering, metadata, canonical URLs, Open Graph article data, breadcrumbs, BlogPosting JSON-LD, and four published articles. There are currently no draft entries.

Work only within the approved scope:
- app/src/content.config.ts
- app/src/pages/insights/index.astro
- app/src/pages/insights/[slug].astro
- docs/design/insights.md

Tighten validation in app/src/content.config.ts:
- tighten string validation
- tighten image-path validation
- tighten image-alt validation
- tighten date validation
- require updatedDate, when present, to be on or after publishedDate
- preserve current field names
- do not add author, canonical, or slug fields

Update the Insights listing so it handles all of these cases:
- zero published articles
- one published featured article
- one published non-featured article
- multiple articles with one featured
- multiple articles with no featured
- more than one published featured article as a clear build failure

Update the article page to add visible updated-date output only when updatedDate exists and differs from publishedDate.

Preserve existing metadata, canonical, Open Graph, breadcrumb, BlogPosting, CTA, image, and responsive behavior.

Update docs/design/insights.md to reflect the enabled sitemap and the approved hub behavior.

Use no client-side JavaScript for core discovery or reading.
Add no dependencies.

Use only temporary test fixtures or a temporary copy for negative tests.
Never alter the four production article files for testing.
Remove all temporary fixtures and prove cleanup with git status.

Do not stage, commit, push, deploy, or create a pull request.
```

## Validation plan

- `npm run build`
- `git diff --check`
- schema failure cases
- zero/one/multiple/featured/draft cases
- generated route and sitemap assertions
- canonical and trailing-slash assertions
- JSON-LD parsing
- image dimension/aspect-ratio review
- desktop and mobile visual review
- final scope and cleanup check

## Acceptance criteria

- Required metadata fails with useful validation messages.
- `updatedDate` cannot precede `publishedDate`.
- Invalid or empty Insights image metadata fails validation.
- Drafts remain absent from routes, public lists, homepage teasers, and sitemap output.
- Zero or one featured published article builds successfully.
- Multiple published featured articles fail clearly.
- Listing and articles remain usable without JavaScript.
- Existing metadata and JSON-LD remain collection-driven.
- Updated dates render consistently when present.
- Existing image layout-shift protection remains intact.
- No temporary fixtures or unrelated changes remain.

