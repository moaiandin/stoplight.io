import metaTags from 'src/components/MetaTags/config';
import hero from 'src/components/Hero/config';
import hubspot from 'src/components/HubSpotForm/config';
import collage from 'src/components/Collage/config';
import imageCallout from 'src/components/ImageCallout/config';
import featureSection from 'src/components/FeatureSection/config';
import actionBar from 'src/components/ActionBar/config';
import { colors } from 'src/utils/netlify';

export default {
  label: 'Landing Pages',
  label_singular: 'Landing Page',
  name: 'landings',
  folder: 'netlify/landings',
  create: true,
  delete: true,
  slug: '{{slug}}',
  extension: 'yaml',
  fields: [
    {
      label: 'URL path',
      name: 'path',
      widget: 'string',
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      hint: 'Only used for Admin reference',
    },
    {
      label: 'Color',
      name: 'color',
      widget: 'select',
      options: colors,
      default: 'black',
    },
    {
      label: 'Tags',
      name: 'tags',
      widget: 'list',
      required: false,
      field: { label: 'tag', name: 'tag', widget: 'string', required: false },
    },
    {
      label: 'Related Tags',
      name: 'relatedTags',
      widget: 'list',
      required: false,
      field: { label: 'tag', name: 'tag', widget: 'string', required: false },
    },
    {
      name: 'hasSandbox',
      widget: 'boolean',
      required: false,
      hidden: true,
    },
    hero,
    collage,
    imageCallout,
    featureSection,
    hubspot,
    metaTags,
    actionBar,
  ],
};
