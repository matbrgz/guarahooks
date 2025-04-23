import { Registry } from 'shadcn/registry';

export const examples: Registry['items'] = [
  {
    name: 'use-window-size-demo',
    type: 'registry:example',
    title: 'UseWindowSizeDemo',
    description: "use-window-size's hook in action.",
    registryDependencies: ['card', 'https://h3-use.com/r/use-window-size.json'],
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
    registryDependencies: ['card', 'https://h3-use.com/r/use-media.json'],
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
    registryDependencies: [
      'checkbox',
      'card',
      'https://h3-use.com/r/use-mouse.json',
    ],
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
    registryDependencies: ['card', 'https://h3-use.com/r/use-keypress.json'],
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
    registryDependencies: ['card', 'https://h3-use.com/r/use-orientation.json'],
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
    registryDependencies: [
      'card',
      'button',
      'https://h3-use.com/r/use-toggle.json',
    ],
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
    registryDependencies: [
      'card',
      'button',
      'input',
      'https://h3-use.com/r/use-set.json',
    ],
    files: [
      {
        path: 'registry/example/use-set-demo.tsx',
        type: 'registry:example',
        target: 'components/example/use-set-demo.tsx',
      },
    ],
  },
  {
    name: 'use-local-storage-demo',
    type: 'registry:example',
    title: 'UseLocalStorageDemo',
    description: "use-local-storage's hook in action.",
    registryDependencies: [
      'card',
      'input',
      'label',
      'https://h3-use.com/r/use-local-storage.json',
    ],
    files: [
      {
        path: 'registry/example/use-local-storage-demo.tsx',
        type: 'registry:example',
        target: 'components/example/use-local-storage-demo.tsx',
      },
    ],
  },
  {
    name: 'use-session-storage-demo',
    type: 'registry:example',
    title: 'UseSessionStorageDemo',
    description: "use-session-storage's hook in action.",
    registryDependencies: [
      'card',
      'button',
      'input',
      'label',
      'https://h3-use.com/r/use-session-storage.json',
    ],
    files: [
      {
        path: 'registry/example/use-session-storage-demo.tsx',
        type: 'registry:example',
        target: 'components/example/use-session-storage-demo.tsx',
      },
    ],
  },
  {
    name: 'use-cookie-demo',
    type: 'registry:example',
    title: 'UseCookieDemo',
    description: "use-cookie's hook in action.",
    registryDependencies: [
      'card',
      'input',
      'button',
      'https://h3-use.com/r/use-cookie.json',
    ],
    files: [
      {
        path: 'registry/example/use-cookie-demo.tsx',
        type: 'registry:example',
        target: 'components/example/use-cookie-demo.tsx',
      },
    ],
  },
  {
    name: 'use-copy-to-clipboard-demo',
    type: 'registry:example',
    title: 'UseCopyToClipboardDemo',
    description: "use-copy-to-clipboard's hook in action.",
    registryDependencies: [
      'card',
      'button',
      'input',
      'https://h3-use.com/r/use-copy-to-clipboard.json',
    ],
    files: [
      {
        path: 'registry/example/use-copy-to-clipboard-demo.tsx',
        type: 'registry:example',
        target: 'components/example/use-copy-to-clipboard-demo.tsx',
      },
    ],
  },
  {
    name: 'use-debounce-demo',
    type: 'registry:example',
    title: 'UseDebounceDemo',
    description: "use-debounce's hook in action.",
    registryDependencies: [
      'card',
      'input',
      'https://h3-use.com/r/use-debounce.json',
    ],
    files: [
      {
        path: 'registry/example/use-debounce-demo.tsx',
        type: 'registry:example',
        target: 'components/example/use-debounce-demo.tsx',
      },
    ],
  },
  {
    name: 'use-click-outside-demo',
    type: 'registry:example',
    title: 'UseClickOutsideDemo',
    description: "use-click-outside's hook in action.",
    registryDependencies: [
      'card',
      'https://h3-use.com/r/use-click-outside.json',
    ],
    files: [
      {
        path: 'registry/example/use-click-outside-demo.tsx',
        type: 'registry:example',
        target: 'components/example/use-click-outside-demo.tsx',
      },
    ],
  },
];
