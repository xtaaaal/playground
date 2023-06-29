'use client';

import { forwardRef, useState, useRef } from 'react';
import { ChoiceFieldProps, ChoiceItem, ColorScheme } from '@/lib/types/form';
import { Icon, IconNames } from '@/ui/common';

export interface HoverDropdownProps<T = string> extends ChoiceFieldProps {
  label?: string;
  iconLabel?: IconNames;
  items: ChoiceItem[];
}

export const HoverDropdown = forwardRef<HTMLDivElement, HoverDropdownProps>(
  ({ label, iconLabel, name, items, ...props }, ref) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <div className="flex justify-center">
          <div onMouseLeave={() => setOpen(false)} className="relative">
            <button
              onMouseOver={() => setOpen(true)}
              className="flex items-center px-2"
            >
              {iconLabel && <Icon icon={iconLabel} size="large" />}
              <span className="px-2">{label}</span>
            </button>
            <ul
              className={`absolute z-50 right-0 w-[80px] bg-black text-white px-4 ${
                open ? 'block' : 'hidden'
              }`}
            >
              {items.map((item) => (
                <li
                  key={item.value}
                  className="flex w-full justify-center items-center px-3 py-2 py-0 text-center hover:text-lightblue"
                >
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
);

HoverDropdown.displayName = 'HoverDropdown';
