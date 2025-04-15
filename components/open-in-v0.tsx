'use client';

import Link from 'next/link';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { cn } from '@/lib/utils';

import { Icons } from './icons';
import { buttonVariants } from './ui/button';

export function OpenInV0({ componentSource }: { componentSource: string }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          className={cn(
            buttonVariants({
              variant: 'ghost',
              size: 'icon',
            }),
          )}
          href={`https://v0.dev/chat/api/open?url=${encodeURIComponent(componentSource)}`}
          target="_blank"
          aria-label="Open in v0"
        >
          <Icons.V0 className="size-4" />
        </Link>
      </TooltipTrigger>
      <TooltipContent className="text-muted-foreground">
        Open in v0
      </TooltipContent>
    </Tooltip>
  );
}
