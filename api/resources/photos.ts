import { AxiosInstance } from 'axios';
import { parseQueryParams } from '@/utils/api-helper';
import createInstance, { restEndpoints } from '../axios';

const instance: AxiosInstance = createInstance({
  baseURL: process.env.NEXT_PUBLIC_PEXELS_API_URL,
  headers: {
    Authorization: process.env.NEXT_PUBLIC_PEXELS_API_KEY,
  },
});

const endpoints = restEndpoints(instance, 'curated');

export default {
  ...endpoints,
  search: (query: string, params: { page: number }) => {
    if (query) return instance.get(`/search?query=${query}${parseQueryParams(params, '&')}`);
    return endpoints.get();
  },
};
