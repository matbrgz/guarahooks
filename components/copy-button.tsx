'use client';

import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { cn } from '@/lib/utils';

import { useCopy } from '@/hooks/use-copy';

import { Icons } from './icons';

const CopyButton = ({
  componentSource,
  className,
}: {
  componentSource: string | null;
  className?: string;
}) => {
  const { copied, copy } = useCopy();

  return (
    <div className={cn('absolute top-2 right-2', className)}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              'text-muted-foreground hover:text-foreground transition-all hover:bg-transparent disabled:opacity-100',
              copied && 'text-emerald-500 bg-emerald-500/10',
            )}
            onClick={() => copy(componentSource || '')}
            aria-label={copied ? 'Copied' : 'Copy component source'}
            disabled={copied}
          >
            <div
              className={cn(
                'transition-all',
                copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0',
              )}
            >
              <Icons.Check className="size-4" />
            </div>
            <div
              className={cn(
                'absolute transition-all',
                copied ? 'scale-0 opacity-0' : 'scale-100 opacity-100',
              )}
            >
              <Icons.Copy className="size-4" />
            </div>
          </Button>
        </TooltipTrigger>
        <TooltipContent className="text-muted-foreground px-2 py-1 text-xs">
          Copy
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default CopyButton;
