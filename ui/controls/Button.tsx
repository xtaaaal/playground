import { forwardRef } from 'react';
import classNames from 'classnames';
import { Button as FbButton } from 'flowbite-react';
import { ColorScheme } from '@/lib/types/form';

export interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  variant?: 'primary' | 'outline' | 'link';
  color?: string;
  disabled?: boolean;
  onClick?: (e: React.UIEvent) => any;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, variant, disabled, color = ColorScheme.navy, ..._props },
    ref
  ) => {
    _props.type = _props.type || 'button';
    return (
      <FbButton
        {..._props}
        color={variant === 'link' ? 'white' : color}
        onClick={onClick}
        disabled={disabled}
        outline={variant === 'outline'}
      >
        {children}
      </FbButton>
    );

    function onClick(e: React.UIEvent) {
      const element = e.currentTarget;
      //TODO: check form state
      _props.onClick?.(e);
    }
  }
);

Button.displayName = 'Button';
