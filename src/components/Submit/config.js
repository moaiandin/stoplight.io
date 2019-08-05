import button from 'src/components/Button/config';
import input from 'src/components/Input/config';

export default {
  name: 'submit',
  label: 'Submit',
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
    button,
    input,
    {
      name: 'formId',
      label: 'Hubspot FormId',
      widget: 'string',
    },
  ],
};
