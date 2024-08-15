import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import Navbar from '@/components/ui/Navbar';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Next-Auth V5',
    absolute: 'Next-Auth V5',
  },
  description:
    'Learn how to use Auth.js v5 in Next.js with custom roles, caching, and more!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
