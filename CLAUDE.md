# Cédric - AI Assistant Guide

This is a Next.js 15 SaaS starter template called "Cédric". Here's how to work with it:

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── (app)/          # Authenticated app routes
│   ├── (landing)/      # Marketing pages
│   └── api/            # API routes
├── components/         # React components
│   ├── ui/             # Radix UI components
│   └── auth/           # Auth components
├── server/
│   ├── auth/           # better-auth config
│   ├── api/            # tRPC routers
│   └── db/             # Prisma client
├── lib/                # Utilities
├── config/             # App configuration
└── env/                # Environment schemas
```

## Key Technologies

- **Auth**: better-auth with GitHub & Google OAuth
- **Database**: Prisma + PostgreSQL
- **API**: tRPC v11
- **Payments**: Polar
- **Styling**: Tailwind CSS 4 + CVA
- **UI**: Radix UI + Framer Motion

## Common Commands

```bash
bun dev              # Start dev server
bun db:generate      # Generate Prisma client
bun db:push          # Push schema to DB
bun db:seed          # Seed demo data
bun build            # Production build
bun typecheck        # Type checking
bun lint             # Linting
```

## Environment Variables

All env vars are validated in `src/env/schemas/`. Key variables:

- `NEXT_PUBLIC_APP_NAME`: App display name (default: "Cédric")
- `NEXT_PUBLIC_ENABLE_GITHUB_INTEGRATION`: Enable GitHub OAuth
- `NEXT_PUBLIC_ENABLE_GOOGLE_INTEGRATION`: Enable Google OAuth
- `NEXT_PUBLIC_AUTH_ENABLE_EMAIL_PASSWORD_AUTHENTICATION`: Enable email/password

## Adding New Features

1. **New tRPC procedure**: Add to `src/server/api/routers/user.ts` or create new router
2. **New env var**: Add to appropriate schema in `src/env/schemas/`
3. **New component**: Add to `src/components/` with CVA variants in `lib/variants.ts`

## Important Patterns

- Use CVA for component variants (never hardcode Tailwind classes in JSX)
- Use tRPC for all API calls (no direct fetch to internal APIs)
- Use the `protectedProcedure` for authenticated routes
- Theme colors are in `src/styles/globals.css` as CSS custom properties