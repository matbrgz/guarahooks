import { BlurredBlob } from '@/components/design/blurred-blob';
import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern';
import { Hero } from '@/components/sections/hero';

import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <section
      className={cn('flex items-center justify-center grow px-4 lg:px-0')}
    >
      <Hero />
      {/* TODO: Add a section with hooks examples */}
      {/* TODO: Add a section with testimonials */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        strokeDasharray={'4 2'}
        className={cn(
          '[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]',
          'inset-x-0',
        )}
      />
      <BlurredBlob
        className="lg:-top-[120%] -top-1/2 left-1/2 lg:-translate-x-1/8 lg:opacity-30 opacity-40 rotate-90 lg:rotate-270"
        colorFrom="#EC003F"
        colorTo="#4F39F6"
      />
    </section>
  );
}
