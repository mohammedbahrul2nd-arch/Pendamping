# Tutorial Lengkap Sinregado — dari Nol sampai Jadi Aplikasi di HP

Mengasumsikan kamu **belum pernah memakai GitHub**. Sekitar 15 menit.
Hasil akhirnya: Sinregado (sebelumnya bernama Sinregado) terpasang di HP seperti aplikasi biasa, jalan offline, punya tombol **Cek pembaruan**, dan bisa mengekspor CSV dari HP.

**Isi:** 1 Gambaran · 2 Akun GitHub · 3 Repositori & unggah · 4 GitHub Pages · 5 Pasang di HP · 6 Pindahkan data lama · 7 Ekspor CSV di HP · 8 Memperbarui · 9 Git (opsional) · 10 Masalah umum · 11 Privasi

---

## 1. Gambaran singkat

- **GitHub** = tempat menyimpan file proyek (repositori).
- **GitHub Pages** = fitur gratis yang mengubah repositori jadi website, mis. `https://namamu.github.io/pendamping/`.
- **PWA** = website yang bisa dipasang ke layar utama, punya ikon, dan jalan offline. Tanpa Play Store/App Store, tanpa biaya.

Isi proyek:

```
pendamping/
├─ docs/                  ← seluruh aplikasi (inilah yang di-publish)
│  ├─ index.html
│  ├─ sw.js
│  ├─ manifest.webmanifest
│  ├─ icons/
│  └─ .nojekyll
├─ README.md  TUTORIAL.md  CHANGELOG.md  .gitignore
```

> **Penting:** data (catatan, episode, check-in, dst.) tersimpan **di browser/HP-mu sendiri**, bukan di GitHub. Repositori hanya berisi kode. Konsekuensinya: **ekspor cadangan secara berkala** (bagian 7).

---

## 2. Buat akun GitHub

1. Buka <https://github.com/signup>.
2. Isi email, password, username. **Username jadi bagian alamat aplikasimu** (`username.github.io`), pilih yang rapi.
3. Verifikasi email, lalu masuk.

---

## 3. Buat repositori & unggah file

1. Klik **+** di kanan atas → **New repository**.
2. **Repository name:** `pendamping` (huruf kecil; jadi bagian alamat). Pilih **Public** (GitHub Pages gratis butuh repositori publik — lihat bagian 11 soal privasi). Jangan centang apa pun lagi → **Create repository**.
3. Di halaman repositori kosong, klik **uploading an existing file**.
4. **Ekstrak** `pendamping.zip`, lalu **seret isi foldernya** (`docs`, `README.md`, `TUTORIAL.md`, `CHANGELOG.md`, `.gitignore`) ke area unggah.
   - Folder `docs` berisi file `.nojekyll` yang tersembunyi di sebagian sistem (Windows: Explorer → View → *Hidden items*; Mac: `Cmd+Shift+.`). Kalau sulit diseret, lewati — aplikasi tetap jalan.
5. Tunggu unggahan selesai → **Commit changes**.

Cek: di repositori terlihat folder `docs` berisi `index.html`, `sw.js`, `manifest.webmanifest`, dan `icons`.

---

## 4. Aktifkan GitHub Pages

1. Repositori → **Settings** → **Pages**.
2. **Source:** *Deploy from a branch*. **Branch:** `main`, folder **`/docs`** (bukan `/ (root)`) → **Save**.
3. Tunggu 1–3 menit, muat ulang halaman. Muncul: *"Your site is live at `https://USERNAME.github.io/pendamping/`"*.
4. Klik **Visit site**. Sinregado terbuka. 🎉

Alamat itu adalah aplikasimu. Simpan/bookmark.

---

## 5. Pasang di HP / komputer

Buka alamat itu, **biarkan termuat penuh sekali** (agar tersimpan untuk offline), lalu:

**Android (Chrome)**
1. Buka di **Chrome**.
2. **Lainnya → Aplikasi & pembaruan → Pasang aplikasi** (muncul otomatis), atau menu **⋮ → Instal aplikasi / Tambahkan ke layar utama**.

**iPhone / iPad (Safari)**
1. Buka di **Safari** (bukan Chrome).
2. **Bagikan** (kotak dengan panah) → **Tambah ke Layar Utama** → **Tambah**. Buka selalu lewat ikon itu.

**Komputer (Chrome/Edge):** ikon **Instal** di ujung kolom alamat.

> Dari browser di dalam aplikasi lain (WhatsApp, Instagram, dll.) pemasangan tidak muncul. Salin alamat dan buka di Chrome/Safari.

Nama di layar utama adalah **Sinregado**. Mau ganti? Ubah `name` dan `short_name` di `docs/manifest.webmanifest`.

---

## 6. Pindahkan data dari file HTML lama

Data di file `pendamping (4).html` yang dulu dibuka langsung tersimpan di browser terpisah, jadi **tidak otomatis ikut**. Pindahkan sekali:

1. Buka **file lama** seperti biasa → **Lainnya → Ekspor data** → pilih format → **Ekspor** (simpan ZIP/CSV/Excel-nya).
2. Buka **aplikasi baru** (alamat GitHub Pages) → selesaikan layar awal singkat bila muncul → **Lainnya → Impor data** → pilih file tadi → periksa pratinjau → **Impor**.
3. Cek tab Riwayat/Pola: data harus sudah ada.

Impor membaca `.xlsx`, `.csv`, dan `.zip` hasil ekspor.

---

## 7. Ekspor CSV di ponsel

**Lainnya → Ekspor data**:

1. **Format:** `CSV` (satu file per jenis data), `ZIP berisi CSV`, atau `Excel (.xlsx)`.
2. Pilih **jenis data**, **rentang**, dan opsi:
   - *tanpa catatan teks* — mengosongkan kolom teks bebas agar aman dibagikan.
   - *BOM untuk Excel* — agar huruf terbaca benar di Excel (aktif secara bawaan).
3. **Pemisah kolom:** bila di Excel/Sheets semua isi menumpuk di satu kolom, ekspor ulang dengan pemisah yang lain (koma ↔ titik koma). Bawaannya menyesuaikan bahasa perangkat.
4. Ketuk **Ekspor & bagikan / simpan** → di menu bagikan ponsel pilih **Simpan ke File** / **Drive** / **Sheets** / kirim ke aplikasi lain.
   Tombol **Ekspor & unduh** menyimpan ke folder Unduhan.
5. Setelah ekspor, kartu **Hasil ekspor terakhir** punya tombol **Bagikan lagi** dan **Unduh** bila menu bagikan tertutup tak sengaja.

Catatan: beberapa ponsel tidak bisa membagikan banyak CSV sekaligus atau file ZIP lewat menu bagikan; aplikasi otomatis menyimpannya sebagai satu ZIP (perlu diekstrak dulu dengan aplikasi Files). Untuk 1 jenis data, hasilnya satu CSV yang langsung bisa dibuka.

---

## 8. Memperbarui aplikasi

### Sebagai pengguna: tombol Cek pembaruan
**Lainnya → Aplikasi & pembaruan → Cek pembaruan.** Bila ada versi baru muncul tombol **Perbarui sekarang**. Aplikasi juga memeriksa sendiri sesekali dan memberi titik kuning di tombol **Lainnya**. Data tidak terhapus.

### Pembaruan dari Pendamping 1.x ke Sinregado 2.0
Tidak perlu membuat repositori baru, dan **jangan mengganti nama repositori** (alamat berubah = data lama tidak terbaca).
1. Ekstrak `sinregado-v2.0.0.zip`.
2. Di repositori GitHub-mu, buka folder `docs` → **Add file → Upload files**. Seret **`index.html`, `sw.js`, dan `manifest.webmanifest`** dari folder `docs` hasil ekstrak (timpa yang lama). `icons/` boleh dilewati karena tidak berubah. Opsional: unggah juga `README.md`, `TUTORIAL.md`, `CHANGELOG.md` di akar repositori.
3. **Commit changes**, tunggu Pages selesai (1–3 menit).
4. Di HP: **Lainnya → Aplikasi & pembaruan → Cek pembaruan → Perbarui sekarang**. Data tidak terhapus.
5. Bila ikon masih bernama lama di layar utama, hapus ikon lalu pasang ulang dari browser (nama diambil saat pemasangan). Data tetap aman selama alamat sama; untuk berjaga-jaga, ekspor dulu lewat **Lainnya → Ekspor data**.

### Sebagai pemilik: merilis versi baru
1. Di GitHub buka `docs/index.html` → ikon ✏️ **Edit** (atau **Add file → Upload files** untuk menimpa dengan file baru).
2. Cari `const APP_VERSION='2.0.0'` dan naikkan (mis. `2.0.1`), lalu tambahkan catatan di `RELEASES` tepat di bawahnya.
3. **Commit changes**. Tunggu 1–3 menit sampai Pages selesai (tab **Actions** menampilkan *pages build and deployment* hijau).
4. Di HP: **Cek pembaruan** → **Perbarui sekarang**.

`sw.js` **tidak perlu diubah** untuk rilis biasa: saat online, aplikasi selalu mengambil versi terbaru; saat offline memakai salinan tersimpan.

> Jika kamu menerima file `pendamping-v….html` baru dari saya, cukup **timpa** `docs/index.html` dengan file itu (ganti namanya jadi `index.html`), lalu commit.

---

## 9. Cara pakai dengan Git (opsional)

```bash
cd pendamping
git init -b main
git add .
git commit -m "Sinregado 2.0.0"
git remote add origin https://github.com/USERNAME/pendamping.git
git push -u origin main
```
Pembaruan berikutnya: ubah file → `git add -A && git commit -m "…" && git push`.

---

## 10. Pemecahan masalah

| Masalah | Solusi |
|---|---|
| Halaman 404 | Pages belum aktif/selesai. Cek Settings → Pages: branch `main`, folder `/docs`. Tunggu beberapa menit. |
| Tombol "Pasang aplikasi" tidak muncul | Android: pakai Chrome, buka alamat `https://`, muat sampai selesai, atau pakai menu ⋮. iPhone: harus Safari → Bagikan. |
| Cek pembaruan: "Gagal memeriksa" | Pastikan online. Setelah commit, tunggu Pages selesai deploy. |
| Sudah commit tapi "Sudah versi terbaru" | `APP_VERSION` belum dinaikkan, atau Pages belum selesai. |
| Data hilang | Data terikat ke alamat + browser. Alamat/repositori berubah atau "hapus data situs" = data kosong. Pulihkan lewat **Impor data**. |
| Ekspor: file tidak terlihat | Pakai **Unduh**, lalu cek Unduhan/Files. Di iPhone: Files → Unduhan, atau pilih **Simpan ke File** di menu bagikan. |
| Excel: semua kolom jadi satu | Ekspor ulang dengan pemisah kolom yang lain. |
| Excel: huruf aneh | Aktifkan opsi **BOM untuk Excel**. |

---

## 11. Privasi — baca ini

- Data **tidak** dikirim ke mana pun; aplikasi tidak punya server, akun, atau pelacak. Data hanya di browser/HP-mu.
- **Kode aplikasi di repositori publik bisa dibaca siapa pun**, termasuk teks pilihan dan istilah di dalamnya, dan terhubung ke nama akun GitHub-mu. Data pribadimu tidak ikut, tetapi jenis aplikasinya bisa terlihat. Pertimbangkan: nama repositori netral (`pendamping` sudah netral), dan akun GitHub yang kamu merasa nyaman. Repositori **private** + Pages butuh paket berbayar GitHub; alternatif gratis dengan cara kerja serupa: Cloudflare Pages atau Netlify (unggah folder `docs`).
- Siapa pun yang memegang HP yang tidak terkunci bisa membuka aplikasi. Pasang **PIN** di Pengaturan, dan manfaatkan **Sembunyikan layar**.
- File hasil ekspor **tidak dienkripsi**. Hapus setelah dipakai; gunakan "tanpa catatan teks" bila dibagikan.
