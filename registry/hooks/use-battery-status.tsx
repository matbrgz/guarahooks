'use client';

import { useEffect, useState } from 'react';

export interface BatteryStatus {
  supported: boolean;
  level: number;
  charging: boolean;
  chargingTime: number;
  dischargingTime: number;
}

export function useBatteryStatus(): BatteryStatus {
  const supported =
    typeof navigator !== 'undefined' &&
    typeof (navigator as any).getBattery === 'function';

  const [status, setStatus] = useState<BatteryStatus>({
    supported,
    level: 1,
    charging: false,
    chargingTime: 0,
    dischargingTime: 0,
  });

  useEffect(() => {
    if (!supported) {
      return;
    }

    let battery: any;
    let isMounted = true;

    const updateStatus = () => {
      if (!isMounted) return;
      // Clamp times: use chargingTime only when charging, dischargingTime only when discharging
      const chargingTimeValue = battery.charging ? battery.chargingTime : 0;
      const dischargingTimeValue = battery.charging
        ? 0
        : battery.dischargingTime;
      setStatus({
        supported: true,
        level: battery.level,
        charging: battery.charging,
        chargingTime: chargingTimeValue === Infinity ? 0 : chargingTimeValue,
        dischargingTime:
          dischargingTimeValue === Infinity ? 0 : dischargingTimeValue,
      });
    };

    (navigator as any)
      .getBattery()
      .then((bat: any) => {
        battery = bat;
        updateStatus();
        battery.addEventListener('levelchange', updateStatus);
        battery.addEventListener('chargingchange', updateStatus);
        battery.addEventListener('chargingtimechange', updateStatus);
        battery.addEventListener('dischargingtimechange', updateStatus);
      })
      .catch(() => {
        // ignore if getBattery fails
      });

    return () => {
      isMounted = false;
      if (battery) {
        battery.removeEventListener('levelchange', updateStatus);
        battery.removeEventListener('chargingchange', updateStatus);
        battery.removeEventListener('chargingtimechange', updateStatus);
        battery.removeEventListener('dischargingtimechange', updateStatus);
      }
    };
  }, [supported]);

  return status;
}
