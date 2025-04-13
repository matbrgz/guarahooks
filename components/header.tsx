import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { NavigationDesktop } from './navigation-desktop';
import { NavigationMobile } from './navigation-mobile';

export function Header() {
  return (
    <header
      className={cn(
        'sticky top-0 left-0 right-0 z-50',
        'w-full h-[72px]',
        'bg-background/50 backdrop-blur-sm',
        'border-b border-dashed',
      )}
    >
      <section
        className={cn(
          'max-w-7xl w-full mx-auto px-4 h-full',
          'flex items-center gap-4',
          'lg:border-x border-dashed',
        )}
      >
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/logo.svg"
            alt="Easy Hooks's logo"
            width={32}
            height={32}
          />
          <h1 className="text-base tracking-wide group-hover:translate-x-0.5 transition-all duration-200">
            Easy Hooks
          </h1>
        </Link>
        <NavigationDesktop />
        <NavigationMobile />
      </section>
    </header>
  );
}
