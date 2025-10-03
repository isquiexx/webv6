'use client';
import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import Image from 'next/image';

const iconButtonClasses = cva(
  'inline-flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'bg-accent-background text-text-white hover:bg-accent-background/90 focus:ring-accent-background',
        secondary: 'bg-background-white text-text-primary hover:bg-gray-100 focus:ring-gray-500',
        outline: 'border-2 border-accent-background text-accent-text bg-transparent hover:bg-accent-background/10 focus:ring-accent-background',
      },
      size: {
        small: 'p-2',
        medium: 'p-3',
        large: 'p-4',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
)

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof iconButtonClasses> {
  // Required parameters with defaults
  src?: string;
  fill_background_color?: string;
  border_border_radius?: string;
  iconSize?: string;
  
  // Optional parameters
  padding?: string;
  margin?: string;
  layout_width?: string;
  
  // Standard React props
  children?: ReactNode;
}

const IconButton = ({
  // Required parameters with defaults
  iconSize = "w-6 h-6",
  src = "/images/img_link.svg",
  fill_background_color = "bg-accent-background",
  border_border_radius = "rounded-2xl",
  
  // Optional parameters (no defaults)
  padding,
  margin,
  layout_width,
  
  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  children,
  onClick,
  type = 'button',
  ...props
}: IconButtonProps) => {
  // Safe validation for optional parameters
  const hasValidPadding = padding && typeof padding === 'string' && padding.trim() !== ''
  const hasValidMargin = margin && typeof margin === 'string' && margin.trim() !== ''
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width.trim() !== ''

  const optionalClasses = [
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidWidth ? `w-[${layout_width}]` : '',
  ].filter(Boolean).join(' ')

  // Build Tailwind classes for styling
  const styleClasses = [
    // Only apply these if not using variant system
    !variant ? fill_background_color : '',
    border_border_radius,
  ].filter(Boolean).join(' ')

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      event.preventDefault()
      return
    }
    
    if (typeof onClick === 'function') {
      onClick(event)
    }
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={twMerge(
        iconButtonClasses({ variant, size }),
        styleClasses,
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    >
      {children || (
        <Image
          src={src}
          alt="Icon"
          width={24}
          height={24}
          className={iconSize}
        />
      )}
    </button>
  )
}

export default IconButton;