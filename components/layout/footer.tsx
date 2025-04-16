import Link from 'next/link';

import { cn } from '@/lib/utils';

import { siteConfig } from '@/config/site';

export function Footer() {
  return (
    <footer className={cn('w-full h-16 z-10')}>
      <section
        className={cn(
          'max-w-7xl w-full mx-auto h-full px-4',
          'bg-background/50 backdrop-blur-xs',
          'flex items-center justify-between',
          'lg:border-x border-t border-dashed',
        )}
      >
        <p className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} {siteConfig.name}
        </p>
        <p className="text-muted-foreground text-sm">
          Brought to you by{' '}
          <Link
            href={siteConfig.authorUrl}
            className="underline"
            target="_blank"
          >
            hermel
          </Link>
          .
        </p>
      </section>
    </footer>
  );
}
