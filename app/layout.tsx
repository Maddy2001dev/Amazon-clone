import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/app/components/navbar/Navbar';
import Footer from '@/app/components/footer/Footer';
import SideMenuModal from './components/sidemenu/SideMenuModal';
import { MenuProvider } from './contexts/MenuContext';

import Modal from './components/modals/Modal';

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
        <MenuProvider>
          <Navbar />
          <SideMenuModal />
        </MenuProvider>
        {children}
        <Footer />
      </body>
    </html>
  );
}
