'use client';

import { JSX, useEffect, useState } from 'react';

import { RegistryItem } from 'shadcn/registry';

import { cn, convertRegistryPaths } from '@/lib/utils';

import { siteConfig } from '@/config/site';

import { CodeBlock, highlight } from './code-block';
import CopyButton from './copy-button';
import { Icons } from './icons';
import { OpenInV0 } from './open-in-v0';
import { ScriptCopy } from './script-copy';
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

type HookDetailsProps = {
  hook: RegistryItem;
};

export function HookDetails({ hook }: HookDetailsProps) {
  const [code, setCode] = useState<string | null>(null);
  const [highlightedCode, setHighlightedCode] = useState<JSX.Element | null>(
    null,
  );

  useEffect(() => {
    const handleEmptyCode = () => {
      setCode('');
      setHighlightedCode(null);
    };

    const loadCode = async () => {
      try {
        const response = await fetch(`/r/${hook.name}.json`);
        if (!response.ok) {
          handleEmptyCode();
          return;
        }

        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          handleEmptyCode();
          return;
        }

        const data = await response.json();
        const codeContent = convertRegistryPaths(data.files[0].content) || '';
        setCode(codeContent);

        // Pre-highlight the code
        const highlighted = await highlight(codeContent, 'ts');
        setHighlightedCode(highlighted);
      } catch (error) {
        console.error('Failed to load code:', error);
        handleEmptyCode();
      }
    };

    loadCode();
  }, [hook.name]);

  return (
    <div
      className={cn(
        'absolute top-2 right-2',
        'flex gap-2 peer-data-comp-loading:hidden',
      )}
    >
      <OpenInV0 componentSource={`${siteConfig.url}/r/${hook.name}.json`} />
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
          <div className="min-w-0 flex flex-col gap-4">
            <ScriptCopy name={hook.name} />
            <p className="text-lg font-semibold tracking-tight">Code</p>
            {code === '' ? (
              <p className="text-muted-foreground text-sm">
                No code available. If you think this is an error, please{' '}
                <a
                  href="https://github.com/origin-space/originui/issues"
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
                <CopyButton componentSource={code} />
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
