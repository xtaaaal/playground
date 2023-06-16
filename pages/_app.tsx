import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import PageLayout from '@/ui/layout/PageLayout';
import '@/styles/globals.css';
// import { ThemeProvider } from 'next-themes';
import { customTheme } from '@/lib/util/cssUtil';

import { Flowbite } from 'flowbite-react';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    //NOTE: Disable theme for now
    // <ThemeProvider attribute="class">

    <PageLayout>
      <Flowbite theme={{ theme: customTheme }}>
        <Component {...pageProps} />
      </Flowbite>
    </PageLayout>

    // </ThemeProvider>
  );
};

export default MyApp;
