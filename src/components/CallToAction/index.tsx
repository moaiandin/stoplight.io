import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cn from 'classnames';
import * as React from 'react';
import { Link } from 'src/components/Link';

export interface ICallToAction {
  name: string;
  color: string;
  className: string;
  href: string;
  icon?: IconProp;
}

export const CallToAction: React.FunctionComponent<ICallToAction> = ({
  name,
  color = 'purple',
  className,
  href = 'https://next.stoplight.io',
  icon,
}) => {
  if (!name) {
    return null;
  }

  const cta = (
    <div
      className={`Button rounded shadow-md flex select-none inline-flex justify-center font-bold h-xl text-xl rounded z-0 hover:z-5 border-transparent text-white hover:text-white bg-${color} hover:bg-${color}-dark cursor-pointer solid`}
    >
      <div className="flex items-center px-6">
        <div>{name}</div>
        {icon && (
          <div className="ml-2">
            <FontAwesomeIcon icon={icon} size="lg" />
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className={cn(className)}>
      <Link to={href}>{cta}</Link>
    </div>
  );
};
