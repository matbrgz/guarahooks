import { Registry } from 'shadcn/registry';

export const examples: Registry['items'] = [
  {
    name: 'use-window-size-demo',
    type: 'registry:example',
    title: 'UseWindowSizeDemo',
    description: "use-window-size's hook in action.",
    registryDependencies: ['https://h3-use.com/r/use-window-size.json'],
    files: [
      {
        path: 'registry/example/use-window-size-demo.tsx',
        type: 'registry:example',
        target: 'components/example/use-window-size-demo.tsx',
      },
    ],
  },
  {
    name: 'use-media-demo',
    type: 'registry:example',
    title: 'UseMediaDemo',
    description: "use-media's hook in action.",
    registryDependencies: ['https://h3-use.com/r/use-media.json'],
    files: [
      {
        path: 'registry/example/use-media-demo.tsx',
        type: 'registry:example',
        target: 'components/example/use-media-demo.tsx',
      },
    ],
  },
  {
    name: 'use-mouse-demo',
    type: 'registry:example',
    title: 'UseMouseDemo',
    description: "use-mouse's hook in action.",
    registryDependencies: ['https://h3-use.com/r/use-mouse.json'],
    files: [
      {
        path: 'registry/example/use-mouse-demo.tsx',
        type: 'registry:example',
        target: 'components/example/use-mouse-demo.tsx',
      },
    ],
  },
  {
    name: 'use-keypress-demo',
    type: 'registry:example',
    title: 'UseKeypressDemo',
    description: "use-keypress's hook in action.",
    registryDependencies: ['https://h3-use.com/r/use-keypress.json'],
    files: [
      {
        path: 'registry/example/use-keypress-demo.tsx',
        type: 'registry:example',
        target: 'components/example/use-keypress-demo.tsx',
      },
    ],
  },
  {
    name: 'use-orientation-demo',
    type: 'registry:example',
    title: 'UseOrientationDemo',
    description: "use-orientation's hook in action.",
    registryDependencies: ['https://h3-use.com/r/use-orientation.json'],
    files: [
      {
        path: 'registry/example/use-orientation-demo.tsx',
        type: 'registry:example',
        target: 'components/example/use-orientation-demo.tsx',
      },
    ],
  },
  {
    name: 'use-toggle-demo',
    type: 'registry:example',
    title: 'UseToggleDemo',
    description: "use-toggle's hook in action.",
    registryDependencies: ['https://h3-use.com/r/use-toggle.json'],
    files: [
      {
        path: 'registry/example/use-toggle-demo.tsx',
        type: 'registry:example',
        target: 'components/example/use-toggle-demo.tsx',
      },
    ],
  },
  {
    name: 'use-set-demo',
    type: 'registry:example',
    title: 'UseSetDemo',
    description: "use-set's hook in action.",
    registryDependencies: ['https://h3-use.com/r/use-set.json'],
    files: [
      {
        path: 'registry/example/use-set-demo.tsx',
        type: 'registry:example',
        target: 'components/example/use-set-demo.tsx',
      },
    ],
  },
];
