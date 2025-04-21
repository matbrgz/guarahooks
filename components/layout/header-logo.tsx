import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';

import { cn } from '@/lib/utils';

import { siteConfig } from '@/config/site';

export function HeaderLogo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/logo.svg"
        alt={`${siteConfig.name}'s logo`}
        width={32}
        height={32}
      />
      <h1 className={cn('text-base tracking-wide')}>{siteConfig.name}</h1>
      <Badge variant="outline" className="-ml-1 mb-2 text-[10px]">
        Beta
      </Badge>
    </Link>
  );
}
