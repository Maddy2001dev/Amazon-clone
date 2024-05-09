import { Toaster } from 'react-hot-toast';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import Navbar from '@/app/components/navbar/Navbar';
import Footer from '@/app/components/footer/Footer';
import SideMenuModal from './components/sidemenu/SideMenuModal';
import { MenuProvider } from './contexts/MenuContext';

import { CartContextProvider } from './contexts/CartContext';

const inter = Nunito({ subsets: ['latin'] });

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
        <Toaster />
        <CartContextProvider>
          <MenuProvider>
            <Navbar />
            <SideMenuModal />
          </MenuProvider>
          <div>{children}</div>
          <Footer />
        </CartContextProvider>
      </body>
    </html>
  );
}
