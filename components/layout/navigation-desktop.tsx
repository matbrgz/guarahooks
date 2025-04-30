import { DesktopLink } from '@/components/layout/desktop-link';

import { cn } from '@/lib/utils';

import { docsConfig } from '@/config/docs';

export function NavigationDesktop() {
  return (
    <div className={cn('lg:flex items-center gap-2 grow', 'hidden')}>
      <hr className={cn('h-[72px] ml-4 mr-2 my-0 border-l border-dashed')} />
      <ul className={cn('flex items-center gap-4')}>
        {docsConfig.mainNav.map((item) => (
          <li key={item.title}>
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
    </div>
  );
}
