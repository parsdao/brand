"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Favicon: () => Favicon,
  Logo: () => Logo,
  LogoIcon: () => LogoIcon,
  Wordmark: () => Wordmark,
  brand: () => brand,
  brandSystem: () => brandSystem,
  brandTailwindTheme: () => brandTailwindTheme,
  colors: () => palette,
  default: () => Logo,
  generateTailwindTheme: () => generateTailwindTheme,
  getBrandUrl: () => getBrandUrl,
  getDocsUrl: () => getDocsUrl,
  getFaviconMetadata: () => getFaviconMetadata,
  getGatewayUrl: () => getGatewayUrl,
  getLogoDataURL: () => getLogoDataURL,
  getLogoSVG: () => getLogoSVG,
  getRpcUrl: () => getRpcUrl,
  getWsUrl: () => getWsUrl,
  loadBrand: () => loadBrand,
  logoColorSVG: () => logoColorSVG,
  logoMonoSVG: () => logoMonoSVG,
  logoWhiteSVG: () => logoWhiteSVG,
  palette: () => palette
});
module.exports = __toCommonJS(index_exports);

// src/logo/svg.ts
var logoColorSVG = `<svg viewBox="-120 -120 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
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
</svg>`;
var logoMonoSVG = `<svg viewBox="-120 -120 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
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
</svg>`;
var logoWhiteSVG = `<svg viewBox="-120 -120 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
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
</svg>`;
var logoAnimatedSVG = `<svg viewBox="-120 -120 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
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
</svg>`;
function getLogoSVG(variant = "color") {
  switch (variant) {
    case "mono":
      return logoMonoSVG;
    case "white":
      return logoWhiteSVG;
    case "animated":
      return logoAnimatedSVG;
    default:
      return logoColorSVG;
  }
}
function getLogoDataURL(variant = "color") {
  return `data:image/svg+xml,${encodeURIComponent(getLogoSVG(variant))}`;
}

// src/logo/logo.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var sizeMap = {
  xs: 16,
  sm: 24,
  md: 32,
  lg: 48,
  xl: 64,
  "2xl": 96
};
function Logo({ variant = "color", size = "md", className = "", style = {} }) {
  const pixelSize = typeof size === "number" ? size : sizeMap[size];
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      role: "img",
      "aria-label": "Pars Logo",
      className: `pars-logo ${className}`,
      style: { width: pixelSize, height: pixelSize, display: "inline-flex", ...style },
      dangerouslySetInnerHTML: { __html: getLogoSVG(variant) }
    }
  );
}
function LogoIcon({ size = "md", color = "currentColor", className = "" }) {
  const pixelSize = typeof size === "number" ? size : sizeMap[size];
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      className: `pars-logo-icon ${className}`,
      style: { width: pixelSize, height: pixelSize, color, display: "inline-flex" },
      dangerouslySetInnerHTML: { __html: getLogoSVG("mono") }
    }
  );
}

// src/logo/wordmark.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var textSizeMap = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.25rem",
  xl: "1.5rem",
  "2xl": "2rem"
};
function Wordmark({
  brandName = "Pars",
  variant = "color",
  size = "md",
  gap = 8,
  className = "",
  textClassName = "",
  style = {}
}) {
  const fontSize = typeof size === "number" ? `${size * 0.5}px` : textSizeMap[size];
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: `pars-wordmark ${className}`, style: { display: "inline-flex", alignItems: "center", gap: `${gap}px`, ...style }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Logo, { variant, size }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: textClassName, style: { fontSize, fontWeight: 600, letterSpacing: "-0.02em" }, children: brandName })
  ] });
}

// src/logo/favicon.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function Favicon() {
  const faviconUrl = getLogoDataURL("color");
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("link", { rel: "icon", type: "image/svg+xml", href: faviconUrl }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("link", { rel: "apple-touch-icon", href: faviconUrl })
  ] });
}
function getFaviconMetadata() {
  const faviconUrl = getLogoDataURL("color");
  return { icon: faviconUrl, apple: faviconUrl };
}

// src/colors/palette.ts
var palette = {
  primary: {
    DEFAULT: "#00abff",
    50: "#e6f7ff",
    100: "#b3e8ff",
    200: "#80d9ff",
    300: "#4dcaff",
    400: "#1abbff",
    500: "#00abff",
    600: "#0089cc",
    700: "#006799",
    800: "#004566",
    900: "#002333",
    950: "#00111a"
  },
  secondary: {
    DEFAULT: "#0089cc",
    light: "#4dcaff",
    dark: "#006799"
  },
  accent: {
    DEFAULT: "#F59E0B",
    light: "#FBBF24",
    dark: "#D97706"
  },
  success: { DEFAULT: "#10B981", light: "#34D399", dark: "#059669" },
  warning: { DEFAULT: "#F59E0B", light: "#FCD34D", dark: "#D97706" },
  destructive: { DEFAULT: "#EF4444", light: "#F87171", dark: "#DC2626" },
  neutral: {
    0: "#FFFFFF",
    50: "#FAFAFA",
    100: "#F5F5F5",
    200: "#E5E5E5",
    300: "#D4D4D4",
    400: "#A3A3A3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0A0A0A",
    1e3: "#000000"
  }
};

// src/system/index.ts
var brandSystem = {
  typography: {
    fonts: {
      display: ["Inter", "system-ui", "sans-serif"],
      heading: ["Inter", "system-ui", "sans-serif"],
      body: ["Inter", "system-ui", "sans-serif"],
      mono: ["JetBrains Mono", "monospace"]
    },
    sizes: { base: { size: 16, lineHeight: 24 } }
  },
  spacing: { multiplier: 1 },
  grid: { gutter: 16 },
  radius: { default: 8 }
};
function generateTailwindTheme(config = brandSystem) {
  return {
    fontFamily: {
      display: config.typography.fonts.display,
      heading: config.typography.fonts.heading,
      sans: config.typography.fonts.body,
      mono: config.typography.fonts.mono
    }
  };
}
var brandTailwindTheme = generateTailwindTheme(brandSystem);

// brand.json
var brand_default = {
  brand: {
    name: "Pars",
    title: "Pars Network",
    description: "Decentralized infrastructure for the Persian-speaking world",
    shortName: "Pars",
    labsName: "Pars DAO",
    legalEntity: "Pars DAO Foundation",
    walletName: "Pars Wallet",
    protocolName: "Pars Protocol",
    copyrightHolder: "Pars DAO Foundation",
    appDomain: "pars.network",
    docsDomain: "docs.pars.network",
    infoDomain: "info.pars.network",
    gatewayDomain: "api.pars.network",
    wsDomain: "ws.pars.network",
    helpUrl: "https://docs.pars.network",
    termsUrl: "https://pars.network/terms",
    privacyUrl: "https://pars.network/privacy",
    downloadUrl: "https://pars.network/wallet",
    complianceEmail: "compliance@pars.network",
    supportEmail: "hi@pars.network",
    twitter: "https://x.com/parsdao",
    farcaster: "",
    linkedin: "",
    tiktok: "",
    github: "https://github.com/parsdao",
    discord: "https://discord.gg/pars",
    logoUrl: "https://cdn.jsdelivr.net/npm/@parsdao/brand@latest/assets/logo/logo.svg",
    faviconUrl: "https://cdn.jsdelivr.net/npm/@parsdao/brand@latest/assets/logo/favicon.png",
    primaryColor: "#6366F1",
    theme: {
      light: {
        accent1: "#4F46E5",
        accent1Hovered: "#4338CA",
        surface1: "#FFFFFF",
        surface2: "#F5F3FF",
        neutral1: "#111827",
        neutral2: "rgba(17, 24, 39, 0.6)"
      },
      dark: {
        accent1: "#818CF8",
        accent1Hovered: "#A5B4FC",
        surface1: "#000000",
        surface2: "#1E1B4B",
        neutral1: "#F9FAFB",
        neutral2: "rgba(249, 250, 251, 0.6)"
      }
    }
  },
  chains: {
    defaultChainId: 1,
    supported: [1, 96369, 200200, 42161, 8453, 137]
  },
  rpc: {
    "1": "https://eth.llamarpc.com",
    "96369": "https://api.lux.network/ext/bc/C/rpc",
    "200200": "https://api.zoo.network/ext/bc/C/rpc",
    "42161": "https://arb1.arbitrum.io/rpc",
    "8453": "https://mainnet.base.org",
    "137": "https://polygon-rpc.com"
  },
  api: {
    graphql: "",
    gateway: "https://api.pars.network",
    insights: "https://insights.hanzo.ai"
  },
  iam: {
    provider: "https://pars.id",
    clientId: "pars-app"
  },
  walletConnect: {
    projectId: ""
  }
};

// src/brand.ts
var brand = brand_default;

// src/loader.ts
var brand2 = {
  name: "",
  title: "",
  description: "",
  shortName: "",
  labsName: "",
  legalEntity: "",
  walletName: "",
  protocolName: "",
  copyrightHolder: "",
  appDomain: "",
  docsDomain: "",
  infoDomain: "",
  gatewayDomain: "",
  wsDomain: "",
  helpUrl: "",
  termsUrl: "",
  privacyUrl: "",
  downloadUrl: "",
  complianceEmail: "",
  supportEmail: "",
  twitter: "",
  farcaster: "",
  linkedin: "",
  tiktok: "",
  github: "",
  discord: "",
  logoUrl: "",
  faviconUrl: "/favicon.ico",
  primaryColor: "#FFFFFF",
  defaultChainId: 1,
  supportedChainIds: [],
  walletConnectProjectId: "",
  insightsHost: "",
  insightsApiKey: ""
};
var runtimeConfig = null;
async function loadBrand() {
  const res = await fetch("/brand.json");
  if (!res.ok) throw new Error(`Failed to load /brand.json: ${res.status}`);
  const config = await res.json();
  if (config.brand) {
    Object.assign(brand2, config.brand);
  }
  const baseName = brand2.name.replace(/\s*exchange\s*|\s*bridge\s*|\s*explorer\s*|\s*wallet\s*/i, "").trim();
  if (!brand2.shortName && baseName) {
    brand2.shortName = baseName.length <= 3 ? baseName.toUpperCase() : baseName;
  }
  if (!brand2.labsName && baseName) brand2.labsName = baseName + " Labs";
  if (!brand2.walletName && baseName) brand2.walletName = brand2.shortName + " Wallet";
  if (!brand2.protocolName && baseName) brand2.protocolName = brand2.shortName + " Protocol";
  if (!brand2.copyrightHolder) brand2.copyrightHolder = brand2.legalEntity;
  if (config.chains) {
    brand2.defaultChainId = config.chains.defaultChainId ?? brand2.defaultChainId;
    brand2.supportedChainIds = config.chains.supported ?? brand2.supportedChainIds;
  }
  if (config.walletConnect?.projectId) brand2.walletConnectProjectId = config.walletConnect.projectId;
  if (config.api?.insights) brand2.insightsHost = config.api.insights;
  if (typeof document !== "undefined") {
    if (config.brand?.title) document.title = config.brand.title;
    if (config.brand?.faviconUrl) {
      const link = document.querySelector("link[rel*='icon']");
      if (link) link.href = config.brand.faviconUrl;
    }
  }
  if (typeof document !== "undefined" && brand2.theme) {
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    const bt = prefersDark ? brand2.theme.dark : brand2.theme.light;
    if (bt) {
      const root = document.documentElement;
      const set = (prop, val) => {
        if (val) root.style.setProperty(prop, val);
      };
      set("--accent1", bt.accent1);
      set("--accent1Hovered", bt.accent1Hovered);
      set("--accent2", bt.accent2);
      set("--accent3", bt.accent3);
      set("--surface1", bt.surface1);
      set("--surface2", bt.surface2);
      set("--surface3", bt.surface3);
      set("--neutral1", bt.neutral1);
      set("--neutral2", bt.neutral2);
      set("--neutral3", bt.neutral3);
      if (bt.background || bt.surface1) {
        root.style.setProperty("background", bt.background || bt.surface1 || "");
      }
    }
  }
  runtimeConfig = config;
  return config;
}
function getBrandUrl(path) {
  return `https://${brand2.appDomain}${path}`;
}
function getDocsUrl(path) {
  return `https://${brand2.docsDomain}${path}`;
}
function getGatewayUrl(path) {
  return `https://${brand2.gatewayDomain}${path}`;
}
function getWsUrl(path) {
  return `wss://${brand2.wsDomain}${path}`;
}
function getRpcUrl(chainId) {
  return runtimeConfig?.rpc?.[String(chainId)];
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Favicon,
  Logo,
  LogoIcon,
  Wordmark,
  brand,
  brandSystem,
  brandTailwindTheme,
  colors,
  generateTailwindTheme,
  getBrandUrl,
  getDocsUrl,
  getFaviconMetadata,
  getGatewayUrl,
  getLogoDataURL,
  getLogoSVG,
  getRpcUrl,
  getWsUrl,
  loadBrand,
  logoColorSVG,
  logoMonoSVG,
  logoWhiteSVG,
  palette
});
//# sourceMappingURL=index.js.map