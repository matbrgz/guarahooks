import { Registry } from 'shadcn/registry';

export const hooks: Registry['items'] = [
  {
    name: 'use-window-size',
    type: 'registry:hook',
    title: 'Use Window Size',
    description: "Tracks the current window's dimensions (width and height).",
    files: [
      {
        path: 'registry/hooks/use-window-size.tsx',
        type: 'registry:hook',
        target: 'hooks/easy-hooks/use-window-size.tsx',
      },
    ],
  },
];
