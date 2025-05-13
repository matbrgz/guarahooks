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
        'h-full w-auto flex items-center justify-center',
        'px-4 border-b border-transparent',
        'text-sm',
        pathname?.startsWith(href!) || pathname.includes(href!)
          ? 'text-foreground border-indigo-500'
          : 'text-foreground/60 border-transparent',
        disabled && 'pointer-events-none text-muted-foreground',
      )}
    >
      {children}
    </Link>
  );
}
