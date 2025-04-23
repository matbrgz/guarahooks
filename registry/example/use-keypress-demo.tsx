'use client';

import React, { useState } from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { useKeypress } from '@/registry/hooks/use-keypress';

export default function UseKeypressDemo() {
  const [message, setMessage] = useState(
    'Press Ctrl+M (Windows/Linux) or Cmd+M (Mac)',
  );
  const [count, setCount] = useState(0);

  useKeypress({
    combo: ['ctrl+m', 'meta+m'],
    callback: (e) => {
      setCount((c) => c + 1);
      setMessage('Shortcut detected! (Ctrl+M or Cmd+M)');
    },
    preventDefault: true,
  });

  useKeypress({
    combo: 'ctrl+k',
    callback: () => {
      setCount(0);
    },
  });

  return (
    <Card className="relative max-w-sm w-full">
      <CardHeader>
        <CardTitle>useKeypress</CardTitle>
        <CardDescription>
          This component uses the <code>useKeypress</code> hook to detect key
          combinations.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-sm">{message}</p>
        <p className="text-sm">
          Shortcut pressed{' '}
          <span className="font-bold text-blue-600">{count}</span> times.
        </p>
      </CardContent>
      <CardFooter>
        <p className="text-muted-foreground text-sm">
          Press Ctrl+K to reset the count.
        </p>
      </CardFooter>
    </Card>
  );
}
