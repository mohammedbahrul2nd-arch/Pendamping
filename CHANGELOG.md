# Riwayat Perubahan

## 2.1.0 — 22 Okt 2026
- **Riwayat** kini memuat catatan progres kebiasaan ("Sudah kulakukan"), aktivitas jika–maka, dan Catatanku. Filter baru: *kebiasaan* dan *catatan*. Ketuk entri untuk mengubah waktu atau menghapus (kekuatan kebiasaan dihitung ulang).
- **Laporan** (CSV / ZIP / Excel): ditambah keterangan jam dan menit (kolom `jam_*`), `hari_kustom`, nama kebiasaan/aktivitas pada log, dan waktu pengisian check-in, tinjauan mingguan, serta eksperimen.
- Kolom `perilaku_sasaran` dihapus dari semua laporan. Laporan `kontrak_tujuan` dan `riwayat_tujuan` dihapus. Ekspor lama yang memuatnya tetap bisa diimpor (bagian itu dilewati). Versi skema ekspor 6.
- Menu **Tujuan saya** dihapus. Perilaku sasaran tetap: pornografi, masturbasi, orgasme. **Alasanku** dipindah ke Pengaturan. Layar awal kini 3 langkah. Data lama tidak berubah; kontrak internal tetap ada sehingga fitur lain berjalan.
- Perbaikan: durasi eksperimen kini ikut diekspor dan diimpor.

## 2.0.0 — 22 Okt 2026
Aplikasi diganti nama menjadi **Sinregado** (sebelumnya Pendamping). Isi mencakup semua perubahan 1.1–1.5 (kebiasaan, kerentanan saat ini, rencana jika–maka, skala 1–5, dst.) ditambah perbaikan berikut. Kunci penyimpanan tidak berubah, jadi data lama tetap terbaca di alamat yang sama.

- **Algoritma**
  - Saran aktivitas di Mode Dorongan: bandit kontekstual dengan peluruhan waktu (paruh 60 hari) dan penyusutan hierarkis ke laju aktivitas dan laju dasar, ditambah bonus eksplorasi.
  - Kurva jam rawan: prior agar data sedikit tidak memunculkan puncak palsu, dan pemisahan hari kerja/akhir pekan.
  - Sorotan asosiasi diurutkan dengan z-skor; tren memakai Theil–Sen; hubungan check-in memakai Spearman dengan penanda bermakna.
- **Integrasi**
  - Statistik jika–maka dihitung dari episode nyata dan konsisten di Rencana, Pola, dan Tinjauan.
  - Check-in menandai "ada kejadian" otomatis bila hari itu ada kejadian tercatat.
- **Ekspor/Impor Excel**
  - Perbaikan: impor sheet `statistik_mingguan` sebelumnya membuat pratinjau gagal.
  - ID baru selalu diawali huruf agar tidak rusak jadi angka di Excel. Versi skema ekspor 5.
- `manifest.webmanifest`: nama jadi Sinregado (`id`, `start_url`, `scope` tetap). `sw.js`: cache `sinregado-shell-v1`; cache lama dibersihkan otomatis.

## 1.0.0 — 22 Okt 2026
Rilis pertama sebagai aplikasi (PWA). Isi aplikasi sama dengan `pendamping (4).html`; kunci penyimpanan `pendamping_v3` tidak berubah.

- Bisa dipasang ke layar utama ponsel/komputer dan dibuka lewat alamat web (GitHub Pages).
- Bisa dipakai offline setelah dibuka sekali.
- **Cek pembaruan**: Lainnya → Aplikasi & pembaruan. Aplikasi juga memeriksa sendiri (maks. sekali per 6 jam) dan menandai menu **Lainnya** dengan titik bila ada versi baru. Memperbarui tidak menghapus data.
- **Ekspor diperbaiki untuk ponsel**:
  - Format **CSV** (satu file per jenis data), **ZIP berisi CSV**, atau **Excel (.xlsx)**.
  - Tombol **Bagikan / simpan** memakai menu bagikan ponsel (Files, Drive, Sheets, WhatsApp); bila tidak didukung otomatis unduh. Banyak CSV yang tak bisa dibagikan sekaligus dijadikan satu ZIP.
  - Pilihan pemisah **koma / titik koma** (otomatis menyesuaikan bahasa perangkat) dan **BOM untuk Excel**.
  - Tanpa dialog konfirmasi yang bisa memblokir menu bagikan; peringatan privasi tetap ada di halaman.
  - Kartu "Hasil ekspor terakhir" dengan tombol **Bagikan lagi** / **Unduh**.
- Tema warna bilah status mengikuti tema aplikasi.
