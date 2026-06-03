# Clínica Dental – Next.js (performance build)

High-performance Next.js version of the [Dr. Alejandro Prieto](https://laura-g.360elevate.store/) landing page.

## Performance choices

- **No remote CSS/JS** – single `globals.css` (~6KB), no Elementor or plugin assets
- **Self-hosted images** in `public/images/` (optimized sizes where available)
- **Next.js `Image`** for automatic WebP/AVIF and lazy loading
- **`next/font`** for Manrope (no render-blocking Google Fonts CSS)
- **Minimal client JS** – mobile menu + contact form only (~2 small components)
- **CSS scroll animations** via `animation-timeline: view()` (no animation library)
- **Static prerender** – full page generated at build time

## Commands

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm start
```

## Refresh images from live site

```bash
node scripts/download-images.mjs
```

## Structure

- `src/app/page.tsx` – page sections
- `src/app/globals.css` – all styles
- `src/lib/site.ts` – copy and links
- `public/images/` – local assets
