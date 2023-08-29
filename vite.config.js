import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isProd = mode === 'production';
  console.log('env: ', mode, command)
  return {
    plugins: [
      vue(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      host: 'localhost',
      port: 8080,
      proxy: {
        '/api': {
          target: 'IP/URL',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    build: {
      outDir: isProd ? 'dist' : 'dist-dev',
      assetsDir: 'assets',
      cssCodeSplit: false,
      sourcemap: isProd,
      minify: isProd,
    }
  }
});
