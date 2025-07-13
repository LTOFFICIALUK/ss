import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// Custom plugin to optimize resource loading
const optimizeResourcesPlugin = () => {
  return {
    name: 'optimize-resources',
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        if (ctx.bundle) {
          // Find CSS files
          const cssFiles = Object.keys(ctx.bundle).filter(file => 
            file.startsWith('assets/styles.') && file.endsWith('.css')
          );
          
          let optimizations = '';
          
          // Add preconnect hints for the domain
          optimizations += `    <link rel="preconnect" href="https://www.successfulstreamer.com" crossorigin>\n`;
          
          // Add CSS preload if CSS file exists
          if (cssFiles.length > 0) {
            optimizations += `    <link rel="preload" href="/${cssFiles[0]}" as="style" onload="this.onload=null;this.rel='stylesheet'">\n`;
            optimizations += `    <noscript><link rel="stylesheet" href="/${cssFiles[0]}"></noscript>\n`;
          }
          
          // Insert optimizations after the critical CSS
          html = html.replace(
            '</style>',
            `</style>\n${optimizations}`
          );
          
          // Remove the render-blocking CSS link that Vite adds
          if (cssFiles.length > 0) {
            const cssLinkPattern = new RegExp(`<link rel="stylesheet" crossorigin href="${cssFiles[0]}">`, 'g');
            html = html.replace(cssLinkPattern, '');
          }
          
          return html;
        }
        return html;
      }
    }
  };
};

export default defineConfig({
  plugins: [react(), optimizeResourcesPlugin()],
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
    target: 'es2020',
    cssCodeSplit: false,
    reportCompressedSize: false,
    assetsInlineLimit: 512, // Reduce further to prioritize HTTP/2 caching over inlining
  },
  assetsInclude: ['**/*.svg', '**/*.webp'], // Explicitly include WebP files
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