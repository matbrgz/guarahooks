'use client';

import { ComponentType } from 'react';

import dynamic from 'next/dynamic';

import type { RegistryItem } from 'shadcn/registry';

import { Icons } from './icons';
import { Badge } from './ui/badge';

type HookLoaderClientProps = {
  hook: RegistryItem;
};

export function HookExampleLoaderClient<TProps extends object>({
  hook,
  ...props
}: HookLoaderClientProps & TProps) {
  if (!hook.files?.length) {
    return null;
  }

  const path = hook.files[0].path;
  const newPath = path.replace('registry/', '');

  const HookExample = dynamic(
    () =>
      import(`@/registry/${newPath}`).catch((err) => {
        console.error('Error importing component:', newPath, err);
        return () => null;
      }),
    {
      loading: () => (
        <div
          data-comp-loading="true"
          className="peer flex min-h-20 items-center justify-center"
        >
          <span className="sr-only">Loading component...</span>
          <Icons.LoaderLine
            className="text-input -ms-1 animate-spin size-6"
            aria-hidden="true"
          />
        </div>
      ),
      ssr: false,
    },
  ) as ComponentType<TProps>;

  return (
    <>
      <Badge
        variant="outline"
        className="font-mono text-muted-foreground tracking-wide absolute bottom-1 right-1"
      >
        Example
      </Badge>
      <HookExample {...(props as TProps)} />
    </>
  );
}
