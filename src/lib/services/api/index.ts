import { AxiosApiService } from './shared/AxiosApiService';

const ApiService = new AxiosApiService(
  { baseURL: process.env.NEXT_PUBLIC_API_URL },
);

export default ApiService;
