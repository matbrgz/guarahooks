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
    name: 'use-debounce-callback-demo',
    type: 'registry:example',
    title: 'UseDebounceCallbackDemo',
    description: "use-debounce-callback's hook in action.",
    registryDependencies: [
      'card',
      'input',
      'https://h3-use.com/r/use-debounce-callback.json',
    ],
    files: [
      {
        path: 'registry/example/use-debounce-callback-demo.tsx',
        type: 'registry:example',
        target: 'components/example/use-debounce-callback-demo.tsx',
      },
    ],
  },
  {
    name: 'use-debounce-state-demo',
    type: 'registry:example',
    title: 'UseDebounceStateDemo',
    description: "use-debounce-state's hook in action.",
    registryDependencies: [
      'card',
      'input',
      'https://h3-use.com/r/use-debounce-state.json',
    ],
    files: [
      {
        path: 'registry/example/use-debounce-state-demo.tsx',
        type: 'registry:example',
        target: 'components/example/use-debounce-state-demo.tsx',
      },
    ],
  },
  {
    name: 'use-on-mount-demo',
    type: 'registry:example',
    title: 'UseOnMountDemo',
    description: "use-on-mount's hook in action.",
    registryDependencies: ['card', 'https://h3-use.com/r/use-on-mount.json'],
    files: [
      {
        path: 'registry/example/use-on-mount-demo.tsx',
        type: 'registry:example',
        target: 'components/example/use-on-mount-demo.tsx',
      },
    ],
  },
  {
    name: 'use-on-unmount-demo',
    type: 'registry:example',
    title: 'UseOnUnmountDemo',
    description: "use-on-unmount's hook in action.",
    registryDependencies: [
      'card',
      'button',
      'sonner',
      'https://h3-use.com/r/use-on-unmount.json',
    ],
    files: [
      {
        path: 'registry/example/use-on-unmount-demo.tsx',
        type: 'registry:example',
        target: 'components/example/use-on-unmount-demo.tsx',
      },
    ],
  },
  {
    name: 'use-did-update-demo',
    type: 'registry:example',
    title: 'UseDidUpdateDemo',
    description: "use-did-update's hook in action.",
    registryDependencies: [
      'card',
      'button',
      'https://h3-use.com/r/use-did-update.json',
    ],
    files: [
      {
        path: 'registry/example/use-did-update-demo.tsx',
        type: 'registry:example',
        target: 'components/example/use-did-update-demo.tsx',
      },
    ],
  },
  {
    name: 'use-os-demo',
    type: 'registry:example',
    title: 'UseOSDemo',
    description: "use-os's hook in action.",
    registryDependencies: ['card', 'https://h3-use.com/r/use-os.json'],
    files: [
      {
        path: 'registry/example/use-os-demo.tsx',
        type: 'registry:example',
        target: 'components/example/use-os-demo.tsx',
      },
    ],
  },
  {
    name: 'use-idle-demo',
    type: 'registry:example',
    title: 'UseIdleDemo',
    description: "use-idle's hook in action.",
    registryDependencies: [
      'card',
      'badge',
      'button',
      'https://h3-use.com/r/use-idle.json',
    ],
    files: [
      {
        path: 'registry/example/use-idle-demo.tsx',
        type: 'registry:example',
        target: 'components/example/use-idle-demo.tsx',
      },
    ],
  },
  {
    name: 'use-fullscreen-demo',
    type: 'registry:example',
    title: 'UseFullscreenDemo',
    description: "use-fullscreen's hook in action.",
    registryDependencies: [
      'card',
      'button',
      'https://h3-use.com/r/use-fullscreen.json',
    ],
    files: [
      {
        path: 'registry/example/use-fullscreen-demo.tsx',
        type: 'registry:example',
        target: 'components/example/use-fullscreen-demo.tsx',
      },
    ],
  },
];
