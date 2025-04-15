'use client';

import { useWindowSize } from '../hooks/use-window-size';

export default function UseWindowSizeDemo() {
  const { width, height } = useWindowSize();

  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm text-muted-foreground">
        <span className="font-mono bg-accent/50 px-1 py-0.5">
          useWindowSize
        </span>{' '}
        hook in action. Resize the window to see the changes.
      </p>
      <p className="text-sm text-muted-foreground">
        Width: <span className="text-foreground">{width}</span>
      </p>
      <p className="text-sm text-muted-foreground">
        Height: <span className="text-foreground">{height}</span>
      </p>
    </div>
  );
}
