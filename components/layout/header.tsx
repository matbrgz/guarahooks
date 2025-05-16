import { CommandMenu } from '@/components/command-menu';
import { HeaderLogo } from '@/components/layout/header-logo';
import { NavigationDesktop } from '@/components/layout/navigation-desktop';
import { NavigationMobile } from '@/components/layout/navigation-mobile';
import { NavigationSocials } from '@/components/layout/navigation-socials';

import { cn } from '@/lib/utils';

export function Header() {
  return (
    <header
      className={cn(
        'sticky top-0 left-0 right-0 z-50',
        'w-full',
        'bg-background/50 backdrop-blur-md',
        'border-b border-dashed',
        'flex flex-col',
      )}
    >
      <section
        className={cn(
          'max-w-screen-2xl size-full h-16',
          'lg:border-x border-dashed mx-auto px-4',
          'flex items-center lg:justify-between gap-4 lg:gap-0',
          'relative',
        )}
      >
        <HeaderLogo />
        <CommandMenu />
        <NavigationSocials />
        <NavigationMobile />
      </section>
      <NavigationDesktop />
    </header>
  );
}
