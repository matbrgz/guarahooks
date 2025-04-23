'use client';

import React, { useCallback, useState } from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';

import { useDebounce } from '@/registry/hooks/use-debounce';

export function UseDebounceDemo() {
  const [inputValue, setInputValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');

  const updateDebouncedValue = useCallback((value: string) => {
    setDebouncedValue(value);
  }, []);

  const debouncedUpdate = useDebounce(updateDebouncedValue, 500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    debouncedUpdate(value);
  };

  return (
    <Card className="max-w-md w-full relative">
      <CardHeader>
        <CardTitle>useDebounce</CardTitle>
        <CardDescription>
          This component uses the <code>useDebounce</code> hook to debounce the
          input value.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Type something..."
          className="w-full"
        />
      </CardContent>
      <CardFooter className="flex-col items-start gap-2">
        <p className="text-sm text-muted-foreground">
          <strong>Imediate value:</strong> {inputValue}
        </p>
        <p className="text-sm text-muted-foreground">
          <strong>Debounced value:</strong> {debouncedValue}
        </p>
      </CardFooter>
    </Card>
  );
}
