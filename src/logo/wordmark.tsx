import React from 'react'
import { Logo, type LogoProps, type LogoSize } from './logo'

export interface WordmarkProps extends Omit<LogoProps, 'alt'> {
  brandName?: string
  gap?: number
  textClassName?: string
}

const textSizeMap: Record<Exclude<LogoSize, number>, string> = {
  xs: '0.75rem', sm: '0.875rem', md: '1rem', lg: '1.25rem', xl: '1.5rem', '2xl': '2rem',
}

export function Wordmark({
  brandName = 'Pars',
  variant = 'color',
  size = 'md',
  gap = 8,
  className = '',
  textClassName = '',
  style = {},
}: WordmarkProps) {
  const fontSize = typeof size === 'number' ? `${size * 0.5}px` : textSizeMap[size]
  return (
    <div className={`pars-wordmark ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: `${gap}px`, ...style }}>
      <Logo variant={variant} size={size} />
      <span className={textClassName} style={{ fontSize, fontWeight: 600, letterSpacing: '-0.02em' }}>{brandName}</span>
    </div>
  )
}

export default Wordmark
