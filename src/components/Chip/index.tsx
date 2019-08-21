import cn from 'classnames';
import * as React from 'react';

export interface IChips {
  height?: number;
  width?: number;
  className?: string;
  segments: Array<{
    color: string;
    length?: number;
  }>;
}

export const Chips = ({ height = 8, width = 18, className, segments }: IChips) => {
  return (
    <div className={cn(className, 'flex')}>
      {segments.map((s, k) => (
        <div
          key={k}
          className={cn(`rounded-full bg-${s.color} mx-1/2`)}
          style={{ width: width * (s.length || 1), height }}
        />
      ))}
    </div>
  );
};
