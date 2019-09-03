import cn from 'classnames';
import * as React from 'react';

import { Icon } from '../Icon';
import { Link } from '../Link';

export const Mobile = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <div className="hidden sm:flex flex-1 justify-end">
      <div onClick={() => setShowMenu(!showMenu)}>
        <div className={cn('cursor-pointer ml-3 text-white', { hidden: !showMenu })}>
          <Icon icon={['fad', 'times']} size="2x" />
        </div>

        <div className={cn('cursor-pointer ml-3 text-white', { hidden: showMenu })}>
          <Icon icon={['fad', 'bars']} size="2x" />
        </div>
      </div>

      {showMenu && (
        <div className="fixed pin mt-16 z-50 flex flex-col overflow-y-auto">
          <div className="relative m-4 bg-white rounded shadow-md" onClick={() => setShowMenu(false)}>
            <div className="pt-10 pl-10 flex flex-wrap">
              <Section
                title="Products"
                links={[
                  {
                    to: '/studio',
                    title: 'Stoplight Studio',
                  },
                  {
                    to: '/docs',
                    title: 'Stoplight Docs',
                  },
                  {
                    to: '/hubs',
                    title: 'Stoplight Hubs',
                  },
                  {
                    to: '/enterprise',
                    title: 'Stoplight Enterprise',
                  },
                ]}
              />

              <Section
                title="Use Cases"
                links={[
                  {
                    to: '/design',
                    title: 'Design',
                  },
                  {
                    to: '/documentation',
                    title: 'Documentation',
                  },
                  {
                    to: '/mocking',
                    title: 'Mocking',
                  },
                ]}
              />

              <Section
                title="Open Source"
                links={[
                  {
                    to: '/open-source/spectral',
                    title: 'Spectral',
                  },
                  {
                    to: '/open-source/prism',
                    title: 'Prism',
                  },
                ]}
              />

              <Section
                title="Guides"
                links={[
                  {
                    to: '/api-design-guide/basics',
                    title: 'API Design Guide',
                  },
                  {
                    to: '/mock-api-guide/basics',
                    title: 'API Mocking Guide',
                  },
                  {
                    to: '/api-documentation-guide/basics',
                    title: 'API Documentation Guide',
                  },
                ]}
              />

              <Section
                title="Resources"
                links={[
                  {
                    to: 'http://docs.stoplight.io/',
                    title: 'Help Center',
                  },
                  {
                    to: '/blog',
                    title: 'Blog',
                  },
                  {
                    to: '/forum',
                    title: 'Forum',
                  },
                  {
                    to: '/case-studies',
                    title: 'Case Studies',
                  },
                  {
                    to: '/video',
                    title: 'Webinars',
                  },
                ]}
              />
            </div>

            <Link to="/demo" className="w-full p-4 bg-primary text-white block text-center font-bold mt-10">
              Book a Demo
            </Link>
          </div>

          <div className="flex-grow" onClick={() => setShowMenu(false)} />
        </div>
      )}
    </div>
  );
};

const Section = ({ title, links }) => {
  return (
    <div className="flex-1 flex flex-col mr-10 mb-10" style={{ minWidth: 125 }}>
      <div className="pb-2 uppercase font-bold text-grey-darker border-b">{title}</div>

      {links.map((link, key) => (
        <Link key={key} className="block mt-4 font-medium text-grey-darker" to={link.to}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};
