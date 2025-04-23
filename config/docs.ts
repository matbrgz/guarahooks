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
      title: 'Sensors',
      items: [
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
          title: 'useKeypress',
          href: '/docs/hooks/use-keypress',
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
      ],
    },
    {
      title: 'Lifecycle',
      items: [],
    },
    {
      title: 'Web APIs',
      items: [
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
      title: 'User Interaction',
      items: [
        {
          title: 'useCopyToClipboard',
          href: '/docs/hooks/use-copy-to-clipboard',
        },
      ],
    },
  ],
};
