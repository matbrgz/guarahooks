'use client';

import { RefObject, useRef, useState } from 'react';

import { useMouse } from '@/registry/hooks/use-mouse';

export function UseMouseDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const [trackOutside, setTrackOutside] = useState(false);
  const [clampToZero, setClampToZero] = useState(false);
  const { docX, docY, posX, posY, elX, elY, elW, elH } = useMouse({
    ref: ref as unknown as RefObject<HTMLElement>,
    trackOutside,
    clampToZero,
  });

  return (
    <div className="w-full h-full flex flex-col gap-2 items-start" ref={ref}>
      <div className="flex gap-4 mb-2">
        <label>
          <input
            type="checkbox"
            checked={trackOutside}
            onChange={() => setTrackOutside((v) => !v)}
          />
          Track outside
        </label>
        <label>
          <input
            type="checkbox"
            checked={clampToZero}
            onChange={() => setClampToZero((v) => !v)}
          />
          Clamp to zero
        </label>
      </div>
      <p>
        Mouse position in document - x:{docX} y:{docY}
      </p>
      <p>
        Mouse position in element - x:{elX} y:{elY}
      </p>
      <div>
        Element position- x:{posX} y:{posY}
      </div>
      <div>
        Element dimensions - {elW}x{elH}
      </div>
    </div>
  );
}
