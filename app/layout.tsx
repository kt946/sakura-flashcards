import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sakura Flashcards',
  description: 'A flashcard app for learning Japanese using the Genki textbook series.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="flex flex-col relative min-h-dvh">
          <Header />
          <main className="flex-1 py-8">{children}</main>
          {/* Background Pattern */}
          <div className="fixed inset-0 w-full h-full -z-10 bg-pattern" />

          {/* <ScrollToTopButton />  */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
