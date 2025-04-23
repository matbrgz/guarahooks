'use client';

import Link, { LinkProps } from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { SheetClose } from '@/components/ui/sheet';

import { cn } from '@/lib/utils';

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

export function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <SheetClose asChild>
      <Link
        href={href}
        onClick={() => {
          router.push(href.toString());
          onOpenChange?.(false);
        }}
        className={cn(
          className,
          'flex items-center justify-between',
          'text-foreground px-3 py-1 rounded-md w-full',
          'group transition-all duration-200',
          'hover:bg-accent/50 hover:translate-x-0.5',
          isActive && 'bg-accent/50 font-medium text-accent-foreground',
        )}
        {...props}
      >
        {children}
      </Link>
    </SheetClose>
  );
}
