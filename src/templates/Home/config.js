import hero from 'src/components/Hero/config';
import metaTags from 'src/components/MetaTags/config';

import collage from 'src/components/Collage/config';
import imageCallout from 'src/components/ImageCallout/config';
import testimonials from 'src/components/Testimonials/config';
import actionBar from 'src/components/ActionBar/config';

export default {
  label: 'Home',
  name: 'home',
  file: 'netlify/pages/home.yaml',
  fields: [hero, collage, imageCallout, testimonials, actionBar, metaTags],
};
