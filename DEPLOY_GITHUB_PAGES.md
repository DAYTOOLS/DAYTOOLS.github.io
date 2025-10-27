# 🚀 Cara Deploy ke GitHub Pages - PANDUAN LENGKAP

## ⚠️ PENTING: Halaman Blank? Ikuti Langkah Ini!

# Cara Deploy ke GitHub Pages

## Opsi 1: Deploy Otomatis dengan GitHub Actions (Direkomendasikan)

### Langkah-langkah:

1. **Push ke GitHub:**
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

2. **Aktifkan GitHub Pages:**
   - Buka repository di GitHub
   - Pergi ke **Settings** → **Pages**
   - Di bagian **Source**, pilih **GitHub Actions**
   - Workflow akan otomatis berjalan setiap kali ada push ke branch `main`

3. **Tunggu Deployment Selesai:**
   - Buka tab **Actions** di repository
   - Lihat workflow "Deploy to GitHub Pages" sedang berjalan
   - Setelah selesai, website akan live di `https://daytools.github.io`

## Opsi 2: Deploy Manual dengan gh-pages

### Langkah-langkah:

1. **Build dan Deploy:**
   ```bash
   npm run deploy
   ```

2. **Aktifkan GitHub Pages:**
   - Buka repository di GitHub
   - Pergi ke **Settings** → **Pages**
   - Di bagian **Source**, pilih **Deploy from a branch**
   - Pilih branch **gh-pages** dan folder **/ (root)**
   - Klik **Save**

3. **Akses Website:**
   - Website akan live di `https://daytools.github.io` dalam beberapa menit

## Troubleshooting

### Halaman Masih Blank

1. **Cek Console Browser:**
   - Tekan F12 untuk membuka Developer Tools
   - Lihat tab Console untuk error
   - Lihat tab Network untuk file yang gagal dimuat (404)

2. **Cek Build Output:**
   ```bash
   npm run build
   ```
   Pastikan tidak ada error saat build

3. **Cek GitHub Actions:**
   - Buka tab Actions di repository
   - Cek apakah ada error di workflow

### Routing Tidak Bekerja

- Pastikan file `public/404.html` dan `public/.nojekyll` sudah ada
- Pastikan `vite.config.ts` menggunakan `base: "./"` (sudah diatur)
- Refresh browser dengan hard refresh: Ctrl+Shift+R (Windows) atau Cmd+Shift+R (Mac)

## Perubahan yang Sudah Dibuat

✅ `vite.config.ts` - Diubah base path ke `"./"` untuk relative paths
✅ `package.json` - Ditambahkan script deploy untuk gh-pages
✅ `public/.nojekyll` - File untuk mencegah Jekyll processing
✅ `public/404.html` - File untuk SPA routing di GitHub Pages
✅ `index.html` - Ditambahkan script untuk handle redirect SPA
✅ `.github/workflows/deploy.yml` - GitHub Actions untuk auto-deploy

## Custom Domain (Opsional)

Jika ingin menggunakan custom domain:

1. Buat file `public/CNAME` dengan isi domain Anda:
   ```
   www.yourdomain.com
   ```

2. Update DNS settings di domain provider:
   - Tambahkan CNAME record pointing ke `daytools.github.io`

## Catatan Penting

- **Branch main**: Gunakan untuk source code
- **Branch gh-pages**: Otomatis dibuat untuk deployment (jika pakai opsi 2)
- **Build folder**: `dist` (jangan push ke git)
- **Base URL**: Menggunakan relative paths (`./`) untuk kompatibilitas

## Verifikasi Deployment

Setelah deploy, cek:
- ✅ Homepage loading
- ✅ Navigasi antar halaman bekerja
- ✅ Refresh halaman tidak error 404
- ✅ Semua asset (CSS, JS, images) loading
