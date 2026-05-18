/**
 * Pars Logo SVG Data
 *
 * Persian 8-Pointed Star (Khatam/Shamseh)
 * The traditional Persian geometric motif - recursive fractal star
 * Used in mosques, palaces, and tilework across Persia for millennia.
 *
 * Colors:
 * - Gold (#f5d06f / #caa24a): Persian royalty, sun, prosperity
 * - Blue (#003355 / #00abff / #66d0ff): Persian blue accent
 * - White/Cream (#eaf7ff): Light, purity
 */

export const logoColorSVG = `<svg viewBox="-120 -120 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="pars-gold" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f5d06f"/>
      <stop offset="50%" stop-color="#caa24a"/>
      <stop offset="100%" stop-color="#f3dc8f"/>
    </linearGradient>
    <linearGradient id="pars-blue" x1="0" y1="1" x2="1" y2="0">
      <stop offset="0%" stop-color="#003355"/>
      <stop offset="50%" stop-color="#00abff"/>
      <stop offset="100%" stop-color="#66d0ff"/>
    </linearGradient>
    <filter id="pars-glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="2" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <!-- Outer 8-pointed star -->
  <g filter="url(#pars-glow)">
    <path
      d="M0,-100 L30,-60 L100,-40 L60,0 L100,40 L30,60 L0,100 L-30,60 L-100,40 L-60,0 L-100,-40 L-30,-60 Z"
      fill="none"
      stroke="url(#pars-gold)"
      stroke-width="4"
      stroke-linejoin="round"
    />
  </g>

  <!-- Inner star with blue fill -->
  <path
    d="M0,-70 L22,-42 L70,-28 L42,0 L70,28 L22,42 L0,70 L-22,42 L-70,28 L-42,0 L-70,-28 L-22,-42 Z"
    fill="url(#pars-blue)"
    stroke="url(#pars-gold)"
    stroke-width="3"
    stroke-linejoin="round"
  />

  <!-- Recursive inner star -->
  <path
    d="M0,-45 L14,-27 L45,-18 L27,0 L45,18 L14,27 L0,45 L-14,27 L-45,18 L-27,0 L-45,-18 L-14,-27 Z"
    fill="none"
    stroke="url(#pars-gold)"
    stroke-width="2"
    stroke-linejoin="round"
    opacity="0.8"
  />

  <!-- Interlaced circles (Persian geometric pattern) -->
  <g fill="none" stroke="#eaf7ff" stroke-width="1.5" opacity="0.6">
    <circle r="55"/>
    <circle r="35"/>
  </g>

  <!-- Center rosette -->
  <circle r="8" fill="url(#pars-gold)"/>
  <path
    d="M0,-20 L6,-6 L20,0 L6,6 L0,20 L-6,6 L-20,0 L-6,-6 Z"
    fill="#002a47"
    stroke="url(#pars-gold)"
    stroke-width="1.5"
    stroke-linejoin="round"
  />
</svg>`

export const logoMonoSVG = `<svg viewBox="-120 -120 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Outer 8-pointed star -->
  <path
    d="M0,-100 L30,-60 L100,-40 L60,0 L100,40 L30,60 L0,100 L-30,60 L-100,40 L-60,0 L-100,-40 L-30,-60 Z"
    fill="none"
    stroke="currentColor"
    stroke-width="4"
    stroke-linejoin="round"
  />

  <!-- Inner star -->
  <path
    d="M0,-70 L22,-42 L70,-28 L42,0 L70,28 L22,42 L0,70 L-22,42 L-70,28 L-42,0 L-70,-28 L-22,-42 Z"
    fill="currentColor"
    fill-opacity="0.15"
    stroke="currentColor"
    stroke-width="3"
    stroke-linejoin="round"
  />

  <!-- Recursive inner star -->
  <path
    d="M0,-45 L14,-27 L45,-18 L27,0 L45,18 L14,27 L0,45 L-14,27 L-45,18 L-27,0 L-45,-18 L-14,-27 Z"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linejoin="round"
    opacity="0.6"
  />

  <!-- Interlaced circles -->
  <g fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.4">
    <circle r="55"/>
    <circle r="35"/>
  </g>

  <!-- Center rosette -->
  <circle r="8" fill="currentColor"/>
  <path
    d="M0,-20 L6,-6 L20,0 L6,6 L0,20 L-6,6 L-20,0 L-6,-6 Z"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linejoin="round"
    opacity="0.8"
  />
</svg>`

export const logoWhiteSVG = `<svg viewBox="-120 -120 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Outer 8-pointed star -->
  <path
    d="M0,-100 L30,-60 L100,-40 L60,0 L100,40 L30,60 L0,100 L-30,60 L-100,40 L-60,0 L-100,-40 L-30,-60 Z"
    fill="none"
    stroke="white"
    stroke-width="4"
    stroke-linejoin="round"
  />

  <!-- Inner star -->
  <path
    d="M0,-70 L22,-42 L70,-28 L42,0 L70,28 L22,42 L0,70 L-22,42 L-70,28 L-42,0 L-70,-28 L-22,-42 Z"
    fill="white"
    fill-opacity="0.15"
    stroke="white"
    stroke-width="3"
    stroke-linejoin="round"
  />

  <!-- Recursive inner star -->
  <path
    d="M0,-45 L14,-27 L45,-18 L27,0 L45,18 L14,27 L0,45 L-14,27 L-45,18 L-27,0 L-45,-18 L-14,-27 Z"
    fill="none"
    stroke="white"
    stroke-width="2"
    stroke-linejoin="round"
    opacity="0.6"
  />

  <!-- Interlaced circles -->
  <g fill="none" stroke="white" stroke-width="1.5" opacity="0.4">
    <circle r="55"/>
    <circle r="35"/>
  </g>

  <!-- Center rosette -->
  <circle r="8" fill="white"/>
  <path
    d="M0,-20 L6,-6 L20,0 L6,6 L0,20 L-6,6 L-20,0 L-6,-6 Z"
    fill="none"
    stroke="white"
    stroke-width="1.5"
    stroke-linejoin="round"
    opacity="0.8"
  />
</svg>`

// Animated version with CSS animations for spinning layers
export const logoAnimatedSVG = `<svg viewBox="-120 -120 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
  <style>
    @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    @keyframes spin-reverse { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
    @keyframes breathe { 0%,100% { opacity: 0.6; } 50% { opacity: 1; } }
    .layer-outer { animation: spin-slow 60s linear infinite; transform-origin: center; }
    .layer-mid { animation: spin-reverse 45s linear infinite; transform-origin: center; }
    .layer-inner { animation: spin-slow 30s linear infinite, breathe 4s ease-in-out infinite; transform-origin: center; }
  </style>
  <defs>
    <linearGradient id="pars-gold-anim" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f5d06f"/>
      <stop offset="50%" stop-color="#caa24a"/>
      <stop offset="100%" stop-color="#f3dc8f"/>
    </linearGradient>
    <linearGradient id="pars-blue-anim" x1="0" y1="1" x2="1" y2="0">
      <stop offset="0%" stop-color="#003355"/>
      <stop offset="50%" stop-color="#00abff"/>
      <stop offset="100%" stop-color="#66d0ff"/>
    </linearGradient>
  </defs>

  <g class="layer-outer">
    <path d="M0,-100 L30,-60 L100,-40 L60,0 L100,40 L30,60 L0,100 L-30,60 L-100,40 L-60,0 L-100,-40 L-30,-60 Z" fill="none" stroke="url(#pars-gold-anim)" stroke-width="4" stroke-linejoin="round"/>
  </g>

  <g class="layer-mid">
    <path d="M0,-70 L22,-42 L70,-28 L42,0 L70,28 L22,42 L0,70 L-22,42 L-70,28 L-42,0 L-70,-28 L-22,-42 Z" fill="url(#pars-blue-anim)" stroke="url(#pars-gold-anim)" stroke-width="3" stroke-linejoin="round"/>
    <g fill="none" stroke="#eaf7ff" stroke-width="1.5" opacity="0.6">
      <circle r="55"/>
    </g>
  </g>

  <g class="layer-inner">
    <path d="M0,-45 L14,-27 L45,-18 L27,0 L45,18 L14,27 L0,45 L-14,27 L-45,18 L-27,0 L-45,-18 L-14,-27 Z" fill="none" stroke="url(#pars-gold-anim)" stroke-width="2" stroke-linejoin="round"/>
    <circle r="35" fill="none" stroke="#eaf7ff" stroke-width="1.5" opacity="0.4"/>
  </g>

  <!-- Static center -->
  <circle r="8" fill="url(#pars-gold-anim)"/>
  <path d="M0,-20 L6,-6 L20,0 L6,6 L0,20 L-6,6 L-20,0 L-6,-6 Z" fill="#002a47" stroke="url(#pars-gold-anim)" stroke-width="1.5" stroke-linejoin="round"/>
</svg>`

export function getLogoSVG(variant: 'color' | 'mono' | 'white' | 'animated' = 'color'): string {
  switch (variant) {
    case 'mono': return logoMonoSVG
    case 'white': return logoWhiteSVG
    case 'animated': return logoAnimatedSVG
    default: return logoColorSVG
  }
}

export function getLogoDataURL(variant: 'color' | 'mono' | 'white' | 'animated' = 'color'): string {
  return `data:image/svg+xml,${encodeURIComponent(getLogoSVG(variant))}`
}

// Raw path for the 8-pointed star (for icon usage)
export const starPath = 'M0,-100 L30,-60 L100,-40 L60,0 L100,40 L30,60 L0,100 L-30,60 L-100,40 L-60,0 L-100,-40 L-30,-60 Z'
export const innerStarPath = 'M0,-70 L22,-42 L70,-28 L42,0 L70,28 L22,42 L0,70 L-22,42 L-70,28 L-42,0 L-70,-28 L-22,-42 Z'
export const rosettePath = 'M0,-20 L6,-6 L20,0 L6,6 L0,20 L-6,6 L-20,0 L-6,-6 Z'
