# Sacred Heart Chaldean Catholic Church — website

Bilingual (English / Arabic) parish site for Sacred Heart Chaldean Catholic Church, Warren MI.
Static [Astro](https://astro.build) site, deployed on Vercel. No database, no logins, no payments.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Where to edit content

Almost everything lives in **`src/data/`**. Edit, commit, push, and Vercel redeploys.

| What | File |
|---|---|
| Phone, email, address, office hours, pastor, socials, **form inbox** | `src/data/site.ts` |
| Weekly Mass / Confession / Adoration times | `src/data/site.ts` → `schedule` |
| Ministries (13) — text, meeting times, leaders, photos | `src/data/ministries.ts` |
| Events + yearly traditions | `src/data/events.ts` |
| Button / menu labels (EN + AR) | `src/i18n/ui.ts` |

Every text field has an `en` and `ar` version. **Arabic was drafted and should be proofread by a native speaker.**

**Events:** add a block to `events.ts`. Past events move from "Upcoming" to "Recent" automatically in the visitor's browser, so the site never shows stale "upcoming" events.

## Pages

`/` · `/about` · `/mass-times` · `/ministries` · `/ministries/<slug>` · `/events` · `/contact` · `/support` — each mirrored under `/ar/…` (right-to-left).

## Contact / sign-up form

Posts to [FormSubmit](https://formsubmit.co) → emails **shccc21@gmail.com** (set in `site.ts` → `formInbox`).
**One-time step:** the very first submission sends an "Activate form" email to that inbox. Click it once; after that, every submission arrives as a formatted email with the ministry chosen (and child name + grade for Catechism).

## Deploy (Vercel)

1. Push this folder to GitHub, then "Import Project" in Vercel (framework auto-detects Astro), or run `vercel` from this folder.
2. Add the domain in Vercel → Settings → Domains, then point DNS where Vercel tells you (and remove it from Wix).
3. `vercel.json` already 301-redirects every old Wix URL (`/about-6`, `/team-3`, `/donate`, `/events-1/...`) to the new pages, so old links and Google results keep working.

## Photos

`public/images/` — the parish's own photos (from the old site + Instagram), converted to WebP. Full-size originals are kept in `../research/wix-images-orig/`.
