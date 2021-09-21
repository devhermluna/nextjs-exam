import Link from 'next/link';
import React from 'react';
import classNames from 'classnames';
import { Job, JobLevel } from '@/interfaces/Job';

interface Props extends Job {
  hasBorder?: boolean;
}

const JobItem = ({
  id,
  name,
  levels,
  company,
  hasBorder,
}: Props) => (
  <div
    key={id}
    className={classNames('job-item py-3', hasBorder && 'border-t')}
  >
    <Link href={`/jobs/${id}`}>
      <a className="text-lg text-blue-700 font-semibold">{name}</a>
    </Link>
    <div className="flex items-center">
      {levels.map((level: JobLevel) => (
        <p className="mr-2 text-sm text-gray-400" key={level.name}>{level.name}</p>
      ))}
    </div>
    <p className="mt-1 font-bold">{company.name}</p>
  </div>
);

JobItem.defaultProps = {
  hasBorder: true,
};

export default JobItem;
