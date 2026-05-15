import React from 'react'

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode
}

export function Container({ children, className = '', ...props }: ContainerProps) {
  return (
    <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`.trim()} {...props}>
      {children}
    </div>
  )
}

export default Container
