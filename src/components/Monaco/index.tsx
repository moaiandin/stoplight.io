import * as React from "react";
import { MonacoCodeEditor, MonacoCodeStore } from "@stoplight/monaco";

export const MonacoComponent = () => {
    const store = new MonacoCodeStore({
        id: "a",
        path: "file:///a.js",
        value: "var y = true;"
    });

    store.onDidUpdateValue(val => {
        console.log('latest value', val);
    });

    const resetValue = () => store.setValue('');

    return (
        <div style={{height: 1000}} >
            <button onClick={resetValue}>Reset Value</button>
            <MonacoCodeEditor store={store} options={{minimap: {enabled: false}}} />
        </div>
    );
};