'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

import { type NavItem } from '@/types/docs';

import { buttonVariants } from '../ui/button';

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
        buttonVariants({ variant: 'ghost', size: 'sm' }),
        pathname.startsWith(href!) || pathname.includes(href!)
          ? 'text-foreground'
          : 'text-muted-foreground',
      )}
    >
      {children}
    </Link>
  );
}
