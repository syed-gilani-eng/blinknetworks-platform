# BlinkNetworks Contact Page

## Status
This document records the **approved, implemented** Contact page. See
[docs/design/design-system.md](./design-system.md) for the shared tokens,
header, and card/motion/accessibility rules referenced throughout, and
[ADR-0003](../adr/0003-use-formspree-for-contact-form.md) for the Formspree
integration decision.

## Purpose and Route

Route: `/contact/` (`app/src/pages/contact/index.astro`)

The page is the site's conversion destination: every other page's `Header`
CTA, `FinalCTA`, and in-page CTAs already link here. Unlike other pages,
this page does **not** end with a `FinalCTA` — the inquiry form is already
the primary action, and adding another "book a consultation" CTA after the
form would loop the visitor back to the top of the page they're already on.

## Approved Section Order

1. Header (`Header.astro`, shared, unchanged)
2. Contact Hero (`ContactHero.astro`)
3. Contact form + "What to expect" panel (`ContactMain.astro`)
4. "How can we help?" reason cards (`ContactHelp.astro`)
5. Reassurance band (`ContactReassurance.astro`)
6. Footer (`Footer.astro`, shared, unchanged)

## Components Created

- `app/src/components/ContactHero.astro`
- `app/src/components/ContactMain.astro`
- `app/src/components/ContactHelp.astro`
- `app/src/components/ContactReassurance.astro`

## Shared Components Reused Unchanged

`Header.astro`, `Footer.astro`, `BaseLayout.astro`, `global.css`, and
`tokens.css` are reused exactly as they exist today — no props, markup, or
styles were added or modified. `FinalCTA.astro` is intentionally **not**
used on this page (see "Purpose and Route" above).

## Reassurance Band: Contact-Specific, Not a Shared Component

No shared "reassurance"/value-band component exists in the codebase; every
other page (`ServicesWhyBlink`, `SolutionsWhyBlink`, `AboutValues`) already
has its own page-specific value-band component. `ContactReassurance.astro`
follows this same established per-page pattern rather than introducing a
new shared component. Unlike those three-column icon/card bands, it is a
single restrained centered paragraph (no icons, no card grid), matching the
approved mockup's minimal closing tone.

## Exact Final Copy

**Hero** — eyebrow "CONTACT BLINKNETWORKS"; the page's only `<h1>`,
"Let's talk about what your business needs"; lead "BlinkNetworks is a
Canadian-owned technology partner supporting organizations across Toronto
and the GTA with practical IT, cloud, security and infrastructure
guidance." No hero CTA — the form directly below is the primary action.

**Contact form intro** — H2 "Start a conversation"; lead "Share a few
details and we'll have the right conversation about your technology
needs."

**What to expect** — eyebrow "WHAT TO EXPECT"; H2 "A clear first
conversation."; three steps: "Tell us what's happening" ("We'll listen to
what's happening in your business and technology environment."), "We
review your needs" ("We'll help identify priorities, risks and the
outcomes that matter."), "We discuss practical next steps" ("We'll
recommend a practical way forward, without pressure or assumptions.").
Deliberately makes no response-time, free-assessment, guaranteed-outcome,
or availability claim.

**How can we help?** — eyebrow "COMMON REASONS TO REACH OUT"; H2 "How can
we help?"; six cards using the exact six Services-page categories (see
"Reason-Card Terminology" below), each framed as a reason to contact rather
than a capability list.

**Reassurance band** — eyebrow "A PRACTICAL START"; H2 "You don't need to
have everything figured out."; lead "Bring us the challenge. We'll have a
clear conversation, offer practical recommendations, and leave the next
step up to you—no pressure."

## Reason-Card Terminology

The Contact page uses the same six inquiry categories as the Services page
to maintain consistent service terminology: Managed IT & Help Desk,
Microsoft 365 & Endpoint Management, Cybersecurity, Cloud & Infrastructure,
Network Services, and Backup & Business Continuity. `ContactHelp.astro`
reuses the same category names and icons as `ServicesList.astro`. The
"What can we help with?" select field uses the same six options plus a
seventh "General inquiry / not sure" catch-all.

## Form Fields and Validation

| Field | `id`/`name` | Type | Required | `autocomplete` |
|---|---|---|---|---|
| Full name | `name` | text | yes | `name` |
| Work email | `email` | email | yes | `email` |
| Company or organization | `organization` | text | no | `organization` |
| Phone number | `phone` | tel | no | `tel` |
| What can we help with? | `reason` | select | yes | — |
| Message | `message` | textarea | yes | — |

Every field has a persistent visible `<label>`, a unique `id`, and (for
required fields) a "(required)" label suffix rather than an asterisk +
legend. Native `required` conveys the required state programmatically;
`aria-required` was deliberately omitted as redundant ARIA. Validation is
handled by `@formspree/ajax`: each field has a matching
`<span data-fs-error="{field}">` associated via `aria-describedby`, shown
only when that field has a server-reported error, and `aria-invalid="true"`
is set automatically on the invalid `data-fs-field` input.

Name/Email and Organization/Phone share a row at ≥640px
(`.contact-form__row`, two-column grid); the select and textarea are always
full width. All fields are a single column below 640px.

Submit button: "Send My Message", `min-height: 44px`, Network Cyan
background / Blink Navy text (existing primary-CTA recipe), disabled via
`data-fs-submit-btn` during submission, visible `:focus-visible` state.

## Formspree Integration

- Endpoint / form ID: `https://formspree.io/f/xeaojrng` (`xeaojrng`) — public
  configuration, not a secret, committed directly as the form's `action`.
- Native fallback: `<form action="..." method="POST">` works with zero
  JavaScript.
- Enhancement: `ContactMain.astro` has a colocated `<script>` (the same
  "feature-detect, then enhance" shape as `Header.astro`'s nav-toggle
  script) that imports `initForm` from `@formspree/ajax/dist/index.mjs`
  and calls it with `{ formElement, formId: "xeaojrng", useDefaultStyles:
  false }` — `useDefaultStyles: false` so the form uses BlinkNetworks' own
  design tokens instead of the library's injected default CSS.
- The form uses Formspree's official `initForm()` API.
- Astro/Vite resolves the package's `browser` field to a non-module
  global build (`dist/global.js`) when using the bare `@formspree/ajax`
  import; that build does not export `initForm`. The implementation
  therefore imports the pinned ESM build from
  `@formspree/ajax/dist/index.mjs`, which does export it. This subpath
  import is a project-specific compatibility measure, not Formspree's
  preferred public import.
- `app/src/types/formspree-ajax.d.ts` re-exports the package's real types
  for that ESM subpath, so the type checker resolves the same types as a
  bare `@formspree/ajax` import would.
- No custom `fetch()` submission code was written; `@formspree/ajax`'s
  declarative `data-fs-*` attributes and `initForm()` handle submission,
  field errors, success state, and submit-button disabling.
- Astro's `output: "static"` is unchanged; no server adapter, API route,
  database, or email credential was introduced.

## Success and Error Behavior

A single wrapping `<div aria-live="polite" aria-atomic="true">` contains
both the `[data-fs-success]` and `[data-fs-error]` (form-level) elements,
so only one status message is ever announced at a time — avoiding
duplicate/disruptive announcements. Success copy ("Thanks for reaching
out. Your message has been received.") confirms receipt without promising
a response time. Form-level failure copy ("We couldn't send your message.
Please check your connection and try again.") invites retry without
inventing an alternate contact method. Field-level errors are not
`aria-live` (to avoid announcing every invalid field at once); they rely on
`aria-invalid` + `aria-describedby` so assistive technology encounters them
when reaching the field.

## Spam Protection and Privacy

- Honeypot: an unlabeled `_gotcha` text input, hidden with
  `.contact-form__honeypot { display: none; }` and removed from the tab
  order with `tabindex="-1"`.
- Privacy notice: a plain, non-interactive paragraph directly above the
  submit button ("Information submitted through this form will be used
  only to respond to your inquiry. Please do not include passwords or
  other sensitive information.") — not a required checkbox, and does not
  claim a Privacy Policy route exists.
- No marketing-consent checkbox; no newsletter subscription; no sensitive
  data is collected.
- CAPTCHA was not added initially, per approved direction; rely on
  Formspree's built-in filtering plus the honeypot.
- **Recommendation for later:** enable Formspree's production-domain
  restriction only once the site has a real deployed domain. Enabling it
  during local development would block `localhost` submissions entirely.

## Icon Mapping

All icons reused from `app/public/images/homepage/icons/` — no new icon
assets were created.

| Section | Item | Icon |
|---|---|---|
| What to expect | Tell us what's happening | `process-assess.svg` |
| What to expect | We review your needs | `process-plan.svg` |
| What to expect | We discuss practical next steps | `process-modernize.svg` |
| How can we help? | Managed IT & Help Desk | `managed-it-support.svg` |
| How can we help? | Microsoft 365 & Endpoint Management | `productivity-collaboration.svg` |
| How can we help? | Cybersecurity | `cybersecurity.svg` |
| How can we help? | Cloud & Infrastructure | `cloud-infrastructure.svg` |
| How can we help? | Network Services | `network-services.svg` |
| How can we help? | Backup & Business Continuity | `business-continuity.svg` |

## Hero Asset

`app/public/images/contact/contact-hero.webp`, intrinsic size 1536×1024,
served at `/images/contact/contact-hero.webp`. Rendered with
`object-fit: contain` and no surrounding card/panel (matching the
`SolutionsHero` transparent-image convention). `alt=""` (decorative — the
adjacent eyebrow/heading/lead communicate the section meaning),
`fetchpriority="high"`, `decoding="async"`, **no** `loading="lazy"` — it is
above the fold.

## Responsive Behavior

Existing breakpoints: mobile `<640px`, tablet `640–959px`, desktop
`≥960px`.

- **Hero** — two-column grid (content left, image right, vertically
  centered) at ≥960px; single stacked column below 960px.
- **Contact main** — two-column grid (form ~58%, expectation panel ~42%)
  at ≥960px; single column, form first then panel, below 960px.
- **Form field rows** — Name/Email and Organization/Phone share a row at
  ≥640px; single column below 640px. The select and textarea are always
  full width.
- **How can we help?** — 3 columns at ≥960px, 2 columns at 640–959px, 1
  column below 640px.
- **Reassurance band** — single centered column at all widths (no grid
  needed for a one-paragraph band).

## Accessibility Decisions

- Exactly one `<h1>` (Contact Hero). `ContactMain.astro` contains two
  sibling `<h2>`s ("Start a conversation" for the form, "A clear first
  conversation." for the expectation panel) since they are independent,
  equally weighted content blocks, not nested headings.
- No `<fieldset>/<legend>` — no field in this form is a grouped
  radio/checkbox set, so a fieldset would add unnecessary markup weight.
- Every input/select/textarea has a visible, persistent `<label>`, unique
  `id`, and correct `autocomplete` token where applicable.
- Required state is conveyed both programmatically (native `required`) and
  visually (a "(required)"/"(optional)" label suffix on every field, not
  just required ones, avoiding an asterisk-plus-legend pattern).
- Minimum 44px touch targets on all form controls and the submit button.
- Network Cyan `:focus-visible` override is scoped to the two dark
  sections (`ContactHero`, `ContactReassurance`); the form itself sits on a
  cloud/white surface and uses the site's default Blink Blue focus ring
  from `global.css`.
- The site-wide `prefers-reduced-motion` rule in `global.css` applies
  unchanged; no new motion was introduced.

## Testing Performed

- Editor diagnostics found no errors in the Contact source files.
- The production build completed successfully for all five routes (`/`,
  `/services/`, `/solutions/`, `/about/`, `/contact/`). No new direct
  development dependencies are required to build or check this page.
- Verified in the build output: exactly one `<h1>` on `/contact/`; the
  `<form>` tag has the correct `action="https://formspree.io/f/xeaojrng"`
  and `method="POST"`; all six named fields (`name`, `email`,
  `organization`, `phone`, `reason`, `message`) plus the `_gotcha` honeypot
  are present; the endpoint/form ID string appears with no typo in both
  the form markup and the compiled client script; exactly one `aria-live`
  region; the reference mockup was not copied into `dist/`.
- Manual Formspree test submission, dashboard receipt, target-email
  delivery, keyboard-only run-through, spam-honeypot behavior, and
  responsive visual review at 375px/768px/1280px were **not** performed as
  part of this implementation session and should be completed before
  launch.

## Framework and Dependency Confirmation

One dependency was introduced: `@formspree/ajax`, version `1.1.5`, pinned
as an exact runtime dependency (no `^` range), justified by
[ADR-0003](../adr/0003-use-formspree-for-contact-form.md) — it is the
official library for the approved Formspree integration and avoids
hand-written submission/validation/error-state code. No direct
devDependencies were added. Astro's `output: "static"` is unchanged; no
Astro adapter, API route, backend, database, email credential, UI
framework, or CSS framework was introduced.

## Forward-Route Status

None. Unlike every other built page, the Contact page does not forward-
reference an unbuilt route — it is the terminal destination of every
`/contact/` link already used across the site.

## Content-Integrity Restrictions

No fabricated office address, phone number, statistic, customer claim,
response-time guarantee, testimonial, certification, or partnership
appears anywhere on the page. Canadian-owned/Toronto-GTA positioning uses
existing approved language, matching the phrasing already used on the
About page.
