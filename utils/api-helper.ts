import { QueryParams } from '@/interfaces/API';
import queryString from 'query-string';

export const parseQueryParams = (object: QueryParams, identifier = '?') => {
  if (!object) return '';
  return `${identifier}${queryString.stringify(object)}`;
}