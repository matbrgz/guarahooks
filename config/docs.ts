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
          label: 'New',
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
      items: [],
    },
    {
      title: 'Lifecycle',
      items: [],
    },
    {
      title: 'Web APIs',
      items: [],
    },
    {
      title: 'User Interaction',
      items: [],
    },
  ],
};
