import cta from 'src/components/CallToAction/config';

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
      required: false,
    },
    {
      name: 'text',
      label: 'Text',
      widget: 'string',
      required: false,
    },
    {
      name: 'ctas',
      label: 'CTAs',
      widget: 'list',
      fields: cta.fields,
      required: false,
    },
  ],
};
