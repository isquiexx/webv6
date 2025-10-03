'use client';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import React, { type ButtonHTMLAttributes, type ReactNode, type CSSProperties } from 'react';

const buttonClasses = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary:
          'bg-accent-background text-text-white hover:bg-accent-background/90 focus:ring-accent-background',
        secondary: 'bg-background-white text-text-primary hover:bg-gray-100 focus:ring-gray-500',
        outline:
          'border-2 border-accent-background text-accent-text bg-transparent hover:bg-accent-background/10 focus:ring-accent-background',
        danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
      },
      size: {
        small: 'text-xs px-3 py-1.5',
        medium: 'text-sm px-4 py-2',
        large: 'text-base px-6 py-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonClasses> {
  // Required parameters with defaults
  text?: string;
  text_font_size?: string;
  text_font_family?: string;
  text_font_weight?: string;
  text_line_height?: string;
  text_text_align?: string;
  text_color?: string;
  fill_background_color?: string;
  border_border_radius?: string;

  // Optional parameters
  border_border?: string;
  layout_width?: string;
  padding?: string;
  margin?: string;
  position?: string;

  // Standard React props
  children?: ReactNode;
}

const Button = ({
  // Required parameters with defaults
  text = 'Купить билет',
  text_font_size = 'text-xs',
  text_font_family = 'Benzin-Bold',
  text_font_weight = 'font-normal',
  text_line_height = 'leading-sm',
  text_text_align = 'left',
  text_color = 'text-text-black',
  fill_background_color = 'bg-accent-background',
  border_border_radius = 'rounded-md',

  // Optional parameters (no defaults)
  border_border,
  layout_width,
  padding,
  margin,
  position,

  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  children,
  onClick,
  type = 'button',
  ...props
}: ButtonProps) => {
  // Safe validation for optional parameters
  const hasValidBorder =
    border_border && typeof border_border === 'string' && border_border.trim() !== '';
  const hasValidWidth =
    layout_width && typeof layout_width === 'string' && layout_width.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding.trim() !== '';
  const hasValidMargin = margin && typeof margin === 'string' && margin.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position.trim() !== '';

  const optionalClasses = [
    hasValidBorder ? `border-[${border_border}]` : '',
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
  ]
    .filter(Boolean)
    .join(' ');

  // Build custom styles for non-Tailwind properties
  const customStyles: CSSProperties = {
    // Only use inline styles for truly custom values
    ...(text_font_family &&
      !text_font_family.startsWith('font-Benzin-Bold') && { fontFamily: text_font_family }),
  };

  // Build Tailwind classes for styling
  const styleClasses = [
    text_font_size,
    text_font_family.startsWith('font-Benzin-Bold') ? text_font_family : 'Benzin-Bold',
    text_font_weight,
    text_line_height,
    text_text_align === 'center'
      ? 'text-center'
      : text_text_align === 'right'
        ? 'text-right'
        : 'text-left',
    text_color,
    // Only apply these if not using variant system
    !variant ? fill_background_color : '',
    border_border_radius,
  ]
    .filter(Boolean)
    .join(' ');

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      event.preventDefault();
      return;
    }

    if (typeof onClick === 'function') {
      onClick(event);
    }
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      style={customStyles}
      className={twMerge(
        buttonClasses({ variant, size }),
        styleClasses,
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    >
      {children || text}
    </button>
  );
};

export default Button;
