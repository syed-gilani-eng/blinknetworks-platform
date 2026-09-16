# ADR-0004: Use Astro Content Collections (Markdown) for Insights Articles

## Status
Accepted

## Context
The Insights hub (`/insights/`) requires four launch articles today and is
expected to grow over time. The existing site pattern — one bespoke
`.astro` file per page, composed of page-specific components — does not
scale to long-form editorial content: it mixes prose with component
syntax, has no schema validation for article metadata (title, category,
publish date, featured/draft state), and would require a new `.astro` file
for every future article.

## Decision
Model Insights articles as an Astro Content Collection:

- One `insights` collection defined in `app/src/content.config.ts`, using
  Astro's Content Layer API: `defineCollection` from `astro:content`, `z`
  from `astro/zod`, and the `glob` loader from `astro/loaders`.
- Article content authored as plain Markdown files under
  `app/src/content/insights/`, not MDX.
- One reusable dynamic route, `app/src/pages/insights/[slug].astro`, using
  `getStaticPaths()`, `getCollection()`, and `render()` to generate every
  article page at build time.
- A zod schema validating `title`, `description`, `category` (the existing
  six-service enum), `publishedDate`, optional `updatedDate`, `image`,
  `imageAlt`, `featured`, `draft`, and `order`.

## Alternatives Considered
- **Hand-authored `.astro` file per article** — rejected; mixes prose with
  component syntax, has no schema validation, and does not scale past a
  handful of articles.
- **MDX-based content collections** — rejected for now; none of the four
  launch articles need embedded interactive Astro components inside the
  article body. Adopting MDX would add the `@astrojs/mdx` integration as a
  new dependency without a concrete requirement to justify it. This can be
  revisited via a superseding ADR if a future article genuinely needs
  embedded components.
- **External or headless CMS** — rejected; adds a service dependency and
  contradicts the project's current local-development-only phase and
  ADR-0001's minimal-dependency stance.

## Consequences
- No new npm dependency or lockfile change is introduced; the Content
  Layer API ships as part of the `astro` package already present in
  `app/package.json`.
- Article frontmatter is type-checked against the zod schema at build
  time, catching malformed or missing metadata before deployment.
- Content collections have no native cross-entry validation, so the
  `/insights/` hub page includes an explicit build-time check that fails
  the build unless exactly one non-draft article is `featured`.
- Adding a future article requires only a new Markdown file under
  `app/src/content/insights/`; no new route or page file is needed.
- If a future article requires embedded interactive components, adopting
  MDX will require a new ADR superseding this one.
