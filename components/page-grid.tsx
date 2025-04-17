import { cn } from '@/lib/utils';

type PageGridProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageGrid({ children, className }: PageGridProps) {
  return (
    <section
      className={cn(
        'relative size-full',
        'grid gap-6 grid-cols-1 lg:grid-cols-2',
        className,
      )}
    >
      {children}
    </section>
  );
}
