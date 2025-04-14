import { clsx, type ClassValue } from 'clsx';
import { RegistryItem } from 'shadcn/registry';
import { twMerge } from 'tailwind-merge';

import registry from '@/registry.json';

const hooks = registry.items as unknown as RegistryItem[];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getHookExamples = (names: string[]): RegistryItem[] => {
  const hooksExamplesMap = new Map(hooks.map((hook) => [hook.name, hook]));

  return names
    .map((name) => hooksExamplesMap.get(name))
    .filter((hook): hook is RegistryItem => Boolean(hook));
};
