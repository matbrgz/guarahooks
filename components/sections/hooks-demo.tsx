'use client';

import { notFound } from 'next/navigation';

import { allPages } from 'content-collections';

import { Mdx } from '@/components/mdx-components';

import { cn } from '@/lib/utils';

const PAGE = 'home';

export function HooksDemo() {
  const page = allPages.find((page) => page.slugAsParams === PAGE);

  if (!page) {
    notFound();
  }

  return (
    <div
      id="hooks-demo"
      className={cn('max-w-screen-2xl w-full', 'border-x border-dashed')}
    >
      <div className={cn('max-w-5xl', 'py-16 lg:px-8 mx-auto')}>
        <hgroup className={cn('mb-4')}>
          <h2 className={cn('text-center text-5xl font-bold tracking-tighter')}>
            Hooks Demo
          </h2>
          <h3 className="mx-auto mb-8 text-balance text-center text-lg font-medium tracking-tight text-foreground/80">
            Here are some of the hooks that you can use to build your apps.
          </h3>
        </hgroup>
        <Mdx code={page.body.code} />
      </div>
    </div>
  );
}
