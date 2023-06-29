'use client';
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import { ChoiceItem } from '@/lib/types/form';
import { HoverDropdown } from '@/ui/controls';

export function FontSizeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const [fontSize, setFontSize] = useState('m');

  const FONT_SIZES_ITEMS: ChoiceItem[] = [
    { label: 'A', value: 'l' },
    { label: 'A', value: 'm' },
    { label: 'A', value: 's' },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <HoverDropdown
      name="font_size"
      iconLabel={'fontButton'}
      items={FONT_SIZES_ITEMS}
    />
  );
}
