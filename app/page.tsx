'use client';

import Head from 'next/head';
import { TextField, Button, Dropdown } from '@/ui/controls';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ChoiceItem } from '@/lib/types/form';
import { FormInputs } from '@/lib/types/form';
import { customTheme } from '@/lib/util/cssUtil';
import { Flowbite } from 'flowbite-react';

export default function Home() {
  const defaultValues = { mobile: '', name: '', area_code: '852' };
  const { handleSubmit, reset, setValue, control } = useForm({ defaultValues });
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
  };

  const MOBILE_AREA_CODES: ChoiceItem[] = [
    { label: '+852', value: '852' },
    { label: '+86', value: '86' },
  ];

  return (
    <>
      <Head>
        <title>Sample</title>
        <meta name="description" content="Sample" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flowbite theme={{ theme: customTheme }}>
        <div>
          <div className="flex flex-col p-4 m-6 bg-white rounded-lg border border-white">
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                name="mobile"
                label="Text input mobile"
                type="tel"
                control={control}
              />
              <TextField
                name="name"
                label="Text area"
                multiline
                control={control}
              />
              <Dropdown
                name="area_code"
                label="Area code"
                required={false}
                items={MOBILE_AREA_CODES}
                control={control}
              />
              <Button type="submit">Submit</Button>
            </form>
          </div>
        </div>
      </Flowbite>
    </>
  );
}
