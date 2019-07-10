import { monaco, MonacoCodeEditor, MonacoCodeStore } from '@stoplight/monaco';
import * as React from 'react';
import TodoAPI from './references/todos.oas2.json';
// import YamlData from './references/default';
import OpenAPI2Schema from './schemas/openapi/2.0.json';
import OpenAPI3Schema from './schemas/openapi/3.0.json';

// TODO: Update this to be a better default value
const defaultValue = JSON.stringify(TodoAPI, null, 2);

const store = new MonacoCodeStore({
  id: 'a',
  path: 'file:///todos.oas2.json',
  value: defaultValue,
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

export const MonacoComponent = ({ setValue }) => {
  const resetValue = React.useCallback(
    () => {
      store.setValue(defaultValue);
    },
    [store]
  );

  React.useEffect(
    () => {
      store.onDidUpdateValue(setValue);
    },
    [setValue]
  );

  return (
    <div className="h-128">
      <div className="text-right">
        <button
          onClick={resetValue}
          className="z-50 text-white bg-purple-lighter shadow-md rounded mb-4 p-2 font-semibold hover:cursor-pointer"
        >
          Reset Value
        </button>
      </div>

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
  );
};
