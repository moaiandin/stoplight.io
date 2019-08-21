import * as React from 'react';

import Analytics from 'src/components/Analytics';
import Footer, { IFooterProps } from 'src/components/Footer';
import Header, { IHeader } from 'src/components/Header';

export interface ILayout {
  header?: IHeader;
  footer?: IFooterProps;
}

export const Layout: React.FunctionComponent<ILayout> = ({ children, header, footer }) => {
  return (
    <Analytics>
      <Header {...header} />

      <div className="relative bg-grey-lightest">{children}</div>

      <Footer {...footer} />
    </Analytics>
  );
};
