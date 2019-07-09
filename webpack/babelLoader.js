import { join } from 'path';

export default stage => ({
  test: /\.js$/,
  include: [join(require.resolve('@stoplight/path', '..'))],
  use: {
    loader: 'babel-loader',
    options: {},
  },
});
