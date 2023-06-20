'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import classNames from 'classnames';
import { Icon } from '@/ui/common';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div
      className={classNames('p-4', {
        light: currentTheme === 'light',
        dark: currentTheme === 'dark',
      })}
    >
      <button
        onClick={() => setTheme(currentTheme === 'light' ? 'dark' : 'light')}
      >
        <Icon icon="themeButton" size="small" />
      </button>
    </div>
  );
}
