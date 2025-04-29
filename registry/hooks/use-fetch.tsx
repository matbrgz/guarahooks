'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export interface UseFetchOptions extends RequestInit {}

export interface UseFetchResult<T> {
  data: T | null;
  error: Error | null;
  loading: boolean;
  refetch: () => void;
  abort: () => void;
  aborted: boolean;
}

export function useFetch<T = unknown>(
  url: string,
  options?: UseFetchOptions,
): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [aborted, setAborted] = useState<boolean>(false);

  const abortController = useRef<AbortController | null>(null);
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
      abortController.current?.abort();
    };
  }, []);

  const fetchData = useCallback(async () => {
    abortController.current?.abort();
    const controller = new AbortController();
    abortController.current = controller;

    const signal = controller.signal;

    setLoading(true);
    setError(null);
    setAborted(false);

    try {
      const response = await fetch(url, { ...options, signal });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const json = (await response.json()) as T;

      if (isMounted.current) {
        setData(json);
      }

      return json;
    } catch (err) {
      if ((err as any).name === 'AbortError') {
        setAborted(true);
      } else if (isMounted.current) {
        setError(err as Error);
        setData(null);
      }
      return null;
    } finally {
      if (isMounted.current) {
        setLoading(false);
      }
    }
  }, [url, JSON.stringify(options)]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const refetch = useCallback(() => {
    fetchData();
  }, [fetchData]);

  const abort = useCallback(() => {
    abortController.current?.abort();
    setAborted(true);
  }, []);

  return { data, error, loading, refetch, abort, aborted };
}
