# Sacred Heart Chaldean Catholic Church — website

Parish website for Sacred Heart Chaldean Catholic Church, 30590 Dequindre Rd, Warren, MI 48092 (Pastor: Fr. Fadi Philip).
Maintained by volunteers. Keep changes simple and keep the site easy for non-developers to edit.

## Stack

- **Astro** static site (no backend, no database, no logins, no payments — by design).
- Plain `.astro` components + one global stylesheet (`src/styles/global.css`). No Tailwind, no UI framework.
- TypeScript strict. `npx astro check` must report 0 errors.
- Hosted on **Vercel** (project `sacred-heart-website`). Pushing to `main` on GitHub deploys automatically once the repo is connected in Vercel.

## Commands

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # must succeed before pushing
npx astro check    # type check
```

## Where things live

| Change | Edit |
|---|---|
| Phone, email, address, office hours, pastor, social links, form inbox | `src/data/site.ts` |
| Weekly Mass / Confession / Adoration times | `src/data/site.ts` → `schedule` |
| The 13 ministries (text, meeting times, leaders, photos) | `src/data/ministries.ts` |
| Events and yearly traditions | `src/data/events.ts` |
| Menu / button labels | `src/i18n/ui.ts` |
| Page layouts and page-specific copy | `src/views/*.astro` |
| Header, footer, shared pieces | `src/components/` |
| Colors, fonts, spacing | `src/styles/global.css` (`:root` tokens) |
| Photos | `public/images/` (WebP, ≤1800px) |

`src/pages/` only contains thin route files that render a view with `lang="en"` or `lang="ar"`. Don't put content there.

## Rules

1. **Every piece of text is bilingual.** Data uses `{ en: '…', ar: '…' }`; views use a `c = { en: {…}, ar: {…} }[lang]` object. When you add or change English text, add the Arabic too. Arabic pages live under `/ar/…` and are right-to-left (`dir="rtl"`) — use logical CSS (`margin-inline-start`, `inset-inline-end`) not left/right.
2. **Don't invent parish facts.** Times, names, dates and policies must come from the parish (office, flyers, Instagram @sacredheartchaldeanchurch). If unknown, say "contact the office".
3. **Events:** add to `src/data/events.ts` with an ISO `start` like `'2026-12-24T19:00'`. Past events move to "Recent" automatically in the browser — never delete history just because it passed.
4. **Mobile first.** Most visitors are on phones. Check at 390px wide: no horizontal scroll, the bottom action bar (Mass / Call / Directions / Join) must not cover content.
5. **Contact form** posts to FormSubmit (`formsubmit.co/ajax/<formInbox>`) and emails `shccc21@gmail.com`. No API keys or secrets exist in this repo — keep it that way.
6. **Old Wix URLs** are 301-redirected in `vercel.json`. Don't remove those redirects.
7. Arabic copy was machine-drafted; native-speaker corrections always win.

## Domain

Until the real domain is connected, the site URL comes from Vercel automatically (`astro.config.mjs`). After connecting `sacredheartccc.com` in Vercel, set the env var `SITE_URL=https://www.sacredheartccc.com` in Vercel → Settings → Environment Variables and redeploy, so share previews and SEO tags use the real domain.
