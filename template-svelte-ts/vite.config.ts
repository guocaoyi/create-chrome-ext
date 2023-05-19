import { defineConfig } from 'vite'
import { crx } from '@crxjs/vite-plugin'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'
import sveltePreprocess from 'svelte-preprocess'
import zipPack from 'vite-plugin-zip-pack';
import manifest from './src/manifest'

export default defineConfig(({ mode }) => {
  const production = mode === 'production'

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
      svelte({
        compilerOptions: {
          dev: !production,
        },
        preprocess: sveltePreprocess(),
      }),
      zipPack({
        outDir: `package`,
        inDir: 'build',
        // @ts-ignore
        outFileName: `${manifest.short_name ?? manifest.name.replaceAll(" ", "-")}-extension-v${manifest.version}.zip`,
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  }
})
