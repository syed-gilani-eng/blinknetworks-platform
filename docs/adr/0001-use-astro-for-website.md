# ADR-0001: Use Astro for the BlinkNetworks Website

## Status
Accepted

## Context
BlinkNetworks.com requires a modern, content-focused marketing website
prioritizing performance, accessibility, and SEO, with minimal client-side
JavaScript. The project is currently in local-development only; no
deployment, hosting, or infrastructure decisions are being made as part of
this ADR.

## Decision
We will build the BlinkNetworks website using Astro, located under `/app`
in the repository, separate from repository-level governance, documentation,
and future infrastructure code.

## Consequences
- Astro ships zero client-side JavaScript by default, aligning with the
  project's stated preference to avoid unnecessary client-side JavaScript.
- Astro supports plain HTML/CSS authoring without requiring a UI framework,
  keeping the initial dependency footprint minimal.
- UI framework integrations (React, Vue, Svelte, etc.) may be added later
  only if a specific interactive requirement justifies them.
- `/app` isolation allows repository-root governance, documentation, and
  future infrastructure code to evolve independently of the application.

## Alternatives Considered
- Plain static HTML/CSS/JS with no build tool — rejected due to lack of
  built-in routing, componentization, and asset optimization as the site
  grows.
- A general-purpose frontend framework (Next.js, Nuxt, SvelteKit) — rejected
  as heavier than required for a primarily content-driven marketing site.
