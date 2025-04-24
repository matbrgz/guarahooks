import { Registry } from 'shadcn/registry';

export const hooks: Registry['items'] = [
  {
    name: 'use-window-size',
    type: 'registry:hook',
    title: 'UseWindowSize',
    description: "Tracks the current window's dimensions.",
    files: [
      {
        path: 'registry/hooks/use-window-size.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-window-size.tsx',
      },
    ],
    categories: ['ui-and-dom'],
  },
  {
    name: 'use-media',
    type: 'registry:hook',
    title: 'UseMedia',
    description: 'Checks if the current window matches a media query.',
    files: [
      {
        path: 'registry/hooks/use-media.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-media.tsx',
      },
    ],
    categories: ['ui-and-dom'],
  },
  {
    name: 'use-mouse',
    type: 'registry:hook',
    title: 'UseMouse',
    description: 'Tracks the mouse position in the element and document.',
    files: [
      {
        path: 'registry/hooks/use-mouse.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-mouse.tsx',
      },
    ],
    categories: ['ui-and-dom'],
  },
  {
    name: 'use-keypress',
    type: 'registry:hook',
    title: 'UseKeypress',
    description: 'Tracks keyboard combinations and key presses.',
    files: [
      {
        path: 'registry/hooks/use-keypress.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-keypress.tsx',
      },
    ],
    categories: ['ui-and-dom'],
  },
  {
    name: 'use-orientation',
    type: 'registry:hook',
    title: 'UseOrientation',
    description: 'Tracks the current orientation of the device.',
    files: [
      {
        path: 'registry/hooks/use-orientation.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-orientation.tsx',
      },
    ],
    categories: ['ui-and-dom'],
  },
  {
    name: 'use-toggle',
    type: 'registry:hook',
    title: 'UseToggle',
    description: 'Controls a boolean state with a toggler.',
    files: [
      {
        path: 'registry/hooks/use-toggle.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-toggle.tsx',
      },
    ],
    categories: ['state-management'],
  },
  {
    name: 'use-set',
    type: 'registry:hook',
    title: 'UseSet',
    description: 'Manages a Set of items with ease.',
    files: [
      {
        path: 'registry/hooks/use-set.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-set.tsx',
      },
    ],
    categories: ['state-management'],
  },
  {
    name: 'use-local-storage',
    type: 'registry:hook',
    title: 'UseLocalStorage',
    description: 'Synchronizes a value with localStorage.',
    files: [
      {
        path: 'registry/hooks/use-local-storage.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-local-storage.tsx',
      },
    ],
    categories: ['state-management'],
  },
  {
    name: 'use-session-storage',
    type: 'registry:hook',
    title: 'UseSessionStorage',
    description: 'Synchronizes a value with sessionStorage.',
    files: [
      {
        path: 'registry/hooks/use-session-storage.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-session-storage.tsx',
      },
    ],
    categories: ['state-management'],
  },
  {
    name: 'use-cookie',
    type: 'registry:hook',
    title: 'UseCookie',
    description: 'Synchronizes a value with cookies.',
    files: [
      {
        path: 'registry/hooks/use-cookie.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-cookie.tsx',
      },
    ],
    categories: ['state-management'],
  },
  {
    name: 'use-copy-to-clipboard',
    type: 'registry:hook',
    title: 'UseCopyToClipboard',
    description: 'Copies text to the clipboard.',
    files: [
      {
        path: 'registry/hooks/use-copy-to-clipboard.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-copy-to-clipboard.tsx',
      },
    ],
    categories: ['utilities'],
  },
  {
    name: 'use-debounce-callback',
    type: 'registry:hook',
    title: 'UseDebounceCallback',
    description: 'Debounce the call of a function.',
    files: [
      {
        path: 'registry/hooks/use-debounce-callback.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-debounce-callback.tsx',
      },
    ],
    categories: ['state-management'],
  },
  {
    name: 'use-debounce-state',
    type: 'registry:hook',
    title: 'UseDebounceState',
    description: 'Debounce the state update.',
    files: [
      {
        path: 'registry/hooks/use-debounce-state.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-debounce-state.tsx',
      },
    ],
    categories: ['state-management'],
  },
  {
    name: 'use-click-outside',
    type: 'registry:hook',
    title: 'UseClickOutside',
    description: 'Detects clicks outside of a referenced element.',
    files: [
      {
        path: 'registry/hooks/use-click-outside.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-click-outside.tsx',
      },
    ],
    categories: ['ui-and-dom'],
  },
  {
    name: 'use-on-mount',
    type: 'registry:hook',
    title: 'UseOnMount',
    description: 'Executes a function only once when the component is mounted.',
    files: [
      {
        path: 'registry/hooks/use-on-mount.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-on-mount.tsx',
      },
    ],
    categories: ['lifecycle'],
  },
  {
    name: 'use-on-unmount',
    type: 'registry:hook',
    title: 'UseOnUnmount',
    description:
      'Executes a function only once when the component is unmounted.',
    files: [
      {
        path: 'registry/hooks/use-on-unmount.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-on-unmount.tsx',
      },
    ],
    categories: ['lifecycle'],
  },
  {
    name: 'use-update-effect',
    type: 'registry:hook',
    title: 'UseUpdateEffect',
    description: 'Executes a function when the component is updated.',
    files: [
      {
        path: 'registry/hooks/use-update-effect.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-update-effect.tsx',
      },
    ],
    categories: ['lifecycle'],
  },
  {
    name: 'use-os',
    type: 'registry:hook',
    title: 'UseOS',
    description: "Detects the user's operating system.",
    files: [
      {
        path: 'registry/hooks/use-os.tsx',
        type: 'registry:hook',
        target: 'hooks/h3-use/use-os.tsx',
      },
    ],
    categories: ['utilities'],
  },
];
