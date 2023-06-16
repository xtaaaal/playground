import '@/styles/globals.css';
import { Noto_Sans_TC } from 'next/font/google';
import { Header, Footer } from '@/ui/common';

const notoSansTc = Noto_Sans_TC({ subsets: ['latin'], weight: ['400'] });

export const metadata = {
  title: 'Playground',
  description: 'starter playground',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={notoSansTc.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
