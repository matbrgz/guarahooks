import Link from 'next/link';

import { Icons } from '@/components/icons';
import { HeaderLogo } from '@/components/layout/header-logo';
import { NavigationLink } from '@/components/layout/navigation-link';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { cn } from '@/lib/utils';

import { siteConfig } from '@/config/site';

export function NavigationMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="ml-auto flex lg:hidden">
          <Icons.Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="border-b flex flex-row items-center justify-between">
          <div className="sr-only">
            <SheetTitle>{siteConfig.name}</SheetTitle>
            <SheetDescription>
              Reusable and customizable hooks that you can copy and paste into
              your projects. Free and Open-Source.
            </SheetDescription>
          </div>
          <HeaderLogo />
          <SheetClose asChild>
            <Button variant="ghost" size="icon">
              <Icons.Close className="size-5" />
            </Button>
          </SheetClose>
        </SheetHeader>
        <ul className={cn('flex items-start justify-start gap-2 grow')}>
          <li>
            <NavigationLink href="/">Hooks</NavigationLink>
          </li>
          <li>
            <NavigationLink href="/showcase">Showcase</NavigationLink>
          </li>
        </ul>
        <SheetFooter>
          <div className={cn('flex items-center justify-end gap-2')}>
            <Link
              href={siteConfig.links.github}
              className={cn(
                buttonVariants({ variant: 'outline', size: 'icon' }),
              )}
              aria-label="GitHub"
            >
              <Icons.Github className="size-4" />
            </Link>
            <ThemeToggle variant="outline" />
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
