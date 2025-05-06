'use client';

import {
  MutableRefObject,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

export interface UseScrollLockReturn {
  isLocked: boolean;
  lock: () => void;
  unlock: () => void;
  toggle: () => void;
}

export function useScrollLock<T extends HTMLElement = HTMLElement>(
  ref?: RefObject<T> | MutableRefObject<T | null>,
): UseScrollLockReturn {
  const refCached = useRef<
    RefObject<T> | MutableRefObject<T | null> | undefined
  >(ref);

  useEffect(() => {
    refCached.current = ref;
  }, [ref]);

  const [isLocked, setIsLocked] = useState<boolean>(false);
  const originalOverflow = useRef<string>('');

  const getTarget = useCallback((): HTMLElement => {
    const currentRef = refCached.current;
    const el = currentRef ? (currentRef as any).current : null;
    return (el as HTMLElement) || document.body;
  }, []);

  const lock = useCallback(() => {
    const target = getTarget();
    originalOverflow.current = target.style.overflow;
    target.style.overflow = 'hidden';
    setIsLocked(true);
  }, [getTarget]);

  const unlock = useCallback(() => {
    const target = getTarget();
    target.style.overflow = originalOverflow.current;
    setIsLocked(false);
  }, [getTarget]);

  const toggle = useCallback(() => {
    isLocked ? unlock() : lock();
  }, [isLocked, lock, unlock]);

  // Restore on unmount
  useEffect(() => {
    return () => {
      const target = getTarget();
      target.style.overflow = originalOverflow.current;
    };
  }, [getTarget]);

  return { isLocked, lock, unlock, toggle };
}
