import { useCallback, useState } from 'react';

/**
 * Hook to control a boolean state with a toggler.
 *
 * @example
 * const [isOpen, toggle] = useToggle(false);
 *
 * <button onClick={toggle}>Toggle</button>
 */
export function useToggle(
  initialValue: boolean = false,
): [boolean, () => void] {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  return [value, toggle];
}
