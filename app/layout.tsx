import type { Metadata, Viewport } from 'next';

import { geistMono, sora } from '@/assets/fonts';

import '@/assets/globals.css';

import { BackgroundBeamsWithRemove } from '@/components/accertinityui/background-beams-with-remove';
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
  authors: [{ name: 'h3rmel', url: siteConfig.links.author }],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: 'website',
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
          sora.variable,
          geistMono.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider delayDuration={200}>
            <Header />
            <main className="z-10 bg-background/50 flex flex-col backdrop-blur-xs grow border-x size-full border-dashed max-w-7xl mx-auto px-8">
              {children}
            </main>
            <Footer />
            <Toaster richColors position="bottom-center" duration={3000} />
            <BackgroundBeamsWithRemove />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
