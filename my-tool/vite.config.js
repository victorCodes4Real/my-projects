import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/Gemini-clone",
  plugins: [react()],
  server: {
    port: 5173,
  }
})
