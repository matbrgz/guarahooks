'use client';

import React from 'react';

import { useToggle } from '@/registry/hooks/use-toggle';

export default function UseToggleDemo() {
  const [isOn, toggle] = useToggle(false);

  return (
    <div>
      <p>
        The state is: <strong>{isOn ? 'On' : 'Off'}</strong>
      </p>
      <button onClick={toggle}>{isOn ? 'Off' : 'On'}</button>
    </div>
  );
}
