'use client';

import Link, { LinkProps } from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { Badge } from '@/components/ui/badge';
import { SheetClose } from '@/components/ui/sheet';

import { cn } from '@/lib/utils';

type MobileLinkProps = LinkProps & {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  title: string;
  label?: string;
};

export function MobileLink({
  href,
  title,
  onOpenChange,
  children,
  label,
}: MobileLinkProps) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <SheetClose asChild>
      <Link
        href={href!}
        aria-label={title}
        onClick={() => {
          router.push(href!.toString());
          onOpenChange?.(false);
        }}
        className={cn(
          'flex items-center justify-between',
          'text-foreground px-2 py-1 rounded-md',
          pathname === href &&
            'bg-accent/50 font-medium text-accent-foreground',
        )}
      >
        {children}
        <span
          className={cn('relative shrink-0', 'inline-flex items-center gap-1')}
        >
          {label && <Badge variant="new">{label}</Badge>}
        </span>
      </Link>
    </SheetClose>
  );
}
