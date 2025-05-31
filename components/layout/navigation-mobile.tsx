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
  function renderIcon(icon: keyof typeof Icons | undefined) {
    if (!icon) return null;
    const IconComponent = Icons[icon];
    if (typeof IconComponent === 'function') {
      return <IconComponent className="size-4" />;
    }
    return null;
  }
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className={cn('lg:hidden')}>
          <Icons.Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className={cn('gap-0 ')}>
        {/* Header */}
        <SheetHeader
          className={cn(
            'flex flex-row items-center justify-between',
            'px-4 py-4 border-b ',
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
        <ScrollArea className={cn('h-[calc(100dvh-68px)]')}>
          {/* Main Navigation */}
          <ul className={cn('flex flex-col gap-y-2', 'py-4 px-2 border-b')}>
            {docsConfig.mainNav.map((item) => (
              <MobileLink
                key={item.href}
                href={item.href!}
                aria-label={item.title}
                title={item.title}
              >
                {item.title}
              </MobileLink>
            ))}
          </ul>
          {/* Docs Navigation */}
          <ul className={cn('flex flex-col gap-y-2', 'py-4 px-2')}>
            {docsConfig.sidebarNav.map((item) => (
              <div className={cn('flex flex-col gap-y-2')} key={item.title}>
                <h4
                  className={cn(
                    'inline-flex gap-2 items-center',
                    'text-sm text-muted-foreground',
                    'pl-2',
                  )}
                >
                  {renderIcon(item.icon)}
                  <span>{item.title}</span>
                </h4>
                <ul className={cn('flex flex-col gap-y-2')}>
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
          {/* Socials */}
          <div
            className={cn('flex justify-end gap-2', 'px-4 py-4', 'border-t')}
          >
            <Link
              href={siteConfig.links.twitter}
              className={cn(
                buttonVariants({ variant: 'outline', size: 'icon' }),
                'size-10',
              )}
              target="_blank"
              aria-label="Twitter"
            >
              <Icons.Twitter className="size-4 fill-current" />
            </Link>
            <Link
              href={siteConfig.links.github}
              className={cn(
                buttonVariants({ variant: 'outline', size: 'icon' }),
                'size-10',
              )}
              target="_blank"
              aria-label="GitHub"
            >
              <Icons.Github className="size-4" />
            </Link>
            <ThemeToggle variant="outline" className="size-10" />
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
