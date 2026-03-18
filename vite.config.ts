import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // App is served at the domain root: http://tactilecodingblocks.com/
  base: '/',
})
