# Phase 6 — Internal linking and shared integration

## Outcome

Visitors and crawlers can move naturally between the homepage, service pages, Insights hub, and relevant articles.

## Agent prompt

```text
Implement Phase 6 on branch feat/seo-internal-linking after service pages and all four articles are merged.

Update shared navigation, footer, homepage service cards, homepage Insights section, service-page related content, and article related-service links. Replace broad /services/ links with the most relevant dedicated service route while keeping the main Services hub available. Add the latest or featured Insights to the homepage using collection data rather than duplicated hard-coded article records.

Map articles naturally:
- Break-fix -> Managed IT Support
- Microsoft 365 backup -> Backup & Business Continuity and Microsoft 365
- Cybersecurity checklist -> Cybersecurity
- Lost laptop -> Microsoft 365 & Endpoint Management and Cybersecurity

Keep anchor text descriptive and natural. Avoid keyword-heavy repeated footer links. Ensure there are no orphan service or article pages. Run the build plus an internal-link crawl over generated output if the repository has or can safely add a lightweight check.
```

## Acceptance criteria

- Every service and article page is reachable through normal HTML links.
- No internal link points to a missing page, localhost, preview host, or inconsistent canonical variant.
- Homepage article cards are sourced from the content collection.
- Shared navigation remains usable on keyboard and mobile.

