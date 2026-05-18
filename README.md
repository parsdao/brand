# @parsdao/brand

Pars Network brand identity — logos, colors, design system.

Decentralized infrastructure for the Persian-speaking world.

## Install

```bash
npm install @parsdao/brand
# or
pnpm add @parsdao/brand
```

## Contents

| Path | Description |
|------|-------------|
| `brand.json` | Canonical brand tokens (colors, domains, social, chains) |
| `DESIGN.md` | Brand usage spec (typography, layout, components, motion) |
| `src/` | TypeScript source (logo components, color palette, system) |
| `dist/` | Built JavaScript output (CJS + ESM) |
| `style/brand-colors.css` | CSS variables for brand colors |
| `assets/logo/` | SVG and PNG logo assets |
| `preview.html` | Standalone logo preview page |

## Usage

### Brand tokens (JSON)

```ts
import brand from "@parsdao/brand/brand.json";

brand.brand.name;          // "Pars"
brand.brand.primaryColor;  // "#6366F1"
brand.brand.theme.dark.accent1;
```

### Logo components (React)

```tsx
import { Logo, Wordmark, Favicon } from "@parsdao/brand/logo";

<Logo />
<Wordmark />
<Favicon />
```

### Colors

```ts
import { palette } from "@parsdao/brand/colors";
```

### CSS variables

```css
@import "@parsdao/brand/style/brand-colors.css";

.thing {
  color: var(--pars-accent1);
}
```

### Raw SVG / PNG assets

```html
<img src="https://cdn.jsdelivr.net/npm/@parsdao/brand@latest/assets/logo/pars-logo.svg" />
```

Available files in `assets/logo/`:

- `pars-logo.svg` — full color (gold + blue)
- `pars-logo-mono.svg` — monochrome (`currentColor`)
- `pars-logo-white.svg` — white for dark backgrounds
- `pars-logo-animated.svg` — animated variant
- `pars-icon-color.svg` / `pars-icon-white.svg` — icon only
- `pars-wordmark.svg` / `pars-wordmark-color.svg` / `pars-wordmark-white.svg` — wordmark
- `pars-logo-wordmark.svg` — horizontal lockup
- `pars-logo.png` — PNG version
- `favicon.svg` — favicon
- `og-image.svg` (1200x630) / `og-image-square.svg` (800x800) — social cards

## Symbolism

The Pars mark is the Persian 8-pointed star (Khatam / Shamseh) — a fundamental
motif in Persian art and architecture:

- **8 points** — cardinal and intermediate directions; completeness
- **Interlocking geometry** — unity and interconnection
- **Gold** — sun, prosperity, Persian royalty
- **Blue** — water, sky, Persian ceramic tradition

## Build

```bash
pnpm install
pnpm build
```

## License

MIT — see [LICENSE](./LICENSE).
