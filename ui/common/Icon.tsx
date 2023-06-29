import { forwardRef } from 'react';
import classNames from 'classnames';

import IconThemeButton from '@/assets/icons/theme-button.svg';
import IconFontButton from '@/assets/icons/font-size.svg';

export type IconNames = keyof typeof components;

export interface IconProps
  extends Pick<
    React.ComponentPropsWithRef<'i'>,
    'onClick' | 'onMouseOver' | 'onMouseOut'
  > {
  icon: IconNames;
  size?: 'normal' | 'small' | 'large';
  className?: string;
  disabled?: boolean;
}

export const components = {
  themeButton: IconThemeButton,
  fontButton: IconFontButton,
};



export const Icon = forwardRef<HTMLElement, IconProps>((props, ref) => {
  const { icon, ..._props } = props;
  const Icon = components[icon];

  return (
    <i
      {..._props}
      ref={ref}
      className={classNames(
        'ui-icon',
        'inline-block w-[1em] h-[1em] align-middle shrink-0 stroke-0',
        props.className,
        {
          'text-[13px]': props.size === 'small',
          'text-[18px]': props.size === 'normal' || !props.size,
          'text-[24px]': props.size === 'large',
          disabled: props.disabled,
        }
      )}
    >
      {Icon && <Icon />}
    </i>
  );
});

Icon.displayName = 'Icon';
