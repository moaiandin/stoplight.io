import cta from 'src/components/CallToAction/config';

export default {
  name: 'gartnerCoolVendor',
  label: 'Gartner Cool Vendor',
  widget: 'object',
  required: false,
  fields: [
    {
      name: 'title',
      label: 'Title',
      widget: 'string',
      required: false,
    },
    {
      name: 'image',
      label: 'Image',
      widget: 'image',
      default: '/images/gartner_cv_2019_rgb.png',
      required: false,
    },
    cta,
    {
      name: 'description',
      label: 'Description',
      widget: 'markdown',
      required: false,
    },
  ],
};
