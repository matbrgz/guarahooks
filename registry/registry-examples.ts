import { Registry } from 'shadcn/registry';

export const examples: Registry['items'] = [
  {
    name: 'use-window-size-demo',
    type: 'registry:example',
    title: 'Use Window Size Demo',
    description: "Tracks the current window's dimensions (width and height).",
    registryDependencies: ['https://easy-hooks.vercel.app/r/use-window-size'],
    files: [
      {
        path: 'registry/examples/use-window-size-demo.tsx',
        type: 'registry:example',
        target: 'components/examples/use-window-size-demo.tsx',
      },
    ],
  },
];
