'use client';

import { useTheme } from 'next-themes';

export function Header() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return <header></header>;
}
