import Link from 'next/link';

import { Icons } from '@/components/icons';
import { HeaderLogo } from '@/components/layout/header-logo';
import { MobileLink } from '@/components/layout/mobile-link';
import { Button } from '@/components/ui/button';
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
    <div
      className={cn(
        'flex lg:hidden justify-between items-center gap-2',
        'h-full',
      )}
    >
      <HeaderLogo />
      <Sheet>
        <SheetTrigger>
          <Button variant="ghost" size="icon">
            <Icons.Menu className="size-5" />
          </Button>
        </SheetTrigger>
        <SheetContent className={cn('gap-0 border-dashed')}>
          {/* Header */}
          <SheetHeader
            className={cn(
              'flex flex-row items-center justify-between',
              'px-4 py-4 border-b border-dashed',
            )}
          >
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
          {/* Content */}
          <ScrollArea className={cn('h-screen')}>
            {/* Main Navigation */}
            <ul
              className={cn(
                'flex flex-col gap-y-2',
                'p-4 border-b border-dashed',
              )}
            >
              {docsConfig.mainNav.map((item) => (
                <Link key={item.href} href={item.href!} aria-label={item.title}>
                  {item.title}
                </Link>
              ))}
            </ul>
            {/* Docs Navigation */}
            <ul className={cn('flex flex-col gap-y-2')}>
              {docsConfig.sidebarNav.map((item) => (
                <div className={cn('flex flex-col gap-y-2')} key={item.title}>
                  <h4
                    className={cn('font-medium', 'border-y border-dashed p-4')}
                  >
                    {item.title}
                  </h4>
                  <ul className={cn('flex flex-col gap-y-2', 'p-4')}>
                    {item.items?.map((item) => (
                      <li key={item.href}>
                        <MobileLink href={item.href!} title={item.title}>
                          {item.title}
                        </MobileLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </ul>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
}
