import classNames from 'classnames';
import React from 'react';
import Icon from './Icon';

interface Props {
  callback: () => void;
  disabled: boolean;
  icon: string;
}

const MetaButton = ({
  disabled,
  callback,
  icon,
}: Props) => (
  <button
    type="button"
    className="ml-1"
    disabled={disabled}
    onClick={() => {
      if (callback) callback();
    }}
  >
    <Icon
      name={icon}
      className={classNames({
        'stroke-current text-gray-300': disabled,
      })}
    />
  </button>
);

export default MetaButton;
