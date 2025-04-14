'use client';

import { useWindowSize } from '../hooks/easy-hooks/use-window-size';

export default function UseWindowSizeDemo() {
  const { width, height } = useWindowSize();

  return (
    <div className="flex gap-2">
      <p className="text-sm text-muted-foreground">
        Width: <span className="text-foreground">{width}</span>
      </p>
      <p className="text-sm text-muted-foreground">
        Height: <span className="text-foreground">{height}</span>
      </p>
    </div>
  );
}
