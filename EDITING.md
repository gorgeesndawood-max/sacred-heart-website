# How to update the website (plain-English guide)

You don't need to be a programmer. Pick whichever way is easiest for you.

---

## Way 1: Edit right on GitHub (no installs, works from any computer)

Good for small changes: a Mass time, a phone number, adding an event.

1. Go to **github.com/gorgeesndawood-max/sacred-heart-website**
2. Click into **`src` → `data`** and open the file you need:
   - **`site.ts`**: phone, email, office hours, **Mass times**
   - **`events.ts`**: **events** (feasts, parties, trips)
   - **`ministries.ts`**: the 13 ministries (Mom Group, Choir, Super Saints…)
3. Click the **✏️ pencil** icon (top right of the file).
4. Make your change. Each text has an English line (`en:`) and an Arabic line (`ar:`). Change both.
5. Click **Commit changes…** → **Commit changes**.
6. Wait about 1 minute. The live website updates on its own.

> ⚠️ Keep the quote marks `'…'` and commas exactly as they are. If the site doesn't update, open the Vercel dashboard; a red ❌ means something got mistyped. Undo it in GitHub (open the file's **History**) or ask for help.

### Example: change a Mass time
In `src/data/site.ts`, find:
```ts
{ day: 0, time: '10:00', kind: 'mass', label: mass, lang: { en: 'Arabic', ar: 'العربية' } },
```
`day: 0` is Sunday (1 Mon, 2 Tue, 3 Wed, 4 Thu, 5 Fri, 6 Sat). `time` uses 24-hour time ('18:00' = 6 PM).

### Example: add an event
In `src/data/events.ts`, copy one existing block (from `{` to `},`), paste it at the top of the list, and change it:
```ts
{
  id: 'christmas-party-2026',
  start: '2026-12-19T20:00',
  title: { en: 'Christmas Party', ar: 'حفلة الميلاد' },
  summary: { en: 'Dinner and music in the church hall.', ar: 'عشاء وموسيقى في قاعة الكنيسة.' },
  location: church,
  tag: 'social',
},
```
After the date passes it moves to "Recent" automatically.

---

## Way 2: Ask Claude to do it (best for bigger changes)

1. Install Claude Code (needs a paid Claude plan, Pro or higher):
   ```
   curl -fsSL https://claude.ai/install.sh | bash
   ```
2. Get the website onto your computer (first time only):
   ```
   git clone https://github.com/gorgeesndawood-max/sacred-heart-website.git
   cd sacred-heart-website
   npm install
   claude
   ```
3. Tell Claude what you want in plain words, for example:
   - *"Change the Sunday Arabic Mass to 10:30 AM."*
   - *"Add the Christmas Eve Mass on Dec 24 at 7 PM."*
   - *"Add this photo of Fr. Fadi to the About page."*
   - *"Preview it for me, then push it live."*

   Claude reads `CLAUDE.md` in this folder and already knows how the site is organized.
4. Next time, just `cd sacred-heart-website`, run `git pull`, then `claude`.

---

## Who owns what

| Thing | Owner | Where |
|---|---|---|
| Code | GitHub repo `sacred-heart-website` | github.com/gorgeesndawood-max |
| Hosting | Vercel project `sacred-heart-website` | vercel.com (sacred-heart-team) |
| Contact form emails | shccc21@gmail.com | first submission needs a one-time "Activate" click |
| Domain | sacredheartccc.com | wherever it was bought (likely Wix) |

Anyone added as a **collaborator** on GitHub can edit. Add people under the repo's **Settings → Collaborators**.
