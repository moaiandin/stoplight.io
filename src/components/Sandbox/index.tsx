import * as React from 'react';
import NoSSR from 'react-no-ssr';
import { MonacoComponent } from 'src/components/Monaco';
import { SpectralComponent } from 'src/components/Spectral';

export const Sandbox = () => {
  const [value, setValue] = React.useState('');

  return (
    <NoSSR>
      <div className="container relative flex flex-wrap md-hidden bg-white shadow-md rounded-lg -mt-16 z-10">
        <div className="w-1/2 sm:w-full pb-24 pl-2 mt-6">
          <MonacoComponent setValue={setValue} />
        </div>
        <div className="w-1/2 sm:w-full pl-12 mt-12">
          <SpectralComponent value={value} />
        </div>
      </div>
    </NoSSR>
  );
};
