import { colors } from 'src/utils/netlify';

export default {
  name: 'button',
  label: 'Button',
  widget: 'object',
  fields: [
    {
      name: 'outlined',
      label: 'Outlined?',
      widget: 'boolean',
    },
    {
      name: 'title',
      label: 'Title',
      widget: 'string',
    },
    {
      name: 'href',
      label: 'Link',
      widget: 'string',
    },
    {
      label: 'Color',
      name: 'color',
      widget: 'select',
      options: colors,
      default: 'purple',
      hint: 'Default: purple',
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
      options: ['link', 'video'],
      default: 'link',
      required: false,
    },
  ],
};
