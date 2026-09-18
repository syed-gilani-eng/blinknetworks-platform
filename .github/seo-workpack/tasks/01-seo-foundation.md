# Phase 1 — SEO foundation

## Outcome

Every indexable page has reliable metadata, one canonical URL, and inclusion in a generated sitemap. Crawlers can retrieve a valid robots file.

## Architect prompt

```text
You are the Architect for Phase 1 of the BlinkNetworks Astro website. Phase 0 is merged.

Inspect the current Astro version, configuration, layouts, page components, routing/trailing-slash policy, image handling, and package scripts. Do not edit production code yet.

Design the smallest reusable SEO interface for the site's main layout. It should support title, description, canonical path/URL, social image, Open Graph type, optional publication dates, and noindex. Determine whether @astrojs/sitemap is already present and confirm the sitemap filename the installed version generates.

Use https://blinknetworks.com as the production site origin. Define how canonical URLs are built without creating slash or host duplicates. Specify exact files, prop types/defaults, migration steps for all existing public pages, tests, and generated-output checks.

Do not add schema in this phase. Do not use meta keywords. Do not assume package APIs without checking the installed version.
```

## Implementer prompt

```text
Implement the approved Phase 1 design on branch feat/seo-foundation.

Add or update the reusable Astro SEO/layout interface, unique metadata for all existing public pages, canonical URLs, Open Graph tags, Twitter/X card tags, the Astro site origin, sitemap integration, and public/robots.txt. Preserve the site's chosen trailing-slash convention. Use one default social image only if an appropriate real asset exists; otherwise leave a clearly documented follow-up rather than inventing one.

Suggested initial page metadata:
- Home title: Managed IT Services Toronto and GTA | BlinkNetworks
- Services title: Managed IT Services for Toronto Businesses | BlinkNetworks
- Solutions title: Business IT Solutions Toronto and GTA | BlinkNetworks
- Insights title: IT Insights for Growing GTA Businesses | BlinkNetworks
- About title: About BlinkNetworks | Canadian-Owned Toronto IT Partner
- Contact title: Contact BlinkNetworks | Managed IT Services Toronto

Suggested home description: Canadian-owned managed IT services for growing businesses across Toronto and the GTA. Get practical support for Microsoft 365, cybersecurity, cloud, networks and business continuity.

Write unique, accurate descriptions for the other pages based only on their actual content. Do not add meta keywords.

Run build/check scripts and inspect generated HTML for each primary route. Confirm exactly one title, description, canonical, robots directive, Open Graph URL/title/description, and Twitter card set per page. Confirm robots.txt and the generated sitemap are present and contain production URLs.
```

## Acceptance criteria

- All public pages have unique, accurate title and description values.
- Canonicals consistently use `https://blinknetworks.com` and the chosen slash convention.
- `robots.txt` references the actual generated sitemap location.
- Draft, preview, admin, or error pages are excluded or noindexed where applicable.
- Production output contains no localhost URLs.

