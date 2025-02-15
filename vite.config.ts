import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/reeksenspel/', // Use your actual repo name here, with a trailing slash.
  plugins: [
    react(),
    tailwindcss(),
  ],
})
