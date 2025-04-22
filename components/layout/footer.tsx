import Link from 'next/link';

import { cn } from '@/lib/utils';

import { siteConfig } from '@/config/site';

export function Footer() {
  return (
    <footer
      className={cn(
        'w-full h-16 z-10',
        'bg-background/50 backdrop-blur-md',
        'border-t border-dashed',
      )}
    >
      <section
        className={cn(
          'max-w-screen-2xl size-full',
          'flex items-center justify-between',
          'border-x border-dashed mx-auto px-4',
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
