import button from 'src/components/Button/config';
import input from 'src/components/Input/config';

export default {
  name: 'submit',
  label: 'Submit',
  widget: 'object',
  required: false,
  fields: [
    button,
    input,
    {
      name: 'formId',
      label: 'Hubspot FormId',
      widget: 'string',
      required: false,
    },
  ],
};
