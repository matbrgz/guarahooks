'use client';

import { useOrientation } from '@/registry/hooks/use-orientation';

export default function UseOrientationDemo() {
  const orientation = useOrientation();

  return (
    <div className="p-8 max-w-md mx-auto font-sans bg-white rounded shadow mt-12 text-center">
      <h2 className="text-2xl font-bold mb-4">useOrientation Demo</h2>
      <p className="mb-2 text-gray-700">
        Current orientation: <b className="text-blue-600">{orientation}</b>
      </p>
      {orientation === 'portrait' ? (
        <p className="text-green-600">You are in portrait mode 📱</p>
      ) : (
        <p className="text-purple-600">You are in landscape mode 🖥️</p>
      )}
      <small className="text-gray-400 block mt-4">
        Try rotating your device or resizing the window.
      </small>
    </div>
  );
}
