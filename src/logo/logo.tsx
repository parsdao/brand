import React from 'react'
import { getLogoSVG } from './svg'

export type LogoVariant = 'color' | 'mono' | 'white'
export type LogoSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | number

export interface LogoProps {
  variant?: LogoVariant
  size?: LogoSize
  className?: string
  style?: React.CSSProperties
}

const sizeMap: Record<Exclude<LogoSize, number>, number> = {
  xs: 16, sm: 24, md: 32, lg: 48, xl: 64, '2xl': 96,
}

export function Logo({ variant = 'color', size = 'md', className = '', style = {} }: LogoProps) {
  const pixelSize = typeof size === 'number' ? size : sizeMap[size]
  return (
    <div
      role="img"
      aria-label="Pars Logo"
      className={`pars-logo ${className}`}
      style={{ width: pixelSize, height: pixelSize, display: 'inline-flex', ...style }}
      dangerouslySetInnerHTML={{ __html: getLogoSVG(variant) }}
    />
  )
}

export function LogoIcon({ size = 'md', color = 'currentColor', className = '' }: Omit<LogoProps, 'variant'> & { color?: string }) {
  const pixelSize = typeof size === 'number' ? size : sizeMap[size]
  return (
    <div
      className={`pars-logo-icon ${className}`}
      style={{ width: pixelSize, height: pixelSize, color, display: 'inline-flex' }}
      dangerouslySetInnerHTML={{ __html: getLogoSVG('mono') }}
    />
  )
}

export default Logo
