# Phase 2 — Structured data

## Outcome

Search engines receive valid JSON-LD describing only facts the site can substantiate.

## Agent prompt

```text
Implement Phase 2 on branch feat/seo-structured-data after first inspecting the merged SEO foundation.

Create a typed, reusable JSON-LD rendering approach appropriate to this Astro codebase. Add:
- Organization data globally.
- WebSite data on the homepage.
- BreadcrumbList data on internal pages.
- A documented interface for Service and Article data that later phases can use.

Use only facts already confirmed in the repository or explicitly provided by the owner. Do not invent a street address, geographic coordinates, phone number, employees, opening hours, reviews, ratings, prices, social profiles, founding date, certifications, or 24/7 availability. Do not add LocalBusiness unless accurate public business details have been confirmed.

Prevent JSON injection and ensure each script contains valid JSON. Do not duplicate entities unnecessarily across components. Run the build, inspect rendered JSON-LD, parse it as JSON, and document URLs that should be tested with Google's Rich Results Test after deployment.
```

## Acceptance criteria

- Every JSON-LD block parses successfully.
- URLs and entity IDs use the canonical production origin.
- Breadcrumb labels and URLs match visible navigation.
- Unsupported properties and fabricated claims are absent.

