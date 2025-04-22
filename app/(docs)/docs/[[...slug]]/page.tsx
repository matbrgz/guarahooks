import { notFound } from 'next/navigation';

import { allDocs } from 'content-collections';

import { Contribute } from '@/components/contribute';
import { Mdx } from '@/components/mdx-components';
import { TableOfContents } from '@/components/table-of-contents';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

import { getTableOfContents } from '@/lib/toc';
import { cn } from '@/lib/utils';

type DocsPageProps = {
  params: {
    slug: Promise<string[]>;
  };
};

async function getDocFromParams({ params }: DocsPageProps) {
  const slugFromParams = (await params.slug) ?? ['index'];

  const slug = slugFromParams.join('/');

  const doc = allDocs.find((doc) => doc.slugAsParams === slug);

  if (!doc) {
    return null;
  }

  return doc;
}

export default async function DocsPage({ params }: DocsPageProps) {
  const doc = await getDocFromParams({ params });

  if (!doc || !doc.published) {
    notFound();
  }

  const toc = await getTableOfContents(doc.body.raw);

  return (
    <div className={cn('flex h-full')}>
      {/* Content */}
      <article className={cn('flex-[80%]')}>
        <Breadcrumb className={cn('border-b border-dashed py-4 px-8')}>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem className="text-foreground">
              {doc.title}
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <hgroup className={cn('py-4 px-8')}>
          <h1 className={cn('scroll-m-20 text-4xl font-bold tracking-tight')}>
            {doc.title}
          </h1>
          {doc.description && (
            <p className="text-balance text-lg text-muted-foreground">
              {doc.description}
            </p>
          )}
        </hgroup>
        <div className={cn('px-8 pb-4 border-r border-dashed')}>
          <Mdx code={doc.body.code} />
        </div>
      </article>
      {/* Table Of Contents */}
      <div className={cn('sketch-pattern w-8')} />
      <div
        className={cn(
          'flex flex-col gap-4',
          'p-4 border-l border-dashed',
          'flex-[20%]',
        )}
      >
        <TableOfContents toc={toc} />
        <Contribute doc={doc} />
      </div>
    </div>
  );
}
