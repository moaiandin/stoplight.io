import axios from 'axios';
import Cookies from 'js-cookie';
import * as React from 'react';
import { blockedEmailList } from '../components/Submit/blockedEmailList';

interface IField {
  name: string;
  value: string;
}

export const useSubmitEmailForm = (
  portalId: string,
  formId: string,
): [boolean, { success: string; error: string }, (fields: IField[]) => void] => {
  const [loading, setLoading] = React.useState(false);
  const [response, setResponse] = React.useState({ success: '', error: '' });

  const submitForm = React.useCallback(
    (fields: IField[]) => {
      if (!validateEmail(fields[0].value)) {
        return setResponse({ success: '', error: 'Please enter your work email' });
      }

      setLoading(true);

      // @ts-ignore
      if (window._hsq) {
        // @ts-ignore
        const hsq = (window._hsq = window._hsq || []);
        hsq.push([
          'identify',
          {
            email: fields[0].value,
          },
        ]);
      }

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
          console.error('Error submitting HubSpot form', err);
        });
    },
    [portalId, formId],
  );

  return [loading, response, submitForm];
};

const checkBlockedEmailDomains = (value: string): boolean => {
  return Boolean(blockedEmailList.find(email => value.includes(email)));
};

const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const validateEmail = (email: string): boolean => {
  if (!email || email.length < 3) return false;

  // Make sure the email is valid and not a blocked email
  return re.test(email.toLowerCase()) && !checkBlockedEmailDomains(email);
};
