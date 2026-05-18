/**
 * Pars Design System Configuration
 */
export interface BrandSystemConfig {
  typography: {
    fonts: { display: string[]; heading: string[]; body: string[]; mono: string[] }
    sizes?: { base?: { size: number; lineHeight: number } }
  }
  spacing: { multiplier: number }
  grid?: { gutter: number }
  radius?: { default: number }
}

export const brandSystem: BrandSystemConfig = {
  typography: {
    fonts: {
      display: ['Inter', 'system-ui', 'sans-serif'],
      heading: ['Inter', 'system-ui', 'sans-serif'],
      body: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    sizes: { base: { size: 16, lineHeight: 24 } },
  },
  spacing: { multiplier: 1.0 },
  grid: { gutter: 16 },
  radius: { default: 8 },
}

export function generateTailwindTheme(config: BrandSystemConfig = brandSystem) {
  return {
    fontFamily: {
      display: config.typography.fonts.display,
      heading: config.typography.fonts.heading,
      sans: config.typography.fonts.body,
      mono: config.typography.fonts.mono,
    },
  }
}

export const brandTailwindTheme = generateTailwindTheme(brandSystem)
export default brandSystem
