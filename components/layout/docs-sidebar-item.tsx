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
    <div
      className={cn(
        'relative',
        'flex flex-col gap-1',
        'text-sm',
        'pt-4 px-4 pl-2',
      )}
    >
      {items.map((item, index) =>
        item.href && !item.disabled ? (
          <Link
            key={index}
            href={item.href}
            className={cn(
              'flex items-center justify-between',
              'text-foreground px-2 py-1 rounded-md w-full',
              'group transition-all duration-200',
              'hover:bg-accent/50 hover:translate-x-0.5',
              item.disabled && 'cursor-not-allowed opacity-60',
              pathname === item.href &&
                'bg-accent/50 font-medium text-accent-foreground',
            )}
          >
            <span className={cn('relative shrink-0 font-mono')}>
              {item.title}
            </span>
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
              'text-muted-foreground rounded-md w-full px-2 py-1',
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
