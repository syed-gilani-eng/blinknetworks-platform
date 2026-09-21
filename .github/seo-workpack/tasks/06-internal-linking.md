# Phase 6 — Strengthen internal linking and article discoverability

## Outcome

Create a deliberate, useful internal-link network connecting BlinkNetworks’ service, solution, and Insights content.

This phase must:

* improve visitor navigation between relevant commercial and educational content
* ensure all eight published Insights articles are discoverable through crawlable internal links
* connect informational articles to appropriate service and contact routes
* strengthen topical relationships without keyword stuffing
* preserve the Phase 4 content architecture and Phase 5 article implementation
* avoid unnecessary layout, schema, package, or navigation changes

Internal links must help a reader take a logical next step. They must not be added merely to increase link counts.

## Dependency

Phase 5 must be merged, deployed, and production-verified before Phase 6 implementation begins.

The public Insights collection contains these eight articles:

1. `/insights/business-outgrown-break-fix-it-support/`
2. `/insights/does-microsoft-365-back-up-everything/`
3. `/insights/small-business-cybersecurity-checklist/`
4. `/insights/employee-loses-laptop/`
5. `/insights/managed-it-services-guide/`
6. `/insights/microsoft-365-security-basics/`
7. `/insights/business-continuity-plan/`
8. `/insights/when-to-move-to-the-cloud/`

The current Insights hub displays:

* one featured article
* three Latest Insights cards

The other four published articles remain public and included in the sitemap, but they are not currently displayed on the hub.

Phase 6 must improve their discoverability without redesigning the Insights hub unless the Architect demonstrates that a small hub change is necessary and the owner approves it separately.

## Primary goals

### 1. Make all eight articles discoverable

Every published article must receive at least one meaningful crawlable internal link from another public page.

No article may depend only on:

* its sitemap entry
* its direct URL
* an external search result
* an unpublished page
* JavaScript-generated navigation

### 2. Connect articles by genuine topic relationships

Create contextual links only where one article naturally helps the reader understand the current topic.

Likely relationships include:

* break-fix support → managed IT services guide
* managed IT services guide → break-fix support
* Microsoft 365 backup → business continuity plan
* business continuity plan → Microsoft 365 backup
* cybersecurity checklist → Microsoft 365 security basics
* Microsoft 365 security basics → cybersecurity checklist
* lost laptop response → Microsoft 365 security basics
* lost laptop response → cybersecurity checklist
* cloud-migration article → cloud infrastructure service content
* managed IT articles → managed IT service content
* backup articles → backup and business continuity service content
* cybersecurity articles → cybersecurity service content
* Microsoft 365 and endpoint articles → Microsoft 365 and endpoint-management service content

These are candidate relationships, not automatic requirements. The Architect must inspect the actual copy before approving each link.

### 3. Connect educational content to commercial routes

Each article should provide a relevant path toward one appropriate commercial action.

Permitted destinations include existing public routes such as:

* `/services/`
* relevant existing service-detail routes
* `/solutions/`
* `/contact/`

The Architect must confirm the actual production routes before implementation.

Do not force every article to link to every commercial page.

### 4. Connect commercial pages to useful articles

Relevant service or solution pages should link to authoritative Insights articles when the article genuinely helps a prospective customer understand:

* the business problem
* the associated risk
* common warning signs
* a decision the customer may be considering
* a practical next step

Links from commercial pages should remain secondary to the page’s main conversion purpose.

## Guiding principles

### Reader value first

Every link must answer a reasonable reader question such as:

* What should I read next?
* What does this risk mean for my business?
* What should I do if this happens?
* Which BlinkNetworks service addresses this concern?
* How can I discuss this with BlinkNetworks?

### Descriptive anchor text

Use concise, descriptive anchor text.

Good examples:

* managed IT services
* Microsoft 365 backup limitations
* small-business cybersecurity checklist
* steps to take when an employee loses a laptop
* business continuity planning
* moving business systems to the cloud

Avoid:

* click here
* read more
* learn more, when a more descriptive phrase is available
* repeated exact-match anchors used unnaturally
* long anchors containing entire sentences
* anchors that promise content the destination does not provide

### Contextual placement

Place links where they naturally support the surrounding sentence or paragraph.

Do not:

* add isolated lists of links merely for SEO
* insert multiple links into one sentence unless genuinely useful
* link the same destination repeatedly from a single short section
* add links inside headings
* link every occurrence of a phrase
* hide links in images or decorative elements
* rely on client-side JavaScript for crawlability

### Trailing-slash convention

All internal route links must use site-relative paths with trailing slashes.

Correct:

```text
/insights/business-continuity-plan/
/services/
/contact/
```

Incorrect:

```text
https://blinknetworks.com/insights/business-continuity-plan
/insights/business-continuity-plan
```

Use absolute URLs only where the existing architecture explicitly requires them.

## Scope

The Architect must determine the smallest exact file set needed to create the approved link graph.

Expected candidates include:

* the eight published Insights Markdown entries
* existing service-page content files or components
* existing solution-page content files or components
* existing homepage content only if a meaningful link opportunity already exists
* the Insights hub only if required for discoverability and separately approved

The Architect must inspect the repository before naming files.

## Restricted scope

Do not modify unless an approved Architecture Note identifies a genuine blocker:

* content collection schema
* `BaseLayout.astro`
* `ArticleLayout.astro`
* dynamic article routing
* canonical generation
* Open Graph implementation
* JSON-LD implementation
* breadcrumbs
* sitemap configuration
* `robots.txt`
* package files or lockfiles
* deployment workflows
* shared header or primary navigation
* footer
* article images
* article publication dates
* article featured values
* article order values
* category enum
* author or publisher behavior
* unrelated page copy

Do not add:

* new dependencies
* related-article schema fields
* related-article cards or components
* reading-time functionality
* search or filtering
* category archive routes
* tag routes
* automated link-insertion scripts
* keyword-stuffed copy
* hidden links
* duplicate CTAs
* new factual claims
* unsupported guarantees, certifications, service levels, prices, compliance claims, or response-time promises

A new related-content system remains outside this phase.

## Existing-copy policy

Phase 6 is primarily a linking phase.

The Implementer may make the smallest grammatical adjustment necessary to place an approved contextual link naturally.

The Implementer must not:

* rewrite article sections
* alter substantive claims
* add new claims to create linking opportunities
* weaken or strengthen existing statements
* remove citations
* move citations away from the claims they support
* change article conclusions or CTAs without approval
* change page titles, descriptions, dates, categories, featured values, or order values

Any wording change beyond a minimal link-insertion adjustment requires owner approval.

## Link architecture requirements

The approved link graph must satisfy all of the following:

1. Every published Insights article has at least one incoming contextual internal link from another indexable public page.
2. Every new Phase 5 article has at least one useful outgoing internal link.
3. Every older article hidden from the current hub has a clear discovery path from a currently visible public page.
4. No article becomes an isolated endpoint.
5. Commercial links point only to existing public routes.
6. Article-to-article links connect genuinely related subjects.
7. Links are present in server-rendered HTML.
8. Link text is descriptive and varied naturally.
9. No broken, redirected, or non-canonical internal destination is introduced.
10. No link points to a draft, future, temporary, or unpublished route.
11. Existing external citations remain external and unchanged unless a correction is separately approved.
12. No page receives excessive repetitive links.

## Preferred topical clusters

The Architect should evaluate these four clusters.

### Managed IT cluster

Candidate pages:

* `/insights/business-outgrown-break-fix-it-support/`
* `/insights/managed-it-services-guide/`
* relevant managed IT service route
* `/contact/`

Desired journey:

```text
Break-fix warning signs
→ managed IT explanation
→ relevant service
→ contact
```

### Microsoft 365 and endpoint-security cluster

Candidate pages:

* `/insights/microsoft-365-security-basics/`
* `/insights/employee-loses-laptop/`
* relevant Microsoft 365 and endpoint-management service route
* `/contact/`

Desired journey:

```text
Security fundamentals
↔ lost-device response
→ endpoint-management service
→ contact
```

### Cybersecurity cluster

Candidate pages:

* `/insights/small-business-cybersecurity-checklist/`
* `/insights/microsoft-365-security-basics/`
* `/insights/employee-loses-laptop/`
* relevant cybersecurity service route
* `/contact/`

Desired journey:

```text
Security checklist
→ supporting security guidance
→ incident-response example
→ cybersecurity service
```

### Backup, continuity, and cloud cluster

Candidate pages:

* `/insights/does-microsoft-365-back-up-everything/`
* `/insights/business-continuity-plan/`
* `/insights/when-to-move-to-the-cloud/`
* relevant backup, continuity, and cloud service routes
* `/contact/`

Desired journey:

```text
Backup limitations
↔ business continuity planning
→ cloud or continuity service
→ contact
```

The final architecture may refine these clusters after inspecting the actual content.

## Working model

Use the established workflow:

1. Architect inspects the repository and prepares a Phase 6 Architecture Note.
2. Human approves the exact link graph, anchors, insertion locations, wording adjustments, and file scope.
3. Implementer makes only the approved changes.
4. Reviewer checks content fidelity, link usefulness, route validity, HTML output, and scope.
5. Human reviews affected pages on desktop and mobile.
6. Human commits and pushes the approved implementation.
7. Human reviews and merges the pull request.
8. Production deployment and verification follow the merge.

## Branch

Create Phase 6 on:

```text
seo/internal-linking
```

The branch must begin from the latest clean `main` after Phase 5 has been merged and production-verified.

## Architect agent prompt

```text
You are the Architect for Phase 6 of the BlinkNetworks SEO workpack.

Phase 5 has been merged. Work from the latest main branch on:

seo/internal-linking

Read and follow:

.github/seo-workpack/tasks/06-internal-linking.md

This is an architecture-only pass.

Do not edit repository files.
Do not stage, commit, push, deploy, or create a pull request.

Goal:

Design the smallest useful internal-link network connecting BlinkNetworks’ eight published Insights articles with relevant service, solution, and contact pages.

The link graph must:

- make all eight articles discoverable through crawlable internal links
- provide every article with at least one meaningful incoming internal link
- give each new Phase 5 article at least one useful outgoing internal link
- give the four older articles currently absent from the Insights hub a clear discovery path
- connect articles only where their topics genuinely support one another
- create appropriate paths from educational content to existing commercial routes
- avoid keyword stuffing, excessive linking, or unrelated anchors
- preserve existing claims, citations, metadata, dates, categories, featured values, order values, layouts, and schema

First inspect:

- repository instructions and ADRs
- the complete Phase 6 task file
- all eight published Insights entries
- the current Insights hub behavior
- the article rendering path
- homepage content
- Services hub
- every existing service-detail route
- Solutions page and existing solution routes
- Contact page
- current navigation and footer
- existing internal links in all affected pages
- current CTA behavior
- trailing-slash conventions
- generated HTML for representative pages
- sitemap output
- any existing link-validation scripts
- the Phase 4 and Phase 5 architectural constraints

Do not assume route names. Verify every route from the repository.

Do not propose:

- new schema fields
- related-article components
- reading-time functionality
- search or filtering
- category or tag routes
- new dependencies
- primary-navigation changes
- footer changes
- a hub redesign
- automated link insertion
- new factual or promotional claims

Prepare a Phase 6 Architecture Note containing:

1. Current-state inventory

   - All eight article routes
   - Current incoming internal links to each article
   - Current outgoing internal links from each article
   - Existing service and solution routes
   - Current article CTAs
   - Articles currently visible on the Insights hub
   - Articles absent from the hub
   - Orphaned or weakly linked pages
   - Current anchor-text conventions
   - Current trailing-slash behavior

2. Crawl and discovery assessment

   For every article, identify:

   - whether it is reachable through ordinary crawlable HTML links
   - shortest click path from the homepage
   - existing incoming-link sources
   - relevant missing link opportunities
   - whether it depends primarily on the sitemap or direct URL
   - discoverability risk

3. Proposed link graph

   Define every proposed internal link individually.

   For each link specify:

   - source route
   - exact source file
   - exact section or paragraph
   - destination route
   - proposed anchor text
   - surrounding sentence before implementation
   - minimally revised sentence, if required
   - reader value
   - topical justification
   - whether it creates an incoming or outgoing requirement
   - confirmation that the destination exists and is canonical

4. Article-to-article plan

   Evaluate at minimum:

   - break-fix article ↔ managed IT guide
   - Microsoft 365 backup article ↔ business continuity article
   - cybersecurity checklist ↔ Microsoft 365 security article
   - lost laptop article → Microsoft 365 security article
   - lost laptop article → cybersecurity checklist
   - cloud-migration article → relevant cloud service content

   Reject any relationship that is not supported by the actual copy.

5. Commercial-page plan

   Identify useful links:

   - from articles to relevant service or contact routes
   - from service or solution pages to relevant articles

   Keep commercial-page links limited and subordinate to the page’s primary conversion purpose.

6. Orphan-prevention plan

   Demonstrate how every article receives at least one incoming contextual link.

   Explicitly identify discovery paths for:

   - managed-it-services-guide
   - microsoft-365-security-basics
   - business-continuity-plan
   - when-to-move-to-the-cloud

   These four articles are published but not currently displayed on the Insights hub.

7. Exact file plan

   - Files to modify
   - Files inspected but unchanged
   - Exact reason each modified file is necessary
   - Confirmation that prohibited files remain untouched
   - Confirmation that no new file is required unless justified

8. Copy-integrity plan

   - Exact minimal wording changes, if any
   - Confirmation that substantive claims remain unchanged
   - Confirmation that citations remain intact and adjacent to supported claims
   - Confirmation that titles, descriptions, dates, categories, featured values, order values, image metadata, and CTAs remain unchanged unless specifically approved

9. Validation plan

   Include:

   - npm build
   - git diff --check
   - exact changed-file inventory
   - broken-link validation
   - trailing-slash validation
   - canonical-destination validation
   - source-to-destination link matrix
   - incoming-link count for every article
   - outgoing-link count for every article
   - confirmation that all links appear in server-rendered HTML
   - confirmation that no draft or unpublished route is linked
   - confirmation that all eight article URLs remain in the sitemap
   - confirmation that external citations are unchanged
   - confirmation that metadata and structured data remain unchanged
   - desktop and mobile visual-review routes

10. Risks and owner decisions

    Identify:

    - any proposed wording change beyond simple link insertion
    - ambiguous anchor text
    - pages at risk of excessive linking
    - any article still weakly discoverable
    - any proposed hub, component, navigation, or footer change
    - any deviation from the restricted scope

End with:

- a concise recommendation
- the complete proposed link matrix
- decisions requiring owner approval
- the exact future Implementer scope
- the complete list of files expected to be modified
- confirmation that no implementation was performed

Do not implement anything.
```

## Future Implementer constraints

The Implementer must work only from an owner-approved Phase 6 Architecture Note.

The Implementer must:

* add only approved internal links
* use exact approved anchor text
* edit only approved files
* make only approved minimal grammatical adjustments
* preserve substantive copy
* preserve all citations
* preserve frontmatter and metadata unless explicitly approved
* use site-relative trailing-slash URLs
* link only to existing public canonical routes
* ensure links appear in server-rendered HTML
* report the exact diff and validation results

The Implementer must not:

* add unapproved links
* rewrite sections
* introduce new claims
* change titles, descriptions, dates, categories, featured values, order values, images, authors, or CTAs
* modify layouts, schema, navigation, footer, configuration, packages, sitemap, robots, or deployment files
* add dependencies
* stage, commit, push, deploy, or create a pull request

## Reviewer requirements

The Reviewer must independently verify:

1. Every changed file was approved.
2. Every added link appears in the approved link matrix.
3. Every destination route exists.
4. Every internal URL is site-relative and uses a trailing slash.
5. Every anchor accurately describes its destination.
6. Every link is useful in its surrounding context.
7. No page contains excessive or repetitive linking.
8. All eight articles have at least one incoming crawlable internal link.
9. Every new Phase 5 article has at least one useful outgoing link.
10. The four articles absent from the hub have clear discovery paths.
11. No substantive claim changed.
12. External citations remain intact and unchanged.
13. Metadata, dates, categories, featured values, orders, images, JSON-LD, canonicals, and breadcrumbs remain unchanged.
14. No draft, temporary, or unpublished route is linked.
15. No prohibited file changed.
16. Build and link validation pass.
17. The rendered pages remain visually clean on desktop and mobile.

Findings must be reported in severity order with:

* exact file and location
* evidence
* impact
* smallest appropriate correction

The Reviewer must end with:

* `PASS` or `CHANGES REQUIRED`
* exact changed-file inventory
* approved-link-matrix comparison
* incoming-link coverage for all eight articles
* outgoing-link coverage for all eight articles
* broken-link result
* copy-fidelity result
* build result
* repository status
* remaining human-review requirements

The Reviewer must not implement corrections.

## Validation requirements

Implementation validation must include:

1. `npm run build` from `/app`
2. `git diff --check`
3. Exact changed-file inventory
4. Confirmation that only approved files changed
5. Confirmation that all eight Insights article routes still build
6. Confirmation that no draft or temporary route appears
7. Confirmation that all eight article URLs remain in the sitemap
8. Confirmation that every new internal link resolves
9. Confirmation that every internal link uses the canonical trailing-slash route
10. Confirmation that no link targets a redirect
11. Confirmation that all eight articles have at least one incoming internal link
12. Confirmation that all four Phase 5 articles have at least one useful outgoing internal link
13. Confirmation that the four articles absent from the hub have crawlable discovery paths
14. Confirmation that links are present in generated HTML
15. Confirmation that external citations are unchanged
16. Confirmation that article body changes are limited to approved link insertions and minimal grammatical adjustments
17. Confirmation that frontmatter and metadata are unchanged
18. Confirmation that canonicals, Open Graph output, JSON-LD, breadcrumbs, and publication dates remain correct
19. Confirmation that no prohibited files changed
20. Desktop and mobile visual review of every affected route

## Acceptance criteria

* All eight published articles are discoverable through meaningful crawlable internal links.
* Every article has at least one incoming contextual internal link.
* Every Phase 5 article has at least one useful outgoing internal link.
* The four articles absent from the current Insights hub have clear discovery paths from visible public pages.
* Article-to-article links reflect genuine topical relationships.
* Relevant articles connect naturally to appropriate commercial routes.
* Relevant commercial pages link to useful articles without weakening their conversion purpose.
* Anchor text is descriptive, accurate, and natural.
* All internal links use existing canonical trailing-slash routes.
* No broken, redirected, draft, future, or temporary route is linked.
* Existing claims, citations, metadata, structured data, dates, categories, featured values, order values, images, and article architecture remain intact.
* No related-content system, new schema, dependency, search, filter, category route, navigation change, footer change, or unrelated redesign is introduced.
* Build, repository, sitemap, link, content-fidelity, and visual checks pass.
