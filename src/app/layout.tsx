import type { Metadata } from 'next';
import './globals.css';
import { Grotesk } from '@/lib/font';
import { Toaster } from '@/components/atoms/Toaster';
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
  metadataBase: new URL('https://mrayhanr.my.id'),
  title: {
    default: 'M Rayhan Rohadi',
    template: '%s - M Rayhan Rohadi',
  },
  description:
    'Front End Developer working on solo projects, currently based in Jakarta, Indonesia.',
  keywords: ['mrayhanr', 'nextjs', 'muhammad rayhan rohadi', 'm rayhan rohadi'],
  openGraph: {
    siteName: 'mrayhanr.my.id',
    title: 'M Rayhan Rohadi',
    description:
      'Front End Developer working on solo projects, currently based in Jakarta, Indonesia.',
    locale: 'en-ID',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${Grotesk.className} antialiased`}>
        <ThemeProvider
          attribute='class'
          storageKey='nightwind-mode'
          defaultTheme='system'
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
