import cn from 'classnames';
import * as React from 'react';

import { Icon, IconProp } from '../Icon';
import { Link } from '../Link';

export interface IHeroButton {
  title: string;
  href: string;
  icon?: IconProp;
  color?: string;
}

export const HeroButton: React.FunctionComponent<IHeroButton> = ({ title, icon, href, color }) => {
  if (!href && !title && !icon) {
    return null;
  }

  const className = cn('flex items-center py-3 text-grey-darkest pl-4 pr-6 sm:m-3 mx-3 shadow-md bg-white rounded-md', {
    'hover:opacity-93 cursor-pointer': href,
    'cursor-default': !href,
  });

  const elems: JSX.Element[] = [];

  if (icon) {
    elems.push(<Icon key="1" icon={icon} className={cn('mr-2 text-lg', `text-${color || 'green'}`)} />);
  }

  if (title) {
    elems.push(
      <div key="2" className="font-semibold whitespace-no-wrap">
        {title}
      </div>,
    );
  }

  let elem;
  if (href) {
    elem = (
      <Link to={href} className={className}>
        {elems}
      </Link>
    );
  } else {
    elem = <div className={className}>{elems}</div>;
  }

  return <div className="sm:w-1/2">{elem}</div>;
};
