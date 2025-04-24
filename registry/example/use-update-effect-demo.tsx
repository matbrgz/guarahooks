'use client';

import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { useUpdateEffect } from '@/registry/hooks/use-update-effect';

export default function UseUpdateEffectDemo() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  useUpdateEffect(() => {
    setMessage(`O contador foi atualizado para ${count}`);
  }, [count]);

  return (
    <Card className="relative max-w-md w-full">
      <CardHeader>
        <CardTitle>useUpdateEffect</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col items-center gap-4">
          <p className="text-2xl font-bold">{count}</p>
          <Button onClick={() => setCount((c) => c + 1)}>Increment</Button>
          <p className="text-sm text-muted-foreground mt-2">{message}</p>
        </div>
      </CardContent>
    </Card>
  );
}
