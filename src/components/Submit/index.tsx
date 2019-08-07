import cn from 'classnames';
import * as React from 'react';
import { useSiteData } from 'react-static';

import { Button, IButton } from 'src/components/Button';
import { IInput, Input } from 'src/components/Input';
import { useSubmitForm } from 'src/hooks/useSubmitForm';

export interface ISubmit {
  button: IButton;
  input: IInput;
  formId: string;
  className?: string;
}

export const Submit: React.FunctionComponent<ISubmit> = ({ button, className, input, formId }) => {
  const { integrations } = useSiteData();

  const [value, setValue] = React.useState('');
  const [loading, response, submitForm] = useSubmitForm(integrations.hubspot, formId);

  if (!formId || !integrations.hubspot) return null;

  return (
    <div className={cn(className, 'flex flex-col sm:flex-col sm:justify-center sm:items-between')}>
      {response.success ? (
        <div>{response.success}</div>
      ) : (
        <div className="flex sm:flex-wrap sm:justify-center sm:py-4">
          <Input {...input} value={value} onChange={setValue} />

          <div className="flex-1 flex px-4 justify-end font-bold text-lg sm:justify-center sm:items-between sm:flex-wrap sm:py-2 sm:w-full sm:px-0">
            <Button
              onClick={() => {
                submitForm([{ name: 'email', value }]);
              }}
              shadow={'sm'}
              {...button}
              title={button.title}
              loading={loading}
            />
          </div>
        </div>
      )}
      {response.error && <div className="p-3">{response.error}</div>}
    </div>
  );
};
