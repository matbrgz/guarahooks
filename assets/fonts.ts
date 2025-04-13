import { Geist_Mono, Sora } from 'next/font/google';

const sora = Sora({
  variable: '--font-sora',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export { sora, geistMono };
