# Phase 7 — Launch Verification, Analytics, and Indexing Setup

## Outcome

The final production deployment is crawlable, measurable, technically sound, and ready for search-engine indexing requests.

Google Analytics 4 is installed once across the production site, page views are being received by the correct GA4 property, and the site’s privacy disclosure accurately describes its use of analytics.

## Agent Prompt

Act as the launch verifier for BlinkNetworks SEO.

This phase is primarily a verification and reporting pass. Do not broaden production code unless a failing check requires a small, separately reviewed fix.

The approved exception is the minimal implementation required to install and validate Google Analytics 4 as described below.

Work only from the final merged commit on the `main` branch. Do not deploy, submit indexing requests, or change external business accounts unless explicitly authorized by the business owner.

### 1. Repository and Build Verification

Before testing production:

1. Confirm the current branch and commit.
2. Confirm the working tree is clean.
3. Install dependencies using the repository’s lockfile and approved package-manager command.
4. Run the complete:
   - Production build
   - Type checking
   - Linting
   - Automated test suite
5. Inspect the generated production output.
6. Record the tested commit SHA and all commands and results in the launch report.

Do not silently repair unrelated warnings or failures. Record them and determine whether they block launch.

### 2. Google Analytics 4 Implementation

Install Google Analytics 4 across all production pages using measurement ID:

`G-8MCPFCT1D0`

Google provided the following tag:

```html
<!-- Google tag (gtag.js) -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-8MCPFCT1D0"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());

  gtag('config', 'G-8MCPFCT1D0');
</script>
```

Verification requirements:

- Confirm the GA4 container appears once in the shared Astro layout used by all public pages.
- Confirm it is inserted in the global head template, not inside a component rendered only on a single route.
- Confirm the tag loads from the production origin only and does not load multiple copies due to repeating layout elements or duplicate script tags.
- Confirm the script is valid JavaScript for the browser and valid Astro markup.
- Confirm there is no Google Tag Manager snippet, no alternative analytics script, and no duplicate analytics installation.
- Confirm the tag does not include localhost, staging, draft, test, or placeholder values in the generated production HTML.
- Confirm no personally identifiable information is transmitted as part of the GA4 implementation.
- Confirm the privacy-policy wording is consistent with the actual behavior of the analytics code and does not claim unsupported legal guarantees.
- Confirm the generated HTML still contains the expected canonical, robots, and social metadata after the GA4 snippet is added.

Do not modify application code unless a verification failure requires a small, separately reviewed fix approved by the reviewer. Do not claim production verification has already occurred unless it is recorded with actual command output and timestamps in the launch report.

### 3. Repository and Build Verification Requirements

Before signing off on launch readiness, perform the following checklist from the working tree and the repository state that is under review:

1. Confirm the current branch and commit SHA.
2. Confirm the working tree state and confirm only the approved files are changed for this phase.
3. Confirm that no temporary audit files, scratch scripts, or debug artifacts remain.
4. Install dependencies using the repository lockfile and the approved package-manager command.
5. Run the complete production build.
6. Run the project type check.
7. Run the project linting step.
8. Run the automated test suite.
9. Record all commands executed and their results in the launch report.
10. Inspect generated production output under the built app output directory.
11. Record any warnings or failures and determine whether they are launch-blocking or informational only.
12. Confirm no uncommitted or stray files remain that were not intentionally part of the task.

Do not silently repair unrelated warnings or failures. Report them explicitly and determine whether they block launch. Do not claim a successful build without fresh command output.

### 4. Production Route and Redirect Verification

Verify the generated production output for the critical launch pages and that all public URLs resolve to the intended production origin.

Required checks:

- Confirm the homepage loads from the real production URL pattern and does not include localhost or a development host.
- Confirm the key public routes render successfully, including the homepage, privacy page, contact page, and any core service or content routes relevant to launch.
- Confirm the canonical URLs match the intended path structure and are not missing a trailing slash where required by the site configuration.
- Confirm redirects are correct and do not create loops or unexpected alternate destinations.
- Confirm the site does not emit broken internal links or missing redirect targets.
- Confirm public pages include no placeholder content or draft route names.
- Confirm no route renders a dev-only message, staging-only banner, or test-only fallback text.

Document any redirect or route problem with the exact route and the observed result in the launch report. Resolve only small, reviewed issues if required by the task scope; otherwise, record them as blockers.

### 5. Canonical, robots.txt, and Sitemap Verification

Verify the production metadata remains aligned with the domain and the live site configuration.

Required checks:

- Confirm `Astro.site` is configured to `https://blinknetworks.com`.
- Confirm the canonical URL for public pages resolves to `https://blinknetworks.com/...` and not to localhost or a non-production origin.
- Confirm `robots.txt` continues to reference the production domain and uses the live sitemap URL.
- Confirm the sitemap references the production domain and not a staging, test, or development URL.
- Confirm the site does not include private or non-public routes in public indexing metadata.
- Confirm the generated output is consistent with the deployment configuration and no placeholder URLs remain.
- Confirm the sitemap entry list and `robots.txt` values are consistent with the production deployment.

If there are any non-production host references in metadata, record the exact offending values and treat them as launch-blocking until corrected.

### 6. Structured-Data and Social-Image Verification

Validate the schema, social metadata, and page-level tags emitted in the generated HTML.

Required checks:

- Confirm `WebSite` and `WebPage` structured data remain valid and are generated only for the intended pages.
- Confirm the JSON-LD payload is serialized safely and does not break the surrounding HTML.
- Confirm Open Graph and Twitter metadata remain present and correctly resolve to production URLs.
- Confirm social images resolve to valid production image paths and are not broken, empty, or localhost-based.
- Confirm the `og:url`, canonical URL, and title text remain consistent for the page being rendered.
- Confirm social-image metadata does not expose an internal path, a staging host, or a placeholder asset.
- Confirm there are no malformed `meta` tags or duplicate social metadata entries.

If a page uses article schema, check that the article metadata is correct and matches the static route and content. Record any malformed structured-data or social metadata as a blocker until fixed.

### 7. Mobile and Lighthouse Baseline Checks

Perform lightweight validation checks for mobile readiness and baseline quality before launch sign-off.

Required checks:

- Confirm the page is mobile-responsive and the viewport and layout remain intact on small screens.
- Confirm there are no obvious mobile layout regressions caused by the GA4 or privacy-page work.
- Confirm page load and metadata still function normally in the rendered production build.
- Run a Lighthouse or equivalent baseline check where an approved workflow exists for the project.
- Record the outcome and any warnings or regressions that should be addressed before launch.
- Note whether the resulting scores are acceptable for the current launch phase or if additional remediation is required.

Do not treat a Lighthouse pass/fail as evidence of production readiness without also validating the route, metadata, and GA4 implementation manually.

### 8. Google Search Console Owner Checklist

This checklist is for the owner or authorized administrator to complete. The verifier may confirm configuration, but the owner must complete the actual account actions.

Required owner actions:

- Verify domain ownership for the production property in Google Search Console.
- Confirm the site is added as the correct property for `https://blinknetworks.com`.
- Confirm the sitemap is submitted only if explicitly authorized by the business owner.
- Verify the production pages appear under the correct property and not under a staging or test property.
- Review indexing coverage and URL inspection results for the production domain.
- Confirm no unauthorized URL submissions are made during this phase.
- Record any warnings or errors and determine whether they are acceptable for launch or require action.

Do not submit URLs for indexing, request reindexing, or change the property configuration without explicit business authorization.

### 9. Bing Webmaster Tools Owner Checklist

This checklist is for the owner or authorized administrator to complete. The verifier may review the implementation but must not make external-account changes without authorization.

Required owner actions:

- Verify the production domain in Bing Webmaster Tools.
- Confirm the site is associated with the correct live property.
- Confirm the sitemap is submitted only if explicitly authorized by the business owner.
- Review indexing and crawl diagnostics for the live production domain.
- Confirm no staging or placeholder domains are incorrectly configured in the account.
- Record the status of crawl and indexing health before and after launch review.

Do not change external account settings or submit URLs for indexing without explicit permission from the business owner.

### 10. Google Business Profile Owner Checklist

This checklist is for the business owner or authorized profile manager to complete. The verifier must not change external business profiles.

Required owner actions:

- Confirm the business profile is for the correct entity and location data.
- Verify the business name, website URL, and category information are correct.
- Confirm the profile points to the live production website and not a staging or placeholder site.
- Review any profile posts, reviews, or updates for accuracy before launch completion.
- Confirm no changes are made to the profile without explicit authorization.

Do not modify or republish external business profile settings as part of this task unless the owner explicitly requests it and the required workflow is approved.

### 11. GA4 Realtime or DebugView Owner Verification

This step is for validation that analytics is recording traffic in the live property after deployment.

Requirements:

- Confirm the GA4 property is the correct one for the business and matches the approved measurement ID `G-8MCPFCT1D0`.
- Confirm the site is sending page_view events from the live production domain and not from a dev or staging environment.
- Use Realtime or DebugView only after the production deployment and only if the owner has authorized this verification step.
- Confirm the page_view events originate from the expected route(s) and are not duplicated by repeated script loads.
- Document the verification method, the page tested, and the observed result in the launch report.
- If no event is visible, record the gap and whether it needs a fast remediation or a delayed recheck.

Do not add or modify analytics tooling beyond the approved GA4 implementation. Do not claim page_view data is present without actual evidence from the analytics tool.

### 12. 30-Day Indexing and Analytics Review

After launch, schedule a follow-up review period to evaluate indexing progress, traffic quality, and analytics signal stability.

Required review steps:

- Review indexing coverage and discovered URL results after the site has been live for approximately 30 days.
- Review GA4 acquisition, page_view, and engagement metrics to confirm expected traffic patterns.
- Confirm pages continue to render correctly in production and that no severe crawl or analytics regressions have appeared.
- Check for any unexpected spikes, drops, or zero-data anomalies and document them.
- Confirm no URLs or pages are excluded from indexing unintentionally.
- Confirm the privacy policy remains aligned with the actual analytics implementation during the review period.

This is a review stage, not an authorization to modify production code or external account features without explicit approval.

### 13. Launch-Report Requirements

The launch report must be maintained as a factual verification record. It should contain:

- The tested branch and the commit SHA used for verification.
- The exact commands run for dependency installation, build, lint, type checking, and tests.
- The results of each command, including warnings or failures.
- The generated output locations inspected.
- The production routes checked and the results of the route verification.
- The GA4 implementation verification, including the measurement ID and the evidence used to confirm it was installed once.
- Canonical, robots, sitemap, JSON-LD, and social metadata findings.
- Any mobile or Lighthouse observations.
- Any Search Console, Bing Webmaster Tools, or Google Business Profile owner actions that were completed or deferred.
- Any blocker or risk discovered and whether it prevented launch.
- The final approval or rejection decision and the reason for that decision.

Do not insert fabricated results or claim checks happened if the command output or owner confirmation is not present.

### 14. Complete Production Checklist

The production launch should be considered complete only after all items below are either verified or intentionally deferred with documented owner approval and a clear risk statement.

- [ ] Repo state and branch confirmed.
- [ ] Working tree clean or only intentionally approved changes remain.
- [ ] Dependencies installed from lockfile.
- [ ] Production build passes.
- [ ] Type checking passes.
- [ ] Linting passes or any exceptions are documented.
- [ ] Automated tests pass or are documented as non-blocking with reason.
- [ ] Generated HTML includes the GA4 script exactly once in the shared layout.
- [ ] GA4 measurement ID is `G-8MCPFCT1D0`.
- [ ] No duplicate analytics or GTM script is present.
- [ ] Canonical tags are correct for production.
- [ ] `robots.txt` and sitemap point to `https://blinknetworks.com`.
- [ ] Structured data and social metadata are valid.
- [ ] Privacy page accurately reflects the implementation and avoids unsupported legal claims.
- [ ] No localhost, staging, test, or placeholder values remain in public output.
- [ ] Route checks pass for launch-critical pages.
- [ ] Redirects and metadata are verified.
- [ ] Mobile layout and Lighthouse baseline checks are recorded.
- [ ] Search Console owner steps are complete or explicitly deferred with approval.
- [ ] Bing Webmaster Tools owner steps are complete or explicitly deferred with approval.
- [ ] Google Business Profile owner steps are complete or explicitly deferred with approval.
- [ ] GA4 real-time or DebugView verification is complete or explicitly deferred with approval.
- [ ] Launch report is complete and factual.
- [ ] No temporary or stray audit files remain.

### 15. Guardrails and Authorization Rules

The following are non-negotiable guardrails for this phase:

- Do not deploy without explicit approval from the business owner or the authorized release process.
- Do not submit URLs for indexing or request reindexing without explicit authorization.
- Do not change external business account settings, Google Search Console settings, Bing Webmaster Tools configuration, or Google Business Profile configuration without business approval.
- Do not add analytics tooling beyond the approved GA4 installation.
- Do not modify the privacy-policy language or analytics code to claim legal compliance or guarantee outcomes that are not supported by the implementation.
- Do not leave behind temporary scripts, test files, or audit artifacts.
- Do not claim launch is complete without recording the actual verification evidence.

### Completion Gate

This task is complete only when:

1. All required verification steps are performed and documented.
2. All blockers are resolved or explicitly recorded with a reason.
3. The launch report is complete and factual.
4. The owner has authorized any external-account actions that are required.
5. No unauthorized deployment, indexing submission, or external-account change has occurred.

This file is a task specification, not a launch report. It describes the verification work, the required checks, and the guardrails for launch readiness. It must not contain fabricated launch results or unverified claims.