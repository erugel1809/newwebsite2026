import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Esto es CRUCIAL para que funcione en GitHub Pages
  build: {
    outDir: 'dist',
  }
});