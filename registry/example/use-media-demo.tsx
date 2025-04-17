'use client';

import { useMedia } from '@/registry/hooks/use-media';

export default function UseMediaDemo() {
  const isMobile = useMedia('(max-width: 768px)');

  return (
    <div>
      <p>Is mobile: {isMobile ? 'Yes' : 'No'}</p>
    </div>
  );
}
