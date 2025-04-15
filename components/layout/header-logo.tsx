import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '../ui/badge';

export function HeaderLogo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <Image src="/logo.svg" alt="Easy Hooks's logo" width={32} height={32} />
      <h1 className="text-base tracking-wide group-hover:translate-x-0.5 transition-all duration-200">
        Easy Hooks
        <Badge variant="outline" className="ml-2 text-[10px]">
          Beta
        </Badge>
      </h1>
    </Link>
  );
}
