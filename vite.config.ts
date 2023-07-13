import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const getOutputDir = (mode: string) => {
  if (mode === "production") return "dist-prod"
  if (mode === "stg") return "dist-stg"
  return "dist"
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  build: {
    outDir: getOutputDir(mode)
  }
}))
