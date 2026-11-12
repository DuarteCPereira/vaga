import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// No GitHub Pages, o site fica em https://<utilizador>.github.io/<repo>/.
// Se mudares o nome do repositório, muda também este caminho.
export default defineConfig({
  plugins: [react()],
  base: '/vaga/',
})
