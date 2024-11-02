import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio_1/',  // Use your GitHub repository name here
  build: {
    outDir: 'dist',  // Use the default 'dist' folder for build output
  },
})
