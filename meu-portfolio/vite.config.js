// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Ajuste o base para o nome exato do seu repositório:
  // Se seu repositório for "portfolio", use '/portfolio/'
  // Se for "meu-portfolio", use '/meu-portfolio/'
  base: '/meu-portfolio/'
})
