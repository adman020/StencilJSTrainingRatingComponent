import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'my-rating',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
