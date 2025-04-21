import { DocsSidebar } from '@/components/layout/docs-sidebar';

import { cn } from '@/lib/utils';

import { docsConfig } from '@/config/docs';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      className={cn(
        'size-full max-w-5xl grow',
        'flex flex-row gap-4',
        'mx-auto my-4 lg:mt-8',
      )}
    >
      <DocsSidebar items={docsConfig.sidebarNav} />
      <div
        className={cn(
          'flex-3/4',
          'bg-card/30 backdrop-blur-md',
          'rounded-md border shadow-sm p-2 dark:shadow-none',
        )}
      >
        {children}
      </div>
    </section>
  );
}
