# Cédric - Premium SaaS Starter Template

A production-ready Next.js 15 SaaS starter template for indie hackers. Ship your paid product in days, not months.

## Features

- **Authentication**: better-auth with GitHub & Google OAuth, email/password
- **Payments**: Polar integration for subscriptions
- **Database**: Prisma with PostgreSQL
- **API**: tRPC for type-safe APIs
- **UI**: 40+ Radix UI components, Tailwind CSS 4
- **File Uploads**: UploadThing integration
- **Email**: Resend, Plunk, or SMTP support
- **AI**: OpenAI SDK integration ready
- **Onboarding**: Step-by-step wizard for new users

## Quick Start

```bash
# Install dependencies
bun install

# Set up environment
cp .env.example .env

# Generate Prisma client
bun db:generate

# Push database schema
bun db:push

# Seed demo data (optional)
bun db:seed

# Start development
bun dev
```

## Environment Variables

Create a `.env` file with required variables:

```env
# App
NEXT_PUBLIC_APP_NAME=Cédric
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Database
DATABASE_URL=postgresql://...

# Auth
BETTER_AUTH_SECRET=your-secret
NEXT_PUBLIC_AUTH_ENABLE_EMAIL_PASSWORD_AUTHENTICATION=true

# GitHub OAuth (optional)
NEXT_PUBLIC_ENABLE_GITHUB_INTEGRATION=true
GITHUB_CLIENT_ID=...
GITHUB_CLIENT_SECRET=...

# Google OAuth (optional)
NEXT_PUBLIC_ENABLE_GOOGLE_INTEGRATION=true
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
```

## Tech Stack

- Next.js 15 (Turbo)
- React 19
- Tailwind CSS 4
- better-auth
- Prisma
- tRPC
- Radix UI
- Framer Motion

## Deployment

### Vercel (Frontend)
Deploy the `src/app` directory to Vercel.

### Railway (Backend)
1. Create a new Railway project
2. Add PostgreSQL service
3. Deploy and configure environment variables

## License

MIT - Build your business on it.