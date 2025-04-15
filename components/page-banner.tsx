import React from 'react';

import { cn } from '@/lib/utils';

type PageBannerProps = {
  title: string;
  subtitle?: string;
  className?: string;
  children?: React.ReactNode;
};

export function PageBanner({
  title,
  subtitle,
  className,
  children,
}: PageBannerProps) {
  return (
    <hgroup className={cn('w-full flex flex-col gap-1 pt-16', className)}>
      <h1
        className={cn(
          'font-heading text-foreground text-3xl font-bold tracking-tight md:text-4xl',
          'max-w-[24ch]',
        )}
      >
        {title}
      </h1>
      <h6
        className={cn(
          'text-muted-foreground mb-8 text-base md:text-lg',
          'max-w-[64ch]',
        )}
      >
        {subtitle}
      </h6>
      <div>{children}</div>
    </hgroup>
  );
}
