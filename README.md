# Trustence Frontend

Independent Next.js frontend for `trust-ence.com` and the admin interface at `admin.trust-ence.com/admin`.

The API is a separate project located beside this repository at `../trustence-backend` and is expected to be available at `https://api.trust-ence.com` in production.

## Requirements

- Node.js 24 or newer
- pnpm 11

## Local development

1. Copy `.env.example` to `.env.local`.
2. Run `pnpm install`.
3. Start the frontend with `pnpm dev`.

Local frontend: `http://localhost:1010`

The backend must be started separately from the `trustence-backend` project. Local environment values point to `http://127.0.0.1:8000`.

## Production

Copy `.env.production.example` to `.env.production`, then run:

```bash
pnpm install --frozen-lockfile
pnpm lint
pnpm build
pm2 startOrReload ecosystem.config.cjs
pm2 save
```

Use `deploy/nginx-frontend.conf.example` as the starting Nginx configuration. Add TLS certificates before exposing the service publicly.

## Commands

- `pnpm dev` — development server on port 1010
- `pnpm build` — production build
- `pnpm start` — production server
- `pnpm lint` — ESLint
