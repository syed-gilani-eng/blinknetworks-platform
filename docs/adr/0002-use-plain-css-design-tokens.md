# ADR-0002: Use Plain CSS with Custom-Property Design Tokens

## Status
Accepted

## Context
Step 4 introduces the first global design system and page shell for the
BlinkNetworks website (ADR-0001). The site needs a consistent, reusable way
to express colors, typography, spacing, shape, and motion across future
pages and components without contradicting ADR-0001's preference for
minimal dependencies and zero unnecessary client-side JavaScript.

## Decision
We will style the BlinkNetworks website using:

- Plain CSS, authored by hand.
- CSS custom properties (`--color-*`, `--font-*`, `--space-*`, `--radius-*`,
  `--shadow-*`, `--duration-*`, `--container-*`) defined once as global
  design tokens and consumed throughout the codebase.
- Astro's built-in scoped component styles (`<style>` blocks in `.astro`
  files) for component-local styling that does not need to be reusable.

We will not adopt Tailwind CSS, Sass/SCSS, CSS Modules, CSS-in-JS, or any
other styling framework or preprocessor at this stage.

## Consequences
- No new build-time or run-time dependency is introduced; the project
  remains aligned with ADR-0001's zero-JS-by-default posture.
- Design tokens live in one place (`app/src/styles/tokens.css`) and can be
  kept in sync with `docs/design/design-system.md` as the canonical
  reference, reducing drift between documentation and implementation.
- Component authors get scoping "for free" from Astro without needing a
  CSS Modules or CSS-in-JS toolchain.
- If a genuine need for a preprocessor or utility framework emerges later
  (e.g., significant duplication that custom properties cannot solve), that
  will require a new ADR superseding or amending this one.

## Alternatives Considered
- **Tailwind CSS** — rejected for now; adds a build-time dependency and a
  utility-class authoring convention not yet justified by project scale.
- **Sass/SCSS** — rejected; native CSS custom properties and nesting cover
  current needs without a preprocessor step.
- **CSS Modules** — rejected; Astro's native component style scoping
  already solves the collision problem CSS Modules addresses.
- **CSS-in-JS (e.g., styled-components)** — rejected; introduces runtime
  JavaScript for styling, conflicting with ADR-0001's zero-JS-by-default
  goal.
