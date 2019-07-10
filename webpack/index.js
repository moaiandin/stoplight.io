import nodePath from 'path';

import cssLoader from './cssLoader';
import tsLoader from './tsLoader';
import sassLoader from './sassLoader';
import babelLoader from './babelLoader';

import CopyPlugin from 'copy-webpack-plugin';
import EnvironmentPlugin from 'webpack/lib/EnvironmentPlugin';
import TerserPlugin from 'terser-webpack-plugin-legacy';

export default (config, { stage, defaultLoaders }) => {
  config.module.rules = [
    {
      oneOf: [
        babelLoader(stage),
        tsLoader(stage),
        defaultLoaders.jsLoader,
        sassLoader(stage),
        cssLoader(stage),
        defaultLoaders.fileLoader,
      ],
    },
  ];

  config.resolve.extensions.push('.ts', '.tsx');

  config.resolve.alias = {
    src: nodePath.resolve(__dirname, '..', 'src'),
    '@stoplight/path': require.resolve('@stoplight/path'),
    'decimal.js': nodePath.resolve(process.cwd(), 'node_modules/decimal.js/decimal.js'),
  };

  config.plugins.push(
    new CopyPlugin([
      {
        from: nodePath.join(__dirname, '..', 'node_modules', '@stoplight', 'monaco', 'monaco-editor', 'monaco-workers'),
        to: 'workers/monaco',
      },
    ])
  );

  const uglifyJsPluginIndex = config.plugins.findIndex(plugin => plugin.constructor.name === 'UglifyJsPlugin');
  if (uglifyJsPluginIndex !== -1) {
    // to be removed after upgrading to 4
    config.plugins.splice(uglifyJsPluginIndex, 1, new TerserPlugin());
  }

  config.plugins.push(
    new EnvironmentPlugin({
      MONACO_WORKERS_ROOT: '/workers/monaco',
    })
  );

  config.node = {
    fs: 'empty',
  };

  return config;
};
