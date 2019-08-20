import cn from 'classnames';
import * as React from 'react';

import { Icon, IconProp } from '../Icon';
import { Link } from '../Link';

interface IPricingCard {
  isDark?: boolean;
  icon: IconProp;
  title: string;
  featuresTitle: string;
  features: string[];
  href: string;
  buttonText: string;
  tag?: string;
  tagColor?: string;
}

export const PricingCard = ({
  isDark,
  icon,
  title,
  featuresTitle,
  features,
  href,
  buttonText,
  tag,
  tagColor = 'blue',
}: IPricingCard) => {
  return (
    <Link
      to={href}
      className={cn(
        'w-96 h-full flex flex-col rounded-lg p-8 pb-6 shadow-md hover-scale font-medium font-lg mr-10 mb-10',
        isDark ? 'bg-blue-darker text-white' : 'bg-white text-blue-darker',
      )}
    >
      <div className="w-full h-full flex flex-col">
        <div className={cn(`border-b flex flex-col items-center`, isDark ? 'border-lighten-200' : 'border-grey-light')}>
          <div>
            <Icon icon={icon} size="3x" />
          </div>

          <div className="text-center text-xl my-3 font-medium">{title}</div>

          {tag && (
            <div className="flex justify-center mb-8">
              <div
                className={`flex items-center text-sm rounded-full border border-${tagColor}-lighter bg-${tagColor}-lightest text-${tagColor} uppercase font-semibold px-4 py-1`}
              >
                <div>{tag}</div>
              </div>
            </div>
          )}
        </div>

        {featuresTitle && <div className="mt-8 font-semibold">{featuresTitle}</div>}

        {features.map((feature, index) => (
          <div key={index} className={cn('flex items-center mt-6')}>
            <div>
              <Icon className="text-green" icon={['fad', 'check']} size="lg" />
            </div>

            <div className="mx-3 flex-1">{feature}</div>
          </div>
        ))}

        <div
          className={cn(
            'p-2 rounded-lg text-center mt-8 text-lg font-semibold',
            isDark ? 'bg-white text-blue-darker' : 'bg-blue-darker text-white',
          )}
        >
          {buttonText}
        </div>
      </div>
    </Link>
  );
};
