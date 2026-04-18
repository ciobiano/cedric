# Deployment Guide

This guide covers deploying Cédric to production.

## Prerequisites

- Node.js 18+
- PostgreSQL database
- Railway or Vercel account

## Environment Setup

### Required Environment Variables

```env
# App Configuration
NEXT_PUBLIC_APP_NAME=Cédric
NEXT_PUBLIC_APP_URL=https://your-domain.com

# Database
DATABASE_URL=postgresql://user:password@host:5432/db

# Auth (generate with: openssl rand -base64 32)
BETTER_AUTH_SECRET=your-generated-secret

# Email (choose one)
NEXT_PUBLIC_EMAIL_PROVIDER=resend  # or "smtp" or "plunk"
RESEND_API_KEY=re_...
```

### Optional: GitHub OAuth

```env
NEXT_PUBLIC_ENABLE_GITHUB_INTEGRATION=true
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
```

### Optional: Google OAuth

```env
NEXT_PUBLIC_ENABLE_GOOGLE_INTEGRATION=true
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### Optional: Polar Payments

```env
NEXT_PUBLIC_ENABLE_POLAR=true
NEXT_PUBLIC_POLAR_ENV=sandbox  # or "production"
POLAR_ACCESS_TOKEN_SANDBOX=pol_...
POLAR_WEBHOOK_SECRET_SANDBOX=whsec_...
```

## Deployment Options

### Option 1: Vercel + Railway (Recommended)

**Frontend (Vercel)**
1. Connect your repo to Vercel
2. Set environment variables
3. Deploy

**Backend (Railway)**
1. Create Railway project
2. Add PostgreSQL plugin
3. Set DATABASE_URL in Railway
4. Deploy and note the URL

### Option 2: Vercel (All-in-One)

1. Connect repo to Vercel
2. Add Vercel Postgres
3. Configure all environment variables
4. Deploy

## Post-Deployment

1. Run database migrations: `bun db:push`
2. Seed demo data: `bun db:seed` (optional)
3. Test authentication flows
4. Verify email sending (if enabled)

## Troubleshooting

### Auth Issues
- Ensure `NEXT_PUBLIC_APP_URL` matches your production URL exactly
- Check OAuth redirect URIs in provider settings

### Database Connection
- Verify `DATABASE_URL` format
- Ensure database allows connections from your deployment

### Email Not Sending
- Check provider API keys
- Verify sender email domain (Resend requires verified domain)