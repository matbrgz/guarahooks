'use client';

import { useWindowSize } from '../hooks/use-window-size';

export default function UseWindowSizeDemo() {
  const { width, height } = useWindowSize();

  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm text-muted-foreground">
        Resize the window to see the values changing.
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
