'use client';

import { useCallback, useEffect, useRef } from 'react';

// Types
interface UseMutationObserverProps {
  target: HTMLElement | null;
  options?: MutationObserverInit;
  callback: MutationCallback;
}

export function useMutationObserver({
  target,
  options = {
    attributes: true,
    childList: true,
    subtree: true,
  },
  callback,
}: UseMutationObserverProps) {
  const observerRef = useRef<MutationObserver | null>(null);

  const disconnect = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!target) return;

    // Disconnect previous observer if exists
    disconnect();

    // Create new observer
    observerRef.current = new MutationObserver(callback);
    observerRef.current.observe(target, options);

    // Cleanup on unmount
    return () => {
      disconnect();
    };
  }, [target, options, callback, disconnect]);

  return {
    disconnect,
  };
}
