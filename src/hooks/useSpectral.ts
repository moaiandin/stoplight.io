import { Resolver } from '@stoplight/json-ref-resolver';
import { IDiagnostic } from '@stoplight/types';
const { Spectral } = require('@stoplight/spectral');
import { readRulesFromRulesets } from '@stoplight/spectral/dist/rulesets';
import { oas2Functions } from '@stoplight/spectral/dist/rulesets/oas2';
import { oas3Functions } from '@stoplight/spectral/dist/rulesets/oas3';
import * as React from 'react';
import { getInfoFromValue } from '../utils/getInfoFromValue';

export const httpReader = {
  async resolve(ref: any) {
    return (await fetch(String(ref))).text();
  },
};

// resolves http and https $refs, and internal $refs
export const httpResolver = new Resolver({
  resolvers: {
    https: httpReader,
    http: httpReader,
  },
});

const oasFunctions = {
  oas2: oas2Functions,
  oas3: oas3Functions,
};

function runSpectral(value: string) {
  const { spec } = getInfoFromValue(value);
  const spectral = new Spectral({ resolver: httpResolver });
  spectral.addFunctions(oasFunctions[spec]());

  return readRulesFromRulesets(`spectral:${spec}`)
    .then(rules => spectral.addRules(rules))
    .then(() => spectral.run(value));
}

export function useSpectral(value?: string) {
  const [results, setResults] = React.useState<IDiagnostic[]>([]);
  const [isValidating, setIsValidating] = React.useState(false);

  React.useEffect(
    () => {
      if (value) {
        setIsValidating(true);

        runSpectral(value)
          .then((res: IDiagnostic[]) => {
            res.sort((a, b) => (a.range.start.line < b.range.start.line ? -1 : 1));

            setResults(res);
            setIsValidating(false);
          })
          .catch(() => setIsValidating(false));
      } else {
        setResults([]);
      }
    },
    [value],
  );

  return {
    isValidating,
    results,
  };
}
