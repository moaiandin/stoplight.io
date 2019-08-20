import cn from 'classnames';
import * as React from 'react';

import { Button } from '../Button';
import { Icon, IconProp } from '../Icon';

export const ProductCards = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className, 'container relative z-5 flex justify-between text-left sm:flex-col sm:items-center')}>
      <ProductCard
        tag="design"
        name="Stoplight Studio"
        title="Next gen editor for API design & technical docs"
        description="Stoplight Studio turns you into an API Design superhero. Create OpenAPI 10x faster, with no prior knowledge, and no mistakes."
        color="blue"
        icon={['fad', 'paint-brush-alt']}
        className="bg-grey-lightest bg-white w-1/2 mx-3 sm:w-full sm:h-128 sm:mb-6"
        href="/studio"
        image="/images/studio-glimpse.png"
      />

      <ProductCard
        tag="scale"
        name="Stoplight Enterprise"
        title="API design management at scale"
        description="The Stoplight Platform increases consistency, visibility, and quality across your internal and external APIs."
        color="indigo"
        icon={['fad', 'chart-network']}
        className="bg-white w-1/2 mx-3 sm:w-full sm:h-128"
        href="/enterprise"
        image="/images/platform-glimpse.png"
      />
    </div>
  );
};

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
    <div className={cn(className, `flex rounded-xl pt-10 pl-10 shadow-lg overflow-hidden`)} style={style}>
      <div className="flex flex-col flex-1 pb-10 h-96 sm:h-full">
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
          className="w-2/5 bg-left-top bg-cover rounded-tl-lg border-l border-t ml-6 mt-12 sm"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
    </div>
  );
};
