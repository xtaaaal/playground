import { forwardRef, KeyboardEvent, FocusEvent, useRef } from 'react';
import { TextFieldProps as BaseTextFieldProps } from '@/lib/types/form';
import { Controller, Control } from 'react-hook-form';

export interface TextFieldProps extends BaseTextFieldProps {
  label?: string;
  className?: string;
  placeholder?: string;
  maxLength?: number;
  pattern?: string;
  multiline?: boolean;
  helpText?: string;
  control?: Control<any>;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
}

export const TextField = forwardRef<HTMLDivElement, TextFieldProps>(
  (
    {
      placeholder,
      required,
      multiline = false,
      label,
      name,
      helpText,
      control,
      ...props
    },
    ref
  ) => {
    const inputType = props.type || 'text';
    return (
      <>
        <div className="flex w-full">
          <div className="relative w-full mb-6 group">
            {!multiline ? (
              <Controller
                control={control}
                name={name}
                render={({ field }) => (
                  <input
                    required={required}
                    type={inputType}
                    id={name}
                    className="block px-2.5 pb-2.5 pt-4 w-full text-black bg-transparent rounded-lg border border-navy appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink focus:outline-none focus:ring-0 focus:border-pink peer"
                    placeholder=" "
                    {...field}
                  />
                )}
              />
            ) : (
              <Controller
                control={control}
                name={name}
                render={({ field }) => (
                  <textarea
                    required={required}
                    id={name}
                    className="block px-2.5 pb-2.5 pt-4 w-full text-black bg-transparent rounded-lg border border-navy appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink focus:outline-none focus:ring-0 focus:border-pink peer"
                    placeholder=" "
                    {...field}
                  />
                )}
              />
            )}

            <label
              htmlFor={name}
              className="absolute text-black dark:text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-disabled-text peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 left-1"
            >
              {label}
            </label>
          </div>
        </div>
      </>
    );
  }
);

TextField.displayName = 'TextField';
