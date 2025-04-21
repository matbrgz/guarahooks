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
      'Listen to changes in the browser environment and update you application accordingly.',
    icon: 'Signal',
    hooks: [],
  },
  {
    slug: 'state-management',
    name: 'State Management',
    description:
      'Easily manage the state of different types of data in your application.',
    icon: 'Swap',
    hooks: [],
  },
  {
    slug: 'lifecycle',
    name: 'Lifecycle',
    description:
      'Handle the lifecycle of your React application in a declarative way.',
    icon: 'Refresh',
    hooks: [],
  },
  {
    slug: 'web-apis',
    name: 'Web APIs',
    description:
      'Use the power of the browser to enhance your application in a easy way.',
    icon: 'Alert',
    hooks: [],
  },
  {
    slug: 'user-interaction',
    name: 'User Interaction',
    description: 'Handle the user interactions in a declarative and easy way.',
    icon: 'Alert',
    hooks: [],
  },
];
