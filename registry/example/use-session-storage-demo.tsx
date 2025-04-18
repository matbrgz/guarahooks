import React, { useState } from 'react';

import useSessionStorage from '../hooks/use-session-storage';

// Custom serializer/deserializer for an object
const userSerializer = (user: { name: string; age: number }) =>
  JSON.stringify(user);
const userDeserializer = (str: string) => {
  try {
    return JSON.parse(str) as { name: string; age: number };
  } catch {
    return { name: '', age: 0 };
  }
};

export default function UseSessionStorageDemo() {
  // Simple string example
  const [name, setName] = useSessionStorage<string>('demo-name', '');

  // Object example with custom serializer/deserializer
  const [user, setUser] = useSessionStorage<{ name: string; age: number }>(
    'demo-user',
    { name: '', age: 0 },
    { serialize: userSerializer, deserialize: userDeserializer },
  );

  const [ageInput, setAgeInput] = useState('');

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md space-y-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        useSessionStorage Demo
      </h2>

      {/* Simple string example */}
      <div className="space-y-2">
        <label className="block text-gray-700 font-medium">
          Name (string):
        </label>
        <input
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type your name..."
        />
        <div className="text-gray-600">
          Current value:{' '}
          <span className="font-mono">{JSON.stringify(name)}</span>
        </div>
        <button
          className="mt-1 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => setName('')}
        >
          Clear Name
        </button>
      </div>

      <hr />

      {/* Object example */}
      <div className="space-y-2">
        <label className="block text-gray-700 font-medium">
          User (object):
        </label>
        <input
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 mb-2"
          type="text"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          placeholder="User name..."
        />
        <input
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          type="number"
          value={ageInput}
          onChange={(e) => setAgeInput(e.target.value)}
          placeholder="User age..."
        />
        <button
          className="mt-1 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2"
          onClick={() => {
            const age = parseInt(ageInput, 10);
            if (!isNaN(age)) setUser({ ...user, age });
          }}
        >
          Set Age
        </button>
        <button
          className="mt-1 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => setUser({ name: '', age: 0 })}
        >
          Clear User
        </button>
        <div className="text-gray-600 mt-2">
          Current value:{' '}
          <span className="font-mono">{JSON.stringify(user)}</span>
        </div>
      </div>
    </div>
  );
}
