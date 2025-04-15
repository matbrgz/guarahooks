export type HookCategory = {
  slug: string;
  name: string;
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
    hooks: [
      {
        name: 'use-window-size',
      },
      {
        name: 'use-window-scroll',
      },
      {
        name: 'use-media',
      },
    ],
  },
];
