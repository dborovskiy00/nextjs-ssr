import { AxiosInstance, AxiosResponse } from 'axios';
import {
  Interceptors,
  AxiosInstanceService,
  AxiosConfig,
} from './AxiosInstanceService';

type AxiosCallback<T> = () => Promise<AxiosResponse<T>>;

export class AxiosApiService {
  private readonly axiosInstance: AxiosInstance;

  constructor(config: Partial<AxiosConfig> = {}, interceptors?: Interceptors) {
    this.axiosInstance = AxiosInstanceService.create(config, interceptors);
  }

  get<T = any>(path: string, config?: Partial<AxiosConfig>): Promise<T> {
    return this.processRequest<T>(
      this.axiosInstance.get.bind(
        this.axiosInstance,
        path,
        config,
      ) as AxiosCallback<T>,
    );
  }

  delete<T = any>(
    path: string,
    config?: Partial<AxiosConfig>,
  ): Promise<T> {
    return this.processRequest<T>(
      this.axiosInstance.delete.bind(
        this.axiosInstance,
        path,
        config,
      ) as AxiosCallback<T>,
    );
  }

  post<T = any, D = any>(
    path: string,
    body?: D,
    config?: Partial<AxiosConfig>,
  ): Promise<T> {
    return this.processRequest(
      this.axiosInstance.post.bind(
        this.axiosInstance,
        path,
        body,
        config,
      ) as AxiosCallback<T>,
    );
  }

  put<T = any, D = any>(
    path: string,
    body?: D,
    config?: Partial<AxiosConfig>,
  ): Promise<T> {
    return this.processRequest(
      this.axiosInstance.put.bind(
        this.axiosInstance,
        path,
        body,
        config,
      ) as AxiosCallback<T>,
    );
  }

  patch<T = any, D = any>(
    path: string,
    body?: D,
    config?: Partial<AxiosConfig>,
  ): Promise<T> {
    return this.processRequest(
      this.axiosInstance.patch.bind(
        this.axiosInstance,
        path,
        body,
        config,
      ) as AxiosCallback<T>,
    );
  }

  private async processRequest<T>(request: AxiosCallback<T>): Promise<T> {
    const { data } = await request();

    return data;
  }
}
