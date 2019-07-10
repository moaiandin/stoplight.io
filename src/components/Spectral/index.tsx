import { DiagnosticSeverity, IDiagnostic } from '@stoplight/types';
const { Spectral } = require('@stoplight/spectral');
import { faExclamationCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { oas3Functions, rules as OAS3rules } from '@stoplight/spectral/dist/rulesets/oas3';
import * as React from 'react';

const spectral = new Spectral();
spectral.addFunctions(oas3Functions());

const iconToSeverityMap = {
  Error: {
    icon: faExclamationCircle,
    color: 'red-dark',
    textColor: 'text-red-dark',
  },
  Warning: {
    icon: faExclamationTriangle,
    color: 'yellow-dark',
    textColor: 'text-yellow-dark',
  },
};

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
          <tr className="font-semibold text-left">
            <th>Type</th>
            <th className="pl-4">Line</th>
            <th className="pl-4">Message</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => {
            const { icon, color, textColor } = iconToSeverityMap[DiagnosticSeverity[result.severity]];
            return (
              <tr className={textColor} key={index}>
                <td className="text-xs uppercase font-semibold pt-6">
                  <FontAwesomeIcon icon={icon} color={color} size={'lg'} />
                </td>
                <td className="pl-4 pt-6">{result.range.start.line}</td>
                <td className="pl-4 pt-6">{result.message}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
