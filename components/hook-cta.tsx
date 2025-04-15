import Link from 'next/link';

import { cn } from '@/lib/utils';

import { siteConfig } from '@/config/site';

import { buttonVariants } from './ui/button';

export function HookCta() {
  return (
    <section className="w-full text-center mt-8">
      <h2 className="font-heading text-foreground mb-4 text-2xl font-semibold">
        Didn&apos;t find what you were looking for?
      </h2>
      <Link
        className={cn(buttonVariants({ variant: 'default', size: 'lg' }))}
        href={`${siteConfig.links.github}/blob/main/CONTRIBUTING.md`}
        target="_blank"
      >
        Contribute
      </Link>
    </section>
  );
}
