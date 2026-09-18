# BlinkNetworks SEO Implementation Workpack

This workpack turns the BlinkNetworks deployment and SEO recommendations into small, reviewable changes for the Astro website.

Keep this folder in the repository at:

```text
.github/seo-workpack/
```

Complete the phases in order. Each phase has its own branch, scope, agent instructions, acceptance criteria, and verification requirements.

## Intended result

When this workpack is complete:

* The Astro website is deployed consistently through GitHub Actions instead of manual uploads.
* The production build is generated from the repository’s `app` directory.
* Search engines receive unique titles, descriptions, canonical URLs, crawl directives, social metadata, XML sitemaps, and accurate structured data.
* Each core service has a useful dedicated landing page.
* Insights are managed through Astro content collections.
* The four anchor articles and their image assets are published.
* Visitors and search engines can navigate naturally between services and related Insights.
* Google Search Console and Bing Webmaster Tools can verify and monitor the website.

SEO is not a one-time switch or a guarantee of rankings. This plan establishes a technically sound, useful, measurable foundation that can be improved over time.

## Current status

The Phase 0 investigation confirmed:

* The current Astro repository does not contain the previously observed legacy placeholder content.
* The current live Services and About pages display the correct BlinkNetworks website.
* The website owner cleared the hosting account’s `public_html` directory before manually uploading the current Astro build.
* There is no current evidence that legacy files remain in `public_html`.
* The earlier legacy-content result could not be reproduced and may have come from stale crawler or search-index data.
* No remote cleanup is currently required.
* The remaining deployment gap is that production updates rely on manual uploads.
* The repository does not currently contain a GitHub Actions production deployment workflow.

BlinkNetworks has now authorized moving from local-only development to a controlled GitHub Actions deployment process using a dedicated SSH/SFTP account.

## Important first rule

Phase 0 must be completed before SEO implementation begins.

Phase 0 will establish GitHub Actions as the production deployment source of truth. This ensures that SEO changes are built, deployed, verified, and rolled back consistently.

The first GitHub Actions deployment must be manually triggered and non-destructive. Automatic deployment from `main` should only be enabled after the workflow and production destination have been validated.

## Working model in VS Code

Use one conversation or agent per phase.

Each phase follows the same handoff:

1. **Architect agent:** Inspects the repository and writes an implementation note containing exact files, decisions, risks, dependencies, and tests. It does not edit production code.
2. **Human review:** The architecture note is reviewed before implementation begins.
3. **Implementer agent:** Makes only the approved phase changes on the designated branch.
4. **Reviewer agent:** Reviews the diff, runs the build and checks, and reports defects or blockers without broadening the scope.
5. **Human approval:** A human reviews the results and merges the pull request.

Do not run multiple agents against the same working tree.

If two implementation branches are active simultaneously, use separate Git worktrees and ensure the agents do not edit shared files.

## Branch and dependency map

| Phase | Branch                                | Purpose                                                                   | Depends on     |
| ----- | ------------------------------------- | ------------------------------------------------------------------------- | -------------- |
| 0     | `feat/github-actions-sftp-deployment` | Establish secure GitHub Actions deployment for the Astro build            | Current `main` |
| 1     | `feat/seo-foundation`                 | Add global metadata, canonical URLs, robots.txt and XML sitemap           | Phase 0        |
| 2     | `feat/seo-structured-data`            | Add Organization, WebSite, Breadcrumb, Service and Article schema support | Phase 1        |
| 3     | `feat/service-landing-pages`          | Create six substantive service landing pages                              | Phase 2        |
| 4     | `feat/insights-content-system`        | Build the Astro Insights content collection and article templates         | Phase 2        |
| 5     | `content/publish-anchor-insights`     | Publish the four anchor articles and their images                         | Phase 4        |
| 6     | `feat/seo-internal-linking`           | Connect the homepage, service pages and Insights content                  | Phases 3 and 5 |
| 7     | `chore/seo-launch-verification`       | Validate production SEO and configure webmaster tools                     | Phase 6        |

Phases 3 and 4 may proceed in parallel only after Phase 2 has been merged.

When those phases run in parallel, their agents must use separate worktrees and must not modify:

* Shared navigation
* The homepage
* The global layout
* `astro.config.*`
* Package files
* Deployment workflows

Shared integration changes belong in Phase 6 unless an approved architecture note explicitly assigns them elsewhere.

## Phase 0 deployment requirements

The GitHub Actions deployment must:

* Build the Astro application from `/app`.
* Use `npm ci` and `npm run build`.
* Deploy only `/app/dist`.
* Use a dedicated restricted SSH/SFTP account.
* Store credentials only in GitHub Environment secrets.
* Enforce SSH host-key verification.
* Use least-privilege GitHub Actions permissions.
* Prevent concurrent production deployments.
* Avoid printing credentials or private keys.
* Require a manually triggered first deployment.
* Avoid deleting remote files during the first deployment.
* Verify the production website after deployment.
* Document rollback procedures.
* Enable automatic deployment from `main` only after the first deployment has been validated.

The first deployment must verify these routes:

```text
/
 /services/
 /solutions/
 /about/
 /contact/
 /insights/
```

Before any synchronized deployment or remote deletion is enabled, the following must be confirmed:

* Exact hosting document root
* Dedicated deployment username
* SSH/SFTP hostname and port
* Whether full SSH commands are supported
* Whether `rsync` is available
* Whether the deployment account is restricted to the BlinkNetworks document root
* Whether the hosting provider offers backups or snapshots
* Whether rollback can restore the previous production build

Do not store real secret values anywhere in this workpack.

## Suggested GitHub secret names

Use descriptive placeholders such as:

```text
BLINK_SFTP_HOST
BLINK_SFTP_PORT
BLINK_SFTP_USERNAME
BLINK_SFTP_PRIVATE_KEY
BLINK_SFTP_REMOTE_PATH
BLINK_SSH_KNOWN_HOSTS
```

The final names may change after the deployment architecture is approved.

## Suggested release batches

### Release A — Deployment and technical SEO

Includes Phases 0–2:

* GitHub Actions deployment
* Metadata and canonical URLs
* Robots.txt and XML sitemap
* Structured-data foundation

### Release B — Services and Insights

Includes Phases 3–5:

* Six service landing pages
* Astro Insights content system
* Four anchor articles and their images

### Release C — Integration and launch

Includes Phases 6–7:

* Internal linking
* Homepage content integration
* Production SEO validation
* Search Console and Bing Webmaster Tools setup

## Definition of done for every phase

Every phase must meet these requirements:

* The change is limited to the scope defined in its task file.
* Existing unrelated user changes are preserved.
* The agent inspects the repository before editing.
* `npm run build` passes from the actual Astro application directory.
* Existing lint, type-check and test scripts pass when present.
* Generated output is inspected rather than relying only on source-code review.
* No production secrets are committed.
* No fabricated address, staff member, testimonial, review, price, SLA, certification, office hours, service capability, or security claim is introduced.
* Public URLs consistently use the approved production hostname.
* The pull request contains a clear summary of files changed.
* The pull request lists all commands and checks that were run.
* Screenshots or generated-output evidence are included when visually relevant.
* Risks, limitations and follow-up work are documented.
* The Reviewer agent reports whether the branch is safe to merge.

## Deployment safety rules

Agents must not:

* Connect to production during an architecture pass.
* Display or request private-key contents.
* Disable SSH host-key verification.
* Use `StrictHostKeyChecking=no`.
* Hard-code credentials or hosting paths.
* Deploy repository source files.
* Upload anything outside `/app/dist`.
* Delete remote files without an explicitly confirmed document root.
* Enable automatic production deployment before the first manual workflow is validated.
* Perform destructive server cleanup without human approval.

## SEO implementation principles

SEO work must:

* Prioritize accurate and useful content over keyword repetition.
* Use unique titles, descriptions and headings.
* Produce one canonical production URL for each page.
* Keep draft and preview content out of public routes and sitemaps.
* Use structured data only when it matches visible, verifiable content.
* Avoid unsupported LocalBusiness properties.
* Avoid thin or repetitive location pages.
* Preserve accessibility and responsive behavior.
* Use internal links where they genuinely help visitors.
* Avoid meta keywords.
* Avoid guarantees about rankings, security, recovery times or business results.

## Start now

Open:

```text
tasks/00-github-actions-deployment.md
```

Give its Architect prompt to the VS Code Architect agent.

The Architect agent must only inspect the repository and produce a deployment architecture note. It must not create workflows, connect to the server, create secrets, delete files, or deploy the website during the architecture pass.

After the architecture note is reviewed and approved, create a separate, narrower Implementer prompt for the deployment workflow.
