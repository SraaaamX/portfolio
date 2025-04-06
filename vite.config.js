import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ['> 0%', 'last 1000000000000000000000000000000000000000 versions', 'Firefox ESR', 'not dead'],
        })
      ],
    },
  },
});
