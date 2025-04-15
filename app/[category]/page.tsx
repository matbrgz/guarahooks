import { notFound } from 'next/navigation';

import { HookCard } from '@/components/hook-card';
import { HookCta } from '@/components/hook-cta';
import { HookDetails } from '@/components/hook-details';
import { HookExampleLoaderClient } from '@/components/hook-example-loader-client';
import { PageBanner } from '@/components/page-banner';
import { PageGrid } from '@/components/page-grid';

import { getHooksByNames } from '@/lib/utils';

import { getCategory } from '@/config/hooks';

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategory((await params).category);

  if (!category) {
    notFound();
  }

  const hooks = getHooksByNames(category.hooks.map((item) => item.name));

  const getSubtitle = () => {
    return hooks.length === 1
      ? `A ${category.name.toLowerCase()} hook built with and for React.`
      : `A collection of ${category.name.toLowerCase()} hooks built with and for React.`;
  };

  return (
    <>
      <PageBanner title={category.name} subtitle={getSubtitle()} />
      <PageGrid>
        {hooks.map((hook) => (
          <HookCard
            key={hook.name}
            name={hook.name}
            description={hook.description ?? ''}
          >
            <HookExampleLoaderClient hook={hook} />
            <HookDetails hook={hook} />
          </HookCard>
        ))}
      </PageGrid>
      <HookCta />
    </>
  );
}
