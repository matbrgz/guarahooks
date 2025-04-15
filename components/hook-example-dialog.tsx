'use client';

import { RegistryItem } from 'shadcn/registry';

import { useLoadCode } from '@/hooks/use-load-code';

import { CodeBlock } from './code-block';
import CopyButton from './copy-button';
import { Icons } from './icons';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

type HookExampleDialogProps = {
  example: RegistryItem;
};

export function HookExampleDialog({ example }: HookExampleDialogProps) {
  const { code, highlightedCode } = useLoadCode(example);

  return (
    <Dialog>
      <Tooltip>
        <TooltipTrigger asChild>
          <span>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon">
                <Icons.Pages className="size-4" />
              </Button>
            </DialogTrigger>
          </span>
        </TooltipTrigger>
        <TooltipContent className="text-muted-foreground">
          View Example
        </TooltipContent>
      </Tooltip>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>Example</DialogTitle>
          <DialogDescription className="sr-only">
            Use the CLI to add components to your project
          </DialogDescription>
        </DialogHeader>
        <div className="min-w-0 relative space-y-4">
          <CodeBlock code={code} lang="ts" preHighlighted={highlightedCode} />
          <CopyButton componentSource={code} className="right-2" />
        </div>
      </DialogContent>
    </Dialog>
  );
}
