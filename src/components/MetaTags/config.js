export default {
  label: 'Meta Tags',
  name: 'meta',
  widget: 'object',
  required: false,
  hint: 'Defaults to the meta tags defined in Site Settings',
  fields: [
    {
      label: 'Favicon',
      name: 'favicon',
      widget: 'image',
      required: false,
    },
    {
      name: 'title',
      label: 'Site Name',
      widget: 'string',
      required: false,
    },
    {
      label: 'description',
      name: 'description',
      widget: 'string',
      required: false,
    },
    {
      label: 'URL',
      name: 'url',
      widget: 'string',
      required: false,
    },
    {
      label: 'Image',
      name: 'image',
      widget: 'image',
      required: false,
    },
    {
      label: 'Robots',
      name: 'robots',
      widget: 'string',
      default: 'index, follow',
      required: false,
    },
    {
      label: 'Canonical',
      name: 'canonical',
      widget: 'string',
      required: false,
    },
    {
      label: 'Twitter',
      name: 'twitter',
      widget: 'object',
      required: false,
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
          required: false,
        },
        {
          label: 'Description',
          name: 'description',
          widget: 'string',
          required: false,
        },
        {
          label: 'Image',
          name: 'image',
          widget: 'image',
          required: false,
        },
        {
          label: 'Username',
          name: 'username',
          widget: 'string',
          required: false,
        },
      ],
    },
  ],
};
