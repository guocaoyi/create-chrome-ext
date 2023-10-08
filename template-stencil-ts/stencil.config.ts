import { Config } from '@stencil/core'

// https://stenciljs.com/docs/config

export const config: Config = {
  taskQueue: 'async',

  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      copy: [{ src: 'options.html' }, { src: 'popup.html' }, { src: 'sidepanel.html' }],
    },
  ],
}
