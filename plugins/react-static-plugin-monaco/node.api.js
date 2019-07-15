import path from 'path';
import CopyPlugin from 'copy-webpack-plugin';
import { EnvironmentPlugin } from 'webpack';

export default ({ includePaths = [] }) => ({
  webpack: (config, { stage, isNode }) => {
    config.resolve.alias['decimal.js'] = path.resolve(process.cwd(), 'node_modules/decimal.js/decimal.js');

    config.plugins.push(
      new CopyPlugin([
        {
          from: path.join(
            __dirname,
            '..',
            '..',
            'node_modules',
            '@stoplight',
            'monaco',
            'monaco-editor',
            'monaco-workers'
          ),
          to: 'workers/monaco',
        },
      ])
    );

    config.plugins.push(
      new EnvironmentPlugin({
        MONACO_WORKERS_ROOT: '/workers/monaco',
      })
    );

    config.node = {
      fs: 'empty',
    };
  },
});
