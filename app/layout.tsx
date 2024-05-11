import { Toaster } from 'react-hot-toast';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import Navbar from '@/app/components/navbar/Navbar';
import Footer from '@/app/components/footer/Footer';
import SideMenuModal from './components/sidemenu/SideMenuModal';
import { MenuProvider } from './contexts/MenuContext';

import { CartContextProvider } from './contexts/CartContext';
import Overlay from './components/overlay/Overlay';
import OverlayProvider from './contexts/OverlayContext';
import LocationContextProvider from './contexts/locationContext';

const inter = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Amazon.com. Spend less. Smile more.',
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
        <LocationContextProvider>
          <MenuProvider>
            <CartContextProvider>
              <OverlayProvider>
                <Overlay />
                <SideMenuModal />
                <Navbar />
                <div>{children}</div>
                <Footer />
              </OverlayProvider>
            </CartContextProvider>
          </MenuProvider>
        </LocationContextProvider>
      </body>
    </html>
  );
}
