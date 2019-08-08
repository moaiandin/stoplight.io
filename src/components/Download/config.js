import { colors } from 'src/utils/netlify';

export default {
  name: 'download',
  label: 'Download',
  widget: 'object',
  required: false,
  fields: [
    {
      name: 'href',
      label: 'Link',
      widget: 'string',
    },
    {
      name: 'name',
      label: 'Name',
      widget: 'string',
      required: false,
    },
    {
      name: 'fileName',
      label: 'File Name?',
      widget: 'string',
      required: false,
    },
    {
      name: 'icon',
      label: 'Icon',
      widget: 'string',
      required: false,
    },
    {
      name: 'color',
      label: 'Color',
      widget: 'select',
      options: colors,
      default: 'purple',
    },
  ],
};
