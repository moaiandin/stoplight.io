import React from 'react';
import { Root, Routes } from 'react-static';

import { Image } from './components/Image';
import ScrollToTop from './components/ScrollToTop';

import 'src/styles/app.css';
import 'src/styles/app.scss';

function App() {
  return (
    <Root>
      <ScrollToTop>
        <React.Suspense fallback={<Loading />}>
          <Routes />
        </React.Suspense>
      </ScrollToTop>
    </Root>
  );
}

function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Image style={{ width: 100 }} src="/images/stoplight-dude-dark.png" />
    </div>
  );
}

export default App;
