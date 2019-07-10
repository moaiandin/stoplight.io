import { monaco, MonacoCodeEditor, MonacoCodeStore } from '@stoplight/monaco';
import cn from 'classnames';
import * as React from 'react';

import PetstoreOpenAPI from './references/petstore/openapi';
import OpenAPI2Schema from './schemas/openapi/2.0.json';
import OpenAPI3Schema from './schemas/openapi/3.0.json';

const store = new MonacoCodeStore({
  id: 'a',
  path: 'file:///openapi.yaml?oas3',
  value: PetstoreOpenAPI,
});

monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
  validate: false,
  schemas: [
    {
      fileMatch: ['*.json?oas2'],
      uri: 'json-OpenAPI-2',
      schema: OpenAPI2Schema,
    },
    {
      fileMatch: ['*.json?oas3'],
      uri: 'json-OpenAPI-3',
      schema: OpenAPI3Schema,
    },
  ],
});

(monaco.languages as any).yaml.yamlDefaults.setDiagnosticsOptions({
  validate: false,
  schemas: [
    {
      fileMatch: ['*.yaml?oas2', '*.yml?oas2'],
      uri: 'file://yaml-OpenAPI-2',
      schema: OpenAPI2Schema,
    },
    {
      fileMatch: ['*.yaml?oas3', '*.yml?oas3'],
      uri: 'file://yaml-OpenAPI-3',
      schema: OpenAPI3Schema,
    },
  ],
});

export const MonacoComponent = ({ className, setValue, setMonacoStore }) => {
  const resetValue = React.useCallback(
    () => {
      store.setValue(PetstoreOpenAPI);
    },
    [store]
  );

  React.useEffect(() => {
    setValue(PetstoreOpenAPI);
    setMonacoStore(store);
  }, []);

  React.useEffect(
    () => {
      store.onDidUpdateValue(setValue);
    },
    [setValue]
  );

  return (
    <div className={cn(className, 'flex flex-col')}>
      <div className="flex items-center my-3 mx-6">
        <div className="flex-1 text-grey-dark">OpenAPI v2 or v3 Document</div>

        <div
          className={`Button rounded shadow-md flex select-none font-bold border-transparent text-white bg-grey hover:bg-grey-dark cursor-pointer`}
          onClick={resetValue}
        >
          <div className="flex items-center px-4 py-1">Reset</div>
        </div>
      </div>

      <div className="flex-1">
        <MonacoCodeEditor
          store={store}
          options={{
            minimap: {
              enabled: false,
            },
            highlightActiveIndentGuide: false,
            overviewRulerBorder: false,
            renderLineHighlight: 'none',
            automaticLayout: true,
            wordWrap: 'bounded',
            glyphMargin: true,
          }}
        />
      </div>
    </div>
  );
};
