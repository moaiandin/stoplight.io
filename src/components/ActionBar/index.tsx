import cn from 'classnames';
import * as React from 'react';
import { withSiteData } from 'react-static';

import { Button, IButton } from 'src/components/Button';
import { Container } from '../Container';

export interface IActionBar {
  enabled: boolean;
  text: string;
  buttons: IButton[];
  className: string;
}

export const ActionBar: React.FunctionComponent<IActionBar> = withSiteData(props => {
  const { enabled, text, buttons, className } = props;

  if (!enabled) {
    return null;
  }

  return (
    <Container>
      <div
        className={cn(
          className,
          'p-12 flex sm:flex-col sm:justify-center sm:items-between flex-wrap items-center shadow rounded',
        )}
      >
        {text && <div className="flex-1 font-bold text-grey-darker">{text}</div>}

        {buttons && (
          <div className="flex-1 flex justify-end sm:justify-center sm:items-between sm:flex-wrap">
            {buttons.map((button, index) => (
              <Button key={index} className={index > 0 ? 'ml-4 sm:ml-0' : ''} {...button} />
            ))}
          </div>
        )}
      </div>
    </Container>
  );
});
