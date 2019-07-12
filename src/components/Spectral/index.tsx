import { DiagnosticSeverity, Dictionary, IDiagnostic } from '@stoplight/types';
const { Spectral } = require('@stoplight/spectral');
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MonacoCodeStore } from '@stoplight/monaco';
import { readRulesFromRulesets } from '@stoplight/spectral/dist/rulesets';
import { oas3Functions } from '@stoplight/spectral/dist/rulesets/oas3';
import * as React from 'react';

const spectral = new Spectral();
spectral.addFunctions(oas3Functions());

const severityIcons: Dictionary<{ icon: IconProp; color: string }> = {
  Error: {
    icon: 'exclamation-circle',
    color: 'red',
  },
  Warning: {
    icon: 'exclamation-triangle',
    color: 'orange',
  },
  Info: {
    icon: 'info-circle',
    color: 'blue',
  },
  Hint: {
    icon: 'comment',
    color: 'green',
  },
};

const getSpecFromValue = function(value: string) {
  if (/"swagger":/.test(value) || /swagger:/.test(value)) {
    console.log(`"swagger": present `, /"swagger":/.test(value), `swagger: present `, /swagger:/.test(value));
    return 'oas2';
  } else {
    console.log(`"swagger": present `, /"swagger":/.test(value), `swagger: present `, /swagger:/.test(value));
    return 'oas3';
  }
};

export const SpectralComponent: React.FunctionComponent<{
  className?: string;
  value?: string;
  monacoStore?: MonacoCodeStore;
}> = ({ className, value, monacoStore }) => {
  const [results, setResults] = React.useState<IDiagnostic[]>([]);
  const [isValidating, setIsValidating] = React.useState(false);

  React.useEffect(
    () => {
      if (value) {
        setIsValidating(true);
        readRulesFromRulesets(`spectral:${getSpecFromValue(value)}`)
          .then(rules => spectral.addRules(rules))
          .then(() => spectral.run(value))
          .then((res: IDiagnostic[]) => {
            res.sort((a, b) => (a.range.start.line > b.range.start.line ? -1 : 1));
            res.sort((a, b) => (a.severity > b.severity ? 1 : -1));

            setResults(res);
            setIsValidating(false);
          })
          .catch(() => setIsValidating(false));
      } else {
        setResults([]);
      }
    },
    [value] // Whenever value changes, run the oas3rules function
  );

  let fallbackText = 'Add an OpenAPI v2 or v3 document to see the Spectral results.';
  if (value) {
    if (isValidating) {
      fallbackText = 'Validating...';
    } else {
      fallbackText = 'Congratulations, there are no errors or warnings in this document!';
    }
  }

  return (
    <div className={className}>
      <div className="flex items-center text-grey-dark h-10 px-1">
        <div className="w-10 text-center">Type</div>
        <div className="ml-4 w-10 text-center">Line</div>
        <div className="ml-4 flex-1">Message</div>
      </div>

      {results.length > 0 ? (
        results.map((result, index) => {
          const { icon, color } = severityIcons[DiagnosticSeverity[result.severity]];

          return (
            <div
              key={index}
              className="flex items-center cursor-pointer hover:bg-grey-light px-1"
              onClick={() => {
                if (!monacoStore || !monacoStore.editor) return;

                monacoStore.editor.focus();

                monacoStore.editor.setPosition({
                  column: result.range.start.character + 1,
                  lineNumber: result.range.start.line + 1,
                });

                monacoStore.editor.revealRangeAtTop({
                  startLineNumber: Math.max(result.range.start.line - 1, 1),
                  startColumn: result.range.start.character + 1,
                  endLineNumber: result.range.end.line + 1,
                  endColumn: result.range.end.character + 1,
                });
              }}
            >
              <div className="py-1 w-10 text-center" title={DiagnosticSeverity[result.severity]}>
                <FontAwesomeIcon icon={icon} color={color} />
              </div>
              <div className="py-1 ml-4 w-10 text-center">{result.range.start.line}</div>
              <div className="py-1 ml-4 flex-1" title={result.message}>
                {result.message}
              </div>
            </div>
          );
        })
      ) : (
        <div className="flex font-semibold h-12 items-center">{fallbackText}</div>
      )}
    </div>
  );
};
