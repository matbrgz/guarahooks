import Link from 'next/link';

import { cn } from '@/lib/utils';

import { Icons } from './icons';
import { Badge } from './ui/badge';

type CategoryCard = {
  slug: string;
  name: string;
  description: string;
  icon: keyof typeof Icons;
  hooksCount?: number;
  isNew?: boolean;
};

export function CategoryCard({
  slug,
  name,
  description,
  icon,
  hooksCount,
  isNew = false,
}: CategoryCard) {
  const href = `/${slug}`;
  const isComingSoon: boolean = hooksCount === 0;

  const renderIcon = () => {
    const IconComponent = Icons[icon];
    return <IconComponent className="size-8" />;
  };

  return (
    <Link href={href}>
      <article
        className={cn(
          'relative flex flex-col justify-center p-6 rounded-md group transition-all duration-300 hover:-translate-y-1 h-48',
          // Light theme
          'bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
          // Dark theme
          'transform-gpu dark:bg-background dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_60px_-20px_#ffffff1f_inset]',
        )}
      >
        <hgroup className="space-y-2">
          {renderIcon()}
          <h2 className="text-2xl font-bold group-hover:underline">{name}</h2>
          <p className="text-muted-foreground text-sm">{description}</p>
          <Badge variant="secondary" className="font-mono text-xs">
            {isComingSoon ? 'No hooks yet' : `${hooksCount} hook(s)`}
          </Badge>
        </hgroup>
        <div className="absolute top-1 right-1 flex items-center justify-center gap-1">
          {isComingSoon && (
            <Badge variant="outline" className="font-mono tracking-wide">
              Coming Soon
            </Badge>
          )}
          {isNew && (
            <Badge variant="outline" className="font-mono tracking-wide">
              New
            </Badge>
          )}
        </div>
        <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
      </article>
    </Link>
  );
}
