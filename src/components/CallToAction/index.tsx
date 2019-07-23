import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cn from 'classnames';
import * as React from 'react';
import { Link } from 'src/components/Link';
import { VideoPlayerModal } from '../VideoPlayerModal';

export interface ICallToAction {
  name: string;
  color: string;
  className: string;
  href: string;
  type?: 'link' | 'video';
  icon?: IconProp;
}

export const CallToAction: React.FunctionComponent<ICallToAction> = ({
  name,
  color = 'purple',
  className,
  href = 'https://next.stoplight.io',
  type = 'link',
  icon,
}) => {
  if (!name) {
    return null;
  }

  const cta = (
    <div
      className={`Button rounded shadow-md flex select-none inline-flex justify-center whitespace-no-wrap font-bold h-xl text-xl rounded z-0 hover:z-5 border-transparent text-white hover:text-white bg-${color} hover:bg-${color}-dark cursor-pointer solid`}
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
      {type === 'video' ? <VideoPlayerModal href={href} cta={cta} /> : <Link to={href}>{cta}</Link>}
    </div>
  );
};
