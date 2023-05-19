import * as path from 'path'
import { defineConfig } from 'vite'
import { crx } from '@crxjs/vite-plugin'
import zipPack from 'vite-plugin-zip-pack';
import manifest from './src/manifest.js'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    build: {
      emptyOutDir: true,
      outDir: 'build',
      rollupOptions: {
        input: {
          options: path.resolve('options.html'),
          popup: path.resolve('popup.html'),
        },
        output: {
          chunkFileNames: 'assets/chunk-[hash].js',
        },
      },
    },
    plugin: [crx({ manifest }),zipPack({
        outDir: `package`,
        inDir: 'build',
        // @ts-ignore
        outFileName: `${manifest.short_name ?? manifest.name.replaceAll(" ", "-")}-extension-v${manifest.version}.zip`,
      }),],
  }
})
