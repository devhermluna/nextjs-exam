import useAPI from 'custom-hooks/useAPI';
import DefaultLayout from 'layouts/default-layout';
import { range } from 'lodash';
import { useEffect, useMemo, useState } from 'react';
import { Meta } from '@/interfaces/Meta';
import { Job } from '@/interfaces/Job';
import Card from '@/components/Card';
import JobItem from '@/components/Job/Item';
import JobItemLoader from '@/components/Job/Loader';
import MetaButton from '@/components/MetaButton';

const jobs = () => {
  const [jobsAPI] = useAPI('jobs');
  const [loading, setLoading] = useState(false);
  const [jobItems, setJobItems] = useState<Job[]>([]);
  const [totalResults, setTotalResults] = useState<number>(0);
  const [meta, setMeta] = useState<Meta>({
    page: 1,
    items_per_page: 20,
  });

  const getJobs = async () => {
    if (loading) return;

    try {
      setLoading(true);
      const response = await jobsAPI.get(meta);

      setTotalResults(response.page_count);
      setJobItems(response.results);
      setMeta({
        page: response.page,
        items_per_page: response.items_per_page,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getJobs();
  }, [meta]);

  const canGoPrev = useMemo(() => meta.page === 1, [meta.page]);

  const canGoNext = useMemo(() => Math.floor(totalResults / (meta.items_per_page || 20)) <= meta.page, [totalResults, meta]);

  return (
    <DefaultLayout>
      <Card className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">JOBS</h2>
          <div className="controls flex items-center">
            <MetaButton
              disabled={canGoPrev}
              callback={() => {
                setMeta((currentState) => ({
                  ...currentState,
                  page: currentState.page - 1,
                }));
              }}
              icon="chevron-left"
            />
            <MetaButton
              disabled={canGoNext}
              callback={() => {
                setMeta((currentState) => ({
                  ...currentState,
                  page: currentState.page + 1,
                }));
              }}
              icon="chevron-right"
            />
          </div>
        </div>
        {!loading && jobItems.map((item: Job) => (<JobItem key={item.id} {...item} />))}
        {loading && range(20).map((item) => (<JobItemLoader key={item} />))}
      </Card>
    </DefaultLayout>
  );
};

export default jobs;
