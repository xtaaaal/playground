'use client';

import { Flowbite } from 'flowbite-react';
import { customTheme } from '@/lib/util/cssUtil';
import { TextField, Button, Dropdown } from '@/ui/controls';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ChoiceItem, FormInputs } from '@/lib/types/form';

export default function Form() {
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
  );
}
