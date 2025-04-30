'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

// Types
export interface UseAxiosProps {
  /**
   * Base URL for axios instance
   */
  baseURL?: string;
  /**
   * Default headers for axios instance
   */
  headers?: Record<string, string>;
  /**
   * Default timeout in milliseconds
   */
  timeout?: number;
  /**
   * Initial config for axios instance
   */
  config?: AxiosRequestConfig;
}

export interface UseAxiosReturn {
  /**
   * Axios instance that can be used directly
   */
  instance: AxiosInstance;
  /**
   * Loading state for requests
   */
  loading: boolean;
  /**
   * Error from the most recent request
   */
  error: AxiosError | null;
  /**
   * Data from the most recent request
   */
  data: any;
  /**
   * Execute a GET request
   */
  get: <T = any>(
    url: string,
    config?: AxiosRequestConfig,
  ) => Promise<AxiosResponse<T>>;
  /**
   * Execute a POST request
   */
  post: <T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ) => Promise<AxiosResponse<T>>;
  /**
   * Execute a PUT request
   */
  put: <T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ) => Promise<AxiosResponse<T>>;
  /**
   * Execute a DELETE request
   */
  delete: <T = any>(
    url: string,
    config?: AxiosRequestConfig,
  ) => Promise<AxiosResponse<T>>;
  /**
   * Execute a PATCH request
   */
  patch: <T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ) => Promise<AxiosResponse<T>>;
  /**
   * Reset error state
   */
  resetError: () => void;
}

export function useAxios({
  baseURL = '',
  headers = {},
  timeout = 10000,
  config = {},
}: UseAxiosProps = {}): UseAxiosReturn {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError | null>(null);
  const [data, setData] = useState<any>(null);

  // Create a ref to store the axios instance to prevent recreation on each render
  const instanceRef = useRef<AxiosInstance | null>(null);

  // Initialize axios instance
  useEffect(() => {
    instanceRef.current = axios.create({
      baseURL,
      headers,
      timeout,
      ...config,
    });

    return () => {
      instanceRef.current = null;
    };
  }, [baseURL, timeout, config]);

  // Get the current instance
  const getInstance = useCallback((): AxiosInstance => {
    if (!instanceRef.current) {
      instanceRef.current = axios.create({
        baseURL,
        headers,
        timeout,
        ...config,
      });
    }
    return instanceRef.current;
  }, [baseURL, headers, timeout, config]);

  // Helper to handle request execution
  const executeRequest = useCallback(
    async <T = any,>(
      method: string,
      url: string,
      data?: any,
      customConfig?: AxiosRequestConfig,
    ): Promise<AxiosResponse<T>> => {
      setLoading(true);
      setError(null);

      try {
        const instance = getInstance();

        const response = await instance.request<T>({
          method,
          url,
          data,
          ...customConfig,
        });

        setData(response.data);
        return response;
      } catch (err) {
        const axiosError = err as AxiosError;
        setError(axiosError);
        throw axiosError;
      } finally {
        setLoading(false);
      }
    },
    [getInstance],
  );

  // Request methods
  const get = useCallback(
    <T = any,>(url: string, config?: AxiosRequestConfig) => {
      return executeRequest<T>('get', url, undefined, config);
    },
    [executeRequest],
  );

  const post = useCallback(
    <T = any,>(url: string, data?: any, config?: AxiosRequestConfig) => {
      return executeRequest<T>('post', url, data, config);
    },
    [executeRequest],
  );

  const put = useCallback(
    <T = any,>(url: string, data?: any, config?: AxiosRequestConfig) => {
      return executeRequest<T>('put', url, data, config);
    },
    [executeRequest],
  );

  const del = useCallback(
    <T = any,>(url: string, config?: AxiosRequestConfig) => {
      return executeRequest<T>('delete', url, undefined, config);
    },
    [executeRequest],
  );

  const patch = useCallback(
    <T = any,>(url: string, data?: any, config?: AxiosRequestConfig) => {
      return executeRequest<T>('patch', url, data, config);
    },
    [executeRequest],
  );

  const resetError = useCallback(() => {
    setError(null);
  }, []);

  return {
    instance: getInstance(),
    loading,
    error,
    data,
    get,
    post,
    put,
    delete: del,
    patch,
    resetError,
  };
}
