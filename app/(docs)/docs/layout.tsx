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
        'flex flex-row grow gap-16',
        'mx-auto',
      )}
    >
      <aside
        id="docs-sidebar"
        className={cn(
          'fixed lg:sticky top-[80px] h-[calc(100vh-112px)]',
          'hidden lg:block lg:flex-[18%]',
          'my-4',
        )}
      >
        <div className={cn('no-scrollbar h-full overflow-auto')}>
          <DocsSidebar items={docsConfig.sidebarNav} />
        </div>
      </aside>
      <div className={cn('w-full lg:flex-[82%] px-4 lg:px-0')}>{children}</div>
    </section>
  );
}
