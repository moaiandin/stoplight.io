import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cn from 'classnames';
import * as React from 'react';
import { Link } from 'src/components/Link';
import { VideoPlayerModal } from '../VideoPlayerModal';

export interface IButton {
  href: string;
  title?: string;
  className?: string;
  color?: string;
  outlined?: boolean;
  shadow?: string;
  icon?: IconProp;
  type?: 'link' | 'video';
}

export const Button: React.FunctionComponent<IButton> = ({
  className,
  color = 'purple',
  shadow,
  outlined,
  href,
  title,
  icon,
  children,
  type,
}) => {
  const linkComponent = (
    <Link
      title={title}
      className={cn(
        className,
        `border-${color}`,
        `hover:border-${color}-dark`,
        `focus:border-${color}-dark`,
        `px-12 font-bold sm:w-full sm:mt-6 rounded-md py-3 flex justify-center select-none border-2 cursor-pointer`,
        {
          [`bg-${color} hover:bg-${color}-dark text-white`]: !outlined,
          [`text-${color}-dark hover:text-${color}-darker`]: outlined,
          [`shadow-${shadow}`]: shadow,
        },
      )}
      to={href}
    >
      <div>{children || title}</div>
      {icon && (
        <div className="ml-2">
          <FontAwesomeIcon icon={icon} size="lg" />
        </div>
      )}
    </Link>
  );

  return type === 'video' ? <VideoPlayerModal href={href} cta={linkComponent} /> : linkComponent;
};
