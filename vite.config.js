import { defineConfig } from "vite";
import { VirtualHtmlPlugin } from "vite-plugin-virtual-html";

export default defineConfig({
    plugins: [VirtualHtmlPlugin({
        pages: {
            index: '/index.html',
            Suggestion: '/src/views/Suggestion.html',
            Creativity: '/src/views/Creativity.html'
        },
        indexPage: 'index'
    })],
    base: '/',
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:8000',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '') // 重写路径（去掉 /api）
            }
        }
    }
})