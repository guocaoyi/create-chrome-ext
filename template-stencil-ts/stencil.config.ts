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
      copy: [
        { src: 'devtools.html' },
        { src: 'newtab.html' },
        { src: 'options.html' },
        { src: 'popup.html' },
        { src: 'sidepanel.html' },
        { src: 'background/index.js' },
        { src: 'contentScript/index.js' },
      ],
    },
  ],
  sourceMap: false,
  rollupConfig: {
    inputOptions: {
      moduleContext: {
        content: './src/contentScript',
        background: './src/background',
      },
      treeshake: true,
    },
  },
}
