# BlinkNetworks Project Instructions

## Project Purpose

BlinkNetworks.com is being developed as a real-world production website and
modern software engineering project.

The project should follow professional engineering practices for security,
maintainability, accessibility, testing, performance, source control, and
documentation.

## Current Project Phase

The project is currently in LOCAL DEVELOPMENT ONLY.

Do not create or configure:

- AWS resources
- cloud infrastructure
- Terraform infrastructure
- Ansible deployment configuration
- production deployment workflows
- production secrets
- cloud credentials

These concerns are intentionally deferred until the website has been developed
and tested locally.

## Development Approach

Work incrementally.

Before making a substantial change:

1. Inspect the existing repository and understand the current structure.
2. Identify the smallest reasonable implementation.
3. Explain important architectural decisions.
4. Avoid introducing unnecessary dependencies or technologies.
5. Keep changes focused on the requested task.

Do not redesign unrelated parts of the project while implementing a feature.

## Architecture Principles

Prefer:

- simple solutions over unnecessary complexity
- clear separation of concerns
- reusable components where reuse is justified
- configuration over duplication
- established design patterns where they solve an actual problem
- maintainability over cleverness
- secure defaults
- progressive enhancement
- accessible web development

Do not add technology solely for portfolio or resume value.

Every dependency, framework, service, and architectural pattern must have a
clear reason for existing.

## Security

Security is a first-class requirement.

Never:

- commit passwords, API keys, tokens, certificates, or private keys
- place secrets in source code
- expose sensitive configuration in logs
- disable security checks simply to make something work
- execute destructive commands without explicitly explaining them
- weaken security controls as a workaround

Use least privilege whenever permissions are introduced.

Flag potential security concerns before implementing them.

## Dependencies

Before adding a new dependency:

- determine whether the platform or existing dependencies already provide the capability
- explain why the dependency is necessary
- prefer actively maintained and reputable packages
- avoid dependencies for trivial functionality

## Quality

Code should be:

- readable
- maintainable
- appropriately documented
- consistently formatted
- tested where appropriate

Do not suppress warnings without understanding and documenting the reason.

## Web Standards

The BlinkNetworks website must prioritize:

- semantic HTML
- accessibility
- responsive design
- performance
- SEO
- progressive enhancement
- reduced-motion support
- keyboard navigation
- appropriate colour contrast

Avoid unnecessary client-side JavaScript.

## Brand and Content

BlinkNetworks is a modern managed IT, Microsoft, cloud, infrastructure,
networking, cybersecurity, and automation company serving small and
medium-sized businesses in Toronto and the GTA.

Do not invent:

- customer testimonials
- customer names
- statistics
- certifications
- partnerships
- service guarantees
- uptime claims
- compliance claims

Use only approved factual claims.

## Git Practices

Do not commit, push, merge, or delete branches unless explicitly requested.

Keep changes small and logically grouped.

Use descriptive commit messages.

Do not modify generated files unless that is the intended workflow.

## AI-Assisted Development

AI-generated code must be treated as proposed code, not automatically correct
code.

Before considering work complete:

- review the implementation
- verify assumptions
- run applicable tests
- check for security issues
- check for unnecessary complexity
- explain important design decisions

When uncertain, ask for or recommend human review rather than silently making
a risky assumption.