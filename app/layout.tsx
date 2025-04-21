import type { Metadata, Viewport } from 'next';

import { geistMono, inter } from '@/assets/fonts';

import '@/assets/globals.css';

import { SpeedInsights } from '@vercel/speed-insights/next';

import { BlurredBlob } from '@/components/design/blurred-blob';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';

import { cn } from '@/lib/utils';

import { siteConfig } from '@/config/site';

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: 'h3rmel', url: siteConfig.authorUrl }],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: 'website',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  metadataBase: new URL(siteConfig.url),
  creator: 'h3rmel',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'relative w-full min-h-dvh font-sans antialiased scroll-smooth flex flex-col overflow-x-hidden',
          inter.variable,
          geistMono.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <TooltipProvider delayDuration={200}>
            <Header />
            <BlurredBlob
              className="-top-[30%] left-1/2 -translate-x-1/2 opacity-30"
              colorFrom="#4F39F6"
              colorTo="#EC003F"
              size={{ width: 1200, height: 400 }}
            />
            <main className={cn('z-10 grow flex flex-col', 'size-full')}>
              {children}
            </main>
            <Footer />
            <Toaster richColors position="bottom-center" duration={3000} />
          </TooltipProvider>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
