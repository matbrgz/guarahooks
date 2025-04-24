import Link from 'next/link';

import { Icons } from '@/components/icons';
import { buttonVariants } from '@/components/ui/button';

import { cn } from '@/lib/utils';

import { siteConfig } from '@/config/site';

export function Hero() {
  return (
    <section
      className={cn(
        'z-10 flex flex-col items-center justify-center grow gap-8',
      )}
    >
      <hgroup
        className={cn(
          'text-center',
          'flex flex-col items-center justify-center gap-4',
        )}
      >
        <h1 className={cn('text-5xl font-bold', 'max-w-[18ch]')}>
          Hooks Library for Software Engineers
        </h1>
        <p className={cn('max-w-[34ch]')}>
          +50 free and open-source hooks build with{' '}
          <span className={cn('font-bold')}>React</span> and{' '}
          <span className={cn('font-bold')}>TypeScript</span>. Perfect for your
          next application. <span className={cn('font-bold')}>Shadcn</span>{' '}
          powered.
        </p>
      </hgroup>
      <div className={cn('flex items-center justify-center gap-4')}>
        <Link
          href="/docs"
          className={cn(
            buttonVariants({ variant: 'rainbow', size: 'lg' }),
            'group hover:scale-[1.025]',
          )}
        >
          Browse Hooks
          <Icons.Chevron.Right className="size-4 group-hover:translate-x-1 duration-200 transition-transform" />
        </Link>
        <Link
          href={`${siteConfig.links.github}/blob/main/CONTRIBUTING.md`}
          className={cn(
            buttonVariants({ variant: 'rainbow-outline', size: 'lg' }),
            'group hover:scale-[1.025]',
          )}
        >
          Contribute
          <Icons.Chevron.Right className="size-4 group-hover:translate-x-1 duration-200 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
