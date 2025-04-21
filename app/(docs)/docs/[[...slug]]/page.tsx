import { notFound } from 'next/navigation';

import { allDocs } from 'content-collections';

import { Mdx } from '@/components/mdx-components';

import { cn } from '@/lib/utils';

type DocsPageProps = {
  params: {
    slug: string[];
  };
};

async function getDocFromParams({ params }: DocsPageProps) {
  const slug = params.slug?.join('/') || 'index';
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

  console.log(doc.title);

  return (
    <div className={cn('flex flex-col', 'p-4')}>
      <hgroup>
        <h1 className={cn('scroll-m-20 text-4xl font-bold tracking-tight')}>
          {doc.title}
        </h1>
        {doc.description && (
          <p className="text-balance text-lg text-muted-foreground">
            {doc.description}
          </p>
        )}
      </hgroup>
      <article className={cn('py-4')}>
        <Mdx code={doc.body.code} />
      </article>
    </div>
  );
}
