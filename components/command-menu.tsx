'use client';

import { useCallback, useEffect, useState } from 'react';

import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';

import { type DialogProps } from '@radix-ui/react-dialog';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';

import { cn } from '@/lib/utils';

import { docsConfig } from '@/config/docs';

import { useKeypress } from '@/registry/hooks/use-keypress';

export function CommandMenu({ ...props }: DialogProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { setTheme } = useTheme();

  useKeypress({
    combo: ['meta+k', 'ctrl+k', '/'],
    callback: (e) => {
      if (
        (e.target instanceof HTMLElement && e.target.isContentEditable) ||
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        e.target instanceof HTMLSelectElement
      ) {
        return;
      }

      e.preventDefault();
      setOpen((open) => !open);
    },
    preventDefault: true,
  });

  const runCommand = useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        className={cn(
          'relative w-full md:w-40 lg:w-64',
          'text-sm font-normal',
          'text-muted-foreground bg-card',
          'justify-start sm:pr-12',
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <span className={cn('hidden lg:inline-flex')}>
          Search documentation...
        </span>
        <span className={cn('inline-flex lg:hidden')}>Search...</span>
        <kbd
          className={cn(
            'absolute top-1 right-1',
            'hidden sm:flex items-center gap-1.5',
            'bg-muted rounded-[6px] border py-0.5 px-2',
            'font-mono text-xs font-medium',
            'pointer-events-none select-none opacity-100',
          )}
        >
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Links">
            {docsConfig.mainNav
              .filter((navItem) => !navItem.external)
              .map((navItem) => (
                <CommandItem
                  key={navItem.href}
                  value={navItem.title}
                  onSelect={() => {
                    runCommand(() => router.push(navItem.href as string));
                  }}
                >
                  <Icons.File className="mr-2 size-4" />
                  {navItem.title}
                </CommandItem>
              ))}
          </CommandGroup>
          {docsConfig.sidebarNav.map((group) => (
            <CommandGroup key={group.title} heading={group.title}>
              {group.items?.map((navItem) => (
                <CommandItem
                  key={navItem.href}
                  value={navItem.title}
                  onSelect={() => {
                    runCommand(() => router.push(navItem.href as string));
                  }}
                >
                  <div className="mr-2 flex size-4 items-center justify-center">
                    <Icons.Circle className="size-3" />
                  </div>
                  {navItem.title}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
          <CommandSeparator />
          <CommandGroup heading="Theme">
            <CommandItem onSelect={() => runCommand(() => setTheme('light'))}>
              <Icons.Sun className="mr-2 size-4" />
              Light
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme('dark'))}>
              <Icons.Moon className="mr-2 size-4" />
              Dark
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme('system'))}>
              <Icons.Laptop className="mr-2 size-4" />
              System
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
