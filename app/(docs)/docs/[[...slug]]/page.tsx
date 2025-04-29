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

import { siteConfig } from '@/config/site';

type PageProps = {
  params: Promise<{
    slug?: string[];
  }>;
};

async function getDocFromParams({ params }: PageProps) {
  const slug = (await params).slug?.join('/') || 'index';
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);

  if (!doc) {
    return null;
  }

  return doc;
}

export async function generateMetadata({ params }: PageProps) {
  const doc = await getDocFromParams({ params });

  if (!doc) {
    return {};
  }

  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: 'article',
      url: `${siteConfig.url}/${doc.slug}`,
      images: [
        {
          url: doc.image,
          width: 1200,
          height: 630,
        },
      ],
      twitter: {
        card: 'summary_large_image',
        title: doc.title,
        description: doc.description,
        images: [doc.image],
        creator: '@h3rmel',
      },
    },
  };
}

export default async function DocsPage({ params }: PageProps) {
  const doc = await getDocFromParams({ params });

  if (!doc || !doc.published) {
    notFound();
  }

  const toc = await getTableOfContents(doc.body.raw);

  return (
    <div className={cn('flex h-full bg-transparent')}>
      {/* Content */}
      <article
        id="docs-content"
        className={cn(
          'w-full lg:flex-[80%]',
          'bg-background/50 backdrop-blur-md',
          'lg:border-r border-dashed',
        )}
      >
        {/* Breadcrumb */}
        <Breadcrumb className={cn('border-b border-dashed py-4 px-4 lg:px-8')}>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem className={cn('text-foreground')}>
              {doc.title}
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {/* Title and Description */}
        <hgroup className={cn('py-4 px-4 lg:px-8')}>
          <h1
            className={cn('scroll-m-20', 'text-4xl font-bold tracking-tight')}
          >
            {doc.title}
          </h1>
          {doc.description && (
            <p className={cn('text-balance text-lg text-muted-foreground')}>
              {doc.description}
            </p>
          )}
        </hgroup>
        {/* Content */}
        <div className={cn('px-4 lg:px-8 pb-4')}>
          <Mdx code={doc.body.code} />
        </div>
      </article>
      {/* Table Of Contents */}
      <div
        id="docs-toc"
        className={cn(
          'fixed lg:sticky z-30 top-[72px] h-[calc(100vh-72px)]',
          'hidden lg:flex lg:flex-[20%] flex-col gap-4',
          'p-4',
          'bg-background/50 backdrop-blur-md',
        )}
      >
        <TableOfContents toc={toc} />
        <Contribute doc={doc} />
      </div>
    </div>
  );
}
