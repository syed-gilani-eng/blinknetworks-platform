# Phase 5 — Publish four anchor Insights articles

## Routes and asset mapping

| Article | Slug | Image |
| --- | --- | --- |
| Five Signs Your Business Has Outgrown Break-Fix IT Support | `business-outgrown-break-fix-it-support` | `break-fix-to-managed-it.png` |
| Does Microsoft 365 Back Up Everything? | `does-microsoft-365-back-up-everything` | `microsoft-365-backup.png` |
| The Small-Business Cybersecurity Checklist | `small-business-cybersecurity-checklist` | `small-business-cybersecurity-checklist.png` |
| What Should Happen When an Employee Loses a Laptop? | `employee-loses-laptop` | `lost-employee-laptop-response.png` |

## Agent prompt

```text
Implement Phase 5 on branch content/publish-anchor-insights after Phase 4 is merged.

Use content/articles.md as the approved article source and assets/insights/ for the four hero images. Split the source into four collection entries without silently rewriting substantive claims. Convert inline source links into the project's Markdown format and retain authoritative citations. Create accurate descriptions, image alt text, categories, reading-time presentation if the template supports it, and Article metadata. Use BlinkNetworks as author or publisher unless the owner has confirmed a named author.

Set honest publication dates at launch; do not backdate. Mark the break-fix article as featured. Optimize or convert images through the project's supported Astro image pipeline while preserving the source files where appropriate. Do not place text inside the images.

Add related-article relationships only where they are genuinely useful. Run the build, inspect all four generated routes, verify every external citation and internal link, and check social-preview output.
```

## Acceptance criteria

- Four article routes build with correct title, description, canonical, image, dates, schema, and breadcrumbs.
- Article copy is complete and citations remain intact.
- The break-fix article is featured; the other three appear in the latest grid.
- Images are responsive, appropriately compressed by the build, and have meaningful alt text.

