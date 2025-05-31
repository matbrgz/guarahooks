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
          'inline-flex items-center justify-between w-full',
          'text-foreground text-left text-sm',
          'pr-1 py-1 pl-2 rounded-md',
          'transition-all duration-200',
          'hover:bg-accent/50',
          pathname === href && 'bg-accent/50 text-foreground',
        )}
      >
        {children}
      </Link>
    </SheetClose>
  );
}
