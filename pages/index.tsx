import type { NextPage } from 'next';
import Card from '@/components/Card';
import CategoryItem from '@/components/CategoryItem';

const Home: NextPage = () => (
  <div className="container -my-20 relative">
    <Card className="p-8">
      <h1 className="text-2xl title">Categories</h1>
      <ul className="flex justify-between -mx-2 mt-5">
        <CategoryItem link="/photos">Photos</CategoryItem>
        <CategoryItem link="/jobs">Jobs</CategoryItem>
      </ul>
    </Card>
  </div>
);

export default Home;
