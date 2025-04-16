'use client';

import { useEffect, useState } from 'react';

export type Orientation = 'portrait' | 'landscape';

/**
 * Utility to get the current orientation from a window object.
 *
 * @param win - The window object (for testability/SSR safety)
 */
function getOrientation(win?: typeof window): Orientation {
  if (!win) return 'portrait'; // Default for SSR
  return win.matchMedia('(orientation: portrait)').matches
    ? 'portrait'
    : 'landscape';
}

/**
 * React hook to get the current device orientation ('portrait' or 'landscape').
 * Uses window.matchMedia for reactivity and cross-browser support.
 *
 * Handles fallback for browsers that do not support addEventListener on MediaQueryList.
 *
 * @example const orientation = useOrientation();
 */
export function useOrientation(): Orientation {
  const [orientation, setOrientation] = useState<Orientation>(() =>
    getOrientation(typeof window !== 'undefined' ? window : undefined),
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia('(orientation: portrait)');

    // Handler for orientation changes
    const handler = () => setOrientation(getOrientation(window));

    // Prefer addEventListener, fallback to addListener for older browsers
    if (typeof mql.addEventListener === 'function') {
      mql.addEventListener('change', handler);
    } else {
      mql.addListener(handler);
    }

    return () => {
      if (typeof mql.removeEventListener === 'function') {
        mql.removeEventListener('change', handler);
      } else {
        mql.removeListener(handler);
      }
    };
  }, []);

  return orientation;
}
