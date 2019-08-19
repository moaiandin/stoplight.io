import cn from 'classnames';
import * as React from 'react';

import { Icon, IconProp } from '../Icon';
import { Image } from '../Image';
import { Link } from '../Link';
import { indexMap } from './index';

export interface IHeroCard {
  index: number;
  title: string;
  subtitle: string;
  href: string;
  bgColor: string;
  icon: IconProp;
  image: string;
}

export const HeroCard: React.FunctionComponent<IHeroCard> = ({
  index,
  title,
  subtitle,
  href,
  bgColor = 'black',
  icon,
  image,
}) => {
  return (
    <Link
      to={href}
      className={cn(
        'HeroBlock',
        'md:mb-6',
        'shadow relative flex flex-col flex-1 h-48 md:h-40 overflow-hidden rounded-md p-6 mx-3 text-left z-10 text-white',
        `block-${indexMap[index]}`,
        {
          [`bg-${bgColor}`]: bgColor,
          'cursor-pointer': href,
        },
      )}
    >
      <div className="flex items-center">
        {icon && <Icon icon={icon} className="mr-3" />} <h3>{title}</h3>
      </div>

      {subtitle && <div className="mt-4 leading-loose">{subtitle}</div>}

      {image && <Image src={image} className="rounded-full bg-cover h-48 w-32" size="sm" useDiv />}
      <div className={cn(`triangle-${indexMap[index]}`, 'platform-block-triangle')} />
    </Link>
  );
};
