import { colors } from 'src/utils/netlify';
import submit from '../Submit/config';

export default {
  name: 'cta',
  label: 'Call to action',
  widget: 'object',
  required: false,
  fields: [
    {
      name: 'title',
      label: 'Title',
      widget: 'string',
      hint: 'Leave blank to hide',
      required: false,
    },
    {
      label: 'Color',
      name: 'color',
      widget: 'select',
      options: colors,
      default: 'black',
      required: false,
    },
    {
      name: 'href',
      label: 'Link',
      widget: 'string',
      default: 'https://next.stoplight.io',
      hint: 'Default: https://next.stoplight.io',
      required: false,
    },
    {
      name: 'icon',
      label: 'Icon',
      widget: 'string',
      required: false,
    },
    {
      name: 'download',
      label: 'Download File',
      widget: 'string',
      required: false,
      hint: 'URL to file to download',
    },
    {
      name: 'type',
      label: 'Type',
      widget: 'select',
      options: ['link', 'video', 'submit'],
      default: 'link',
      required: false,
    },
    submit,
    {
      name: 'outlined',
      label: 'Outlined?',
      widget: 'boolean',
      required: false,
    },
  ],
};
