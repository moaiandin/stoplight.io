import button from 'src/components/Button/config';

export default {
  name: 'actionBar',
  label: 'Action Bar',
  widget: 'object',
  required: false,
  fields: [
    {
      name: 'enabled',
      label: 'Enabled?',
      widget: 'boolean',
      default: false,
      hint: 'Default: false',
    },
    {
      name: 'text',
      label: 'Text',
      widget: 'string',
    },
    {
      name: 'headline',
      label: 'Headline',
      widget: 'string',
    },
    {
      name: 'buttons',
      label: 'Buttons',
      widget: 'list',
      fields: button.fields,
    },
    {
      name: 'links',
      label: 'Links',
      widget: 'string',
    },
    {
      name: 'icon',
      label: 'Icon',
      widget: 'string',
      required: false,
    },
  ],
};
