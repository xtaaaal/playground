import '@/styles/globals.css';
import { Noto_Sans_TC } from 'next/font/google';
import { Header, Footer } from '@/ui/common';
import { Providers } from '@/ui/layout';
import { i18n } from '@/lib/i18n/config';
import classNames from 'classnames';

const notoSansTc = Noto_Sans_TC({ subsets: ['latin'], weight: ['400'] });

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata = {
  title: 'Playground',
  description: 'starter playground',
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body
        className={classNames(
          notoSansTc.className,
          'bg-lightgray text-black dark:bg-black dark:text-lightgray'
        )}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
