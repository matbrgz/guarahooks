import Link from 'next/link';

import { cn } from '@/lib/utils';

export function Footer() {
  return (
    <footer className={cn('w-full h-16', 'border-t border-dashed')}>
      <section
        className={cn(
          'max-w-7xl w-full mx-auto h-full px-4',
          'flex items-center justify-between',
          'lg:border-x border-dashed',
        )}
      >
        <p className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} Easy Hooks
        </p>
        <p className="text-muted-foreground text-sm">
          Brought to you by{' '}
          <Link href="https://github.com/h3rmel" className="underline">
            hermel
          </Link>
          .
        </p>
      </section>
    </footer>
  );
}
