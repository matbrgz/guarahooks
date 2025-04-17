'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { cn } from '@/lib/utils';

import { Icons } from './icons';
import { buttonVariants } from './ui/button';

export function OpenInV0({ url }: { url: string }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          className={cn(
            buttonVariants({
              variant: 'ghost',
              size: 'icon',
            }),
          )}
          href={`https://v0.dev/chat/api/open?url=${url}`}
          target="_blank"
          aria-label="Open in v0"
          rel="noopener noreferrer"
        >
          <Icons.V0 className="size-4" />
        </a>
      </TooltipTrigger>
      <TooltipContent className="text-muted-foreground">
        Open in v0
      </TooltipContent>
    </Tooltip>
  );
}
