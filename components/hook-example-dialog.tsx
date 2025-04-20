'use client';

import { RegistryItem } from 'shadcn/registry';

import { CodeBlock } from '@/components/code-block';
import { CopyButton } from '@/components/copy-button';
import { Icons } from '@/components/icons';
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

import { useLoadCode } from '@/hooks/use-load-code';

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
