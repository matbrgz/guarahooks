import type { NextConfig } from 'next';

import { withContentCollections } from '@content-collections/next';

const nextConfig: NextConfig = {
  reactStrictMode: false,
  /* config options here */
  async redirects() {
    return [
      {
        source: '/hooks',
        destination: '/docs/hooks/use-window-size',
        permanent: true,
      },
      {
        source: '/hooks/:path*',
        destination: '/docs/hooks/:path*',
        permanent: true,
      },
      {
        source: '/docs/hooks',
        destination: '/docs/hooks/marquee',
        permanent: true,
      },
      {
        source: '/r/:path([^.]*)',
        destination: '/r/:path.json',
        permanent: true,
      },
    ];
  },
};

export default withContentCollections(nextConfig);
