import { Config } from '@stencil/core'
import type Rollup from 'rollup'

const rollupcrx = (hook: string = 'buildStart') => {
  return {
    name: 'copy-file',
    [hook]: async (options: Rollup.InputOptions) => {
      console.log('copy-file', options)
    },
  }
}

// https://stenciljs.com/docs/config
export const config: Config = {
  taskQueue: 'async',
  srcDir: 'src',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null,
      copy: [{ src: 'options.html' }, { src: 'popup.html' }, { src: 'sidepanel.html' }],
    },
  ],
  rollupPlugins: {
    before: [rollupcrx()],
    after: [rollupcrx()],
  },
}
