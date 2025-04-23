'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

import { type NavItem } from '@/types/docs';

type DesktopLinkProps = NavItem & {
  children: React.ReactNode;
};

export function DesktopLink({
  href,
  title,
  disabled,
  event,
  children,
}: DesktopLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href!}
      aria-label={title}
      className={cn(
        'text-sm',
        pathname?.startsWith(href!) || pathname.includes(href!)
          ? 'text-foreground'
          : 'text-foreground/60',
        disabled && 'pointer-events-none text-muted-foreground',
      )}
    >
      {children}
    </Link>
  );
}
