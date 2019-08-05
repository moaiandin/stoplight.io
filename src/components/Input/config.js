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
      required: false,
    },
    {
      name: 'placeholder',
      label: 'Placeholder',
      widget: 'string',
      required: false,
    },
  ],
};
