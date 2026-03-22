# Kartavya Baluja — AI/ML Portfolio Website

A cinematic dark-themed full-stack portfolio built with **Next.js 14**, **Supabase**, **NextAuth v5**, and **Framer Motion**.

## Features

- 🌑 **Cinematic dark theme** — custom design tokens, glassmorphism, Framer Motion animations
- 📡 **9 public pages**: Home (animated hero + ticker), About, Projects (bento grid), Live Links, Experience (timeline), Certifications (gold shimmer), Education, Publication, Contact
- 🔒 **Google OAuth admin panel** (`/admin`) — whitelisted email only
- ✏️ **Full CRUD** for every section via slide-out drawer panels
- 💬 **Social quick-links**: LinkedIn, GitHub, Email, WhatsApp (on Hero + Contact pages)
- 🔗 **Dedicated `/live-links` page** — separate from Projects with pulsing LIVE badges
- 📤 **Image upload** to Supabase Storage (`portfolio-assets` bucket)
- 📱 **Responsive** — mobile-first layout

---

## Prerequisites

- Node.js 18+
- A [Supabase](https://supabase.com) account (free tier works)
- A [Google Cloud](https://console.cloud.google.com) OAuth 2.0 client

---

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Set up Supabase
1. Create a new project at [supabase.com](https://supabase.com)
2. Go to **SQL Editor** and run `supabase/schema.sql`
3. Then run `supabase/seed.sql` to populate with real data
4. Go to **Settings → API** and copy:
   - Project URL → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` key → `SUPABASE_SERVICE_ROLE_KEY`

### 3. Set up Google OAuth
1. Go to [Google Cloud Console](https://console.cloud.google.com/apis/credentials) → Create OAuth 2.0 Client
2. Application type: **Web application**
3. Authorized redirect URIs: `http://localhost:3000/api/auth/callback/google` (dev) and your production URL
4. Copy Client ID → `GOOGLE_CLIENT_ID` and Secret → `GOOGLE_CLIENT_SECRET`

### 4. Configure environment variables
Copy `.env.local.example` to `.env.local` and fill in your values:

```bash
cp .env.local.example .env.local
```

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon/public key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (server-only) |
| `NEXTAUTH_SECRET` | Random secret — generate with `openssl rand -base64 32` |
| `NEXTAUTH_URL` | `http://localhost:3000` (dev) or your production URL |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret |
| `ADMIN_EMAIL` | Admin email to whitelist |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number with country code (e.g. `9138414874`) |

### 5. Run the dev server
```bash
npm run dev
```

Visit `http://localhost:3000`

---

## Admin Panel

Navigate to `http://localhost:3000/admin` and sign in with your whitelisted Google account.

Admin panels available:
- Hero, About, Stats, Skills, Projects, Live Links, Experience, Certifications, Education, Publications, Contact

---

## Deployment (Vercel)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add all environment variables in Vercel → Settings → Environment Variables
4. Update `NEXTAUTH_URL` to your production domain
5. Add your production domain to Google OAuth Authorized redirect URIs

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS + CSS Variables |
| Animation | Framer Motion |
| Auth | NextAuth.js v5 (Google OAuth) |
| Database | Supabase (PostgreSQL) |
| Storage | Supabase Storage |
| Fonts | Syne + DM Sans + Fira Code |
| Icons | Lucide React |
| Deployment | Vercel |

---

*Kartavya Baluja © 2025 · Built with Python, passion & caffeine*
