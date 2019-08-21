import axios from 'axios';
import Cookies from 'js-cookie';
import * as React from 'react';

interface IField {
  name: string;
  value: string;
}

export const useSubmitForm = (
  portalId: string,
  formId: string,
): [boolean, { success: string; error: string }, (fields: IField[]) => void] => {
  const [loading, setLoading] = React.useState(false);
  const [response, setResponse] = React.useState({ success: '', error: '' });

  const submitForm = React.useCallback(
    (fields: IField[]) => {
      setLoading(true);
      axios({
        method: 'post',
        url: `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
        data: {
          fields,
          context: {
            hutk: Cookies.get('hubspotutk'),
          },
        },
      })
        .then(res => {
          if (res && res.data && res.data.redirectUri) {
            window.location.href = res.data.redirectUri;
          } else {
            setResponse({ success: res.data.inlineMessage, error: '' });
            setLoading(false);
          }
        })
        .catch(err => {
          setResponse({ success: '', error: err.response.data.errors[0].message });
          setLoading(false);
          console.error('Error submitting HubSpot form', err.response.data.errors[0].message);
        });
    },
    [portalId, formId],
  );

  return [loading, response, submitForm];
};
