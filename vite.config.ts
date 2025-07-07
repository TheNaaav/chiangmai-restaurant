import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    minify: 'terser', // bättre komprimering än 'esbuild'
    assetsInlineLimit: 0, // förhindra att stora bilder bäddas in som base64
    rollupOptions: {
      output: {
        manualChunks: {
          // dela upp vendor-kod
          react: ['react', 'react-dom'],
        },
      },
    },
  },
})
