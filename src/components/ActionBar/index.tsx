import cn from 'classnames';
import * as React from 'react';
import { withSiteData } from 'react-static';

import { Button, IButton } from 'src/components/Button';
import { Section } from 'src/components/Section';
import { Container } from '../Container';
import { ILink, Link } from '../Link';

export interface IActionBar {
  enabled: boolean;
  text: string;
  buttons: IButton[];
  className: string;
  headline?: string;
  links?: ILink[];
}

export const ActionBar: React.FunctionComponent<IActionBar> = withSiteData(props => {
  const { enabled, text, headline, buttons, className, links } = props;

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

          {buttons && (
            <div className="flex-1 flex justify-end sm:justify-center sm:w-full sm:pb-10">
              {buttons.map((button, index) => (
                <Button key={index} className={index > 0 ? 'ml-4 sm:ml-0' : ''} {...button} />
              ))}
            </div>
          )}

          {links && (
            <div className="flex-1 flex justify-center sm:justify-center">
              {links.map((link, index) => (
                <Link
                  key={index}
                  title={link.title}
                  to={link.href}
                  className="text-purple hover:text-purple-darker font-bold text-lg"
                >
                  <div>{link.title}</div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
});
