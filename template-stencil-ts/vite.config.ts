import { defineConfig } from 'vite'
import { resolve } from 'path'
import { crx } from '@crxjs/vite-plugin'
import vitePluginStencil from 'vite-plugin-stencil'
import zipPack from 'vite-plugin-zip-pack';
import manifest from './src/manifest'

import type { Config } from '@stencil/core'

export default defineConfig(({ mode }) => {
  return {
    build: {
      emptyOutDir: true,
      outDir: 'build',
      rollupOptions: {
        input: {
          popup: resolve(__dirname, './src/popup.html'),
          options: resolve(__dirname, './src/options.html'),
        },
        output: {
          chunkFileNames: 'assets/chunk-[hash].js',
        },
      },
    },
    plugins: [
      crx({ manifest }),
      vitePluginStencil({
        manifest: {
          name: 'stencil crx',
          short_name: 'stencil',
          start_url: '/',
          display: 'standalone',
          icons: [
            {
              src: 'assets/icon/icon.png',
              sizes: '512x512',
              type: 'image/png',
            },
          ],
          background_color: '#16161d',
          theme_color: '#16161d',
        },
        config: {
          globalStyle: 'src/global/app.css',
          globalScript: 'src/global/app.ts',
          taskQueue: 'async',
          outputTargets: [
            {
              type: 'www',
              // comment the following line to disable service workers in production
              serviceWorker: null,
              baseUrl: 'https://myapp.local/',
            },
          ],
        },
      } as Config),zipPack({
        outDir: `package`,
        inDir: 'build',
        // @ts-ignore
        outFileName: `${manifest.short_name ?? manifest.name.replaceAll(" ", "-")}-extension-v${manifest.version}.zip`,
      }),
    ],
  }
})
