import { defineConfig } from "vite";

export default defineConfig({
    server: {
    proxy: {
    '/locales': {
      target: 'http://localhost:5173',
      changeOrigin: true
    }
  }
}
})