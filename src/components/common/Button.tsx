"use client"

import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  isLoading?: boolean
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2'
  const variantClasses =
    variant === 'primary'
      ? 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500'
      : variant === 'tertiary'
      ? 'bg-white text-neutral-700 border border-neutral-200 hover:bg-neutral-50 focus:ring-neutral-500'
      : 'bg-white text-primary-600 border border-primary-200 hover:bg-primary-50 focus:ring-primary-500'
  const sizeClasses = size === 'lg' ? 'px-6 py-3 text-lg' : size === 'sm' ? 'px-3 py-1.5 text-sm' : 'px-4 py-2'

  const { isLoading, disabled, children, ...rest } = props

  return (
    <button
      className={`${base} ${variantClasses} ${sizeClasses} ${className}`.trim()}
      disabled={isLoading || disabled}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
