export function getInfoFromValue(value: string) {
  let spec = 'oas3';
  let lang = 'yaml';

  if (/"swagger":/.test(value)) {
    spec = 'oas2';
    lang = 'json';
  } else if (/swagger:/.test(value)) {
    spec = 'oas2';
    lang = 'yaml';
  } else if (/"openapi":/.test(value)) {
    spec = 'oas3';
    lang = 'json';
  }

  return {
    spec,
    lang,
  };
}
