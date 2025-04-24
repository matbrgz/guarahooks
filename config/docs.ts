import { DashboardConfig } from '@/types/docs';

export const docsConfig: DashboardConfig = {
  mainNav: [
    {
      title: 'Hooks',
      href: '/hooks',
    },
  ],
  sidebarNav: [
    {
      title: 'Getting Started',
      items: [
        {
          title: 'Introduction',
          href: '/docs',
          items: [],
        },
        {
          title: 'Installation',
          href: '/docs/installation',
          items: [],
        },
      ],
    },
    {
      title: 'UI and DOM',
      items: [
        {
          title: 'useKeypress',
          href: '/docs/hooks/use-keypress',
        },
        {
          title: 'useClickOutside',
          href: '/docs/hooks/use-click-outside',
        },
        {
          title: 'useWindowSize',
          href: '/docs/hooks/use-window-size',
        },
        {
          title: 'useMedia',
          href: '/docs/hooks/use-media',
        },
        {
          title: 'useOrientation',
          href: '/docs/hooks/use-orientation',
        },
        {
          title: 'useMouse',
          href: '/docs/hooks/use-mouse',
        },
      ],
    },
    {
      title: 'State Management',
      items: [
        {
          title: 'useToggle',
          href: '/docs/hooks/use-toggle',
        },
        {
          title: 'useSet',
          href: '/docs/hooks/use-set',
        },
        {
          title: 'useDebounceCallback',
          href: '/docs/hooks/use-debounce-callback',
        },
        {
          title: 'useDebounceState',
          href: '/docs/hooks/use-debounce-state',
        },
        {
          title: 'useLocalStorage',
          href: '/docs/hooks/use-local-storage',
        },
        {
          title: 'useSessionStorage',
          href: '/docs/hooks/use-session-storage',
        },
        {
          title: 'useCookie',
          href: '/docs/hooks/use-cookie',
        },
      ],
    },
    {
      title: 'Utilities',
      items: [
        {
          title: 'useCopyToClipboard',
          href: '/docs/hooks/use-copy-to-clipboard',
        },
      ],
    },
    {
      title: 'Lifecycle',
      items: [
        {
          title: 'useOnMount',
          href: '/docs/hooks/use-on-mount',
        },
        {
          title: 'useOnUnmount',
          href: '/docs/hooks/use-on-unmount',
        },
        {
          title: 'useUpdateEffect',
          href: '/docs/hooks/use-update-effect',
        },
      ],
    },
  ],
};
