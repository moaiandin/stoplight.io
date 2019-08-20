import cn from 'classnames';
import * as React from 'react';

import { IHeaderItem } from '.';
import { Icon, IconProp } from '../Icon';
import { Link } from '../Link';
import { Popup } from '../Popup';

const DropdownItem = (item, index) => {
  if (item.divider) {
    return <div key={index} style={{ height: 1 }} className="bg-grey-light my-3" />;
  }

  return (
    <Link
      key={index}
      to={item.href}
      className={cn('flex items-center pr-6 py-2 rounded-lg text-black hover:bg-darken-50', {
        'pl-3': !item.icon,
      })}
    >
      {item.icon && (
        <div className="w-10 text-center mr-2">
          <Icon className={cn(item.titleColor && `text-${item.titleColor}`)} icon={item.icon} />
        </div>
      )}

      {item.title}
    </Link>
  );
};

const HeaderDropdown: React.FunctionComponent<IHeaderItem> = ({ width, title, links, content, className }) => {
  if (!content && (!links || !links.length)) {
    return null;
  }

  return (
    <Popup
      width={width}
      posX="center"
      posY="bottom"
      renderTrigger={(attributes, { isVisible }) => (
        <div
          className={cn(
            className,
            'flex select-none cursor-default text-white rounded-lg px-3 py-1 mx-3 hover:bg-lighten-50 opacity-85 relative',
            {
              'opacity-100 bg-lighten-50': isVisible,
            },
          )}
          {...attributes}
        >
          {title}

          {isVisible && (
            <div className="HeaderPopover__caret text-grey-lighter">
              <Icon icon={['fad', 'caret-up']} />
            </div>
          )}
        </div>
      )}
      renderContent={() => (
        <div className="HeaderPopover bg-grey-lighter rounded-lg shadow-lg relative">
          {links && <div className="p-3">{links.map(DropdownItem)}</div>}
          {content && content()}
        </div>
      )}
    />
  );
};

const HeaderButton: React.FunctionComponent<IHeaderItem> = ({ title, href, icon, className }) => {
  return (
    <Link
      key="2"
      to={href}
      className={cn(
        'py-1 px-3 ml-6 flex items-center border rounded-lg text-white hover:text-white border-lighten-300 hover:border-lighten-500 bg-lighten-50 whitespace-no-wrap',
        className,
      )}
    >
      {title} {icon && <Icon icon={icon} className="ml-3" />}
    </Link>
  );
};

const ProductLink = ({
  name,
  description,
  className,
  color,
  tag,
  href,
  icon,
}: {
  name: string;
  description: string;
  className?: string;
  color: string;
  tag?: string;
  href: string;
  icon?: IconProp;
}) => {
  return (
    <Link
      to={href}
      className={cn(className, `text-black border flex-1 rounded-lg p-6 bg-white hover:border-${color} cursor-pointer`)}
      style={{ width: 275 }}
    >
      {tag && (
        <div
          className={`inline-block rounded-full bg-${color}-lightest text-${color} text-sm font-semibold uppercase px-3 py-1 mb-2`}
        >
          {tag}
        </div>
      )}

      <div className="flex items-center">
        {icon && <Icon icon={icon} className={`text-lg mr-3 text-${color}`} />}
        <div className="text-lg whitespace-no-wrap font-medium">{name}</div>
        <Icon icon={['fad', 'arrow-right']} className="ml-4 text-grey-dark" />
      </div>

      <div className="text-grey-dark mt-1">{description}</div>
    </Link>
  );
};

const ProductLinks = () => {
  return (
    <div className="p-6">
      <div className="uppercase font-medium text-grey-darker ml-2">For Developers & Technical Writers</div>

      <div className="flex mt-3">
        <ProductLink
          name="Stoplight Studio"
          description="Next gen editor for OpenAPI, markdown, and JSON schema."
          className="mr-2"
          color="blue"
          href="/studio"
          tag="design"
        />

        <ProductLink
          name="Stoplight Docs"
          description="Beautiful free technical documentation in a single click."
          className="ml-2"
          color="green"
          href="/docs"
          tag="docs"
        />
      </div>

      <div className="uppercase font-medium text-grey-darker ml-2 mt-6">For Teams & Companies</div>

      <div className="flex mt-3">
        <ProductLink
          name="Stoplight Hubs"
          description="Custom branded documentation portals, hosted at your domain."
          className="mr-2"
          color="orange"
          href="/hubs"
          tag="docs"
        />

        <ProductLink
          name="Stoplight Enterprise"
          description="API docs & design management at scale for large organizations."
          className="ml-2"
          color="indigo"
          href="/enterprise"
          tag="scale"
        />
      </div>
    </div>
  );
};

const OpenSourceLinks = () => {
  return (
    <div className="p-6">
      <div className="flex">
        <ProductLink
          name="Spectral"
          description="Create API style guides to increase API consistency and quality."
          className="mr-2"
          color="blue"
          href="/open-source/spectral"
          icon={['fad', 'badge-check']}
        />

        <ProductLink
          name="Prism"
          description="Powerful mock servers, driven by your OpenAPI design documents."
          className="ml-2"
          color="green"
          href="/open-source/prism"
          icon={['fad', 'database']}
        />
      </div>
    </div>
  );
};

export const Desktop: React.FunctionComponent<{ items: IHeaderItem[]; unpinned: boolean }> = ({ items, unpinned }) => {
  if (!items || !items.length) return null;

  const nonButtons = items.filter(i => !i.isButton);
  const buttons = items.filter(i => i.isButton);

  const nonButtonElems = nonButtons.map((item, index) => {
    const { title, href, links, altTitle } = item;

    if (links && links.length) {
      return <HeaderDropdown key={index} className="text-lg sm:hidden" {...item} />;
    }

    return (
      <Link
        key={index}
        to={href}
        className="opacity-85 hover:opacity-100 text-lg sm:hidden text-white hover:text-white rounded-lg px-3 py-1 mx-4 hover:bg-lighten-50"
      >
        {unpinned ? altTitle || title : title}
      </Link>
    );
  });

  const buttonElems = buttons.map((item, index) => {
    const { title, href, icon, altTitle, altBg } = item;

    return (
      <HeaderButton
        key={index}
        title={unpinned ? altTitle || title : title}
        href={href}
        icon={icon}
        className={cn('text-lg sm:hidden', {
          [`bg-${altBg} ease-in`]: unpinned && altBg,
        })}
      />
    );
  });

  return (
    <>
      <HeaderDropdown title="Products" className="sm:hidden text-lg" content={() => <ProductLinks />} />
      {nonButtonElems}
      <HeaderDropdown title="Open Source" className="sm:hidden text-lg" content={() => <OpenSourceLinks />} />
      <div className="flex-1" />
      {buttonElems}
    </>
  );
};
