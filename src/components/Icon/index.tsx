import { IconLookup, IconName, IconPrefix } from '@fortawesome/fontawesome-common-types';
import cn from 'classnames';
import * as React from 'react';

export type IconTuple = [IconPrefix, IconName];

export type IconProp = IconName | IconTuple | IconLookup;

export interface IIcon {
  icon: IconProp;
  className?: string;
  size?: 'xs' | 'sm' | 'lg' | '2x' | '3x' | '5x' | '7x' | '10x';
  style?: any;
}

export const Icon = ({ icon, className, size, style }: IIcon) => {
  let prefix: IconPrefix = 'fas';
  let name: IconName;

  if (isIconName(icon)) {
    name = icon;
  } else if (isIconTuple(icon)) {
    prefix = icon[0];
    name = icon[1];
  } else if (isIconLookup(icon)) {
    prefix = icon.prefix || prefix;
    name = icon.iconName;
  } else {
    console.warn('Invalid icon prop provided to Icon component', icon);
    name = 'exclamation';
  }

  return (
    <i
      className={cn(className, prefix, `fa-${name}`, {
        [`fa-${size}`]: size,
      })}
      style={style}
    />
  );
};

function isIconName(arg: any): arg is IconName {
  return typeof arg === 'string';
}

function isIconTuple(arg: any): arg is IconTuple {
  return Array.isArray(arg);
}

function isIconLookup(arg: any): arg is IconLookup {
  return arg && typeof arg === 'object' && arg.prefix && arg.iconName;
}
