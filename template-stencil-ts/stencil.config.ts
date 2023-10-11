import type { Config } from '@stencil/core'

// https://stenciljs.com/docs/config
export const config: Config = {
  taskQueue: 'async',
  srcDir: 'src',
  outputTargets: [
    {
      type: 'www',
      buildDir: 'assets',
      dir: 'build',
      serviceWorker: null,
      copy: [{ src: 'options.html' }, { src: 'popup.html' }, { src: 'sidepanel.html' }],
    },
  ],
  sourceMap: false,
  rollupConfig: {
    inputOptions: {
      moduleContext: {
        'content':'./src/global/content',
        'background':'./src/global/background',
      },
      treeshake: true
    },
  },
}