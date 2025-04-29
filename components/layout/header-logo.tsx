import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { siteConfig } from '@/config/site';

export function HeaderLogo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <Image
        src="/logo.svg"
        alt={`${siteConfig.name}'s logo`}
        width={32}
        height={32}
      />
      <h1 className={cn('text-base tracking-wide')}>{siteConfig.name}</h1>
    </Link>
  );
}
