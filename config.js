/* =====================================================
   CONFIG TOKO - EDIT YANG INI BUAT SETTING GLOBAL
   ===================================================== */

const STORE_CONFIG = {
  storeName: "Dudeung Store",

  // Ganti nomor ini dengan WhatsApp kamu. Format: 62xxxxxxxxxxx, jangan pakai + atau 0 depan.
  whatsappNumber: "6289507869635",

  // Link private server kamu.
  privateServerLink: "https://www.roblox.com/share?code=4551afc705de384cb710734a3b3ba758&type=Server",

  // Ganti file QRIS di folder assets/payment lalu ubah path ini kalau namanya beda.
  qrisImage: "assets/payment/qris-placeholder.svg",

  // Angka unik checkout. Contoh subtotal 24.000 + 12 = 24.012
  uniqueNumber: {
    min: 1,
    max: 10
  },

  // Katalog Token Grow A Garden.
  // 1 token = Rp17.5, hasil token dibulatkan ke bawah supaya tidak ada koma.
  tokenCatalog: {
    enabled: true,
    pricePerToken: 16,
    minMoney: 1000,
    maxMoney: 10000000,
    quickAmounts: [5000, 10000, 25000, 50000, 100000]
  },

  // Banner slider. Ukuran banner terbaik: 1200 x 500 px.
  banners: [

    {
      image: "assets/banners/banner-service.png",
      title: "Layanan Cepat & Garansi",
      desc: "Support 09:00 - 23:00, garansi pesanan."
    }
  ],

  // Top 3 terlaris. Isi pakai id pet dari products.js
  topSellers: ["mimic-octopus", "raccoon", "kitsune"]
};
