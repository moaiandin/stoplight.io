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

  const isCentered = !ctas || ctas.length > 2;

  return (
    <Container>
      <div
        className={cn(className, 'p-12 flex-wrap items-center shadow rounded md:flex-col md:justify-center', {
          flex: !isCentered,
        })}
      >
        {text && (
          <div
            className={cn('flex flex-1 font-bold text-lg text-grey-darker', { 'pb-6 justify-center': ctas.length > 2 })}
          >
            {text}
          </div>
        )}

        {ctas && (
          <div
            className={cn(
              'flex-1 flex md:justify-center md:content-between md:flex-wrap',
              isCentered ? 'justify-center' : 'justify-end',
            )}
          >
            {ctas.map((cta, index) => (
              <CallToAction key={index} className={index > 0 ? 'ml-4 sm:ml-0' : ''} {...cta} />
            ))}
          </div>
        )}
      </div>
    </Container>
  );
});
