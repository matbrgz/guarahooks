import { Registry } from 'shadcn/registry';

export const examples: Registry['items'] = [
  {
    name: 'use-window-size-demo',
    type: 'registry:block',
    title: 'UseWindowSizeDemo',
    description: "use-window-size's hook in action.",
    registryDependencies: ['https://h3-use.vercel.app/r/use-window-size'],
    files: [
      {
        path: 'registry/examples/use-window-size-demo.tsx',
        type: 'registry:block',
        target: 'components/examples/use-window-size-demo.tsx',
      },
    ],
  },
  {
    name: 'use-media-demo',
    type: 'registry:block',
    title: 'UseMediaDemo',
    description: "use-media's hook in action.",
    registryDependencies: ['https://h3-use.vercel.app/r/use-media'],
    files: [
      {
        path: 'registry/examples/use-media-demo.tsx',
        type: 'registry:block',
        target: 'components/examples/use-media-demo.tsx',
      },
    ],
  },
  {
    name: 'use-mouse-demo',
    type: 'registry:block',
    title: 'UseMouseDemo',
    description: "use-mouse's hook in action.",
    registryDependencies: ['https://h3-use.vercel.app/r/use-mouse'],
    files: [
      {
        path: 'registry/examples/use-mouse-demo.tsx',
        type: 'registry:block',
        target: 'components/examples/use-mouse-demo.tsx',
      },
    ],
  },
  {
    name: 'use-keypress-demo',
    type: 'registry:block',
    title: 'UseKeypressDemo',
    description: "use-keypress's hook in action.",
    registryDependencies: ['https://h3-use.vercel.app/r/use-keypress'],
    files: [
      {
        path: 'registry/examples/use-keypress-demo.tsx',
        type: 'registry:block',
        target: 'components/examples/use-keypress-demo.tsx',
      },
    ],
  },
  {
    name: 'use-orientation-demo',
    type: 'registry:block',
    title: 'UseOrientationDemo',
    description: "use-orientation's hook in action.",
    registryDependencies: ['https://h3-use.vercel.app/r/use-orientation'],
    files: [
      {
        path: 'registry/examples/use-orientation-demo.tsx',
        type: 'registry:block',
        target: 'components/examples/use-orientation-demo.tsx',
      },
    ],
  },
  {
    name: 'use-toggle-demo',
    type: 'registry:block',
    title: 'UseToggleDemo',
    description: "use-toggle's hook in action.",
    registryDependencies: ['https://h3-use.vercel.app/r/use-toggle'],
    files: [
      {
        path: 'registry/examples/use-toggle-demo.tsx',
        type: 'registry:block',
        target: 'components/examples/use-toggle-demo.tsx',
      },
    ],
  },
  {
    name: 'use-set-demo',
    type: 'registry:block',
    title: 'UseSetDemo',
    description: "use-set's hook in action.",
    registryDependencies: ['https://h3-use.vercel.app/r/use-set'],
    files: [
      {
        path: 'registry/examples/use-set-demo.tsx',
        type: 'registry:block',
        target: 'components/examples/use-set-demo.tsx',
      },
    ],
  },
];
