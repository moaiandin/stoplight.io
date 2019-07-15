import chokidar from 'chokidar';
import { rebuildRoutes } from 'react-static/node';

import { getRoutes } from './src/utils/getRoutes';
import { getFile } from './src/utils/files';
import { NETLIFY_PATH, SITE_ROOT } from './src/utils/settings';
import { Document } from './src/utils/document';

if (process.env.NODE_ENV !== 'production') {
  chokidar.watch(NETLIFY_PATH).on('change', () => rebuildRoutes());
}

export default {
  siteRoot: SITE_ROOT ? SITE_ROOT : undefined,

  plugins: [
    'react-static-plugin-typescript',
    'react-static-plugin-react-router',
    'react-static-plugin-sass',
    'react-static-plugin-css',
    'react-static-plugin-monaco',
    'react-static-plugin-sitemap',
    'react-static-plugin-robots',
    'react-static-plugin-sharp',
  ],

  getSiteData: () => getFile(`${NETLIFY_PATH}/settings.yaml`),

  getRoutes,

  Document,
};
