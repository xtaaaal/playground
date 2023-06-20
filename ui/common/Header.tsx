'use client';
import { ThemeSwitcher } from '@/ui/common';

export function Header() {
  return (
    <header>
      <div className="flex justify-between w-full px-4 bg-darkgray dark:bg-navy">
        <ThemeSwitcher />
      </div>
    </header>
  );
}
