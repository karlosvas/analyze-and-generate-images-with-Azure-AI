import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ["@azure-rest/ai-vision-image-analysis", "@azure/core-auth"],
  },
  plugins: [react()],
})
