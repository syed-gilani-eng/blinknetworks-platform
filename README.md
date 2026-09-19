# blinknetworks-platform

## Running the app locally

The Astro application lives in [`/app`](./app). To run it locally:

```sh
cd app
npm install
npm run dev
```

## Production deployment

The live BlinkNetworks site is deployed through GitHub Actions using the
`production` GitHub environment and an approved SSH/SFTP deployment workflow.
The first deployment is intentionally manual and non-destructive, and the
workflow is restricted to the validated document root for the live site.

Production deployment requires:

- the GitHub `production` environment
- the approved deployment account, SSH private key, and host configuration
- explicit human approval before a live deployment is triggered
- a verified remote document root and successful route checks after upload

Agents must never print secret values, hard-code deployment credentials, or
trigger production deployment without explicit approval.
