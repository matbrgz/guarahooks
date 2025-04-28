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
        'size-full max-w-screen-2xl',
        'flex flex-row grow',
        'mx-auto',
      )}
    >
      <aside
        className={cn(
          'fixed lg:sticky z-30 top-[72px] h-[calc(100vh-72px)]',
          'hidden lg:block lg:flex-1/5',
          'bg-background/50 backdrop-blur-md',
          'border-l border-dashed',
        )}
      >
        <div className={cn('no-scrollbar h-full overflow-auto')}>
          <DocsSidebar items={docsConfig.sidebarNav} />
        </div>
      </aside>
      <div className={cn('w-full lg:flex-4/5', 'border-x border-dashed')}>
        {children}
      </div>
    </section>
  );
}
