import { MonacoCodeEditor, MonacoCodeStore } from '@stoplight/monaco';
import * as React from 'react';

export const MonacoComponent = () => {
  const store = new MonacoCodeStore({
    id: 'a',
    path: 'file:///a.js',
    value: 'var y = true;',
  });

  store.onDidUpdateValue(val => {
    console.log('latest value', val);
  });

  const resetValue = () => store.setValue('');

  return (
    <div className="h-128">
      <button
        onClick={resetValue}
        className="text-white bg-purple-lighter shadow-md rounded mb-4 p-2 font-semibold hover:cursor-pointer"
      >
        Reset Value
      </button>
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
