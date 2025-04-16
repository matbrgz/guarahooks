'use client';

import { useCallback, useEffect, useMemo, useRef } from 'react';

/**
 *
 * @property combo - The key or combination to listen for (e.g., 's', 'ctrl+s', 'shift+enter'). Modifiers: ctrl, alt, shift, meta (case-insensitive, order-insensitive).
 * @property callback - The callback to be called when the key or combination is pressed.
 * @property preventDefault - If true, the event will be prevented from propagating (default: false).
 * @property target - The target element to listen for the key or combination (default: window).
 *
 * For best performance, pass a stable reference (e.g., from useRef) as target. Changing the target frequently will cause listeners to be re-attached.
 */
interface UseKeyboardOptions {
  combo: string | string[];
  callback: (event: KeyboardEvent) => void;
  preventDefault?: boolean;
  target?: HTMLElement | null;
}

/**
 * Normalizes a key combination string to a canonical form for comparison.
 * @example 'Ctrl+S' => 'ctrl+s', 'shift+Ctrl+S' => 'ctrl+shift+s'
 */
function normalizeCombo(combo: string): string {
  const parts = combo
    .toLowerCase()
    .split('+')
    .map((p) => p.trim());

  const modifiers = ['ctrl', 'alt', 'shift', 'meta'];
  const keys: string[] = [];
  const mods: string[] = [];

  for (const part of parts) {
    if (modifiers.includes(part)) {
      mods.push(part);
    } else {
      keys.push(part);
    }
  }

  // Sort modifiers for consistent comparison
  mods.sort((a, b) => modifiers.indexOf(a) - modifiers.indexOf(b));
  return [...mods, ...keys].join('+');
}

/**
 * Checks if a KeyboardEvent matches a normalized key combination string.
 *
 * @param event KeyboardEvent
 * @param normalizedCombo string (e.g., 'ctrl+s')
 * @returns boolean
 */
function eventMatchesCombo(
  event: KeyboardEvent,
  normalizedCombo: string,
): boolean {
  const modifiers = ['ctrl', 'alt', 'shift', 'meta'];
  const eventMods = [
    event.ctrlKey ? 'ctrl' : null,
    event.altKey ? 'alt' : null,
    event.shiftKey ? 'shift' : null,
    event.metaKey ? 'meta' : null,
  ].filter(Boolean) as string[];

  const key = event.key.toLowerCase();
  const comboParts = normalizedCombo.split('+');
  const comboMods = comboParts.filter((p) => modifiers.includes(p));
  const comboKey = comboParts.find((p) => !modifiers.includes(p));

  // All modifiers in combo must be pressed
  if (comboMods.length !== eventMods.length) return false;

  for (const mod of comboMods) {
    if (!eventMods.includes(mod)) return false;
  }

  // Key must match
  return key === comboKey;
}

/**
 * React hook to listen for keyboard events for a specific key or combination.
 *
 * @example useKeyboard({ combo: 'ctrl+s', callback: (e) => { ... } });
 * @example useKeyboard({ combo: ['ctrl+s', 'meta+s'], callback: ... });
 */
export function useKeypress({
  combo,
  callback,
  preventDefault = false,
  target,
}: UseKeyboardOptions) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // Memoize normalized combos for performance
  const normalizedCombos = useMemo(() => {
    const combos = Array.isArray(combo) ? combo : [combo];
    return combos.map(normalizeCombo);
  }, [combo]);

  // Memoize handler to avoid unnecessary re-attachments
  const handler = useCallback(
    (event: Event) => {
      const keyboardEvent = event as KeyboardEvent;
      for (const normCombo of normalizedCombos) {
        if (eventMatchesCombo(keyboardEvent, normCombo)) {
          if (preventDefault) keyboardEvent.preventDefault();
          callbackRef.current(keyboardEvent);
          break;
        }
      }
    },
    [normalizedCombos, preventDefault],
  );

  useEffect(() => {
    const el = target ?? window;
    el.addEventListener('keydown', handler);
    return () => {
      el.removeEventListener('keydown', handler);
    };
  }, [handler, target]);
}
