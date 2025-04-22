import { DocsConfig } from '@/types/docs.d';

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: 'Hooks',
      href: '/docs',
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
          href: '/docs/hooks/useWindowSize',
        },
        {
          title: 'useMedia',
          href: '/docs/hooks/useMedia',
        },
        {
          title: 'useOrientation',
          href: '/docs/hooks/useOrientation',
        },
        {
          title: 'useMouse',
          href: '/docs/hooks/useMouse',
        },
      ],
    },
    {
      title: 'State Management',
      items: [
        {
          title: 'useToggle',
          href: '/docs/hooks/useToggle',
        },
        {
          title: 'useSet',
          href: '/docs/hooks/useSet',
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
          href: '/docs/hooks/useLocalStorage',
        },
        {
          title: 'useSessionStorage',
          href: '/docs/hooks/useSessionStorage',
        },
        {
          title: 'useCookie',
          href: '/docs/hooks/useCookie',
        },
      ],
    },
    {
      title: 'User Interaction',
      items: [
        {
          title: 'useKeypress',
          href: '/docs/hooks/useKeypress',
        },
      ],
    },
  ],
};
