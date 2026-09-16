# BlinkNetworks Privacy Policy

## Status

This document records the **approved, implemented** Privacy Policy page.
See [docs/design/design-system.md](./design-system.md) for shared tokens,
header/footer and accessibility rules, and
[docs/design/contact.md](./contact.md) for the Contact form this policy
describes.

## Purpose and Route

Route: `/privacy/` (`app/src/pages/privacy.astro`)

A single, plain-language legal page explaining how BlinkNetworks handles
personal information submitted through the website, primarily via the
Contact form. Linked from the Footer's Company column and from the Contact
form's pre-submission disclosure.

## Layout

Reuses `BaseLayout.astro`, `Header.astro`, and `Footer.astro` unchanged (no
props, markup, or shared styles were modified beyond the Footer's new
"Privacy Policy" link and the Contact form's disclosure text). The page
itself is a single `.privacy` component with two inner blocks:

- `.privacy__header` — eyebrow "LEGAL", the page's only `<h1>`
  ("Privacy Policy"), and a "Last updated: September 16, 2026" line.
- `.privacy__content` — sequential `<h2>` sections, matching the article
  content pattern used by `app/src/pages/insights/[slug].astro` (70ch
  reading width, 1.7 line-height, underlined links).

## Section Outline

1. Introduction
2. Information You Submit Through Our Contact Form
3. Technical Information
4. How We Use Information
5. Service Provider and Processing Outside Canada
6. Disclosure of Information
7. Retention
8. Safeguards
9. Access, Correction and Deletion Requests
10. Cookies and Analytics
11. Third-Party Links
12. Changes to This Policy
13. Contact Us

## Content-Integrity Restrictions

- No claim of legal certification, audit, or guaranteed compliance with
  any law. The Introduction states the policy is *intended to reflect*
  principles found in Canadian privacy law (PIPEDA is named), not that
  BlinkNetworks is certified or audited against it.
- Contact-form fields listed match the actual form exactly: `name`
  (required), `email` (required), `organization` (optional), `phone`
  (optional), the `reason` category (required), and `message` (required).
  The `_gotcha` honeypot is anti-spam infrastructure, not user-submitted
  personal information, and is intentionally not described as a collected
  field.
- No fixed data-retention period is invented; retention is described in
  terms of purpose, business-record, dispute-resolution, security, and
  legal-obligation needs.
- No specific security certifications or controls are claimed beyond
  "reasonable administrative, technical and organizational safeguards,"
  and the page explicitly states no transmission or storage method can be
  guaranteed completely secure.
- Cookies/analytics section states narrowly that BlinkNetworks does not
  currently use advertising or analytics cookies — it does not claim the
  hosting infrastructure or Formspree collect no technical information.
- Formspree is explicitly described as an independent third-party
  processor, not owned or controlled by BlinkNetworks; the Formspree
  Privacy Policy is linked with `target="_blank"` and
  `rel="noopener noreferrer"`, with new-tab behavior stated in the link
  text.
- Only `hello@blinknetworks.com`, `(905) 703-7895`, and "Etobicoke,
  Ontario" are published; no street address is included.
- No response-time guarantee, 24/7 claim, or unsupported statistic
  appears anywhere on the page.

## Accessibility Decisions

- Exactly one `<h1>` ("Privacy Policy"); all section headings are `<h2>`,
  giving a sequential, non-skipped heading outline.
- `<main>` (from `BaseLayout.astro`) remains the page's single landmark
  wrapper; no additional landmarks were needed for a single-column legal
  page.
- Body copy is constrained to a 70ch measure for readable line length,
  matching the existing Insights article convention.
- All links (Formspree, email, phone) are real anchors with meaningful,
  non-generic link text and an underline (not color alone), satisfying
  "understandable without relying on colour."
- Focus states rely on the site-wide `:focus-visible` outline from
  `global.css`; no new focus treatment was introduced.
- No horizontal scrolling: the page reuses the existing container/padding
  tokens used by every other route.

## Testing Performed

- Editor diagnostics found no errors in the new or modified source files.
- The production build completed successfully with `/privacy/` included,
  bringing the total to 11 static pages.
- Verified in the build output: exactly one `<h1>` on `/privacy/`; the
  Formspree link carries `target="_blank"` and
  `rel="noopener noreferrer"`; no `noindex` meta was introduced.
- Manual assistive-technology and cross-browser review were not performed
  as part of this implementation session.
