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
        'flex-1/5',
        'bg-background/50 backdrop-blur-md',
        'border-x border-dashed shadow-sm dark:shadow-none',
        'py-4',
      )}
    >
      <ul className={cn('flex flex-col items-start')}>
        {items.map((item, index) => (
          <li
            key={index}
            className={cn(
              'flex flex-col w-full',
              'border-b border-dashed',
              'pb-4',
              // item.items && item.items.length > 0 ? 'pb-4' : 'pb-2',
            )}
          >
            <h4
              className={cn(
                'text-sm font-semibold w-full',
                'inline-flex items-center justify-between',
                'border-b border-dashed',
                'px-4 py-4',
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
