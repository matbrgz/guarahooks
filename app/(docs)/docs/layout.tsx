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
        'size-full max-w-screen-2xl grow',
        'flex flex-row',
        'mx-auto',
      )}
    >
      <DocsSidebar items={docsConfig.sidebarNav} />
      <div className="sketch-pattern w-8" />
      <div
        className={cn(
          'flex-4/5',
          'bg-background/50 backdrop-blur-md',
          'border-x border-dashed shadow-sm p-2 dark:shadow-none',
        )}
      >
        {children}
      </div>
    </section>
  );
}
