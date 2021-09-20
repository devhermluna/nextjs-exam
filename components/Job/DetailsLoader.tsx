import { random, range } from 'lodash';
import React from 'react';
import LoaderPlaceholder from '../LoaderPlaceholder';
import JobItemLoader from './Loader';

const DetailsLoader = () => (
  <>
    <JobItemLoader hasBorder={false} />
    {range(3).map((item: number) => (
      <div
        key={item}
        className="mt-10"
      >
        <LoaderPlaceholder
          width={random(100, 200)}
          height={20}
          className="rounded-md mb-5"
        />
        <LoaderPlaceholder
          width="100%"
          height={16}
          className="rounded-md mb-2"
        />
        <LoaderPlaceholder
          width="100%"
          height={16}
          className="rounded-md mb-2"
        />
        <LoaderPlaceholder
          width="100%"
          height={16}
          className="rounded-md mb-2"
        />
        <LoaderPlaceholder
          width="100%"
          height={16}
          className="rounded-md mb-2"
        />
        <LoaderPlaceholder
          width={400}
          height={16}
          className="rounded-md mb-2"
        />
      </div>
    ))}
  </>
);

export default DetailsLoader;
