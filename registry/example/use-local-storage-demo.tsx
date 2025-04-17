'use client';

import React from 'react';

import { useLocalStorage } from '@/registry/hooks/use-local-storage';

export default function UseLocalStorageDemo() {
  // Example with a string
  const [name, setName] = useLocalStorage<string>('demo-name', '');
  // Example with a number
  const [count, setCount] = useLocalStorage<number>('demo-count', 0);

  return (
    <div className="p-6 max-w-md mx-auto font-sans">
      <h2 className="text-2xl font-bold mb-6">useLocalStorage Demo</h2>
      <div className="mb-6">
        <label className="block mb-2 font-medium">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="ml-2 px-2 py-1 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </label>
        <div className="mt-2 text-gray-700">
          Current name: <b>{name}</b>
        </div>
      </div>
      <div className="mb-6">
        <button
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
          onClick={() => setCount((c) => c - 1)}
        >
          -
        </button>
        <span className="mx-4 text-lg font-mono">{count}</span>
        <button
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
          onClick={() => setCount((c) => c + 1)}
        >
          +
        </button>
        <div className="mt-2 text-gray-700">
          Current count: <b>{count}</b>
        </div>
      </div>
    </div>
  );
}
