import { DesktopLink } from '@/components/layout/desktop-link';

import { cn } from '@/lib/utils';

import { docsConfig } from '@/config/docs';

export function NavigationDesktop() {
  return (
    <ul className={cn('lg:flex items-center gap-2', 'hidden')}>
      {docsConfig.mainNav.map((item) => (
        <li
          key={item.title}
          className={cn('h-full w-auto', 'flex items-center justify-center')}
        >
          <DesktopLink
            href={item.href!}
            title={item.title}
            disabled={item.disabled}
          >
            {item.title}
          </DesktopLink>
        </li>
      ))}
    </ul>
  );
}
