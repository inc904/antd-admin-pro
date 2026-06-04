import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const alias = {
  '@': fileURLToPath(new URL('./src', import.meta.url))
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // port: Number(VITE_PORT),
    proxy: {
      '/api': {
        // target: VITE_API_PROXY_URL,
        target: 'http://localhost:3000',
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    },
    host: true
  },
  resolve: {
    alias
  }
})
