// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/devmovie/', // OBRIGATÓRIO para o GitHub Pages encontrar os arquivos na subpasta
})
