import cn from 'classnames';
import * as React from 'react';
import { withSiteData } from 'react-static';

import { Button, IButton } from 'src/components/Button';
import { Section } from 'src/components/Section';
import { CallToAction, ICallToAction } from '../CallToAction';
import { Container } from '../Container';
import { ILink, Link } from '../Link';

export interface IActionBar {
  enabled: boolean;
  text: string;
  headline?: string;
  ctas: ICallToAction[];
  className?: string;
}

export const ActionBar: React.FunctionComponent<IActionBar> = withSiteData(props => {
  const { enabled, text, headline, ctas, className } = props;

  if (!enabled) {
    return null;
  }

  return (
    <Section>
      <Container>
        <div className={cn(className, 'flex items-center sm:flex-col sm:justify-center sm:items-between')}>
          <div className="flex-row justify-center sm:text-center">
            {headline && <div className="flex-1 font-bold text-5xl mb-4">{headline}</div>}

            {text && <div className="flex-1 font-bold text-xl mb-4">{text}</div>}
          </div>

          {ctas && (
            <div className="flex-1 flex justify-end sm:justify-center sm:items-between sm:flex-wrap">
              {ctas.map((cta, index) => (
                <CallToAction key={index} className={index > 0 ? 'ml-4 sm:ml-0' : ''} {...cta} />
              ))}
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
});
