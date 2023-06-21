import Head from 'next/head';

import { getDictionary } from '@/lib/i18n/getDictionary';
import { Locale } from '@/lib/i18n/config';
import Form from './form';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const t = await getDictionary(lang);

  return (
    <>
      <Head>
        <title>Sample</title>
        <meta name="description" content="Sample" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Form />
    </>
  );
}
