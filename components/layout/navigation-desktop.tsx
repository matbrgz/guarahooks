import Link from 'next/link';

import { cn } from '@/lib/utils';

import { Icons } from '../icons';
import { ThemeToggle } from '../theme/theme-toggle';
import { buttonVariants } from '../ui/button';
import { NavigationLink } from './navigation-link';

export function NavigationDesktop() {
  return (
    <section
      className={cn('grow hidden lg:flex justify-end items-center gap-2')}
    >
      <ul className={cn('flex items-center gap-2 pr-4')}>
        <li>
          <NavigationLink href="/">Hooks</NavigationLink>
        </li>
      </ul>
      <div
        className={cn('flex items-center gap-2 border-l border-dashed pl-4')}
      >
        <Link
          href="https://github.com/h3rmel/h3-use/"
          className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }))}
          target="_blank"
          aria-label="GitHub"
        >
          <Icons.Github className="size-4" />
        </Link>
        <ThemeToggle variant="ghost" />
      </div>
    </section>
  );
}
