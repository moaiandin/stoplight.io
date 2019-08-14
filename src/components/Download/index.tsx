import { IconProp } from '@fortawesome/fontawesome-svg-core';
import * as React from 'react';
import { Button } from '../Button';

export interface IDownload {
  href: string;
  name: string;
  fileName?: string;
  icon?: IconProp;
  color?: string;
}

export const Download: React.FunctionComponent<IDownload> = ({ href, name, icon, fileName, color }) => {
  return (
    <Button className="text-lg" href={href} title={name} download={fileName} icon={icon} color={color} shadow={'md'} />
  );
};
