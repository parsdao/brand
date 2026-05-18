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

// src/loader.ts
var loader_exports = {};
__export(loader_exports, {
  brand: () => brand,
  getBrandUrl: () => getBrandUrl,
  getDocsUrl: () => getDocsUrl,
  getGatewayUrl: () => getGatewayUrl,
  getRpcUrl: () => getRpcUrl,
  getWsUrl: () => getWsUrl,
  loadBrand: () => loadBrand,
  runtimeConfig: () => runtimeConfig
});
module.exports = __toCommonJS(loader_exports);
var brand = {
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
    Object.assign(brand, config.brand);
  }
  const baseName = brand.name.replace(/\s*exchange\s*|\s*bridge\s*|\s*explorer\s*|\s*wallet\s*/i, "").trim();
  if (!brand.shortName && baseName) {
    brand.shortName = baseName.length <= 3 ? baseName.toUpperCase() : baseName;
  }
  if (!brand.labsName && baseName) brand.labsName = baseName + " Labs";
  if (!brand.walletName && baseName) brand.walletName = brand.shortName + " Wallet";
  if (!brand.protocolName && baseName) brand.protocolName = brand.shortName + " Protocol";
  if (!brand.copyrightHolder) brand.copyrightHolder = brand.legalEntity;
  if (config.chains) {
    brand.defaultChainId = config.chains.defaultChainId ?? brand.defaultChainId;
    brand.supportedChainIds = config.chains.supported ?? brand.supportedChainIds;
  }
  if (config.walletConnect?.projectId) brand.walletConnectProjectId = config.walletConnect.projectId;
  if (config.api?.insights) brand.insightsHost = config.api.insights;
  if (typeof document !== "undefined") {
    if (config.brand?.title) document.title = config.brand.title;
    if (config.brand?.faviconUrl) {
      const link = document.querySelector("link[rel*='icon']");
      if (link) link.href = config.brand.faviconUrl;
    }
  }
  if (typeof document !== "undefined" && brand.theme) {
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    const bt = prefersDark ? brand.theme.dark : brand.theme.light;
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
  return `https://${brand.appDomain}${path}`;
}
function getDocsUrl(path) {
  return `https://${brand.docsDomain}${path}`;
}
function getGatewayUrl(path) {
  return `https://${brand.gatewayDomain}${path}`;
}
function getWsUrl(path) {
  return `wss://${brand.wsDomain}${path}`;
}
function getRpcUrl(chainId) {
  return runtimeConfig?.rpc?.[String(chainId)];
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  brand,
  getBrandUrl,
  getDocsUrl,
  getGatewayUrl,
  getRpcUrl,
  getWsUrl,
  loadBrand,
  runtimeConfig
});
//# sourceMappingURL=loader.js.map