// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: undefined,
  build: {
    format: 'directory',
  },
  devToolbar: {
    enabled: false,
  },
});
