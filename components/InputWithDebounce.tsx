import classNames from 'classnames';
import React, { ChangeEvent } from 'react';
import { DebounceInput } from 'react-debounce-input';

interface Props {
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder: string;
}

const InputWithDebounce = ({
  name,
  onChange,
  className,
  placeholder,
}: Props) => (
  <DebounceInput
    debounceTimeout={500}
    onChange={onChange}
    className={classNames(className, 'border-none outline-none')}
    placeholder={placeholder}
    name={name}
  />
);

InputWithDebounce.defaultProps = {
  className: '',
};

export default InputWithDebounce;
