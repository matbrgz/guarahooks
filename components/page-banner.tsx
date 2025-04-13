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
    <hgroup className={cn('w-full flex flex-col gap-2 mb-16', className)}>
      <h1 className="text-2xl font-bold">{title}</h1>
      {subtitle && <h6 className="text-muted-foreground">{subtitle}</h6>}
      <div>{children}</div>
    </hgroup>
  );
}
