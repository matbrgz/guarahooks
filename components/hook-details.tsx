import { RegistryItem } from 'shadcn/registry';

import { cn } from '@/lib/utils';

import { siteConfig } from '@/config/site';

import { HookCodeDialog } from './hook-code-dialog';
import { HookExampleDialog } from './hook-example-dialog';
import { OpenInV0 } from './open-in-v0';

type HookDetailsProps = {
  hook: RegistryItem;
  example: RegistryItem;
};

export function HookDetails({ hook, example }: HookDetailsProps) {
  return (
    <div className={cn('flex gap-2 peer-data-comp-loading:hidden')}>
      <HookCodeDialog hook={hook} />
      <HookExampleDialog example={example} />
      <OpenInV0 url={`https://h3-use.com/r/${example.name}.json`} />
    </div>
  );
}
