import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/devmovie/', // Substitua exatamente pelo nome do seu repositório se for diferente de 'devmovie'
})
