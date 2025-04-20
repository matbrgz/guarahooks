'use client';

import { CopyButton } from '@/components/copy-button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { cn } from '@/lib/utils';

import { siteConfig } from '@/config/site';

import { useConfig } from '@/hooks/use-config';

export function ScriptCopy({ name }: { name: string }) {
  const [config] = useConfig();

  const packageManager = config.packageManager || 'pnpm';

  const commands = {
    pnpm: `pnpm dlx shadcn@latest add ${siteConfig.url}/r/${name}.json`,
    npm: `npx shadcn@latest add ${siteConfig.url}/r/${name}.json`,
    yarn: `npx shadcn@latest add ${siteConfig.url}/r/${name}.json`,
    bun: `bunx --bun shadcn@latest add ${siteConfig.url}/r/${name}.json`,
  };

  return (
    <div className="relative">
      <Tabs className="rounded-sm bg-accent/30 overflow-hidden">
        <TabsList className="h-11 p-0 bg-transparent w-full justify-start items-center border-b rounded-none">
          {Object.entries(commands).map(([pkg, command]) => (
            <TabsTrigger
              value={pkg}
              key={pkg}
              className={cn('rounded-none border-none flex-none', 'px-4 py-2')}
            >
              {pkg}
            </TabsTrigger>
          ))}
        </TabsList>
        {Object.entries(commands).map(([pkg, command]) => (
          <TabsContent className="m-0" key={pkg} value={pkg}>
            <pre className="overflow-auto p-4 font-mono text-[12.8px] text-zinc-100">
              {command}
            </pre>
          </TabsContent>
        ))}
      </Tabs>
      <CopyButton
        componentSource={commands[packageManager as keyof typeof commands]}
        className="top-1 right-1"
      />
    </div>
  );
}
