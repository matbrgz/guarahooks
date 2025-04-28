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
          title: 'use-keypress',
          href: '/docs/hooks/use-keypress',
        },
        {
          title: 'use-click-outside',
          href: '/docs/hooks/use-click-outside',
        },
        {
          title: 'use-window-size',
          href: '/docs/hooks/use-window-size',
        },
        {
          title: 'use-media',
          href: '/docs/hooks/use-media',
        },
        {
          title: 'use-orientation',
          href: '/docs/hooks/use-orientation',
        },
        {
          title: 'use-mouse',
          href: '/docs/hooks/use-mouse',
        },
        {
          title: 'use-fullscreen',
          href: '/docs/hooks/use-fullscreen',
        },
        {
          title: 'use-confirm',
          href: '/docs/hooks/use-confirm',
        },
        {
          title: 'use-notifications',
          href: '/docs/hooks/use-notifications',
        },
      ],
    },
    {
      title: 'State Management',
      items: [
        {
          title: 'use-toggle',
          href: '/docs/hooks/use-toggle',
        },
        {
          title: 'use-set',
          href: '/docs/hooks/use-set',
        },
        {
          title: 'use-debounce-callback',
          href: '/docs/hooks/use-debounce-callback',
        },
        {
          title: 'use-debounce-state',
          href: '/docs/hooks/use-debounce-state',
        },
        {
          title: 'use-local-storage',
          href: '/docs/hooks/use-local-storage',
        },
        {
          title: 'use-session-storage',
          href: '/docs/hooks/use-session-storage',
        },
        {
          title: 'use-cookie',
          href: '/docs/hooks/use-cookie',
        },
      ],
    },
    {
      title: 'Utilities',
      items: [
        {
          title: 'use-copy-to-clipboard',
          href: '/docs/hooks/use-copy-to-clipboard',
        },
        {
          title: 'use-os',
          href: '/docs/hooks/use-os',
        },
        {
          title: 'use-idle',
          href: '/docs/hooks/use-idle',
        },
      ],
    },
    {
      title: 'Lifecycle',
      items: [
        {
          title: 'use-on-mount',
          href: '/docs/hooks/use-on-mount',
        },
        {
          title: 'use-on-unmount',
          href: '/docs/hooks/use-on-unmount',
        },
        {
          title: 'use-did-update',
          href: '/docs/hooks/use-did-update',
        },
      ],
    },
  ],
};
