import Link from 'next/link';

import { cn } from '@/lib/utils';

import { siteConfig } from '@/config/site';

import { BorderBeam } from './magicui/border-beam';
import { buttonVariants } from './ui/button';

export function HookCta() {
  return (
    <section className="w-full text-center mt-8 mb-12">
      <h2 className="font-heading text-foreground mb-4 text-2xl font-semibold">
        Didn&apos;t find what you were looking for?
      </h2>
      <Link
        className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}
        href={`${siteConfig.links.github}/blob/main/CONTRIBUTING.md`}
        target="_blank"
      >
        Contribute
        <BorderBeam
          size={40}
          initialOffset={20}
          colorFrom="transparent"
          colorTo="#f4f4f5"
          transition={{
            type: 'spring',
            stiffness: 60,
            damping: 20,
          }}
        />
      </Link>
    </section>
  );
}
