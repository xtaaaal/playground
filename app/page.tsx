'use client';

import Head from 'next/head';
import { TextField, Button } from '@/ui/controls';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormInputs } from '@/lib/types/form';

export default function Home() {
  const defaultValues = { mobile: '', name: '' };
  const { handleSubmit, reset, setValue, control } = useForm({ defaultValues });
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>Sample</title>
        <meta name="description" content="Sample" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="flex flex-col p-4 m-6 bg-white rounded-lg border ">
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
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    </>
  );
}
