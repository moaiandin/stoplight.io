import * as React from 'react';

import Analytics from 'src/components/Analytics';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

export const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <Analytics>
      <Header />

      <div className="relative bg-grey-lightest">{children}</div>

      <Footer />
    </Analytics>
  );
};
