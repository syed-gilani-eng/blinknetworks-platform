# Phase 5 — Publish four additional anchor Insights articles

## Outcome

Publish four additional authoritative Insights articles using the repository-managed content system hardened in Phase 4.

This phase increases the public Insights collection from four articles to eight while:

* preserving the four existing published articles
* maintaining exactly one featured published article
* retaining authoritative citations
* using validated metadata and image paths
* avoiding unnecessary application-code or layout changes

The new break-fix article will become the featured article. The currently featured managed IT guide must therefore be changed to `featured: false` so the Phase 4 featured-article validation continues to pass.

## Dependency

Phase 4 must be merged, deployed, and production-verified before this phase begins.

Confirmed Phase 4 foundation:

* Repository-managed Astro content collection
* Required metadata validation
* Draft exclusion from public listings, routes, and sitemap output
* Zero-or-one published featured-article enforcement
* Deterministic article ordering
* Validated site-relative image paths under `/images/insights/`
* Canonical metadata
* Open Graph article metadata
* Article JSON-LD
* Breadcrumbs
* Published and optional updated dates
* Responsive article images with layout-shift protection
* Production sitemap integration

## Current public collection

The following four articles already exist and must remain published:

* `/insights/managed-it-services-guide/`
* `/insights/microsoft-365-security-basics/`
* `/insights/business-continuity-plan/`
* `/insights/when-to-move-to-the-cloud/`

Do not rewrite their article bodies during Phase 5.

A narrowly approved frontmatter-only change may be made to existing entries when required to:

* remove the current featured state
* preserve unique deterministic ordering across all eight articles

## New routes and source asset mapping

| Article                                                    | Slug                                     | Source image                                 |
| ---------------------------------------------------------- | ---------------------------------------- | -------------------------------------------- |
| Five Signs Your Business Has Outgrown Break-Fix IT Support | `business-outgrown-break-fix-it-support` | `break-fix-to-managed-it.png`                |
| Does Microsoft 365 Back Up Everything?                     | `does-microsoft-365-back-up-everything`  | `microsoft-365-backup.png`                   |
| The Small-Business Cybersecurity Checklist                 | `small-business-cybersecurity-checklist` | `small-business-cybersecurity-checklist.png` |
| What Should Happen When an Employee Loses a Laptop?        | `employee-loses-laptop`                  | `lost-employee-laptop-response.png`          |

Expected public routes:

* `/insights/business-outgrown-break-fix-it-support/`
* `/insights/does-microsoft-365-back-up-everything/`
* `/insights/small-business-cybersecurity-checklist/`
* `/insights/employee-loses-laptop/`

## Source material

The Architect must confirm the actual repository paths before implementation.

Expected source locations:

* Article source: `.github/seo-workpack/content/articles.md`
* Source images: `.github/seo-workpack/assets/insights/`

The source article file is the approved substantive-copy source.

The Implementer must not silently rewrite, expand, remove, or materially alter factual claims. Formatting, headings, metadata, and minor editorial corrections may be proposed, but substantive changes require explicit approval.

## Scope restrictions

Do not modify unless an approved architecture note identifies a genuine blocker:

* Shared navigation or header
* Homepage
* Insights layouts or shared page components
* `BaseLayout.astro`
* `ArticleLayout.astro`
* `astro.config.*`
* Package files or lockfiles
* Deployment workflow
* Service pages
* Phase 4 content schema
* Existing article body copy

Do not add:

* Reading-time fields or UI
* Related-content fields or UI
* Search or filtering JavaScript
* Category archive routes
* Per-entry author functionality
* Canonical override fields
* New dependencies
* Unsupported claims, guarantees, certifications, service levels, prices, compliance claims, or response-time promises

Reading-time presentation and related-content functionality were explicitly deferred in Phase 4 and remain outside Phase 5.

## Featured and listing policy

The Phase 4 content system allows zero or one published featured article.

For Phase 5:

* `business-outgrown-break-fix-it-support` becomes the sole featured article.
* `managed-it-services-guide` must change from `featured: true` to `featured: false`.
* The other three new articles must not be featured.
* The build must continue to fail if more than one non-draft article is featured.

The Architect must inspect all current `order` values and define a unique positive ordering plan across all eight published articles.

The plan must explicitly identify:

* the featured article
* the three non-featured articles that should appear in the current Latest Insights grid
* where the remaining published articles remain discoverable under the current Phase 4 behavior

Do not assume all eight articles will appear simultaneously on the hub without first inspecting the implemented listing logic.

## Publication-date policy

Use honest, fixed publication dates representing the intended production publication date.

Requirements:

* Do not backdate the new articles.
* Do not generate publication dates dynamically during builds.
* All four articles may share the actual launch date if they are published together.
* If publication is intentionally staggered, each article must use its actual planned publication date.
* Do not add `updatedDate` at initial publication unless an article was genuinely revised after its publication date.
* Dates must use the format already accepted by the Phase 4 schema.

The human owner must approve the final publication-date plan before implementation is committed.

## Author and publisher policy

Use the existing article-authoring behavior.

* Use BlinkNetworks as the author or publisher where required by the current template.
* Do not introduce a named individual author unless the owner explicitly approves it.
* Do not add a new author field or modify the content schema during this phase.

## Category policy

Use only categories supported by the merged Phase 4 category enum.

The Architect must inspect the actual enum and assign the most accurate existing category to each new article.

Do not add categories or change the enum during Phase 5.

Likely category direction, subject to repository verification:

* Break-fix article: Managed IT
* Microsoft 365 backup article: Backup & Business Continuity or Microsoft 365
* Cybersecurity checklist: Cybersecurity
* Lost laptop response: Cybersecurity or Microsoft 365 & Endpoint Management

The final category must reflect the article’s primary subject and visible content.

## Citation and link policy

Preserve authoritative citations from the approved source.

Requirements:

* Convert inline source references into the Markdown link format already used by the project.
* Verify every external citation resolves to the intended authoritative source.
* Prefer first-party and authoritative sources such as Microsoft, government agencies, standards bodies, and original publishers.
* Do not replace authoritative citations with marketing blogs or weaker secondary sources without approval.
* Do not fabricate quotations, statistics, dates, or claims.
* Keep anchor text descriptive and understandable out of context.
* Do not add links to unpublished Insights articles.
* Verify every internal link points to an existing public route and follows the trailing-slash convention.
* Record any dead, redirected, outdated, or materially changed citation for owner review before altering the source claim.

## Image policy

The Phase 4 schema requires article image paths beneath:

`/images/insights/`

The Architect must inspect the four source PNG files and determine the smallest safe production treatment.

The architecture note must document:

* source image dimensions
* source file sizes
* visual suitability as article hero and social-preview images
* whether each image should remain PNG or be converted to WebP
* final production filenames
* final site-relative paths
* meaningful alt-text direction
* whether conversion materially reduces file size without unacceptable quality loss

Important constraints:

* Files placed in `app/public` are served directly and are not automatically optimized by Astro’s image pipeline.
* Do not claim Astro has optimized public assets when it has not.
* Preserve the source files in the SEO workpack.
* Place only approved production copies or conversions under `app/public/images/insights/`.
* Do not add text overlays to the images.
* Do not distort, crop important content, or change the approved visual meaning.
* Do not introduce an image-processing dependency unless separately approved.

## Working model

Use the standard handoff:

1. Architect inspects the repository and prepares a Phase 5 Architecture Note.
2. Human approves the content, date, category, featured, ordering, citation, and image plan.
3. Implementer makes only the approved changes.
4. Reviewer checks the diff, article fidelity, citations, metadata, generated output, and build.
5. Human performs desktop and mobile visual review of all four new articles and the Insights hub.
6. Human reviews and merges the pull request.
7. Production deployment and verification follow the merge.

## Architect agent prompt

```text
You are the Architect for Phase 5 of the BlinkNetworks SEO workpack.

Phase 4 has been merged, deployed, and production-verified. Work from the latest main branch on branch content/publish-anchor-insights.

This is an architecture-only pass. Do not edit repository files, stage changes, commit, push, deploy, or create a pull request.

Goal:
Plan the publication of four additional anchor Insights articles:

1. Five Signs Your Business Has Outgrown Break-Fix IT Support
   Slug: business-outgrown-break-fix-it-support
   Source image: break-fix-to-managed-it.png

2. Does Microsoft 365 Back Up Everything?
   Slug: does-microsoft-365-back-up-everything
   Source image: microsoft-365-backup.png

3. The Small-Business Cybersecurity Checklist
   Slug: small-business-cybersecurity-checklist
   Source image: small-business-cybersecurity-checklist.png

4. What Should Happen When an Employee Loses a Laptop?
   Slug: employee-loses-laptop
   Source image: lost-employee-laptop-response.png

These are four additional articles. Preserve the four existing published articles and their body copy.

First inspect:

- Repository instructions and ADRs
- The Phase 5 task file
- The approved article source file
- All four source image assets
- The merged Phase 4 content schema
- The current Insights listing logic
- The current dynamic article route
- Existing article frontmatter and Markdown conventions
- Existing category enum
- Existing featured state
- Existing order values
- Existing citation and internal-link style
- Current article image dimensions and public asset conventions
- Relevant build and validation scripts

Important constraints:

- Do not rebuild or redesign the Insights system.
- Do not modify shared navigation, the homepage, layouts, Astro configuration, packages, deployment files, service pages, or existing article body copy.
- Do not add reading-time or related-content functionality.
- Do not add fields to the content schema.
- Do not introduce new categories.
- Do not add dependencies.
- Do not silently alter substantive claims.
- Do not fabricate or weaken citations.
- Do not backdate publication dates.
- Do not create links to unpublished content.
- Do not assume public-directory images are optimized by Astro.
- Do not implement anything during this pass.

Featured-state requirement:

- The new break-fix article must become the sole featured article.
- The existing managed-it-services-guide article is currently featured and must be changed to featured: false.
- The architecture must maintain exactly one published featured article.

Prepare a Phase 5 Architecture Note containing:

1. Current-state summary
   - Existing public article inventory
   - Current schema fields and validation
   - Current featured article
   - Current article order values
   - Current listing behavior and display limits
   - Current Markdown, citation, image, and metadata conventions

2. Exact file plan
   - Exact four Markdown files to create
   - Exact production image files to create
   - Exact existing files requiring frontmatter-only changes
   - Confirmation that existing article body copy remains unchanged
   - Confirmation that prohibited application files remain untouched

3. Per-article content contract
   For each new article define:
   - Exact title
   - Slug and canonical path
   - Concise meta description
   - Category from the existing enum
   - Featured value
   - Unique positive order value
   - Publication-date recommendation
   - Final image filename and site-relative path
   - Meaningful image alt text
   - Primary search intent
   - CTA destination and wording already supported by the current template
   - Citation inventory
   - Internal-link inventory
   - Factual or claim-related risks
   - Any source formatting corrections required

4. Featured and ordering plan
   - Exact frontmatter change to managed-it-services-guide
   - Unique order values across all eight published articles
   - Which article is featured
   - Which three non-featured articles appear in the current Latest Insights grid
   - How the other published articles remain discoverable under the current implementation
   - Any product decision that requires owner approval

5. Citation review
   - Every external citation grouped by article
   - Target URL and source authority
   - Redirect, availability, freshness, and claim-support assessment
   - Any citation needing replacement or owner review
   - Confirmation that citations remain attached to the claims they support

6. Image assessment
   - Source path, format, dimensions, and file size
   - Recommended final format and filename
   - Expected production path under /images/insights/
   - Alt-text recommendation
   - Whether conversion is beneficial
   - Conversion method using existing tools only
   - Confirmation that source assets remain preserved

7. Metadata and structured-data plan
   - How existing collection frontmatter flows into title, description, canonical, Open Graph, dates, breadcrumbs, and BlogPosting JSON-LD
   - Confirmation that no layout or schema changes are required
   - Confirmation that BlinkNetworks remains the current author/publisher
   - Confirmation that updatedDate is omitted at initial publication unless factually warranted

8. Validation plan
   - Repository and build checks
   - Exactly eight published article routes
   - Draft exclusion
   - Exactly one featured article
   - Expected Insights hub cards and order
   - Unique title, description, slug, and order checks
   - Canonical and trailing-slash checks
   - JSON-LD parsing
   - Social-preview metadata checks
   - Image existence, dimensions, format, file-size, and alt-text checks
   - External citation status and destination checks
   - Internal-link and broken-link checks
   - Sitemap assertions
   - Desktop and mobile visual-review routes

9. Risks and decisions requiring approval
   - Publication date
   - Category ambiguity
   - Featured and ordering changes
   - Citation changes
   - Image conversion decisions
   - Any unavoidable deviation from the restricted scope

End with:
- a concise recommendation
- the exact approved future Implementer scope
- the complete list of files expected to be created or modified

Do not implement anything.
```

## Future Implementer constraints

The Implementer must work only from an approved Phase 5 Architecture Note.

Expected implementation scope:

* Four new Insights Markdown entries
* Four approved production image assets
* Frontmatter-only changes to existing article entries when required for featured-state and ordering consistency

The Implementer must not alter article templates, layouts, schema configuration, packages, navigation, deployment, or unrelated content unless the approved architecture explicitly documents and justifies the exception.

The Implementer must:

* preserve the approved substantive article copy
* retain authoritative citations
* use the approved metadata values
* maintain exactly one published featured article
* ensure unique positive order values
* use honest fixed publication dates
* preserve draft exclusion
* verify image paths against the Phase 4 schema
* remove all temporary test fixtures
* report the exact diff and validation results
* avoid staging, committing, pushing, or deploying

## Validation requirements

Implementation validation must include:

1. `npm run build` from `/app`
2. `git diff --check`
3. Exact changed-file inventory
4. Confirmation that no prohibited files changed
5. Confirmation that exactly eight published Insights article routes build
6. Confirmation that all four new routes use the expected trailing slashes
7. Confirmation that no draft or temporary route appears
8. Confirmation that exactly one published article is featured
9. Confirmation that the break-fix article is the featured article
10. Confirmation that the Insights hub renders the intended featured and latest cards
11. Confirmation that all eight articles have unique positive order values
12. Confirmation that all four new articles have:

    * unique titles
    * unique descriptions
    * correct categories
    * valid publication dates
    * meaningful image alt text
    * valid canonical URLs
    * correct Open Graph article metadata
    * valid BlogPosting JSON-LD
    * correct breadcrumbs
13. Confirmation that every production image:

    * exists
    * uses its approved format
    * has suitable dimensions
    * has an acceptable file size
    * renders responsively
    * does not cause avoidable layout shift
14. Confirmation that every external citation:

    * resolves
    * reaches the intended source
    * supports the associated claim
15. Confirmation that every internal link resolves to an existing public trailing-slash route
16. Sitemap confirmation for all eight published articles
17. Desktop and mobile visual review of:

    * `/insights/`
    * `/insights/business-outgrown-break-fix-it-support/`
    * `/insights/does-microsoft-365-back-up-everything/`
    * `/insights/small-business-cybersecurity-checklist/`
    * `/insights/employee-loses-laptop/`

## Acceptance criteria

* Four additional article routes build successfully.
* The public Insights collection contains eight articles.
* Existing article body copy remains unchanged.
* The approved source copy is preserved without unsupported substantive rewriting.
* Citations remain authoritative, functional, and attached to the claims they support.
* The break-fix article is the sole featured published article.
* The existing managed IT guide is no longer featured.
* Article ordering is unique, deterministic, and approved.
* The Insights hub shows the intended featured and latest articles.
* All four new articles have valid metadata, canonicals, Open Graph output, BlogPosting JSON-LD, breadcrumbs, publication dates, images, and alt text.
* Publication dates are honest and not backdated.
* Images are production-ready and stored under the approved Insights image path.
* No reading-time, related-content, search, taxonomy, schema, layout, package, navigation, or deployment expansion is introduced.
* No draft, temporary fixture, broken internal link, unsupported claim, or unintended route is published.
* Build, repository, citation, sitemap, structured-data, and visual checks pass.
