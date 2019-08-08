import cn from 'classnames';
import * as React from 'react';
import { withSiteData } from 'react-static';

import { CallToAction, ICallToAction } from '../CallToAction';
import { Container } from '../Container';

export interface IActionBar {
  enabled: boolean;
  text: string;
  ctas: ICallToAction[];
  className?: string;
}

export const ActionBar: React.FunctionComponent<IActionBar> = withSiteData(props => {
  const { enabled, text, ctas, className } = props;

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
        {text && <div className="flex-1 font-bold text-lg text-grey-darker">{text}</div>}

        {ctas && (
          <div className="flex-1 flex justify-end sm:justify-center sm:items-between sm:flex-wrap">
            {ctas.map((cta, index) => (
              <CallToAction key={index} className={index > 0 ? 'ml-4 sm:ml-0' : ''} {...cta} />
            ))}
          </div>
        )}
      </div>
    </Container>
  );
});
