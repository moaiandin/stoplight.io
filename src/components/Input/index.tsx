import * as React from 'react';

export interface IInput {
  value: string;
  onChange(string): void;
  onEnter?: (e: any) => void;
  type?: string;
  placeholder?: string;
  style?: object;
  autoFocus?: boolean;
}

const style = { minWidth: '250px' };

export const Input: React.FunctionComponent<IInput> = ({ type, placeholder, value, onChange, autoFocus, onEnter }) => {
  const handleChange = React.useCallback(e => onChange(e.target.value), [onChange]);

  const handleEnter = React.useCallback(
    e => {
      if (!onEnter) return;

      if (e.key === 'Enter') {
        onEnter(e);
      }
    },
    [onEnter],
  );

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
      onKeyPress={handleEnter}
      style={style}
    />
  );
};
