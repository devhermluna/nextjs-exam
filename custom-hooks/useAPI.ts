import { get } from 'lodash';
import photos from '@/api/resources/photos';
import jobs from '@/api/resources/jobs';

export const endpoints = {
  photos,
  jobs
};

const useAPI = (...args: Array<string>) => args.reduce((accumulator: Array<any>, current) => {
  if (get(endpoints, current)) {
    return [...accumulator, get(endpoints, current)];
  }

  return accumulator;
}, []);

export default useAPI;
