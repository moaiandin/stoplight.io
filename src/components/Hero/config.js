import CallToActionConfig from 'src/components/CallToAction/config';

export default {
  name: 'hero',
  label: 'Hero',
  widget: 'object',
  fields: [
    {
      name: 'title',
      label: 'Title',
      widget: 'string',
      default: 'title',
    },
    {
      name: 'subtitle',
      label: 'Subtitle',
      widget: 'string',
      default: 'subtitle',
    },
    {
      name: 'pageName',
      label: 'Page Name',
      widget: 'string',
      required: false,
      hint: 'Small, muted text above the title.',
    },
    {
      name: 'aligned',
      label: 'Alignment',
      widget: 'select',
      options: ['center', 'left', 'right'],
      default: 'center',
      required: false,
      hint: 'Default: center',
    },
    {
      name: 'ctas',
      label: 'Call To Actions',
      widget: 'list',
      required: false,
      fields: CallToActionConfig.fields,
    },
    {
      name: 'bgColor',
      label: 'Background Color',
      widget: 'string',
      default: 'black',
      hint: 'Default: black',
      required: false,
    },
    {
      name: 'skew',
      label: 'Skew?',
      widget: 'select',
      options: [
        { label: 'slant left', value: '-3deg' },
        { label: 'steeper slant left', value: '-7deg' },
        { label: 'slant right', value: '3deg' },
        { label: 'steeper slant right', value: '7deg' },
        { label: 'rounded', value: 'rounded' },
      ],
      required: false,
    },
    {
      name: 'particles',
      label: 'Show particles?',
      widget: 'boolean',
      required: false,
    },
    {
      name: 'buttons',
      label: 'Buttons',
      widget: 'list',
      required: false,
      fields: [
        {
          name: 'title',
          label: 'Title',
          widget: 'string',
          default: 'title',
          required: false,
        },
        {
          name: 'href',
          label: 'Link',
          widget: 'string',
          required: false,
        },
        {
          name: 'icon',
          label: 'Icon',
          widget: 'string',
          required: false,
          hint: 'Must be a fontawesome icon like check-circle',
        },
      ],
    },
    {
      name: 'cards',
      label: 'Cards',
      widget: 'list',
      required: false,
      fields: [
        {
          name: 'title',
          label: 'Title',
          widget: 'string',
          default: 'Title',
        },
        {
          name: 'subtitle',
          label: 'Subtitle',
          widget: 'string',
          default: 'subtitle',
        },
        {
          name: 'href',
          label: 'Link',
          widget: 'string',
        },
        {
          name: 'bgColor',
          label: 'Background Color',
          widget: 'string',
        },
        {
          name: 'icon',
          label: 'Icon',
          widget: 'object',
          required: false,
          fields: [
            {
              name: 'style',
              label: 'Style',
              widget: 'string',
            },
            {
              name: 'name',
              label: 'Name',
              widget: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'image',
      label: 'Image',
      widget: 'object',
      required: false,
      fields: [
        {
          name: 'src',
          widget: 'image',
          required: false,
        },
        {
          name: 'alt',
          widget: 'string',
          required: false,
        },
        {
          name: 'video',
          label: 'Video URL',
          widget: 'string',
          required: false,
        },
      ],
    },
  ],
};
