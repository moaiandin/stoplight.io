import cn from 'classnames';
import * as React from 'react';

import { Button } from '../Button';
import { Icon, IconProp } from '../Icon';

export const ProductCard = ({
  name,
  title,
  description,
  className,
  color,
  icon,
  tag,
  href,
  style,
  image,
}: {
  name: string;
  title: string;
  description: string;
  className?: string;
  color: string;
  icon?: IconProp;
  tag: string;
  href: string;
  style?: any;
  image?: string;
}) => {
  return (
    <div
      className={cn(className, `flex rounded-xl pt-10 pl-10 sm:px-5 sm:pt-5 shadow-lg overflow-hidden`)}
      style={style}
    >
      <div className="flex flex-col flex-1 pb-10 sm:pb-5 h-96 sm:h-auto">
        <div className="flex">
          <div
            className={`flex items-center rounded-full border border-${color}-lighter bg-${color}-lightest text-${color} uppercase font-semibold px-4 py-1`}
          >
            {icon && <Icon icon={icon} className="mr-3" />} <div>{tag}</div>
          </div>
        </div>

        <h2 className="mt-4">{title}</h2>

        <div className="text-lg text-grey-darker leading-loose mt-4 flex-1">{description}</div>

        <div className="sm:mt-6">
          <Button href={href} color={color} shadow="md" rightIcon={['fad', 'arrow-right']}>
            {name}
          </Button>
        </div>
      </div>

      {image && (
        <div
          className="w-2/5 sm:hidden bg-left-top bg-cover rounded-tl-lg border-l border-t ml-6 mt-12 sm"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
    </div>
  );
};
