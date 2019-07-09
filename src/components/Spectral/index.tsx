import { IDiagnostic } from '@stoplight/types';
const { Spectral } = require('@stoplight/spectral');
import { oas3Functions, rules as OAS3rules } from '@stoplight/spectral/dist/rulesets/oas3';
import * as React from 'react';

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

// const fakeOutput = [
//   {
//     code: 'invalid-ref',
//     path: ['responses', '200', 'schema', '$ref'],
//     message: "'#/definitions/error-response' does not exist",
//     severity: 0,
//     range: {
//       start: {
//         line: 5,
//         character: 16,
//       },
//       end: {
//         line: 5,
//         character: 46,
//       },
//     },
//   },
//   {
//     code: 'info-contact',
//     message: 'Info object should contain `contact` object.',
//     path: ['info', 'contact'],
//     severity: 1,
//     range: {
//       start: {
//         line: 2,
//         character: 0,
//       },
//       end: {
//         line: 2,
//         character: 46,
//       },
//     },
//   },
//   {
//     code: 'info-description',
//     message: 'OpenAPI object info `description` must be present and non-empty string.',
//     path: ['info', 'description'],
//     severity: 1,
//     range: {
//       start: {
//         line: 42,
//         character: 0,
//       },
//       end: {
//         line: 42,
//         character: 46,
//       },
//     },
//   },
//   {
//     code: 'oas3-schema',
//     message: 'should NOT have additional properties: responses',
//     path: [],
//     severity: 0,
//     range: {
//       start: {
//         line: 107,
//         character: 0,
//       },
//       end: {
//         line: 107,
//         character: 46,
//       },
//     },
//   },
//   {
//     code: 'api-servers',
//     message: 'OpenAPI `servers` must be present and non-empty array.',
//     path: ['servers'],
//     severity: 1,
//     range: {
//       start: {
//         line: 261,
//         character: 0,
//       },
//       end: {
//         line: 261,
//         character: 46,
//       },
//     },
//   },
// ];

// create a new instance of spectral with all of the baked in rulesets

export const SpectralComponent = () => {
  const results = [];
  if (typeof window !== 'undefined') {
    const spectral = new Spectral();

    spectral.addFunctions(oas3Functions());
    OAS3rules()
      .then(rules => spectral.addRules(rules))
      .then(() => spectral.run(myOAS))
      .then(results => {
        console.log(JSON.stringify(results, null, 4));
        // do whatever you need with this
      });
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Line</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {results.map(el => (
            <tr>
              <td>TBD</td>
              <td>TBD</td>
              <td>{el}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
