# Phase 3 — Service landing pages

## Outcome

Create six substantive service landing pages that are ready for later integration into the website’s navigation and internal-link structure.

Phase 6 will update shared navigation, the homepage, the main Services page links, and cross-linking. Phase 3 creates and validates the destination pages without modifying those shared integrations.

## Dependency

Phase 2 must be merged, deployed, and verified before this phase begins.

Confirmed Phase 2 foundation:

- Centralized Organization, WebSite, and WebPage JSON-LD
- BreadcrumbList support
- Existing BlogPosting schema preserved
- Canonical metadata and trailing-slash policy
- Production origin: `https://blinknetworks.com`

## Required routes

- `/services/managed-it-support/`
- `/services/microsoft-365-endpoint-management/`
- `/services/cybersecurity/`
- `/services/cloud-infrastructure/`
- `/services/network-services/`
- `/services/backup-business-continuity/`

## Scope restrictions

Do not modify:

- Shared navigation or header
- Homepage
- Global layout
- `astro.config.*`
- Package files
- Deployment workflow
- Existing Insights articles
- Shared internal-link integration owned by Phase 6

Do not add dependencies unless a separately approved architecture revision requires one.

## Working model

Use the standard handoff:

1. Architect inspects the repository and prepares an implementation note.
2. Implementer makes only the approved changes.
3. Reviewer checks the diff, generated output, schema, content, and build.
4. Human performs desktop and mobile visual review.
5. Human reviews and merges the pull request.

## Architect agent prompt

```text
You are the Architect for Phase 3 of the BlinkNetworks SEO workpack.

Phase 2 has been merged, deployed, and verified. Work from the latest main branch. This is an architecture-only pass. Do not edit repository files, stage changes, commit, push, deploy, or create a pull request.

Goal:
Plan six substantive service landing pages:

- /services/managed-it-support/
- /services/microsoft-365-endpoint-management/
- /services/cybersecurity/
- /services/cloud-infrastructure/
- /services/network-services/
- /services/backup-business-continuity/

First inspect:

- The current Services page and its service copy
- Existing service-related components and design primitives
- Current page and layout composition patterns
- The merged Phase 1 metadata contract
- The merged Phase 2 JSON-LD and breadcrumb implementation
- Existing approved company claims and wording
- Existing service image assets
- Existing Insights content that may eventually relate to each service
- Repository instructions, ADRs, and available validation scripts

Important restrictions:

- Do not modify shared navigation, the header, homepage, BaseLayout, astro.config.*, package files, deployment files, or existing Insights articles.
- Phase 6 owns shared navigation, homepage links, main Services page integration, and broader internal linking.
- Do not assume that Phase 2 created a reusable Service JSON-LD interface. Inspect the actual implementation.
- Determine the smallest safe way to add page-specific Service structured data without modifying BaseLayout.
- Do not create or hard-code links to unpublished Insights articles.
- Do not introduce unsupported response times, 24/7 support, compliance claims, certifications, guaranteed security, prices, SLAs, testimonials, staff, addresses, or service guarantees.

Prepare a Phase 3 Architecture Note containing:

1. Current-state summary
   - Existing Services page structure
   - Reusable components and design primitives
   - Existing approved service copy and assets
   - Current structured-data extension points

2. Route and file plan
   - Exact source file for each required route
   - Proposed shared components
   - Exact files to create
   - Exact existing files, if any, that must be modified
   - Confirmation that prohibited shared files will remain untouched

3. Page content contract
   For each service page define:
   - Unique SEO title
   - Unique meta description
   - Unique H1
   - Short positioning statement
   - Plain-language service explanation
   - Three to five business outcomes
   - “What BlinkNetworks can help with” topics
   - Appropriate CTA wording and destination
   - Approved image asset and alt-text direction
   - Breadcrumb labels and paths
   - Any factual or claim-related risks

4. Shared page architecture
   - Recommended page template or shared components
   - Which content must remain unique per service
   - How the design avoids six near-duplicate doorway pages
   - Mobile and desktop layout expectations

5. Structured-data design
   - Exact Service JSON-LD fields
   - Stable @id pattern
   - Relationship to the existing Organization and WebPage entities
   - Injection point that does not require changing BaseLayout
   - Safe serialization method
   - How schema content will remain consistent with visible content
   - Confirmation that unsupported facts will not be added

6. Insights relationship plan
   - Identify only currently published articles that are genuinely relevant
   - Do not add links during this phase unless explicitly approved
   - Define a typed or content-driven mechanism Phase 6 can use later
   - Do not display empty placeholders to website visitors

7. Validation plan
   - Build and repository checks
   - Generated-route assertions
   - Unique title, description, and H1 checks
   - JSON-LD parsing and entity-count checks
   - Canonical and trailing-slash checks
   - Broken-link checks
   - Unsupported-claim review
   - Desktop and mobile visual-review routes

8. Risks and decisions requiring approval
   - Schema-interface limitations
   - Content claims needing owner confirmation
   - Missing or unsuitable image assets
   - Any required deviation from the phase restrictions

Do not implement anything. End with a concise recommendation and the exact approved scope for the future Implementer agent.
```

## Content requirements

Each service page must contain:

- Unique title and meta description
- Unique H1
- Plain-language explanation
- Business problems addressed
- Meaningful business outcomes
- A service-specific capability section
- A sensible contact CTA
- Visible breadcrumb
- Page-specific Service JSON-LD
- Content substantial enough to be useful independently

The six pages must not be generated by swapping only names and keywords in an otherwise identical template.

## Content safeguards

Write for growing businesses across Toronto and the GTA without repetitive location phrases or thin city-targeted pages.

Do not claim:

- Guaranteed protection or availability
- Guaranteed business outcomes
- Specific response or resolution times
- 24/7 support
- Regulatory compliance
- Certifications not explicitly approved
- Prices or service packages
- SLAs
- Customer reviews or testimonials
- Unsupported vendor partnerships
- Unsupported monitoring, SOC, NOC, or incident-response capabilities

## Acceptance criteria

- All six required routes build successfully.
- Every route has a unique title, description, and H1.
- Every page provides genuinely distinct and useful content.
- Canonical URLs follow the production origin and trailing-slash policy.
- Breadcrumbs match visible navigation and structured data.
- Service schema parses successfully and matches visible content.
- Existing Organization, WebSite, WebPage, BreadcrumbList, and BlogPosting schema behavior is not regressed.
- No prohibited shared files are modified.
- No broken internal links or unsupported claims are introduced.
- All six pages pass desktop and mobile visual review.
- Generated build output is inspected.
- No generated `dist` or dependency files are committed.