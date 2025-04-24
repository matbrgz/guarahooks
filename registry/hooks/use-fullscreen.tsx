'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

// Type for the ref that can be passed to the hook
export type FullscreenRef = React.RefObject<HTMLElement> | null;

// Utility functions for cross-browser Fullscreen API
function getFullscreenElement(): Element | null {
  return (
    document.fullscreenElement ||
    // @ts-ignore
    document.webkitFullscreenElement ||
    // @ts-ignore
    document.mozFullScreenElement ||
    // @ts-ignore
    document.msFullscreenElement ||
    null
  );
}

function requestFullscreen(element: HTMLElement) {
  if (element.requestFullscreen) return element.requestFullscreen();
  // @ts-ignore
  if (element.webkitRequestFullscreen) return element.webkitRequestFullscreen();
  // @ts-ignore
  if (element.mozRequestFullScreen) return element.mozRequestFullScreen();
  // @ts-ignore
  if (element.msRequestFullscreen) return element.msRequestFullscreen();
}

function exitFullscreen() {
  if (document.exitFullscreen) return document.exitFullscreen();
  // @ts-ignore
  if (document.webkitExitFullscreen) return document.webkitExitFullscreen();
  // @ts-ignore
  if (document.mozCancelFullScreen) return document.mozCancelFullScreen();
  // @ts-ignore
  if (document.msExitFullscreen) return document.msExitFullscreen();
}

function addFullscreenListener(cb: () => void) {
  document.addEventListener('fullscreenchange', cb);
  document.addEventListener('webkitfullscreenchange', cb);
  document.addEventListener('mozfullscreenchange', cb);
  document.addEventListener('MSFullscreenChange', cb);
}

function removeFullscreenListener(cb: () => void) {
  document.removeEventListener('fullscreenchange', cb);
  document.removeEventListener('webkitfullscreenchange', cb);
  document.removeEventListener('mozfullscreenchange', cb);
  document.removeEventListener('MSFullscreenChange', cb);
}

export function useFullscreen(
  ref: FullscreenRef = null,
): [boolean, () => void, () => void] {
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const refCached = useRef(ref);

  useEffect(() => {
    refCached.current = ref;
  }, [ref]);

  const handleChange = useCallback(() => {
    const current = refCached.current?.current ?? document.documentElement;
    setIsFullscreen(getFullscreenElement() === current);
  }, []);

  useEffect(() => {
    addFullscreenListener(handleChange);
    handleChange(); // Initial check
    return () => {
      removeFullscreenListener(handleChange);
    };
  }, [handleChange]);

  const enter = useCallback(() => {
    const el = refCached.current?.current ?? document.documentElement;
    if (el && getFullscreenElement() !== el) {
      requestFullscreen(el);
    }
  }, []);

  const exit = useCallback(() => {
    if (getFullscreenElement()) {
      exitFullscreen();
    }
  }, []);

  return [isFullscreen, enter, exit];
}
