import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/app/components/navbar/Navbar';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Amazon',
  description:
    'bigest Browse & Discover Thousands of products. Read Customer Reviews and Find Best Sellers. We Have Different Products From Hundreds Of Renown Brands In Stock For You.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
