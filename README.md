# Tharvine — React rewrite

A React (Vite) rebuild of the Tharvine storefront. This fixes the image bug
from the old vanilla-JS version: every image now lives in a box that has a
real height on first paint (not dependent on `aspect-ratio` support), and
each product page owns its own image state instead of sharing mutable DOM,
so switching products can never show stale or invisible images.

## Setup

1. Install [Node.js](https://nodejs.org) 18+ if you don't have it.
2. In this folder, run:
   ```
   npm install
   npm run dev
   ```
   This opens the site at `http://localhost:5173`.
3. **Add your product photos**: drop your image files into `public/img/`,
   using the exact filenames referenced in `src/data/products.js` (or edit
   that file to match whatever filenames you actually have).
4. When you're ready to deploy, run:
   ```
   npm run build
   ```
   This outputs a static site into `dist/` — upload that folder's contents
   to any static host (Netlify, Vercel, GitHub Pages, cPanel, etc.).

## Project structure

```
src/
  data/products.js       ← your product catalog, bank details, WhatsApp number
  context/CartContext.jsx ← cart state (persisted to localStorage)
  components/            ← Nav, Footer, ProductCard, CartSidebar, SmartImage, etc.
  pages/                 ← Home, ProductPage, FemmePage, AboutPage, CheckoutPage
public/img/              ← put your real product photos here
```

## Common edits

- **Change a product's photos / price / description**: edit `src/data/products.js`.
- **Change bank transfer details**: edit `BANK_DETAILS` in `src/data/products.js`.
- **Change the WhatsApp number**: edit `WHATSAPP_NUMBER` in `src/data/products.js`.
- **Add a new product**: add a new object to the `products` array in
  `src/data/products.js`, following the same shape as the others.
