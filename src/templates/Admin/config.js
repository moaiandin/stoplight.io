import SettingsConfig from 'src/components/Settings/config';

import AboutConfig from 'src/templates/About/config';
import HomeConfig from 'src/templates/Home/config';
import PricingConfig from 'src/templates/Pricing/config';

import FormConfig from 'src/templates/Form/config';
import LandingConfig from 'src/templates/Landing/config';
import { ListsConfig, AuthorConfig } from 'src/templates/Lists/config';
import { SubpageConfig, BlogPostConfig, CaseStudyConfig } from 'src/templates/Subpage/config';

export const config = {
  backend: {
    name: 'git-gateway',
    branch: 'develop',
    squash_merges: true,
    commit_messages: {
      create: 'Create {{collection}} “{{slug}}”',
      update: 'Update {{collection}} “{{slug}}”',
      delete: 'Delete {{collection}} “{{slug}}”',
      uploadMedia: 'Upload “{{path}}”',
      deleteMedia: 'Delete “{{path}}”',
    },
  },
  publish_mode: 'editorial_workflow',
  media_folder: 'public/images',
  public_folder: '/images',
  display_url: 'https://stoplight.io',
  site_domain: 'cms.netlify.com',
  collections: [
    SettingsConfig,
    {
      label: 'Pages',
      label_singular: 'Page',
      name: 'pages',
      delete: false,
      files: [AboutConfig, HomeConfig, PricingConfig],
    },
    FormConfig,
    LandingConfig,
    ListsConfig,
    SubpageConfig,
    AuthorConfig,
    CaseStudyConfig,
    BlogPostConfig,
  ],
};
