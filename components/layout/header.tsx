import { HeaderLogo } from '@/components/layout/header-logo';
import { NavigationDesktop } from '@/components/layout/navigation-desktop';
import { NavigationMobile } from '@/components/layout/navigation-mobile';

import { cn } from '@/lib/utils';

export function Header() {
  return (
    <header
      className={cn(
        'sticky top-0 left-0 right-0 z-50',
        'w-full h-[72px]',
        'bg-background/50 backdrop-blur-md',
        'border-b border-dashed',
      )}
    >
      <section
        className={cn(
          'max-w-screen-2xl size-full',
          'flex items-center gap-4',
          'border-x border-dashed mx-auto px-4',
        )}
      >
        <HeaderLogo />
        <NavigationDesktop />
        <NavigationMobile />
      </section>
    </header>
  );
}
