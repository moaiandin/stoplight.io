import { colors } from 'src/utils/netlify';
import submit from '../Submit/config';

export default {
  name: 'cta',
  label: 'Call to action',
  widget: 'object',
  required: false,
  fields: [
    {
      name: 'name',
      label: 'Name',
      widget: 'string',
      hint: 'Leave blank to hide',
    },
    {
      label: 'Color',
      name: 'color',
      widget: 'select',
      options: colors,
      default: 'black',
    },
    {
      name: 'href',
      label: 'Link',
      widget: 'string',
      default: 'https://next.stoplight.io',
      hint: 'Default: https://next.stoplight.io',
    },
    {
      name: 'icon',
      label: 'Icon',
      widget: 'string',
      required: false,
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
