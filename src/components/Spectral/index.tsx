import { IDiagnostic } from '@stoplight/types';

const { Spectral } = require('@stoplight/spectral');
import * as React from 'react';
import { oas3Functions, rules as OAS3rules } from '@stoplight/spectral/dist/rulesets/oas3';

// an OASv3 document
const myOAS = {
  // ... properties in your document
  responses: {
    '200': {
      description: '',
      schema: {
        $ref: '#/definitions/error-response',
      },
    },
  },
  // ... properties in your document
};

// create a new instance of spectral with all of the baked in rulesets

export const SpectralComponent = () => {
  const results = [];
  if (typeof window !== 'undefined') {
    const spectral = new Spectral();

    spectral.addFunctions(oas3Functions());
    OAS3rules()
      .then(rules => spectral.addRules(rules))
      .then(() =>  spectral.run(myOAS))
      .then(results => {
        console.log(results);
        // do whatever you need with this
      });
  }

  return (
    <div>
      {results.map((el, i) => (
        <div className="fakeData">
          Error {i + 1}
          <ul>
            <li>
              Code:
              {` ${el.code}`}
            </li>
            <li>
              Severity:
              {` ${el.severity}`}
            </li>
            <li>
              Range:
              {` Line ${el.range.start.line}, characters ${el.range.start.character} through ${el.range.end.character}`}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};
