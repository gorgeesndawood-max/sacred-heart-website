import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Where the site lives. Set SITE_URL in Vercel once the real domain is connected
// (e.g. https://www.sacredheartccc.com); until then the Vercel production URL is used.
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const site = process.env.SITE_URL || (vercelUrl ? `https://${vercelUrl}` : 'https://www.sacredheartccc.com');

export default defineConfig({
  site,
  trailingSlash: 'never',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en-US', ar: 'ar' } },
    }),
  ],
});
