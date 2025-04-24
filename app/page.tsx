import { Hero } from '@/components/sections/hero';

import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <section
      className={cn(
        'flex flex-col items-center justify-center grow px-4 lg:px-0',
      )}
    >
      <Hero />
      {/* <HooksDemo /> */}
    </section>
  );
}
