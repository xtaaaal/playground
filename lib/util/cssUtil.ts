import type { CustomFlowbiteTheme } from 'flowbite-react';

export function typedNull<T>(): T {
    return null as unknown as T;
}

export function isObjectEmpty(objectName: object) {
    return Object.keys(objectName).length === 0;
}

export const customTheme: CustomFlowbiteTheme = {
    button: {
      color: {
        navy: 'bg-navy hover:bg-navy/[0.9] text-lightblue',
        white: 'bg-white hover:bg-white/[0.9] border-navy text-navy',
      },
    },
  };
  

