import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          'react-core': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          // UI framework chunks
          'ui-base': [
            './src/components/Layout.tsx',
            './src/components/Header.tsx',
            './src/components/Footer.tsx'
          ],
          // Guide-specific components (loaded on demand)
          'guide-utils': [
            './src/components/sub-components/cta-buttons.tsx',
            './src/components/sub-components/faq-component.tsx',
            './src/components/sub-components/how-to-component.tsx',
            './src/components/sub-components/rich-text.tsx',
            './src/components/sub-components/title.tsx'
          ]
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'assets/styles.[hash].css';
          }
          if (assetInfo.name && /\.(png|jpg|jpeg|gif|svg|webp)$/.test(assetInfo.name)) {
            return 'assets/images/[name].[hash][extname]';
          }
          return 'assets/[name].[hash][extname]';
        },
        chunkFileNames: 'assets/js/[name].[hash].js',
        entryFileNames: 'assets/js/[name].[hash].js'
      }
    },
    chunkSizeWarningLimit: 500,
    minify: 'esbuild',
    target: 'es2020', // Updated target for better performance
    cssCodeSplit: false, // Keep CSS in single file for better caching
    reportCompressedSize: false,
    assetsInlineLimit: 1024, // Reduce inline limit for better HTTP/2 performance
  },
  assetsInclude: ['**/*.svg'],
  css: {
    devSourcemap: false,
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ]
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['@vite/client', '@vite/env']
  },
  experimental: {
    renderBuiltUrl(filename) {
      return filename;
    }
  }
}); 