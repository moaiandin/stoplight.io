import fs from 'fs';
import { IS_PRODUCTION, SITE_ROOT } from '../../src/utils/settings';

export default pluginOptions => ({
  afterExport: async state => {
    // Don't allow crawlling of any pages
    let robots = 'User-agent: *\nDisallow: /';

    if (IS_PRODUCTION) {
      // Don't allow crawlling of /lp pages
      robots = `User-agent: *\nDisallow: /lp\nSitemap: ${SITE_ROOT}/sitemap.xml`;
    }

    fs.writeFileSync(`${process.cwd()}/dist/robots.txt`, robots);

    return state;
  },
});
