import { defineConfig } from 'vite'
import { crx } from '@crxjs/vite-plugin'
import inferno from 'vite-plugin-inferno'

import manifest from './src/manifest'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    build: {
      emptyOutDir: true,
      outDir: 'build',
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/chunk-[hash].js',
        },
      },
    },

    plugins: [crx({ manifest }), inferno()],
  }
})
