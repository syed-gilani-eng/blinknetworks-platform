# Phase 3 — Service landing pages

## Outcome

Six useful pages replace the current pattern of sending every service link to one broad page.

## Required routes

- `/services/managed-it-support/`
- `/services/microsoft-365-endpoint-management/`
- `/services/cybersecurity/`
- `/services/cloud-infrastructure/`
- `/services/network-services/`
- `/services/backup-business-continuity/`

## Agent prompt

```text
Implement Phase 3 on branch feat/service-landing-pages. Phase 2 is merged. Do not edit shared navigation, the homepage, the global layout, astro.config.*, or package files; Phase 6 owns those integrations.

First inspect current service copy and components. Create six distinct, substantive landing pages using existing design primitives. Each page needs a unique title, description, H1, plain-language explanation, business outcomes, what BlinkNetworks can help with, a sensible CTA, breadcrumb data, and Service JSON-LD using the merged schema interface.

Write for growing businesses across Toronto and the GTA, but avoid repetitive keyword stuffing and thin city pages. Do not promise response times, 24/7 support, compliance, certifications, guaranteed security, pricing, or capabilities not supported by approved company copy. Reuse shared sections through components when sensible, while keeping each page's main content genuinely distinct.

Add contextual placeholders or a typed interface for related Insights links, but do not hard-code links to unpublished articles. Run build/check scripts and inspect every generated page at mobile and desktop widths.
```

## Acceptance criteria

- All six routes build and have unique metadata and H1s.
- Each route is useful on its own and is not a near-duplicate doorway page.
- Service schema matches visible page content.
- No broken internal links or unsupported claims are introduced.

