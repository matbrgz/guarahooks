'use client';

import React, { useState } from 'react';

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
    <div className="p-8 max-w-md mx-auto font-sans bg-white rounded shadow mt-12 text-center">
      <h2 className="text-2xl font-bold mb-4">useKeypress Demo</h2>
      <p className="mb-2 text-gray-700">{message}</p>
      <p className="mb-4 text-gray-600">
        Shortcut pressed <b className="text-blue-600">{count}</b> times.
      </p>
      <small className="text-gray-400">Press Ctrl+K to reset the count.</small>
    </div>
  );
}
