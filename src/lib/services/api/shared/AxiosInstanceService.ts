import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const DEFAULT_AXIOS_CONFIG = {
  timeout: 60000,
  headers: {
    'content-type': 'application/json',
  },
};

export type InterceptorTarget = AxiosRequestConfig | AxiosResponse;
export type ResponseCallback<T> = (response: T) => T | Promise<T>;
export type ErrorCallback = (error: any) => any;
export interface Interceptor<T = InterceptorTarget> {
  getSuccessCallback: (instance: AxiosInstance) => ResponseCallback<T>;
  getErrorCallback: (instance: AxiosInstance) => ErrorCallback;
}
export type AxiosConfig = AxiosRequestConfig;
export interface Interceptors {
  request?: Interceptor<AxiosRequestConfig>[];
  response?: Interceptor<AxiosResponse>[];
}

export class AxiosInstanceService {
  private static axiosInstance: AxiosInstance;

  static create(
    config: Partial<AxiosConfig> = {},
    interceptors?: Interceptors,
  ): AxiosInstance {
    this.axiosInstance = axios.create({
      ...DEFAULT_AXIOS_CONFIG,
      ...config,
    } as AxiosConfig);

    this.installInterceptors(interceptors);

    return this.axiosInstance;
  }

  private static installInterceptors(interceptors?: Interceptors): void {
    if (interceptors) {
      const entries = Object.entries(interceptors) as [
        keyof Interceptors,
        Interceptor[],
      ][];

      entries.forEach(([type, interceptorsByType]) => {
        this.axiosInstance.interceptors[type].use(
          this.getResponseRequestCallBack<any>(interceptorsByType),
          this.getRejectRequestCallBack(interceptorsByType),
        );
      });
    }
  }

  private static getResponseRequestCallBack<T>(
    interceptors: Interceptor<T>[],
  ): ResponseCallback<T> {
    return (response: T) =>
      interceptors.reduce<T | Promise<T>>(
        async (result, interceptor) =>
          interceptor.getSuccessCallback?.(this.axiosInstance)(await result),
        response,
      );
  }

  private static getRejectRequestCallBack<T>(
    interceptors: Interceptor<T>[],
  ): ErrorCallback {
    return (error: any) =>
      interceptors.reduce(
        async (result, interceptor) =>
          interceptor.getErrorCallback?.(this.axiosInstance)(await result),
        error,
      );
  }
}
