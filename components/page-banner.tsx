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
    <hgroup className={cn('w-full max-w-3xl flex flex-col gap-1', className)}>
      <h1 className="font-heading text-foreground mb-4 text-4xl/[1.1] font-bold tracking-tight md:text-5xl/[1.1]">
        {title}
      </h1>
      <h6 className="text-muted-foreground mb-8 text-lg">{subtitle}</h6>
      <div>{children}</div>
    </hgroup>
  );
}
