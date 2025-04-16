'use client';

import React, { useState } from 'react';

import { cn } from '@/lib/utils';

import { Icons } from '../icons';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { BackgroundBeams } from './background-beams';

export function BackgroundBeamsWithRemove() {
  const [showBeams, setShowBeams] = useState(true);

  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={() => setShowBeams(!showBeams)}
            className="absolute top-4 right-4  lg:top-2 lg:right-2 z-50"
            variant="outline"
            size="icon"
            aria-label="Toggle background beams"
          >
            {showBeams ? (
              <Icons.EyeClose className={cn('size-4')} />
            ) : (
              <Icons.Eye className={cn('size-4')} />
            )}
            <span className="sr-only">Toggle background beams</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent className="text-foreground">
          Toggle background beams
        </TooltipContent>
      </Tooltip>
      {showBeams && <BackgroundBeams />}
    </>
  );
}
