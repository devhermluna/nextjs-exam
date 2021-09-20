import classNames from 'classnames';
import React from 'react';

interface Props {
  width?: string | number | null;
  height?: string | number | null;
  className?: string;
}

const LoaderPlaceholder = ({
  height,
  width,
  className,
}: Props) => {
  const styles: {
    height?: string | number;
    width?: string | number;
  } = {};

  if (height) styles.height = height;
  if (width) styles.width = width;

  return (
    <div
      className={classNames('bg-gray-200', className)}
      style={styles}
    />
  );
};

LoaderPlaceholder.defaultProps = {
  width: null,
  height: null,
  className: '',
};

export default LoaderPlaceholder;
