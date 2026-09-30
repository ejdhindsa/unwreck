import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { unwreck } from '@unwreck/core/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), unwreck()],
  optimizeDeps: {
    exclude: ['@unwreck/core'],
  },
  test: {
    environment: 'jsdom',
  },
})

