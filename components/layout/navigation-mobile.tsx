import Link from 'next/link';

import { Icons } from '@/components/icons';
import { HeaderLogo } from '@/components/layout/header-logo';
import { MobileLink } from '@/components/layout/mobile-link';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { Button, buttonVariants } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
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

import { docsConfig } from '@/config/docs';
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
          <ScrollArea className="h-[calc(100vh-4rem)] p-4">
            <div className="flex flex-col space-y-1.5">
              {docsConfig.mainNav?.map(
                (item) =>
                  item.href && (
                    <MobileLink key={item.href} href={item.href}>
                      {item.title}
                    </MobileLink>
                  ),
              )}
            </div>
            <div className="flex flex-col gap-y-2">
              {docsConfig.sidebarNav.map((item, index) => (
                <div key={index} className="flex flex-col gap-y-1.5 pt-6">
                  <h4 className="font-medium">{item.title}</h4>
                  {item.items?.map((item) =>
                    !item.disabled && item.href ? (
                      <MobileLink
                        key={item.href}
                        href={item.href}
                        className={cn(
                          'flex justify-between text-muted-foreground',
                          item.disabled && 'cursor-not-allowed opacity-60',
                        )}
                      >
                        {item.title}
                        <div>
                          {item.label && (
                            <span className="ml-2 rounded-md bg-[#FFBD7A] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                              {item.label}
                            </span>
                          )}
                        </div>
                      </MobileLink>
                    ) : (
                      <span
                        key={index}
                        className={cn(
                          'text-muted-foreground',
                          item.disabled && 'cursor-not-allowed opacity-60',
                        )}
                      >
                        {item.title}
                        {item.label && (
                          <span className="ml-2 rounded-md bg-muted px-1.5 py-0.5 text-xs leading-none text-muted-foreground no-underline group-hover:no-underline">
                            {item.label}
                          </span>
                        )}
                      </span>
                    ),
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>
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
