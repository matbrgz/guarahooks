'use client';

import { useEffect } from 'react';

export function useOnUnmount(callback: () => void): void {
  useEffect(() => {
    return () => {
      callback();
    };
  }, []);
}
