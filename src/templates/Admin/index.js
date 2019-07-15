import React from 'react';

import { About } from 'src/templates/About';
import { Form } from 'src/templates/Form';
import { Home } from 'src/templates/Home';
import { Landing } from 'src/templates/Landing';
import { Pricing } from 'src/templates/Pricing';
import { Subpage } from 'src/templates/Subpage';
import { List } from 'src/templates/Lists';
import Settings from 'src/components/Settings';
import { convertMarkdownToHTML } from 'src/utils/markdown';

import { config } from './config';

import appStyles from '!css-loader!./styles.css';

const templates = {
  settings: Settings,

  form: Form,
  about: About,
  home: Home,
  pricing: Pricing,

  lists: List,
  author: List,
  landings: Landing,

  subpage: Subpage,
  caseStudy: Subpage,
  blogPost: Subpage,
};

export default () => {
  React.useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    import(`netlify-cms-app`).then(({ default: CMS }) => {
      CMS.registerPreviewStyle(appStyles.toString(), { raw: true });

      Object.keys(templates).forEach(collectionName => {
        const Template = templates[collectionName];

        if (Template) {
          CMS.registerPreviewTemplate(collectionName, ({ entry }) => {
            const props = entry.getIn(['data']).toJS();

            return <Template {...convertMarkdownToHTML(props, { includeToc: props.includeToc })} />;
          });
        }
      });

      CMS.init({ config });
    });

    import(`netlify-identity-widget`).then(({ default: netlifyIdentityWidget }) => {
      netlifyIdentityWidget.on(`init`, user => {
        if (!user) {
          netlifyIdentityWidget.open('login'); // open the modal to the login tab

          netlifyIdentityWidget.on(`login`, () => {
            document.location.href = '/admin/';
          });
        }
      });

      netlifyIdentityWidget.init();
    });
  }, []);

  return <div />;
};
