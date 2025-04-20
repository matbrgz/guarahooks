import { Hero } from '@/components/sections/hero';

import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <section className={cn('layout-container grow')}>
      <Hero />
      {/* TODO: Add a section with showcases */}
      {/* TODO: Add a section with hooks examples */}
      {/* TODO: Add a section with testimonials */}
    </section>
  );
}
