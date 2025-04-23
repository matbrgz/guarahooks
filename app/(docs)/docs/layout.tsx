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
        'flex flex-row gap-8',
        'mx-auto',
      )}
    >
      <DocsSidebar items={docsConfig.sidebarNav} />
      <div className={cn('lg:flex-4/5', 'border-x border-dashed')}>
        {children}
      </div>
    </section>
  );
}
