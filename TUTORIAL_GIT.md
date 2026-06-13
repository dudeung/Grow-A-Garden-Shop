# 📖 Tutorial Git & GitHub - Langkah-Langkah Edit & Commit

## 🚀 Workflow Benar (3 Langkah Simple)

### **Langkah 1️⃣ : Edit File**
Edit file Anda seperti biasa (buka di editor, ubah isi, save).

**Contoh:** Edit `products.js` - ubah stock, harga, atau tambah produk.

---

### **Langkah 2️⃣ : Add & Commit**
Buka Terminal di VS Code (Ctrl+~) dan jalankan:

```bash
git add .
git commit -m "Deskripsi singkat perubahan Anda"
```

**Penjelasan:**
- `git add .` = "Tandai semua file yang berubah"
- `git commit -m "..."` = "Simpan perubahan dengan catatan"

**Contoh pesan commit yang bagus:**
```bash
git commit -m "Update stock bald-eagle polosan mega: 5 unit"
git commit -m "Fix harga phoenix huge category"
git commit -m "Add 10 unit butterfly semi_huge rainbow"
```

**❌ JANGAN:**
```bash
git commit -m "update"          # Terlalu umum
git commit -m "asd"              # Tidak jelas
```

---

### **Langkah 3️⃣ : Push ke GitHub**
```bash
git push
```

Itu saja! Sekarang perubahan Anda ada di GitHub.

---

## 📋 Cek Status Sebelum Commit (Opsional)

Sebelum commit, Anda bisa cek file mana aja yang berubah:

```bash
git status
```

**Output contoh:**
```
On branch main
Changes not staged for commit:
  modified:   products.js
  modified:   config.js
```

Artinya: `products.js` dan `config.js` sudah diubah, siap di-add.

---

## 🔄 Workflow Lengkap Contoh

**Skenario:** Anda mau update stock 3 produk

### Terminal (Ctrl+~):

```bash
# 1. Lihat status
git status

# 2. Stage semua perubahan
git add .

# 3. Commit dengan pesan jelas
git commit -m "Update stock: Bald Eagle +5, Phoenix +3, Sea Turtle +2"

# 4. Push ke GitHub
git push
```

**Hasil di GitHub:** Anda akan lihat perubahan di repository dengan catatan yang jelas.

---

## ⚠️ Jika Ada Error "rejected"

Ini artinya ada perubahan di GitHub yang Anda belum pull:

```bash
# Pull dulu
git pull

# Kemudian push
git push
```

Kalau ada **CONFLICT** (jarang terjadi):
```bash
# Lihat file yang conflict
git status

# Resolve dengan keep local version (versi Anda)
git checkout --ours products.js

# Commit merge
git add .
git commit -m "Resolve conflict: keep local changes"
git push
```

---

## 💡 Tips Penting

| Command | Fungsi |
|---------|--------|
| `git status` | Lihat file mana yang berubah |
| `git add .` | Tandai semua file untuk commit |
| `git add products.js` | Tandai hanya 1 file |
| `git commit -m "pesan"` | Simpan perubahan |
| `git push` | Kirim ke GitHub |
| `git pull` | Download perubahan dari GitHub |

---

## ✅ Urutan Perintah Standar (Hafal Ini!)

Setiap kali edit, lakukan ini **DALAM URUTAN**:

```bash
1️⃣  git add .
2️⃣  git commit -m "Deskripsi perubahan"
3️⃣  git push
```

**Selesai!** 🎉

---

## 🎯 Quick Reference (Copy-Paste)

**Edit 1 produk:**
```bash
git add . && git commit -m "Update stock produk [nama]" && git push
```

**Edit multiple produk:**
```bash
git add . && git commit -m "Update stock: [list produk]" && git push
```

**Edit harga:**
```bash
git add . && git commit -m "Update price: [deskripsi]" && git push
```

---

**Selamat! Sekarang Anda sudah tahu cara commit yang benar!** 🚀
