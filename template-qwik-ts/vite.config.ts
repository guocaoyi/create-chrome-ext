import { defineConfig } from 'vite'
import { qwikVite } from '@builder.io/qwik/optimizer'
import { dirname, resolve } from 'path'
import { writeFile, mkdir } from 'fs/promises'
import { crx } from '@crxjs/vite-plugin'

import manifest from './src/manifest'

export default defineConfig(({ mode }) => {
  return {
    build: {
      emptyOutDir: true,
      outDir: 'build',
      rollupOptions: {
        // input: {
        //   popup: resolve(__dirname, 'popup.html'),
        //   options: resolve(__dirname, 'options.html'),
        // },
        output: {
          chunkFileNames: 'assets/chunk-[hash].js',
        },
      },
    },
    plugins: [
      crx({ manifest }),
      // qwikVite({
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

async function outputJSON(path: string, data: any) {
  await mkdir(dirname(path), { recursive: true })
  await writeFile(path, JSON.stringify(data, null, 2))
}
