import * as React from 'react';

export interface IInput {
  value: string;
  onChange(string): void;
  type?: string;
  placeholder?: string;
  style?: object;
  autoFocus?: boolean;
}

export const Input: React.FunctionComponent<IInput> = ({ type, placeholder, value, onChange, autoFocus }) => {
  const handleChange = React.useCallback(e => onChange(e.target.value), [onChange]);

  const ref = React.useRef<HTMLInputElement>(null);
  React.useEffect(
    () => {
      if (autoFocus && ref.current) {
        ref.current.focus();
      }
    },
    [ref],
  );

  return (
    <input
      className="shadow appearance-none border rounded-lg sm:w-full py-2 px-3 text-grey-darker leading-loose focus:outline-none focus:shadow-outline"
      type={type}
      ref={ref}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      style={{ minWidth: '250px' }}
    />
  );
};
