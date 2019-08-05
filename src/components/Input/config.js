export default {
  name: 'input',
  label: 'Input',
  widget: 'object',
  required: false,
  fields: [
    {
      name: 'type',
      label: 'Type',
      widget: 'string',
      default: 'email',
    },
    {
      name: 'placeholder',
      label: 'Placeholder',
      widget: 'string',
      required: false,
    },
  ],
};
