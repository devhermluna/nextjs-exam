import { AxiosInstance } from "axios";
import createInstance, { restEndpoints } from "../axios";

const instance: AxiosInstance = createInstance({
  baseURL: 'https://www.themuse.com/api/public'
})

const endpoints = restEndpoints(instance, 'jobs', {
  api_key: process.env.NEXT_PUBLIC_THE_MUSE_API_KEY
});

export default endpoints;