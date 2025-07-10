import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
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
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'assets/styles.[hash].css';
          }
          if (assetInfo.name.endsWith('.png') || 
              assetInfo.name.endsWith('.jpg') || 
              assetInfo.name.endsWith('.svg')) {
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
    cssCodeSplit: true,
    assetsInlineLimit: 4096
  },
  assetsInclude: ['**/*.svg'],
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  }
}); 