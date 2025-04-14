import Link from 'next/link';

import { cn } from '@/lib/utils';

import { buttonVariants } from './ui/button';

export function HookCta() {
  return (
    <section className="w-full text-center mt-8">
      <h2 className="font-heading text-foreground mb-6 text-3xl/[1.1] font-bold tracking-tight">
        Didn&apos;t find what you were looking for?
      </h2>
      <Link
        className={cn(buttonVariants({ variant: 'default', size: 'lg' }))}
        href="https://github.com/h3rmel/easy-hooks/"
      >
        Contribute
      </Link>
    </section>
  );
}
