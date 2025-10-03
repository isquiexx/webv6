'use client';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { type InputHTMLAttributes, forwardRef, type CSSProperties } from 'react';

const editTextClasses = cva(
  'w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default: 'border border-border-primary focus:ring-accent-background focus:border-accent-background',
        filled: 'bg-gray-100 border-transparent focus:bg-white focus:ring-accent-background',
        outline: 'border-2 border-accent-background focus:ring-accent-background',
      },
      size: {
        small: 'text-xs px-3 py-2',
        medium: 'text-sm px-4 py-3',
        large: 'text-base px-5 py-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
);

interface EditTextProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>, VariantProps<typeof editTextClasses> {
  // Required parameters with defaults
  placeholder?: string;
  text_font_size?: string;
  text_font_family?: string;
  text_font_weight?: string;
  text_line_height?: string;
  text_text_align?: string;
  text_color?: string;
  border_border?: string;
  border_border_radius?: string;
  
  // Optional parameters
  layout_width?: string;
  padding?: string;
  position?: string;
}

const EditText = forwardRef<HTMLInputElement, EditTextProps>(({
  // Required parameters with defaults
  placeholder = "Электронная почта",
  text_font_size = "text-sm",
  text_font_family = "Gilroy",
  text_font_weight = "font-normal",
  text_line_height = "leading-sm",
  text_text_align = "left",
  text_color = "text-text-muted",
  border_border = "1px solid #2724244c",
  border_border_radius = "rounded-md",
  
  // Optional parameters (no defaults)
  layout_width,
  padding,
  position,
  
  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  type = 'text',
  ...props
}, ref) => {
  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width.trim() !== ''
  const hasValidPadding = padding && typeof padding === 'string' && padding.trim() !== ''
  const hasValidPosition = position && typeof position === 'string' && position.trim() !== ''

  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidPosition ? position : '',
  ].filter(Boolean).join(' ')

  // Build custom styles for non-Tailwind properties
  const customStyles: CSSProperties = {
    // Only use inline styles for truly custom values
    ...(text_font_family && !text_font_family.startsWith('font-') && { fontFamily: text_font_family }),
  }

  // Parse border style
  const borderClasses = border_border ? `border-[${border_border.replace('1 solid ', '1px_solid_')}]` : ''

  // Build Tailwind classes for styling
  const styleClasses = [
    text_font_size,
    text_font_family.startsWith('font-') ? text_font_family : '',
    text_font_weight,
    text_line_height,
    text_text_align === 'center' ? 'text-center' : text_text_align === 'right' ? 'text-right' : 'text-left',
    text_color,
    borderClasses,
    border_border_radius,
  ].filter(Boolean).join(' ')

  return (
    <input
      ref={ref}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      style={customStyles}
      className={twMerge(
        editTextClasses({ variant, size }),
        styleClasses,
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    />
  )
});

EditText.displayName = 'EditText'

export default EditText