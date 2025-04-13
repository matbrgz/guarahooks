import Link from 'next/link';

import { cn } from '@/lib/utils';

import { Icons } from './icons';
import { ThemeToggle } from './theme/theme-toggle';
import { Button, buttonVariants } from './ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './ui/drawer';

export function NavigationMobile() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon" className="ml-auto flex lg:hidden">
          <Icons.Menu className="size-5" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="sr-only">
          <DrawerTitle>Easy Hooks</DrawerTitle>
          <DrawerDescription>
            Reusable and customizable hooks that you can copy and paste into
            your projects. Free and Open-Source.
          </DrawerDescription>
        </DrawerHeader>
        <ul className={cn('flex items-center gap-2 pt-4')}>
          <li>
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: 'link', size: 'lg' }),
                'font-light text-xl tracking-wide',
              )}
            >
              Hooks
            </Link>
          </li>
        </ul>
        <DrawerFooter>
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
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
