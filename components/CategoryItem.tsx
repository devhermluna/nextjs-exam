import React from 'react';
import Link from 'next/link';

interface Props {
  link: string;
  children: React.ReactNode;
}

const CategoryItem = ({
  link,
  children,
}: Props) => (
  <li className="w-1/2 p-2">
    <Link href={link}>
      <a className="h-36 flex items-center justify-center bg-gray-200 rounded-lg">{children}</a>
    </Link>
  </li>
);

export default CategoryItem;
