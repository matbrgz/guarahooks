import { clsx, type ClassValue } from 'clsx';
import { RegistryItem } from 'shadcn/registry';
import { twMerge } from 'tailwind-merge';

import { examples } from '@/registry/registry-examples';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getHooksByNames = (names: string[]): RegistryItem[] => {
  const hooksExamplesMap = new Map(
    examples.map((example) => [example.name, example]),
  );

  return names
    .map((name) => hooksExamplesMap.get(`${name}-demo`))
    .filter((hook): hook is RegistryItem => Boolean(hook));
};

export const convertRegistryPaths = (content: string): string => {
  return content
    .replace(/@\/registry\/hooks/g, '@/hooks/easy-hooks')
    .replace(/@\/registry\/examples/g, '@/components/easy-hooks');
};
