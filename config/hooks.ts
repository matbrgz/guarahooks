import { Icons } from '@/components/icons';

export type HookCategory = {
  slug: string;
  name: string;
  description: string;
  icon: keyof typeof Icons;
  hooks: { name: string }[];
  isNew?: boolean;
};

export function getCategory(slug: string): HookCategory | undefined {
  return categories.find((category) => category.slug === slug);
}

export const categories: HookCategory[] = [
  {
    slug: 'sensors',
    name: 'Sensors',
    description:
      'Listen to changes in the interface and update your states and components.',
    icon: 'Signal',
    hooks: [
      {
        name: 'use-window-size',
      },
      {
        name: 'use-media',
      },
    ],
    isNew: true, // TODO: Remove this after 1.0.0
  },
];
