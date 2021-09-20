import useAPI from 'custom-hooks/useAPI';
import DefaultLayout from 'layouts/default-layout';
import { get } from 'lodash';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Job } from '@/interfaces/Job';
import JobItem from '@/components/Job/Item';
import DetailsLoader from '@/components/Job/DetailsLoader';
import Card from '@/components/Card';

const JobDetails = () => {
  const [jobsAPI] = useAPI('jobs');
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState<Job | null>(null);

  const getJobDetails = async () => {
    if (loading) return;

    try {
      setLoading(true);
      const response = await jobsAPI.find(id);
      setDetails(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getJobDetails();
  }, []);

  return (
    <DefaultLayout>
      <Card className="p-4">
        {!loading && details && (
          <>
            <JobItem {...details} hasBorder={false} />
            <p
              className="mt-10"
              dangerouslySetInnerHTML={{
                __html: get(details, 'contents'),
              }}
            />
          </>
        )}
        {loading && (<DetailsLoader />)}
      </Card>
    </DefaultLayout>
  );
};

export default JobDetails;
