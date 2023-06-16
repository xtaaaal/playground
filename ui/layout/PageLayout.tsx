import { Header, Footer } from '@/ui/common';
import { FCC } from '@/lib/types/react';
import { Inter, Noto_Sans_TC } from 'next/font/google';

const noto = Noto_Sans_TC({ subsets: ['latin'], weight: ['400'] });

const PageLayout: FCC = ({ children }) => {
  return (
    <div className={noto.className}>
      <main>{children}</main>
    </div>
  );
};

export default PageLayout;
