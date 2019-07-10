import { join } from 'path';

export default stage => ({
  test: /\.js$/,
  include: [join(__dirname, '../node_modules/@stoplight/path')],
  use: {
    loader: 'babel-loader',
    options: {},
  },
});
