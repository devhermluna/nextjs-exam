import { QueryParams } from '@/interfaces/API';
import { parseQueryParams } from '@/utils/api-helper';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { get } from 'lodash';

const createInstance = (config: AxiosRequestConfig): AxiosInstance => {
  const instance = axios.create(config);

  instance.interceptors.response.use((response) => {
    return get(response, 'data') || response;
  }, (error) => {
    return Promise.reject(error);
  })

  return instance;
}

type ID = string | number;
type Rest = { [rest:string]: any }

export const restEndpoints = (instance: AxiosInstance, resource: string = '', defaultQueryParams = {}) => {
  const r: string = resource ? `/${resource}` : ''

  return {
    get: (params: QueryParams = {}) => instance.get(`${r}${parseQueryParams({
      ...defaultQueryParams,
      ...params
    })}`),
    find: (id: ID) => instance.get(`${r}/${id}`),
    create: (form: Rest) => instance.post(r, form),
    update: (id: ID, form: Rest) => instance.put(`${r}/${id}`, form),
    delete: (id: ID) => instance.delete(`${r}/${id}`)
  }
}

export default createInstance;