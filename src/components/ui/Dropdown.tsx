'use client';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { type SelectHTMLAttributes, type ReactNode, type CSSProperties, useState } from 'react';

const dropdownClasses = cva(
  'w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed appearance-none bg-no-repeat bg-right bg-[length:16px_16px] pr-10',
  {
    variants: {
      variant: {
        default: 'border border-border-white-secondary focus:ring-accent-background focus:border-accent-background',
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
)

interface DropdownProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'>, VariantProps<typeof dropdownClasses> {
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
  layout_gap?: string;
  layout_width?: string;
  padding?: string;
  position?: string;
  
  // Dropdown specific props
  options?: Array<{ value: string; label: string }>;
  children?: ReactNode;
}

const Dropdown = ({
  // Required parameters with defaults
  placeholder = "Выбрать дату",
  text_font_size = "text-sm",
  text_font_family = "Gilroy",
  text_font_weight = "font-medium",
  text_line_height = "leading-sm",
  text_text_align = "left",
  text_color = "text-text-white-muted",
  border_border = "1px solid #ffffff66",
  border_border_radius = "rounded-lg",
  
  // Optional parameters (no defaults)
  layout_gap,
  layout_width,
  padding,
  position,
  
  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  options = [],
  children,
  onChange,
  value,
  ...props
}: DropdownProps) => {
  const [selectedValue, setSelectedValue] = useState(value || '')

  // Safe validation for optional parameters
  const hasValidGap = layout_gap && typeof layout_gap === 'string' && layout_gap.trim() !== ''
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width.trim() !== ''
  const hasValidPadding = padding && typeof padding === 'string' && padding.trim() !== ''
  const hasValidPosition = position && typeof position === 'string' && position.trim() !== ''

  const optionalClasses = [
    hasValidGap ? `gap-[${layout_gap}]` : '',
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidPosition ? position : '',
  ].filter(Boolean).join(' ')

  // Build custom styles for non-Tailwind properties
  const customStyles: CSSProperties = {
    // Only use inline styles for truly custom values
    ...(text_font_family && !text_font_family.startsWith('font-') && { fontFamily: text_font_family }),
    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
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

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value)
    if (typeof onChange === 'function') {
      onChange(event)
    }
  }

  // Default options if none provided
  const defaultOptions = [
    { value: '', label: placeholder },
    { value: 'today', label: 'Сегодня' },
    { value: 'tomorrow', label: 'Завтра' },
    { value: 'week', label: 'На этой неделе' },
    { value: 'month', label: 'В этом месяце' },
  ]

  const selectOptions = options.length > 0 ? options : defaultOptions

  return (
    <select
      value={selectedValue}
      onChange={handleChange}
      disabled={disabled}
      style={customStyles}
      className={twMerge(
        dropdownClasses({ variant, size }),
        styleClasses,
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    >
      {children || selectOptions.map((option) => (
        <option 
          key={option.value} 
          value={option.value}
          disabled={option.value === ''}
          className="bg-background-primary text-text-white"
        >
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default Dropdown