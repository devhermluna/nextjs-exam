import classNames from 'classnames';
import React, { ChangeEvent } from 'react';
import { DebounceInput } from 'react-debounce-input';

interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder: string;
}

const InputWithDebounce = ({
  onChange,
  className,
  placeholder,
}: Props) => (
  <DebounceInput
    debounceTimeout={500}
    onChange={onChange}
    className={classNames(className, 'border-none outline-none')}
    placeholder={placeholder}
  />
);

InputWithDebounce.defaultProps = {
  className: '',
};

export default InputWithDebounce;
