import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fariha Siddiqui | Senior Flutter Developer',
  description: 'Portfolio of Fariha Siddiqui - Senior Flutter Developer specialized in cross-platform mobile app development.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-100 antialiased selection:bg-teal-500 selection:text-slate-950`}>
        {children}
      </body>
    </html>
  );
}