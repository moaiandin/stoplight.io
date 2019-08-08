import * as React from 'react';

export interface IInput {
  value: string;
  onChange(string): void;
  type?: string;
  placeholder?: string;
  style?: object;
}

export const Input: React.FunctionComponent<IInput> = ({ type, placeholder, value, onChange, style }) => {
  const handleChange = React.useCallback(e => onChange(e.target.value), [onChange]);

  return (
    <input
      className="shadow-sm appearance-none border rounded sm:w-full py-2 px-3 text-grey-darker leading-loose focus:outline-none focus:shadow-outline"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      style={{ minWidth: '200px' }}
    />
  );
};
