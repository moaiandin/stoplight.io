import nodePath from 'path';

import cssLoader from './cssLoader';
import tsLoader from './tsLoader';
import sassLoader from './sassLoader';

import CopyPlugin from 'copy-webpack-plugin';
import EnvironmentPlugin from 'webpack/lib/EnvironmentPlugin';

export default (config, { stage, defaultLoaders }) => {
  config.module.rules = [
    {
      oneOf: [tsLoader(stage), defaultLoaders.jsLoader, sassLoader(stage), cssLoader(stage), defaultLoaders.fileLoader],
    },
  ];

  config.resolve.extensions.push('.ts', '.tsx');

  config.resolve.alias = {
    src: nodePath.resolve(__dirname, '..', 'src'),
    'decimal.js': nodePath.resolve(process.cwd(), 'node_modules/decimal.js/decimal.js'),
  };

  console.log(nodePath.join(__dirname, 'node_modules', '@stoplight', 'monaco', 'monaco-editor', 'monaco-workers'));
  config.plugins.push(
    new CopyPlugin([
      {
        from: nodePath.join(__dirname, '..', 'node_modules', '@stoplight', 'monaco', 'monaco-editor', 'monaco-workers'),
        to: 'workers/monaco',
      },
    ])
  );

  config.plugins.push(
    new EnvironmentPlugin({
      MONACO_WORKERS_ROOT: 'workers/monaco',
    })
  );

  return config;
};
