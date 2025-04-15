import type { Metadata } from 'next';

import { geistMono, sora } from '@/assets/fonts';

import '@/assets/globals.css';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';

import { cn } from '@/lib/utils';

import { siteConfig } from '@/config/site';

// export const metadata: Metadata = {
//   title: {
//     default: siteConfig.name,
//     template: `%s | ${siteConfig.name}`,
//   },
//   description: siteConfig.description,
//   keywords: siteConfig.keywords,
//   authors: [{ name: 'h3rmel', url: siteConfig.links.author }],
//   openGraph: {
//     title: siteConfig.name,
//     description: siteConfig.description,
//     url: siteConfig.url,
//     siteName: siteConfig.name,
//     type: 'website',
//     images: [
//       {
//         url: `${siteConfig.url}/og.png`,
//       },
//     ],
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'relative w-full min-h-dvh bg-background font-sans antialiased scroll-smooth flex flex-col overflow-x-hidden',
          sora.variable,
          geistMono.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider delayDuration={200}>
            <Header />
            <main className="grow border-x h-full border-dashed max-w-7xl mx-auto w-full px-8">
              {children}
            </main>
            <Footer />
            <Toaster richColors position="bottom-center" duration={3000} />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
