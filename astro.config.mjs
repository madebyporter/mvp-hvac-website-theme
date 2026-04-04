// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import node from '@astrojs/node';
import emdash, { local } from 'emdash/astro';
import { sqlite } from 'emdash/db';

export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [
    react(),
    emdash({
      database: sqlite({ url: 'file:./data.db' }),
      storage: local({
        directory: './uploads',
        baseUrl: '/_emdash/api/media/file',
      }),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
