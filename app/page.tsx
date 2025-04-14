import { HookCta } from '@/components/hook-cta';
import { HookExampleLoaderClient } from '@/components/hook-example-loader-client';
import { PageBanner } from '@/components/page-banner';

import { cn, getHookExamples } from '@/lib/utils';

import { hooks } from '@/config/hooks';

export default function Home() {
  const hooksExamples = getHookExamples(hooks.map((hook) => hook.name));

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
        {hooksExamples.map((hook) => (
          <article key={hook.name}>
            <HookExampleLoaderClient hook={hook} />
          </article>
        ))}
      </section>
      <HookCta />
    </>
  );
}
