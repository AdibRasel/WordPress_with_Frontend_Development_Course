import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/WordPress_with_Frontend_Development_Course/',
  plugins: [react()],
})
