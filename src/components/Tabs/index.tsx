import cn from 'classnames';
import * as React from 'react';
import { withRouteData } from 'react-static';

import { Link } from '../Link';

export interface ITab {
  href: string;
  title: string;
  isActive?: boolean;
}

export interface ITabs {
  tabs: ITab[];
  className?: string;
}

export const Tab: React.FunctionComponent<ITab> = ({ isActive, href, title }) => {
  return (
    <Link
      className={cn('whitespace-no-wrap border-t-4 border-lighten-300 relative', {
        'text-white border-transparent': !isActive,
      })}
      style={{ top: 4 }}
      to={href}
    >
      <div
        className={cn('pt-3 pb-4 px-6 font-semibold', {
          'bg-grey-lightest text-black': isActive,
          'hover:bg-lighten-100': !isActive,
        })}
      >
        {title}
      </div>
    </Link>
  );
};

export const Tabs: React.FunctionComponent<ITabs> = withRouteData(({ tabs, path, className }) => {
  const reg = new RegExp(`^${path}$`);

  return (
    <div className={cn(className, 'relative z-5 border-b-4 border-lighten-300')}>
      <div className="container flex flex-no-wrap w-full sm:flex-col sm:text-center -mb-1 pb-1 sm:-mb-2 sm:-mt-14">
        {tabs.map(tab => (
          <Tab key={tab.href} isActive={reg.test(tab.href)} {...tab} />
        ))}
      </div>
    </div>
  );
});
