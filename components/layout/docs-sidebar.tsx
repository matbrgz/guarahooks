'use client';

import { usePathname } from 'next/navigation';

import { DocsSidebarItem } from '@/components/layout/docs-sidebar-item';
import { Badge } from '@/components/ui/badge';

import { cn } from '@/lib/utils';

import { NavItemWithChildren } from '@/types/docs.d';

export type DocsSidebarProps = {
  items: NavItemWithChildren[];
};

export function DocsSidebar({ items }: DocsSidebarProps) {
  const pathname = usePathname();

  if (items.length === 0) return null;

  return (
    <aside
      className={cn(
        'flex-1/4',
        'bg-card/30 backdrop-blur-md',
        'rounded-md border shadow-sm p-4 pr-2 dark:shadow-none',
      )}
    >
      <ul className={cn('flex flex-col gap-2 items-start')}>
        {items.map((item, index) => (
          <li key={index} className={cn('flex flex-col gap-2 w-full')}>
            <h4
              className={cn(
                'rounded-md text-sm font-semibold w-full',
                'inline-flex items-center justify-between',
              )}
            >
              {item.title}
              {item.label && <Badge variant="new">{item.label}</Badge>}
            </h4>
            {item.items && item.items.length > 0 && (
              <DocsSidebarItem items={item.items} pathname={pathname} />
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}
