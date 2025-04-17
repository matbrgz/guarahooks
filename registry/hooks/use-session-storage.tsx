'use client';

import { useCallback, useEffect, useState } from 'react';

function useSessionStorage<T>(
  key: string,
  initialValue?: T,
): [T, (value: T) => void] {
  // Função para ler o valor do sessionStorage
  const readValue = useCallback((): T => {
    if (typeof window === 'undefined') {
      return initialValue as T;
    }
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : (initialValue as T);
    } catch (error) {
      console.warn(`Erro ao ler sessionStorage para a chave "${key}":`, error);
      return initialValue as T;
    }
  }, [key, initialValue]);

  const [storedValue, setStoredValue] = useState<T>(readValue);

  // Atualiza o sessionStorage e o estado
  const setValue = useCallback(
    (value: T) => {
      try {
        setStoredValue(value);
        if (typeof window !== 'undefined') {
          window.sessionStorage.setItem(key, JSON.stringify(value));
        }
      } catch (error) {
        console.warn(
          `Erro ao definir sessionStorage para a chave "${key}":`,
          error,
        );
      }
    },
    [key],
  );

  // Sincroniza entre abas
  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.storageArea === window.sessionStorage && event.key === key) {
        setStoredValue(
          event.newValue
            ? (JSON.parse(event.newValue) as T)
            : (initialValue as T),
        );
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, [key, initialValue]);

  // Atualiza o valor se a chave mudar
  useEffect(() => {
    setStoredValue(readValue());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return [storedValue, setValue];
}

export default useSessionStorage;
