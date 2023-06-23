'use client';

import { Dropdown as FbDropdown } from 'flowbite-react';
import { forwardRef, useState, useRef } from 'react';
import { ChoiceFieldProps, ChoiceItem, ColorScheme } from '@/lib/types/form';
import { Controller, Control } from 'react-hook-form';

export interface DropdownProps<T = string> extends ChoiceFieldProps {
  label?: string;
  placeholder?: string;
  unselectedText?: string;
  required?: boolean;
  allowUnselect?: boolean;
  control?: Control<any>;
  items: ChoiceItem[];
}

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  ({ placeholder, required, label, name, control, items, ...props }, ref) => {
    const elementOnclick = () => {
      const elem = document.activeElement as HTMLElement;

      if (elem) {
        elem?.blur();
      }
    };

    return (
      <>
        <div className="flex w-full">
          <div className="relative w-full mb-6 group">
            <Controller
              control={control}
              name={name}
              render={({ field }) => {
                const currentLabel = field.value
                  ? items.find((item) => item.value === field.value)?.label ||
                    label
                  : label;
                return (
                  <div {...field} className="w-full">
                    <FbDropdown
                      label={currentLabel}
                      color={ColorScheme.outline}
                    >
                      {items.map((item) => (
                        <FbDropdown.Item
                          key={item.value}
                          onClick={() => {
                            elementOnclick();
                            field.onChange(item.value);
                          }}
                        >
                          <span className="dark:text-black">{item.label}</span>
                        </FbDropdown.Item>
                      ))}
                    </FbDropdown>
                  </div>
                );
              }}
            />
          </div>
        </div>
      </>
    );
  }
);

Dropdown.displayName = 'Dropdown';
