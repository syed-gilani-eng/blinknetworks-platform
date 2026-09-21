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