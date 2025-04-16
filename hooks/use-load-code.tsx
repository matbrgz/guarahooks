'use client';

import { JSX, useEffect, useState } from 'react';

import { RegistryItem } from 'shadcn/registry';

import { highlight } from '@/components/code-block';

import { convertRegistryPaths } from '@/lib/hooks';

export function useLoadCode(item: RegistryItem) {
  const [code, setCode] = useState<string | null>(null);
  const [highlightedCode, setHighlightedCode] = useState<JSX.Element | null>(
    null,
  );

  useEffect(() => {
    let isMounted = true;
    const abortController = new AbortController();

    const handleEmptyCode = () => {
      if (!isMounted) return;
      setCode('');
      setHighlightedCode(null);
    };

    const loadCode = async () => {
      try {
        const response = await fetch(`/r/${item.name}.json`, {
          signal: abortController.signal,
        });
        if (!response.ok) {
          handleEmptyCode();
          return;
        }

        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          handleEmptyCode();
          return;
        }

        const data = await response.json();
        const codeContent = convertRegistryPaths(data.files[0].content) || '';
        if (!isMounted) return;
        setCode(codeContent);

        if (codeContent) {
          // Pre-highlight the code
          const highlighted = await highlight(codeContent, 'ts');
          if (isMounted) setHighlightedCode(highlighted);
        } else {
          setHighlightedCode(null);
        }
      } catch (error) {
        if (abortController.signal.aborted) return;
        console.error('Failed to load code:', error);
        handleEmptyCode();
      }
    };

    loadCode();

    return () => {
      isMounted = false;
      abortController.abort();
    };
  }, [item.name]);

  return { code, highlightedCode };
}
