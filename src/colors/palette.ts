/**
 * Pars Color Palette
 *
 * Persian blue (#00abff) accent with gold, white, and black
 */
export const palette = {
  primary: {
    DEFAULT: '#00abff',
    50: '#e6f7ff',
    100: '#b3e8ff',
    200: '#80d9ff',
    300: '#4dcaff',
    400: '#1abbff',
    500: '#00abff',
    600: '#0089cc',
    700: '#006799',
    800: '#004566',
    900: '#002333',
    950: '#00111a',
  },
  secondary: {
    DEFAULT: '#0089cc',
    light: '#4dcaff',
    dark: '#006799',
  },
  accent: {
    DEFAULT: '#F59E0B',
    light: '#FBBF24',
    dark: '#D97706',
  },
  success: { DEFAULT: '#10B981', light: '#34D399', dark: '#059669' },
  warning: { DEFAULT: '#F59E0B', light: '#FCD34D', dark: '#D97706' },
  destructive: { DEFAULT: '#EF4444', light: '#F87171', dark: '#DC2626' },
  neutral: {
    0: '#FFFFFF', 50: '#FAFAFA', 100: '#F5F5F5', 200: '#E5E5E5',
    300: '#D4D4D4', 400: '#A3A3A3', 500: '#737373', 600: '#525252',
    700: '#404040', 800: '#262626', 900: '#171717', 950: '#0A0A0A', 1000: '#000000',
  },
} as const

export type Palette = typeof palette
export default palette
