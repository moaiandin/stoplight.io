import { MonacoCodeStore } from '@stoplight/monaco';
import cn from 'classnames';
import * as React from 'react';
import PetstoreOpenAPI from '../../utils/references/petstore/openapi';
import { Diagnostics } from '../Diagnostics';
import { MonacoComponent } from '../Monaco';

const Sandbox = ({ className }: { className?: string }) => {
  const [value, setValue] = React.useState(PetstoreOpenAPI);
  const [monacoStore, setMonacoStore] = React.useState<MonacoCodeStore | undefined>(undefined);

  return (
    <div className={cn('container relative z-10 sm:hidden', className)}>
      <div className="border-4 border-lighten-200 rounded-t-lg" style={{ borderBottom: 'none' }}>
        <div className="flex flex-wrap overflow-hidden bg-white rounded-t-md" style={{ height: 500 }}>
          <MonacoComponent
            className="flex-1 w-1/2"
            value={value}
            originalValue={PetstoreOpenAPI}
            setValue={setValue}
            setMonacoStore={setMonacoStore}
          />

          <div className="bg-darken-100 w-px" />

          <Diagnostics className="flex-1 w-1/2" value={value} monacoStore={monacoStore} />
        </div>
      </div>
    </div>
  );
};

export default Sandbox;
