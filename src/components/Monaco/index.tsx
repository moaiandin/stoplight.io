import { monaco, MonacoCodeEditor, MonacoCodeStore } from '@stoplight/monaco';
import cn from 'classnames';
import * as React from 'react';

import { getInfoFromValue } from '../../utils/getInfoFromValue';
import OpenAPI2Schema from '../../utils/schemas/openapi/2.0.json';
import OpenAPI3Schema from '../../utils/schemas/openapi/3.0.json';

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

const stores: any = {
  oas2: {
    json: undefined,
    yaml: undefined,
  },
  oas3: {
    json: undefined,
    yaml: undefined,
  },
};

function useMonacoStore(value: string): MonacoCodeStore {
  const { spec, lang } = getInfoFromValue(value);

  return React.useMemo(
    () => {
      if (stores[spec][lang]) {
        stores[spec][lang].setValue(value);
      } else {
        stores[spec][lang] = new MonacoCodeStore({
          id: `${spec}/${lang}`,
          path: `file:///openapi.${lang}?${spec}`,
          value,
        });
      }

      return stores[spec][lang];
    },
    [spec],
  );
}

export const MonacoComponent = ({ className, value, originalValue, setValue, setMonacoStore }) => {
  const store = useMonacoStore(value);

  const resetValue = React.useCallback(() => store.setValue(originalValue), [store]);

  React.useEffect(() => setMonacoStore(store), [store]);

  React.useEffect(
    () => {
      store.onDidUpdateValue(setValue);
    },
    [store, setValue],
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
            scrollBeyondLastLine: false,
            lineNumbersMinChars: 4,
            copyWithSyntaxHighlighting: false,
            colorDecorators: false,
            roundedSelection: false,
            scrollbar: {
              useShadows: false,
              horizontalScrollbarSize: 7,
              verticalScrollbarSize: 7,
            },
          }}
        />
      </div>
    </div>
  );
};
