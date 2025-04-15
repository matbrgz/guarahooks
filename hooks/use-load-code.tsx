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
    const handleEmptyCode = () => {
      setCode('');
      setHighlightedCode(null);
    };

    const loadCode = async () => {
      try {
        const response = await fetch(`/r/${item.name}.json`);
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
        setCode(codeContent);

        // Pre-highlight the code
        const highlighted = await highlight(codeContent, 'ts');
        setHighlightedCode(highlighted);
      } catch (error) {
        console.error('Failed to load code:', error);
        handleEmptyCode();
      }
    };

    loadCode();
  }, [item.name]);

  return { code, highlightedCode };
}
