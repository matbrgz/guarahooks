'use client';

import React, { useState } from 'react';

import { useSet } from '@/registry/hooks/use-set';

export default function UseSetDemo() {
  const {
    getAll,
    add,
    delete: remove,
    has,
    clear,
    reset,
  } = useSet<string>(['apple', 'banana']);

  const [input, setInput] = useState('');

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Demo: useSet</h2>
      <div className="flex gap-2 mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add fruit"
          className="flex-1 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={() => {
            add(input);
            setInput('');
          }}
          disabled={!input}
          className="bg-blue-500 text-white px-3 py-1 rounded disabled:opacity-50"
        >
          Add
        </button>
        <button
          onClick={() => remove(input)}
          disabled={!input || !has(input)}
          className="bg-red-500 text-white px-3 py-1 rounded disabled:opacity-50"
        >
          Remove
        </button>
      </div>
      <div className="flex gap-2 mb-4">
        <button
          onClick={clear}
          className="bg-gray-200 text-gray-800 px-3 py-1 rounded hover:bg-gray-300"
        >
          Clear
        </button>
        <button
          onClick={reset}
          className="bg-yellow-400 text-gray-900 px-3 py-1 rounded hover:bg-yellow-300"
        >
          Reset
        </button>
      </div>
      <div className="mb-4">
        <strong>Fruits in the Set:</strong>
        <ul className="list-disc list-inside mt-2">
          {[...getAll()].map((fruit: string) => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
      </div>
      <div className="text-xs text-gray-500">
        <div>
          Set (doesn't modify the state): {JSON.stringify(Array.from(getAll()))}
        </div>
      </div>
    </div>
  );
}
