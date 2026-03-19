import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Konfiguracja wymuszająca poprawne ścieżki na Vercel
export default defineConfig({
  plugins: [react()],
  base: './', // Kluczowe: wymusza ścieżki relatywne
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
