// @ts-check
import cloudflare from '@astrojs/cloudflare';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import { d1, r2 } from '@emdash-cms/cloudflare';
import emdash from 'emdash/astro';

export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  image: {
    layout: 'constrained',
    responsiveStyles: true,
  },
  integrations: [
    react(),
    emdash({
      // "auto" uses D1 read-replica sessions; EmDash's anonymous / probe uses raw getDb() and can throw → endless / → /setup redirect. Prefer disabled unless you need replicas.
      database: d1({ binding: 'DB', session: 'disabled' }),
      storage: r2({ binding: 'MEDIA' }),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
