# ADR-0003: Use Formspree with @formspree/ajax for Contact Form Submission

## Status
Accepted

## Context
The Contact page (`/contact/`) requires a working inquiry form. The site is
static-only (ADR-0001); the current project phase excludes cloud
infrastructure, deployment, and server credentials. A real inbound lead form
still needs server-side processing (spam filtering, delivery to
BlinkNetworks) without introducing hosting or backend work out of scope for
this phase.

## Decision
Submit the Contact form to Formspree's hosted endpoint
(`https://formspree.io/f/xeaojrng`), progressively enhanced client-side with
the official `@formspree/ajax` npm package. The form remains a semantic
HTML form (`action`/`method="POST"`) that works with plain browser
submission if JavaScript fails to load. No custom Astro server adapter, API
route, server action, database, or email credential is introduced;
`output: "static"` is unchanged.

## Alternatives Considered
- **Custom Astro server adapter + API route** — rejected; contradicts the
  current static/local-development-only phase and ADR-0001.
- **Hand-written `fetch()` submission code** — rejected; duplicates
  validation, error-state, and accessibility behavior that
  `@formspree/ajax` already provides.
- **Third-party embedded iframe/widget** — rejected; would not match the
  BlinkNetworks design system and adds heavier third-party markup/JS than a
  small AJAX helper.

## Consequences
- Introduces a durable dependency on Formspree as the lead-delivery vendor.
- Adds one new npm dependency (`@formspree/ajax`, pinned to exact version
  `1.1.5` with no direct devDependencies) and its bundled client-side JS,
  the first client-side JavaScript beyond the Header's existing nav-toggle
  enhancement.
- The site remains fully static (`output: "static"`); no new
  infrastructure, adapter, API route, backend, database, or email
  credential is introduced.
- The endpoint/form ID (`xeaojrng`) is public configuration, not a secret,
  and is committed directly in source.
