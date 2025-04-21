import Link from 'next/link';

import { Badge } from '@/components/ui/badge';

import { cn } from '@/lib/utils';

import { NavItemWithChildren } from '@/types/docs';

type DocsSidebarNavItemsProps = {
  items: NavItemWithChildren[];
  pathname: string | null;
};

export function DocsSidebarItem({ items, pathname }: DocsSidebarNavItemsProps) {
  if (items.length === 0) return null;

  return (
    <div className={cn('relative', 'flex flex-col gap-1', 'pl-2', 'text-sm')}>
      {items.map((item, index) =>
        item.href && !item.disabled ? (
          <Link
            key={index}
            href={item.href}
            className={cn(
              'flex items-center justify-between',
              'text-foreground px-2 rounded-md rounded-l-[4px] w-full py-1',
              'group transition-transform duration-200',
              item.disabled && 'cursor-not-allowed opacity-60',
              pathname === item.href &&
                'bg-accent/60 font-medium text-accent-foreground',
            )}
          >
            <span className={cn('relative shrink-0')}>{item.title}</span>
            <span
              className={cn(
                'relative shrink-0',
                'inline-flex items-center gap-1',
              )}
            >
              {item.label && <Badge variant="new">{item.label}</Badge>}
            </span>
          </Link>
        ) : (
          <span
            key={index}
            className={cn(
              'flex items-center justify-between',
              'text-muted-foreground px-2 rounded-md rounded-l-[4px] w-full py-1',
              'group transition-transform duration-200',
              item.disabled && 'cursor-not-allowed opacity-60',
            )}
          >
            <span className={cn('relative shrink-0')}>{item.title}</span>
            <span
              className={cn(
                'relative shrink-0',
                'inline-flex items-center gap-1',
              )}
            >
              {item.label && <Badge variant="new">{item.label}</Badge>}
            </span>
          </span>
        ),
      )}
    </div>
  );
}
