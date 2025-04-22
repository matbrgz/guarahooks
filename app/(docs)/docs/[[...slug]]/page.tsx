import { notFound } from 'next/navigation';

import { allDocs } from 'content-collections';

import { Mdx } from '@/components/mdx-components';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

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

  return (
    <div className={cn('flex h-full')}>
      {/* Content */}
      <article className={cn('grow')}>
        <Breadcrumb className={cn('border-b border-dashed p-4')}>
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
        <hgroup className={cn('p-4')}>
          <h1 className={cn('scroll-m-20 text-4xl font-bold tracking-tight')}>
            {doc.title}
          </h1>
          {doc.description && (
            <p className="text-balance text-lg text-muted-foreground">
              {doc.description}
            </p>
          )}
        </hgroup>
        <div className={cn('px-4 pb-4')}>
          <Mdx code={doc.body.code} />
        </div>
      </article>
      {/* Table Of Contents */}
      <div className={cn('sketch-pattern w-8')} />
      <div className={cn('')}></div>
      {/* <div className={cn('p-4')}></div> */}
    </div>
  );
}
