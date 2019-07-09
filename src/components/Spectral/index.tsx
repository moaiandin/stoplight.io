import { DiagnosticSeverity, IDiagnostic } from '@stoplight/types';
const { Spectral } = require('@stoplight/spectral');
import { oas3Functions, rules as OAS3rules } from '@stoplight/spectral/dist/rulesets/oas3';
import * as React from 'react';

const spectral = new Spectral();
spectral.addFunctions(oas3Functions());

export const SpectralComponent = ({ value }) => {
  const [results, setResults] = React.useState<IDiagnostic[]>([]);

  React.useEffect(
    () => {
      OAS3rules()
        .then(rules => spectral.addRules(rules))
        .then(() => spectral.run(value))
        .then(setResults);
    },
    [value] // Whenever value changes, run the oas3rules function
  );

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th align="left">Type</th>
            <th align="left">Line</th>
            <th align="left">Message</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index}>
              <td>{DiagnosticSeverity[result.severity]}</td>
              <td>{result.range.start.line}</td>
              <td>{result.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
