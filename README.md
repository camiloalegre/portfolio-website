# Camilo Alegre Huaman — Portfolio

A responsive personal portfolio for an Industrial Engineer and Data Analyst focused on investment analytics, data engineering, Google Cloud Platform, and Machine Learning.

## Built with

- Next.js App Router and React
- CSS Modules
- Framer Motion and Three.js
- JSON-backed profile, project, experience, education, certification, and skill data

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to view the site.

## Contact form email

The contact API sends messages with Resend to the recipient in
`src/data/site-config.json` (`camiloalegre11@gmail.com`). Configure these
server-side environment variables:

- `RESEND_API_KEY` — a Resend API key with permission to send email.
- `RESEND_FROM_EMAIL` — a sender address authorized by Resend, such as
  `Portfolio Contact <contact@your-verified-domain.com>`. The visitor's email is
  used as `Reply-To`, not as the sender.

To configure Resend:

1. Create or sign in to an account at [Resend](https://resend.com/).
2. Verify a sending domain in the Resend dashboard and publish the DNS records
   Resend provides. Use an address on that verified domain for
   `RESEND_FROM_EMAIL`; the recipient's Gmail address is not automatically an
   authorized sender. Resend's onboarding sender is restricted to testing and
   should not be used as the production sender.
3. Create an API key in the Resend dashboard and add it as `RESEND_API_KEY`.
4. In Vercel, open **Project Settings → Environment Variables** and add both
   variables for the desired deployment environments, then redeploy.
5. For local development, create `.env.local` in the project root and add both
   variables there. This file is ignored by Git; do not commit API keys.

Supabase contact storage remains optional. To enable it, also configure
`NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` and create the
`contacts` table expected by the existing integration. An email is considered
successfully submitted only after Resend accepts it; a Supabase storage error is
reported in server logs without falsely reporting an email failure.

## Project structure

- `src/app/` — App Router pages, metadata, and API routes
- `src/components/` — Layout, portfolio sections, and reusable UI
- `src/data/` — Portfolio content in JSON files
- `src/styles/` — Global styles and CSS Modules
- `public/images/` — Static profile and project images
