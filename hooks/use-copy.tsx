import { useState } from 'react';

interface UseCopyReturn {
  copied: boolean;
  copy: (text: string) => Promise<boolean>;
}

export function useCopy(duration: number = 1500): UseCopyReturn {
  const [copied, setCopied] = useState<boolean>(false);

  const copy = async (text: string): Promise<boolean> => {
    try {
      await navigator.clipboard.writeText(text);

      setCopied(true);
      setTimeout(() => setCopied(false), duration);
      return true;
    } catch (err: unknown) {
      console.error('Failed to copy text: ', err);
      return false;
    }
  };

  return {
    copied,
    copy,
  };
}
