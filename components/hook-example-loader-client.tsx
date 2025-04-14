'use client';

import { ComponentType } from 'react';

import dynamic from 'next/dynamic';

import type { RegistryItem } from 'shadcn/registry';

import { Icons } from './icons';

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
    () => import(`@/registry/${newPath}`).catch(() => () => null),
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

  return <HookExample {...(props as TProps)} />;
}
