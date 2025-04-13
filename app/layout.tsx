import type { Metadata } from 'next';

import { geistMono, sora } from '@/assets/fonts';

import '@/assets/globals.css';

import { ThemeProvider } from '@/components/theme/theme-provider';

import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: {
    default: 'Easy Hooks',
    template: '%s | Easy Hooks',
  },
  description:
    'Reusable and customizable hooks that you can copy and paste into your projects. Free and Open-Source.',
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
          'relative w-full min-h-dvh bg-background font-sans antialiased scroll-smooth',
          geistMono.variable,
          sora.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
