# BlinkNetworks Insights Hub

## Status

This document records the **approved, implemented** Insights hub and its
four launch articles. See
[docs/design/design-system.md](./design-system.md) for the shared tokens,
header, and card/motion/accessibility rules referenced throughout, and
[docs/design/services.md](./services.md) for the six-category taxonomy this
page reuses.

## Purpose and Routes

| Route | Source |
|---|---|
| `/insights/` | `app/src/pages/insights/index.astro` |
| `/insights/managed-it-services-guide/` | `app/src/pages/insights/[slug].astro` |
| `/insights/microsoft-365-security-basics/` | `app/src/pages/insights/[slug].astro` |
| `/insights/business-continuity-plan/` | `app/src/pages/insights/[slug].astro` |
| `/insights/when-to-move-to-the-cloud/` | `app/src/pages/insights/[slug].astro` |

No category-archive routes, search, filtering, pagination, RSS, or sitemap
exist. `[slug].astro` is one reusable dynamic route driven by
`getStaticPaths()`; every article page is statically generated at build
time (`output: "static"`, unchanged from ADR-0001).

## Hub Section Order

1. `InsightsHero.astro` — the page's only `<h1>`.
2. `FeaturedInsight.astro` — the one article with `featured: true`.
3. `InsightsTopics.astro` — six informational, non-linking cards matching
   the exact Services taxonomy.
4. `LatestInsights.astro` — the three most recent non-featured articles.
5. Shared `FinalCTA.astro` (page-specific copy).
6. Shared `Footer.astro` (unchanged).

## Components Created

- `app/src/components/InsightsHero.astro`
- `app/src/components/FeaturedInsight.astro`
- `app/src/components/InsightsTopics.astro`
- `app/src/components/LatestInsights.astro`
- `app/src/components/ArticleBreadcrumb.astro`
- `app/src/layouts/ArticleLayout.astro` (wraps `BaseLayout.astro`; adds
  canonical link, Open Graph tags, and `BlogPosting` JSON-LD)

## Shared Components Extended

`BaseLayout.astro` gained one minimal, additive change: a named
`<slot name="head" />` immediately before `</head>`. No existing page
passes this slot, so every previously built page (Homepage, About,
Services, Solutions, Contact) renders identically to before.
`FinalCTA.astro` was not modified; its existing optional props already
covered the approved Insights copy.

## Article Inventory

| Order | Featured | Title | Slug | Category |
|---|---|---|---|---|
| 1 | Yes | The practical guide to managed IT services for growing businesses | `managed-it-services-guide` | Managed IT & Help Desk |
| 2 | No | Microsoft 365 security basics every growing business should review | `microsoft-365-security-basics` | Microsoft 365 & Endpoint Management |
| 3 | No | What a business continuity plan should cover | `business-continuity-plan` | Backup & Business Continuity |
| 4 | No | When should a small business move workloads to the cloud? | `when-to-move-to-the-cloud` | Cloud & Infrastructure |

All four are original, long-form guidance written for growing businesses in
Toronto and the GTA, each ending in a "Sources and further reading" section
that links only to primary sources (Microsoft Learn, the Canadian Centre
for Cyber Security, and NIST).

## Content Collection Schema

`app/src/content.config.ts` defines one `insights` collection using
Astro's Content Layer API (`defineCollection` from `astro:content`, `z`
from `astro/zod`, `glob` from `astro/loaders`) over Markdown files in
`app/src/content/insights/`:

| Field | Type | Notes |
|---|---|---|
| `title` | `string` | Unique per article |
| `description` | `string` | Meta description and card excerpt |
| `category` | enum of the six Services categories | Same taxonomy as `docs/design/services.md` |
| `publishedDate` | `date` | `2026-09-16` for all four launch articles |
| `updatedDate` | `date`, optional | Not set at launch |
| `image` | `string` | Path under `app/public/images/insights/` |
| `imageAlt` | `string` | Meaningful alt text for the article lead image |
| `featured` | `boolean`, default `false` | Exactly one `true` (`managed-it-services-guide`) |
| `draft` | `boolean`, default `false` | Excluded from the hub and from `getStaticPaths()` |
| `order` | positive integer, required | Deterministic "latest" ordering (1–4) |

## Build-Time Safeguard

`app/src/pages/insights/index.astro` filters non-draft entries and throws
a build-failing `Error` unless exactly one is `featured`. This runs on
every `astro build`/`astro dev` render of the hub, so an invalid content
state (zero or multiple featured articles) fails the build rather than
silently rendering incorrectly.

## Asset Mapping

All five approved production assets are used exactly where they already
exist, at their actual intrinsic size (1536×1024) — none were generated,
renamed, moved, or duplicated:

| Asset | Used by | Alpha |
|---|---|---|
| `insights-hero.webp` | `InsightsHero.astro` | Yes (rendered directly over Blink Navy) |
| `featured-managed-it-guide.webp` | `FeaturedInsight.astro` card + `managed-it-services-guide` article lead | No |
| `article-microsoft-365-security.webp` | `LatestInsights`/homepage card + `microsoft-365-security-basics` article lead | No |
| `article-business-continuity.webp` | `LatestInsights`/homepage card + `business-continuity-plan` article lead | Yes |
| `article-cloud-migration.webp` | `LatestInsights`/homepage card + `when-to-move-to-the-cloud` article lead | No |

`article-business-continuity.webp` carries an alpha channel while its
three siblings do not; every card and article-lead image container uses
`background-color: var(--color-soft-azure)` behind the `<img>` so all four
illustrations read consistently regardless of that difference.

### Image Loading Decisions

- **Hub hero** (`insights-hero.webp`): `fetchpriority="high"`, no
  `loading="lazy"`, `alt=""` — above the fold, decorative (adjacent copy
  carries the meaning).
- **Featured and Latest hub cards**, and the **homepage teaser cards**:
  `loading="lazy"`, `alt=""` — below the fold, decorative (linked title
  carries the accessible name).
- **Article lead images**: no `loading="lazy"` (eager), `fetchpriority="high"`,
  meaningful `imageAlt` from the schema — above the fold on the article page.
- Every raster image has explicit `width`/`height` matching its actual
  1536×1024 intrinsic size, plus `decoding="async"`.

## Homepage Integration

`app/src/components/Insights.astro` keeps its existing section layout,
breakpoints, and overlay treatment. The only changes:

- Its three hardcoded placeholder entries were replaced with a
  `getCollection("insights", ({ data }) => !data.draft && !data.featured)`
  query, sorted by `order` and sliced to the first three — the same
  selection rule as the hub's `LatestInsights.astro`, so the homepage
  never drifts from the hub.
- Each card is now a real `<a href="/insights/{slug}/">` (previously
  non-clickable), and a short excerpt paragraph (`entry.data.description`)
  was added under the title — the one small, additive markup change
  needed to satisfy the requirement to show real excerpts.
- Image `width`/`height` attributes now reflect the assets' actual
  1536×1024 size.
- The "View All Articles →" CTA to `/insights/` is unchanged.

No other Homepage component was modified.

## Responsive Behavior

- **Featured**: two columns (image/content) at ≥960px; stacked below.
- **Topics**: three columns at ≥960px, two at 640–959px, one below 640px.
- **Latest** (hub): three columns at ≥960px, two at 640–959px, one below
  640px.
- **Homepage teaser**: unchanged — three columns at ≥760px, stacked below.
- **Article body**: a ~70ch measure, comfortable mobile padding, no
  horizontal overflow at 375px.

## Accessibility and Semantics

- Exactly one `<h1>` per page: the hub's `InsightsHero` heading, and each
  article's own title.
- Sequential heading order: hub `h1` → `h2` per section (Featured article
  title doubles as that section's `h2`, Topics/Latest headings) → `h3` per
  card. Article pages: `h1` (title) → Markdown body starting at `h2`.
- Topic cards are a semantic `<ul>/<li>` list, not links — matching the
  requirement that they stay informational only.
- All decorative card/hero images use `alt=""`; the article lead image
  uses the schema's meaningful `imageAlt`.
- Visible `:focus-visible` reused from `global.css`; dark sections (hub
  hero, Final CTA) override the focus-ring color to Network Cyan,
  consistent with every other page.
- 44px minimum interactive targets on all links/CTAs.
- No new motion introduced; the site-wide `prefers-reduced-motion` rule
  continues to apply unchanged.

## Metadata and Structured Data

Each article page (via `ArticleLayout.astro`) renders:

- A unique `<title>` and meta description per article.
- `<link rel="canonical">` built from `Astro.site` (`https://blinknetworks.com`,
  configured in `astro.config.mjs`) and the article's route.
- Open Graph `title`, `description`, `type="article"`, `image` (absolute
  URL), and `article:published_time`/`article:modified_time`.
- One `BlogPosting` JSON-LD block per article with `author` and
  `publisher` as `Organization`, `datePublished`, optional `dateModified`,
  an absolute `image` URL, and `mainEntityOfPage`. The publisher `logo`
  reuses the existing, approved
  `app/public/brand/blinknetworks-logo-light-background.png` — no new
  asset was created.

The `/insights/` hub uses the standard `BaseLayout` title/description only;
it is not an article and does not carry `BlogPosting` JSON-LD.

## Content-Integrity Rules

No fabricated statistics, guarantees, certifications, customer examples,
testimonials, response-time commitments, or compliance claims appear in
any article or hub copy. All hub copy reproduces the approved mockup
(`docs/design/reference/insights-mockup.png`) exactly. Acronyms (MFA, RTO,
RPO, SaaS, IaaS) are expanded on first use in the articles that introduce
them.

## Source and Reference Policy

Every article ends with a "Sources and further reading" section linking
only to primary sources — Microsoft Learn, the Canadian Centre for Cyber
Security, and NIST — using descriptive link text rather than bare URLs.
No secondary marketing blogs are cited. Article wording is original;
concepts are paraphrased rather than copied from vendor documentation.

## Deferred: Sitemap and RSS

Neither a sitemap nor an RSS feed was added. `astro.config.mjs` now has a
`site` value, which is a prerequisite for either, but the project remains
in the local-development-only phase per the repository's project
instructions; both are deferred to a future, explicitly-scoped task.

## Framework and Dependency Confirmation

No new npm dependency or lockfile change was introduced. The Content Layer
API (`astro:content`, `astro/zod`, `astro/loaders`) is built into the
`astro` package already present in `app/package.json`. Styling uses only
plain CSS and the existing design tokens in `app/src/styles/tokens.css`,
consistent with ADR-0002.

## ADR Confirmation

See [ADR-0004](../adr/0004-use-astro-content-collections-for-insights.md)
for the decision to model Insights articles as an Astro Content Collection
using Markdown rather than MDX or a hand-authored `.astro` file per
article.
