import Link from 'next/link';

import { Icons } from '@/components/icons';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { buttonVariants } from '@/components/ui/button';

import { cn } from '@/lib/utils';

import { docsConfig } from '@/config/docs';
import { siteConfig } from '@/config/site';

import { NavigationLink } from './navigation-link';

export function NavigationDesktop() {
  return (
    <section
      className={cn('grow hidden lg:flex justify-between items-center gap-2')}
    >
      <ul className={cn('flex items-center gap-2')}>
        {docsConfig.mainNav.map((item) => (
          <li key={item.title}>
            <NavigationLink
              href={item.href!}
              title={item.title}
              disabled={item.disabled}
            >
              {item.title}
            </NavigationLink>
          </li>
        ))}
      </ul>
      <div className={cn('flex items-center gap-2 border-l pl-4')}>
        <Link
          href={siteConfig.links.github}
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
