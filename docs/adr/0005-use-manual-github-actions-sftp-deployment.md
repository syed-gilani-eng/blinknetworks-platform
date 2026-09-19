# ADR-0005: Use Manual GitHub Actions SFTP Deployment for the Static Astro Site

## Status
Accepted

## Context
The BlinkNetworks marketing site is a static Astro application under `/app` with a build output at `app/dist/`. The project has moved beyond the earlier local-development-only phase and now requires a controlled GitHub Actions deployment process for the existing hosted production website at `https://blinknetworks.com`.

The production hosting account is transitional and currently uses a dedicated SSH/SFTP account with a confirmed document root at `/home/blinknetworks/public_html`. The deployment architecture is intentionally conservative: the first production upload is manual and non-destructive, with no remote delete operations and no automatic `main` deployment until the account, path, and route checks have been validated.

The owner has confirmed that the current hosting model is temporary and expected to be replaced with an AWS or Azure container-based deployment pipeline later. This ADR documents the current transitional deployment decision rather than a long-term production architecture.

## Decision
We will deploy the Astro site using GitHub Actions with native OpenSSH `sftp` over SSH on port `22`, using a dedicated deployment account and private key stored in GitHub environment secrets. The workflow will be triggered by `workflow_dispatch` for the initial controlled rollout, use the GitHub `production` environment, and only deploy the generated output from `app/dist/` to the configured remote document root.

This deployment approach is appropriate for the current static Astro site because:

- the site is fully static after build (`output: "static"`)
- the production content is generated from the repo and uploaded as compiled HTML/CSS/JS assets
- the hosting provider already exposes a working SSH/SFTP account and document root
- the site does not require a runtime application server, API, database, or container orchestration at this stage
- the workflow can be reviewed, audited, and rolled back with explicit controls without introducing new infrastructure or cloud dependencies

## Security Controls
- GitHub secrets and environment variables are used for host, port, username, private key, remote path, and known_hosts data; no secret is committed to the repository.
- SSH host-key checking remains enabled with the server fingerprint stored as `BLINK_SSH_KNOWN_HOSTS`.
- The workflow writes the private key to a temporary file and removes it in an always-running cleanup step.
- The workflow uses least-privilege GitHub permissions (`contents: read`) and a production concurrency group to prevent overlapping deployments.
- The deployment uses the required compatible SSH transport settings: `Ciphers=aes256-ctr`, `MACs=hmac-sha2-256`, and `Compression=no`.
- The deployment is scoped to the confirmed remote document root and never deletes files during the initial rollout.
- The workflow avoids logging or exposing any secret values.

## Non-Destructive First Deployment Policy
The initial deployment policy is intentionally conservative:

- the source is limited to the artifact output in `app/dist/`
- only matching generated files are overwritten
- missing files are created as needed
- no remote cleanup or deletion is performed
- no remote path outside the confirmed production document root is used
- the workflow does not enable automatic deployment from `main` until the initial upload and route checks succeed
- the deployment uses `workflow_dispatch` as the only trigger until validation is complete

This preserves the current hosting state while allowing controlled release validation.

## Account-Scope Limitation
The current deployment account is intentionally limited to the transitional hosting context and the confirmed document root. The workflow will not traverse or modify other directories under `/home/blinknetworks`, and the target path is explicitly configured from GitHub variables rather than hard-coded in the repository.

## SSH Compatibility Requirement
The hosting account has been verified to require the following OpenSSH transport settings for compatibility:

- `Ciphers=aes256-ctr`
- `MACs=hmac-sha2-256`
- `Compression=no`

The workflow enforces these options explicitly to avoid failed handshakes and ensure the connection remains stable and secure.

## Transitional Status
This approach is a transitional deployment solution for the current static site. It is appropriate while the site is served from a traditional hosting account and before BlinkNetworks moves to a future AWS or Azure container-based deployment pipeline.

## Consequences
- Deployment is controlled, reviewable, and compatible with the current hosting account.
- The site remains static and easy to verify before and after upload.
- A future migration to a container-based platform will require a new ADR and a different deployment design.
- The current workflow is intentionally limited and conservative, which reduces risk but requires manual validation before broader automation is enabled.

## Alternatives Considered
- **Direct FTP or manual upload** — rejected because it lacks GitHub review, auditability, environment controls, and reproducible deployment configuration.
- **Automatic `main` deployment from day one** — rejected because the production path, account scope, and route validation have not yet been fully proven.
- **Destructive sync or remote cleanup on first deployment** — rejected because it violates the owner’s non-destructive transition policy and could remove content outside the confirmed document root.
- **An unpinned or external deployment action** — rejected because the project requires explicit security controls, SSH compatibility, and a minimal dependency footprint.
