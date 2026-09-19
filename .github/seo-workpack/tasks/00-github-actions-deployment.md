You are the deployment Architect for the BlinkNetworks Astro website.

The website repository contains an Astro application under /app. The production
website is currently deployed manually to the hosting account's public_html
directory.

The owner has confirmed:

- The old contents of public_html were deleted before the current website was
  uploaded.
- The current live Services and About pages contain the correct website.
- There is no evidence that legacy files currently remain on the server.
- BlinkNetworks now authorizes moving from local-only development to a controlled
  GitHub Actions deployment process.
- Deployment will use a dedicated SSH/SFTP account and private key.
- The repository currently has no GitHub Actions deployment workflow.

Do not edit code during this architecture pass.

Design a secure GitHub Actions process that builds and deploys the Astro website.

Repository requirements:

- Astro application directory: /app
- Build command: npm ci followed by npm run build
- Deployment source: /app/dist only
- Initial deployment trigger: workflow_dispatch only
- Later production trigger: merge or push to main, after the first deployment is
  validated
- Production destination: the confirmed hosting document root, expected to be
  public_html
- Authentication: dedicated SSH key stored in GitHub secrets
- Hosting credentials and paths must not be hard-coded
- Host-key verification must be enabled
- Secrets must never be printed
- Concurrent production deployments must be prevented
- The workflow should use least-privilege GitHub permissions
- Third-party GitHub Actions should be pinned securely
- Deployment failures must not leave an incomplete website where reasonably
  avoidable

Investigate and document:

1. The current repository instructions that still describe the project as
   local-development-only.
2. Which documentation or ADRs must be updated to reflect the owner's deployment
   authorization.
3. The installed Node and npm expectations and whether the project should add an
   .nvmrc or package.json engines declaration.
4. Whether the package-lock.json file supports npm ci.
5. Whether the hosting service provides full SSH command access or SFTP-only
   access.
6. The safest deployment mechanism:
   - rsync over SSH if supported;
   - an SFTP synchronization tool if only SFTP is supported;
   - or another simple mechanism justified by the hosting capabilities.
7. How files removed from the repository will eventually be removed from
   production without risking deletion outside the confirmed document root.
8. Whether a temporary release directory and atomic switch are supported.
9. How to create and store the server's SSH host fingerprint in GitHub.
10. How production deployment should use a GitHub Environment and optional
    approval protection.
11. How build artifacts should be retained temporarily for troubleshooting and
    rollback.
12. How the workflow should verify the deployment after upload.

The first deployment must be conservative:

- Build and test the website.
- Upload only /app/dist.
- Do not delete remote files.
- Do not use an unverified remote path.
- Do not disable SSH host-key checking.
- Do not deploy automatically from main yet.
- Require workflow_dispatch.
- Run post-deployment HTTP checks against:
  /
  /services/
  /solutions/
  /about/
  /contact/
  /insights/
- Fail clearly if any primary route does not return an expected successful
  response.

Design a later controlled transition to synchronized deployments only after:

- The exact remote document root has been confirmed.
- The dedicated deployment account has been tested.
- The first upload has succeeded.
- The production routes have been verified.
- A backup or rollback procedure has been confirmed.

Propose descriptive secret names such as:

- BLINK_SFTP_HOST
- BLINK_SFTP_PORT
- BLINK_SFTP_USERNAME
- BLINK_SFTP_PRIVATE_KEY
- BLINK_SFTP_REMOTE_PATH
- BLINK_SSH_KNOWN_HOSTS

Do not request or display any secret values.

Produce an architecture note containing:

1. Current-state findings.
2. Recommended deployment design.
3. Exact files to create or update.
4. Required GitHub Environment and secrets.
5. Information the owner must obtain from the hosting provider.
6. First-deployment procedure.
7. Normal deployment procedure after validation.
8. File synchronization/deletion strategy.
9. Rollback procedure.
10. Verification and acceptance criteria.
11. Risks and decisions requiring owner approval.
12. Proposed ADR title and outline.

Do not connect to production, create secrets, modify workflows, delete remote
files, or deploy anything during this architecture pass.