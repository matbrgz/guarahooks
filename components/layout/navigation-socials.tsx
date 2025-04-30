import Link from 'next/link';

import { Icons } from '@/components/icons';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { buttonVariants } from '@/components/ui/button';

import { cn } from '@/lib/utils';

import { siteConfig } from '@/config/site';

export function NavigationSocials() {
  return (
    <div className={cn('lg:flex items-center gap-2', 'hidden')}>
      <hr className={cn('h-[72px] ml-4 mr-2 my-0 border-l border-dashed')} />
      <Link
        href={siteConfig.links.twitter}
        className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }))}
        target="_blank"
        aria-label="Twitter"
      >
        <Icons.Twitter className="size-4 fill-current" />
      </Link>
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
  );
}
