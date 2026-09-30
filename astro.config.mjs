import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.sacredheartccc.com',
  trailingSlash: 'never',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en-US', ar: 'ar' } },
    }),
  ],
});
