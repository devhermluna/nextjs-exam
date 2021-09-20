import classNames from 'classnames';
import { random, range } from 'lodash';
import React from 'react';
import LoaderPlaceholder from '../LoaderPlaceholder';

interface Props {
  hasBorder?: boolean;
}

const JobItemLoader = ({
  hasBorder,
}: Props) => (
  <div className={classNames('py-3', hasBorder && 'border-t')}>
    <LoaderPlaceholder
      width={random(300, 500)}
      height={20}
      className="rounded-md mb-3"
    />
    <div className="flex items-center mb-3">
      {range(2).map((item) => (
        <LoaderPlaceholder
          key={item}
          width={random(100, 200)}
          height={16}
          className="rounded-md mr-2"
        />
      ))}
    </div>
    <LoaderPlaceholder
      width={random(80, 150)}
      height={19}
      className="rounded-md"
    />
  </div>
);

JobItemLoader.defaultProps = {
  hasBorder: true,
};

export default JobItemLoader;
