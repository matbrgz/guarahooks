import { clsx, type ClassValue } from 'clsx';
import { RegistryItem } from 'shadcn/registry';
import { twMerge } from 'tailwind-merge';

import { examples } from '@/registry/registry-examples';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getHookExamples = (names: string[]): RegistryItem[] => {
  const hooksExamplesMap = new Map(
    examples.map((example) => [example.name, example]),
  );

  return names
    .map((name) => hooksExamplesMap.get(name))
    .filter((example): example is RegistryItem => Boolean(example));
};
