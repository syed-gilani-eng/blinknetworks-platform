# Phase 7 — Launch verification and indexing setup

## Outcome

The production deployment is crawlable, measurable, and ready for indexing requests.

## Agent prompt

```text
Act as the launch verifier for BlinkNetworks SEO. Do not broaden production code unless a failing check requires a small, separately reviewed fix.

From the final merged commit, run the full install, build, type/lint/test suite, and inspect generated output. After an authorized deployment, verify production HTTP status, redirects, canonical tags, titles, descriptions, robots directives, robots.txt, sitemap files, structured data, Open Graph images, mobile rendering, and key internal links for all primary, service, and article routes.

Check that HTTP redirects to HTTPS, the preferred hostname is consistent, only one trailing-slash form resolves as canonical, and no staging/localhost URLs or legacy strings appear. Run Lighthouse or PageSpeed checks for representative home, service, and article pages and record results as a baseline, not a ranking guarantee.

Produce a launch report with pass/fail evidence and a short owner checklist for:
- Google Search Console domain verification
- Sitemap submission
- URL inspection for the homepage, one service page, and one article
- Bing Webmaster Tools setup/import
- Google Business Profile review using consistent public business details
- A 30-day review of indexing, queries, page experience, and crawl issues

Never request indexing for placeholder, duplicate, draft, or broken pages.
```

## Production checklist

- [ ] Current pages return expected 200 responses.
- [ ] Legacy URLs either serve current content or redirect intentionally.
- [ ] HTTP and non-preferred-host variants redirect once to the canonical host.
- [ ] `robots.txt` is accessible and references the live sitemap.
- [ ] Sitemap contains canonical, indexable URLs only.
- [ ] No draft article URLs are public.
- [ ] JSON-LD parses and matches visible content.
- [ ] Social images resolve with absolute HTTPS URLs.
- [ ] Search Console and Bing ownership are verified by the business owner.
- [ ] Baseline metrics and the review date are recorded.

