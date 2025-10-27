# DAYTOOLS - B2B Wholesale Marketplace

Situs B2B marketplace untuk produk wholesale dari China.

## 🚀 Live Demo

**GitHub Pages:** https://daytools.github.io

## ✨ Fitur

### Tersedia Tanpa Login:
- ✅ Browse semua produk
- ✅ **Add to cart langsung** (tanpa login!)
- ✅ Shopping cart dengan localStorage
- ✅ Update quantity & hapus item
- ✅ Responsive design
- ✅ Dark/Light mode support

### Halaman Login (Opsional):
- Login/Signup form
- Profile management (coming soon)
- Order history (coming soon)

## 🛠️ Tech Stack

- **Frontend:** React + TypeScript + Vite
- **UI:** Tailwind CSS + shadcn/ui
- **Routing:** React Router (SPA)
- **State:** TanStack Query
- **Storage:** localStorage (untuk cart)
- **Deployment:** GitHub Pages

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 🚀 Deployment

Template ini sudah siap untuk GitHub Pages!

### Deployment Otomatis (GitHub Actions):

1. Push ke GitHub:
   ```bash
   git push origin main
   ```

2. Aktifkan GitHub Pages:
   - Settings → Pages → Source: **GitHub Actions**

3. Website otomatis deploy setiap push!

### Manual Deployment:

```bash
npm run deploy
```

Lihat [GITHUB_PAGES_INSTRUCTIONS.md](./GITHUB_PAGES_INSTRUCTIONS.md) untuk panduan lengkap.

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── Header.tsx       # Navigation header
│   ├── Footer.tsx       # Site footer
│   └── ProductCard.tsx  # Product card with add to cart
├── lib/
│   ├── cart-storage.ts  # localStorage cart management
│   └── utils.ts         # Utility functions
├── pages/
│   ├── Home.tsx         # Homepage
│   ├── Products.tsx     # Product listing
│   ├── Cart.tsx         # Shopping cart
│   ├── Auth.tsx         # Login/Signup
│   └── ...
└── integrations/
    └── supabase/        # Supabase client (optional)
```

## 🎯 Cara Kerja Cart

Cart menggunakan localStorage, sehingga:
- ✅ Tidak perlu login untuk add to cart
- ✅ Data persists di browser
- ✅ Bekerja offline
- ✅ Cocok untuk GitHub Pages (static hosting)

```typescript
// Example: Add item to cart
import { cartStorage } from '@/lib/cart-storage';

cartStorage.addItem({
  product_id: '123',
  product_title: 'Product Name',
  product_image: 'https://...',
  product_price: 29.99,
});
```

## 🔧 Development

```bash
# Start dev server
npm run dev

# Build
npm run build

# Preview build
npm run preview

# Lint
npm run lint
```

## 📝 Environment Variables

Untuk development dengan Supabase (opsional):

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
```

**Note:** Cart akan tetap bekerja tanpa Supabase menggunakan localStorage.

## 🐛 Troubleshooting

### Halaman blank di GitHub Pages?

1. Pastikan `vite.config.ts` menggunakan `base: "./"`
2. Cek file `dist/404.html` dan `dist/.nojekyll` ada
3. Hard refresh browser: `Ctrl+Shift+R` (Windows) atau `Cmd+Shift+R` (Mac)

### Cart tidak menyimpan?

Check localStorage di browser console:
```javascript
localStorage.getItem('daytools_cart')
```

## 📄 License

© 2025 DAYTOOLS. All rights reserved.

## 🔗 Links

- **Live Site:** https://daytools.github.io
- **Documentation:** [GITHUB_PAGES_INSTRUCTIONS.md](./GITHUB_PAGES_INSTRUCTIONS.md)
- **Deployment Guide:** [DEPLOY_GITHUB_PAGES.md](./DEPLOY_GITHUB_PAGES.md)

---

**Made with ❤️ for B2B wholesale marketplace**
