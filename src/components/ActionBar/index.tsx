import cn from 'classnames';
import * as React from 'react';
import { withSiteData } from 'react-static';

import { Section } from 'src/components/Section';
import { CallToAction, ICallToAction } from '../CallToAction';
import { Container } from '../Container';

export interface IActionBar {
  enabled: boolean;
  text: string;
  headline?: string;
  ctas: ICallToAction[];
  className?: string;
  color?: string;
}

export const ActionBar: React.FunctionComponent<IActionBar> = withSiteData(props => {
  const { enabled, text, headline, ctas, className, color } = props;

  if (!enabled) {
    return null;
  }

  return (
    <Section>
      <Container>
        <div
          className={cn(
            className,
            'flex items-center md:flex-wrap md:justify-center md:content-between',
            `bg-${color}`,
          )}
        >
          <div className="justify-center md:text-center">
            {headline && <div className="flex-1 font-bold text-5xl mb-4">{headline}</div>}

            {text && <div className="flex-1 font-bold text-xl mb-4">{text}</div>}
          </div>

          {ctas && (
            <div className="flex flex-1 justify-end md:justify-center md:content-between md:flex-col">
              {ctas.map((cta, index) => (
                <CallToAction
                  key={index}
                  className={cn(
                    className,
                    index > 0 ? 'ml-4 md:ml-0' : '',
                    'md:flex md:justify-center md:pt-4 md:w-full',
                  )}
                  {...cta}
                />
              ))}
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
});
