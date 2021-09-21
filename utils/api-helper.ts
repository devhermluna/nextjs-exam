import queryString from 'query-string';
import { QueryParams } from '@/interfaces/API';

export const parseQueryParams = (object: QueryParams, identifier = '?') => {
  if (!object) return '';
  return `${identifier}${queryString.stringify(object)}`;
};

export default {
  parseQueryParams,
};
