import Link from 'next/link';

import { Icons } from '@/components/icons';
import { RainbowButton } from '@/components/magicui/rainbow-button';
import { buttonVariants } from '@/components/ui/button';

import { cn } from '@/lib/utils';

import { siteConfig } from '@/config/site';

import { BackgroundBeams } from '../acertinityui/background-beams';

export function Hero() {
  return (
    <section
      className={cn('flex flex-col items-center justify-center grow gap-4')}
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
        <p className={cn('max-w-[44ch]')}>
          +50 free and open-source hooks build with{' '}
          <span className={cn('font-bold')}>React</span> and{' '}
          <span className={cn('font-bold')}>TypeScript</span>. Perfect for your
          next application. <span className={cn('font-bold')}>Shadcn</span>{' '}
          powered.
        </p>
      </hgroup>
      <div className={cn('flex items-center justify-center gap-4')}>
        <Link
          href="/hooks"
          className={cn(
            buttonVariants({ variant: 'rainbow', size: 'lg' }),
            'group hover:scale-[1.025]',
          )}
        >
          Browse Hooks
          <Icons.ChevronRight className="size-4 group-hover:translate-x-1 duration-200 transition-transform" />
        </Link>
        <Link
          href={`${siteConfig.links.github}/blob/main/CONTRIBUTING.md`}
          className={cn(
            buttonVariants({ variant: 'rainbow-outline', size: 'lg' }),
            'group hover:scale-[1.025]',
          )}
        >
          Contribute
          <Icons.ChevronRight className="size-4 group-hover:translate-x-1 duration-200 transition-transform" />
        </Link>
      </div>
      <BackgroundBeams className="absolute z-[-1] top-0 left-0 h-full w-full" />
    </section>
  );
}
