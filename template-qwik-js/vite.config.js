import { defineConfig } from 'vite'
import { qwikVite } from '@builder.io/qwik/optimizer'
import { dirname, resolve } from 'path'
import { writeFile, mkdir } from 'fs/promises'
import { crx } from '@crxjs/vite-plugin'

import manifest from './src/manifest.js'

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
    plugins: [
      crx({ manifest }),
      // qwikVite({
      //   // On `clientonly` mode, lets disable SSR in development, so app is fully client bootstrapped
      //   ssr: mode === 'clientonly' ? false : undefined,
      //   srcDir: resolve('./src'),
      //   entryStrategy: {
      //     type: 'single',
      //   },
      //   // symbolsOutput: (data) => {
      //   //   outputJSON('./server/q-symbols.json', data)
      //   // },
      // }),
    ],
  }
})

async function outputJSON(path, data) {
  await mkdir(dirname(path), { recursive: true })
  await writeFile(path, JSON.stringify(data, null, 2))
}
