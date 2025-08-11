import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables
  const env = loadEnv(mode, process.cwd(), '')
  
  // Determine base URL based on environment
  const base = mode === 'production' ? '/Vite-project/' : '/'
  
  return {
    base,
    plugins: [react()],
    build: {
      outDir: 'dist',
      sourcemap: true,
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          404: resolve(__dirname, 'public/404.html')
        },
        output: {
          manualChunks: {
            react: ['react', 'react-dom', 'react-router-dom'],
          },
        },
      },
    },
    server: {
      port: 3000,
      strictPort: true,
      open: true,
      proxy: {
        // Add any API proxies here if needed
      }
    },
    preview: {
      port: 3000,
      strictPort: true,
    },
    // Ensure public directory is properly handled
    publicDir: 'public',
    // Configure environment variables to be available in the client
    define: {
      'process.env.NODE_ENV': `"${mode}"`,
      'process.env.BASE_URL': JSON.stringify(base)
    }
  }
})
