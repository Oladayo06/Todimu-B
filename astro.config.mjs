// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    // Change to the live domain before deploying (used for canonical URLs, sitemap and RSS)
    site: 'https://todimuadegoke.com',
    integrations: [sitemap()],
    prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
    build: { inlineStylesheets: 'auto' },
});