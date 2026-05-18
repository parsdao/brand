/**
 * @parsdao/brand - Pars Network Brand Identity
 */
export { Logo, LogoIcon, Wordmark, Favicon, getFaviconMetadata, getLogoSVG, getLogoDataURL, logoColorSVG, logoMonoSVG, logoWhiteSVG, type LogoProps, type LogoVariant, type LogoSize, type WordmarkProps } from './logo'
export { palette, colors, type Palette } from './colors'
export { brandSystem, brandTailwindTheme, generateTailwindTheme, type BrandSystemConfig } from './system'
export { Logo as default } from './logo'

// Brand runtime config (brand.json) — single source of truth
export { brand } from './brand'
export type { BrandConfig, BrandTheme, RuntimeConfig } from './brand-types'
export { loadBrand, getBrandUrl, getDocsUrl, getGatewayUrl, getWsUrl, getRpcUrl } from './loader'
