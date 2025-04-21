'use client';

import { RegistryItem } from 'shadcn/registry';

import { CodeBlock } from '@/components/code-block';
import { CopyButton } from '@/components/copy-button';
import { Icons } from '@/components/icons';
import { ScriptCopy } from '@/components/script-copy';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { siteConfig } from '@/config/site';

import { useLoadCode } from '@/hooks/use-load-code';

type HookCodeDialogProps = {
  hook: RegistryItem;
};

export function HookCodeDialog({ hook }: HookCodeDialogProps) {
  const { code, highlightedCode } = useLoadCode(hook);

  return (
    <Dialog>
      <Tooltip>
        <TooltipTrigger asChild>
          <span>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon">
                <Icons.Code className="size-4" />
              </Button>
            </DialogTrigger>
          </span>
        </TooltipTrigger>
        <TooltipContent className="text-muted-foreground">
          View Code
        </TooltipContent>
      </Tooltip>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>Installation</DialogTitle>
          <DialogDescription className="sr-only">
            Use the CLI to add components to your project
          </DialogDescription>
        </DialogHeader>
        <div className="min-w-0 space-y-4">
          <ScriptCopy name={hook.name} />
          <p className="text-lg font-semibold tracking-tight">Code</p>
          <div className="relative">
            {code === '' ? (
              <p className="text-muted-foreground text-sm">
                No code available. If you think this is an error, please{' '}
                <a
                  href={`${siteConfig.links.github}/issues`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground font-medium underline hover:no-underline"
                >
                  open an issue
                </a>
                .
              </p>
            ) : (
              <>
                <CodeBlock
                  code={code}
                  lang="ts"
                  preHighlighted={highlightedCode}
                />
                <CopyButton componentSource={code} className="right-4" />
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
