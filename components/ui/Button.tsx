'use client';

import React from 'react';

type ButtonVariant =
  | 'reverse'
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'link';

type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const baseStyles =
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

const variantStyles: Record<ButtonVariant, string> = {
  reverse:
    'bg-background text-foreground hover:bg-accent hover:text-accent-foreground font-bold',
  default: 'bg-highlight text-background hover:bg-primary',
  destructive:
    'bg-destructive text-destructive-foreground hover:bg-destructive/90',
  outline:
    'border bg-background text-highlight hover:bg-highlight hover:text-background border-highlight',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  ghost: 'text-highlight hover:bg-backgroung hover:text-accent-foreground',
  link: 'text-foreground underline-offset-4 hover:underline hover:bg-white',
};

const sizeStyles: Record<ButtonSize, string> = {
  default: 'h-10 px-4 py-2',
  sm: 'h-9 rounded-md px-3',
  lg: 'h-11 rounded-md px-8',
  icon: 'h-10 w-10',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'default', size = 'default', className = '', ...props }, ref) => {
    const classes = [
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return <button ref={ref} className={classes} {...props} />;
  }
);

Button.displayName = 'Button';
