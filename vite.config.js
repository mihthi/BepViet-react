import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    watch: {
      // JSON Server writes this database file during CRUD; it must not trigger Vite full reloads.
      ignored: ['**/db.json'],
    },
  },
})
