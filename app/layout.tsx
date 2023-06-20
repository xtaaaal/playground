import '@/styles/globals.css';
import { Noto_Sans_TC } from 'next/font/google';
import { Header, Footer } from '@/ui/common';
import { Providers } from '@/ui/layout';

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
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
