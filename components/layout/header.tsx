import { HeaderLogo } from '@/components/layout/header-logo';
import { NavigationDesktop } from '@/components/layout/navigation-desktop';
import { NavigationMobile } from '@/components/layout/navigation-mobile';

import { cn } from '@/lib/utils';

export function Header() {
  return (
    <header
      className={cn(
        'sticky lg:top-4 top-0 left-0 right-0 z-50',
        'w-full h-[72px]',
      )}
    >
      <section
        className={cn(
          'max-w-screen-2xl w-full mx-auto px-4 h-full',
          'bg-card/30 backdrop-blur-md',
          'flex items-center gap-4',
          'lg:border border-b rounded-md shadow-sm dark:shadow-none',
        )}
      >
        <HeaderLogo />
        <NavigationDesktop />
        <NavigationMobile />
      </section>
    </header>
  );
}
