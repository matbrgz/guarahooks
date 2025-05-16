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
        id="docs-sidebar"
        className={cn(
          'fixed lg:sticky z-30 top-[104px] h-[calc(100vh-104px)]',
          'hidden lg:block lg:flex-[22.5%]',
          'bg-background/50 backdrop-blur-md',
          'border-l border-dashed',
        )}
      >
        <div className={cn('no-scrollbar h-full overflow-auto')}>
          <DocsSidebar items={docsConfig.sidebarNav} />
        </div>
      </aside>
      <div className={cn('w-full lg:flex-4/5', 'lg:border-x border-dashed')}>
        {children}
      </div>
    </section>
  );
}
