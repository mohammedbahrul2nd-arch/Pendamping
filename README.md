# Sinregado

Sinregado (sebelumnya Pendamping): aplikasi pendamping perubahan kebiasaan yang bisa dipasang di ponsel (PWA) lewat GitHub Pages — gratis, tanpa akun, tanpa server.
Data tersimpan **hanya di perangkatmu** (bukan di GitHub).

- Seluruh aplikasi ada di satu file: [`docs/index.html`](docs/index.html) (HTML + CSS + JS biasa, tanpa build).
- **Panduan dari nol: [TUTORIAL.md](TUTORIAL.md)** · Riwayat perubahan: [CHANGELOG.md](CHANGELOG.md)
- Versi saat ini: **2.0.0**

## Struktur

```
docs/
  index.html            seluruh aplikasi (juga bisa dibuka sendirian dari file)
  manifest.webmanifest  data "aplikasi" (nama, ikon, warna)
  sw.js                 service worker: offline + pembaruan
  icons/                ikon aplikasi
  .nojekyll             matikan Jekyll di GitHub Pages
```

## Coba di komputer sendiri

```bash
cd docs
python3 -m http.server 8000
# buka http://localhost:8000
```

## Merilis versi baru

1. Ubah `docs/index.html`.
2. Naikkan `APP_VERSION` (dan tambah catatan di `RELEASES`) di dalam file itu.
3. Commit/unggah. Setelah GitHub Pages selesai (1–3 menit), tekan **Lainnya → Aplikasi & pembaruan → Cek pembaruan** di ponsel.

`sw.js` tidak perlu diubah untuk rilis biasa.

> Nama repositori/alamat web boleh tetap `pendamping`. Mengganti alamat membuat data lama tidak terbaca di alamat baru (data terikat ke alamat), jadi jangan diganti kecuali kamu siap memindahkan data lewat Ekspor/Impor.
