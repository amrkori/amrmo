import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/amrmo/', // لازم اسم الريبو بالضبط
  plugins: [react()],
})
