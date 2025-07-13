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
    sourcemap: false, // Disable sourcemaps for production
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-components': [
            './src/components/Layout.tsx',
            './src/components/Header.tsx',
            './src/components/Footer.tsx'
          ]
        },
        // Better asset naming for caching
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
    chunkSizeWarningLimit: 1000,
    minify: 'esbuild',
    target: 'es2015',
    cssCodeSplit: true, // Enable CSS code splitting
    reportCompressedSize: false, // Disable for faster builds
    assetsInlineLimit: 4096, // Inline assets smaller than 4KB
  },
  assetsInclude: ['**/*.svg'],
  // Optimize CSS
  css: {
    devSourcemap: false,
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ]
    }
  },
  // Improve dependency pre-bundling
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['@vite/client', '@vite/env']
  },
  // Enable gzip compression for better performance
  experimental: {
    renderBuiltUrl(filename) {
      return filename;
    }
  }
}); 