import { MonacoCodeStore } from '@stoplight/monaco';
import cn from 'classnames';
import * as React from 'react';
import NoSSR from 'react-no-ssr';
import { MonacoComponent } from 'src/components/Monaco';
import { SpectralComponent } from 'src/components/Spectral';

export const Sandbox = ({ className }) => {
  const [value, setValue] = React.useState('');
  const [monacoStore, setMonacoStore] = React.useState<MonacoCodeStore | undefined>(undefined);

  return (
    <NoSSR>
      <div className={cn('container relative z-10 sm:hidden', className)}>
        <div className="flex flex-wrap bg-white shadow-md rounded-lg" style={{ height: 600 }}>
          <MonacoComponent className="flex-1 w-1/2" setValue={setValue} setMonacoStore={setMonacoStore} />

          <div className="bg-darken-100 w-px" />

          <SpectralComponent
            className="flex-1 w-1/2 overflow-y-auto overflow-x-hidden m-3"
            value={value}
            monacoStore={monacoStore}
          />
        </div>
      </div>
    </NoSSR>
  );
};
