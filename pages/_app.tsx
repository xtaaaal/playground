import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import PageLayout from '@/ui/layout/PageLayout';
import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    //NOTE: Disable theme for now
    <ThemeProvider attribute="class">
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </ThemeProvider>
  );
};

export default MyApp;
