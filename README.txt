DUDEUNG STORE REVIEW VERSION
============================

Cara buka:
1. Extract zip ini.
2. Buka file index.html di browser.
3. Review desain dan alur checkout.

FILE YANG KAMU EDIT MANUAL
==========================

1. config.js
   Buat edit setting umum toko:
   - nama toko
   - nomor WhatsApp
   - link private server Roblox
   - foto QRIS
   - banner slider
   - top 3 terlaris

2. products.js
   Buat edit produk:
   - nama pet
   - gambar pet
   - harga
   - stock
   - kategori berat
   - mutasi

Contoh edit stock dan harga di products.js:

huge: {
  mega: [60000, 5],
  "ever-venom": [65000, 10]
}

Artinya:
- Huge Mega harga Rp60.000 stock 5
- Huge Ever/Venom harga Rp65.000 stock 10

Kalau habis, ubah stock jadi 0:
mega: [60000, 0]

UKURAN BANNER
=============

Ukuran terbaik untuk banner slider:
1200 x 500 px

Simpan banner di folder:
assets/banners/

Lalu ubah path banner di config.js.

QRIS
====

Ganti file:
assets/payment/qris-placeholder.svg

dengan QRIS asli kamu, misalnya:
assets/payment/qris.png

Lalu ubah di config.js:
qrisImage: "assets/payment/qris.png"

CATATAN STOCK
=============

Versi ini masih static/frontend-only.
Stock sudah dibatasi di keranjang, jadi buyer tidak bisa pilih lebih dari stock.
Tapi stock belum otomatis sinkron antar semua buyer.

Kalau nanti mau stock benar-benar berkurang otomatis untuk semua orang,
perlu backend/database seperti Supabase/Firebase.

YANG SUDAH ADA
==============

- desain simpel mirip marketplace/topup, tapi tema hijau hutan
- banner slider geser
- top 3 terlaris
- katalog pet 2 kolom di HP
- gambar pet sudah dicoba remove background
- nama pet di setiap kartu
- klik pet lalu pilih kategori berat
- pilih mutasi
- qty selector - / +
- info stock, di keranjang, dan sisa setelah ditambah
- keranjang multi item
- checkout QRIS + angka unik
- input username Roblox
- pilihan add username atau private server
- copy ringkasan order
- kirim order ke WhatsApp
- khusus Mimic Octopus: Titanic 70kg+ tampil sebagai 69,4kg+ 15s
