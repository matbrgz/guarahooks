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
        'flex flex-row grow gap-4',
        'mx-auto',
      )}
    >
      <aside
        id="docs-sidebar"
        className={cn(
          'fixed lg:sticky top-[80px] h-[calc(100vh-64px)]',
          'hidden lg:block lg:flex-[22%]',
          'my-4',
        )}
      >
        <div className={cn('no-scrollbar h-full overflow-auto')}>
          <DocsSidebar items={docsConfig.sidebarNav} />
        </div>
      </aside>
      <div className={cn('w-full lg:flex-[78%]')}>{children}</div>
    </section>
  );
}
