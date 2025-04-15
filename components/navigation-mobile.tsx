import Link from 'next/link';

import { cn } from '@/lib/utils';

import { HeaderLogo } from './header-logo';
import { Icons } from './icons';
import { NavigationLink } from './navigation-link';
import { ThemeToggle } from './theme/theme-toggle';
import { Button, buttonVariants } from './ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';

export function NavigationMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="mr-auto flex lg:hidden">
          <Icons.Menu className="size-5 -scale-x-100" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="border-b flex flex-row items-center justify-between">
          <div className="sr-only">
            <SheetTitle>Easy Hooks</SheetTitle>
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
        </ul>
        <SheetFooter>
          <div className={cn('flex items-center justify-end gap-2')}>
            <Link
              href="https://github.com/h3rmel/easy-hooks/"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'icon' }),
              )}
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
