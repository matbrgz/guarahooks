import { HookCta } from '@/components/hook-cta';
import { HookExampleLoaderClient } from '@/components/hook-example-loader-client';
import { PageBanner } from '@/components/page-banner';

import { cn, getHookExamples } from '@/lib/utils';

import { examples } from '@/registry/registry-examples';

export default function Home() {
  const hookExamples = getHookExamples(examples.map((example) => example.name));

  return (
    <>
      <PageBanner
        title="Beautiful hooks built with TypeScript and React."
        subtitle="An open-source collection of copy-and-paste hooks to help you quickly build applications."
        className="pt-16"
      />
      <section
        className={cn(
          'relative w-full grid gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3',
        )}
      >
        {hookExamples.map((example) => (
          <article key={example.name}>
            <HookExampleLoaderClient hook={example} />
          </article>
        ))}
      </section>
      <HookCta />
    </>
  );
}
