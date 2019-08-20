import cn from 'classnames';
import * as React from 'react';

import { Icon, IconProp } from '../Icon';
import { Link } from '../Link';

export interface IButton {
  href?: string;
  title?: string;
  className?: string;
  color?: string;
  outlined?: boolean;
  textColor?: string;
  shadow?: string;
  icon?: IconProp;
  rightIcon?: IconProp;
  loading?: boolean;
  type?: 'link' | 'video';
  style?: object;
  large?: boolean;
  download?: string;
  onClick?: (e: any) => void;
}

export const Button: React.FunctionComponent<IButton> = ({
  className,
  color = 'purple',
  shadow = 'md',
  outlined,
  href,
  title,
  icon,
  rightIcon,
  children,
  loading,
  type,
  style,
  download,
  onClick,
  large,
}) => {
  const linkComponent = (
    <Link
      title={title}
      className={cn(
        className,
        'active-depress',
        `border-${color}`,
        `hover:border-${color}-dark`,
        `focus:border-${color}-dark`,
        `font-bold sm:w-full rounded-lg inline-flex justify-center items-center select-none border cursor-pointer`,
        {
          'px-4 py-2': !large,
          'px-6 py-3': large,
          [`bg-${color} hover:bg-${color}-dark text-white`]: !outlined,
          [`text-${color} hover:text-${color}-dark opacity-85 hover:opacity-100`]: outlined,
          [`shadow-${shadow}`]: shadow,
          'text-lg': large,
        },
      )}
      onClick={onClick}
      to={href}
      style={style}
      download={download}
    >
      {loading ? (
        <Icon icon="spinner" />
      ) : (
        <>
          {icon && (
            <div
              className={cn('leading-none', {
                'mr-3': !large,
                'mr-5 text-xl': large,
              })}
            >
              <Icon icon={icon} />
            </div>
          )}

          <div>{children || title}</div>

          {rightIcon && (
            <div className="ml-5">
              <Icon icon={rightIcon} />
            </div>
          )}
        </>
      )}
    </Link>
  );

  return linkComponent;
};
