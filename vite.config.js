import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // External devices (jaise mobile) ko allow karega
    port: 3000,  // Port set kar rahe hain
  }
})
