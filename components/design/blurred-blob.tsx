import { cn } from '@/lib/utils';

export function BlurredBlob({
  className,
  colorFrom,
  colorTo,
  size,
}: {
  className?: string;
  colorFrom: string;
  colorTo: string;
  size?: {
    width: number;
    height: number;
  };
}) {
  const background = `linear-gradient(${colorFrom}, ${colorTo})`;

  const { width = 400, height = 400 } = size ?? {};

  return (
    <div
      className={cn('absolute z-[-1] size-full', className)}
      style={{
        width,
        height,
        filter: 'blur(70px)',
        backgroundImage: background,
        animation: 'rotate 8s linear infinite',
        borderRadius: '30% 70% 70% 30%/30% 30% 70% 70%',
      }}
    />
  );
}
