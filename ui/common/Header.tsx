'use client';
import { ThemeSwitcher, FontSizeSwitcher } from '@/ui/common';

export function Header() {
  return (
    <header>
      <div className="flex items-center justify-end w-full px-6 bg-darkgray dark:bg-navy">
        <div className="mr-4">
          <ThemeSwitcher />
        </div>
        <div className="mr-4">
          <FontSizeSwitcher />
        </div>
      </div>
    </header>
  );
}
