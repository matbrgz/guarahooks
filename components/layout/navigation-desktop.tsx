import Link from 'next/link';

import { Icons } from '@/components/icons';
import { DesktopLink } from '@/components/layout/desktop-link';
import { HeaderLogo } from '@/components/layout/header-logo';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { buttonVariants } from '@/components/ui/button';

import { cn } from '@/lib/utils';

import { docsConfig } from '@/config/docs';
import { siteConfig } from '@/config/site';

export function NavigationDesktop() {
  return (
    <div
      className={cn(
        'hidden lg:flex justify-between items-center gap-2',
        'h-full',
      )}
    >
      <HeaderLogo />
      {/* Links */}
      <ul className={cn('flex items-center gap-2')}>
        {docsConfig.mainNav.map((item) => (
          <li key={item.title}>
            <DesktopLink
              href={item.href!}
              title={item.title}
              disabled={item.disabled}
            >
              {item.title}
            </DesktopLink>
          </li>
        ))}
      </ul>
      {/* Socials */}
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
    </div>
  );
}
