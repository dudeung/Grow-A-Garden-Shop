/* =====================================================
   DATA PRODUK - EDIT STOCK & HARGA DI SINI

   Format stock:
   nama_kategori: {
     nama_mutasi: [hargaIDR, jumlahStock]
   }

   Contoh:
   huge: {
     mega: [60000, 5],
     "ever-venom": [65000, 10]
   }

   Kalau habis, ubah jumlah stock jadi 0.
   Kalau mau tambah mutasi/kategori, tinggal tambah baris.
   ===================================================== */

const CATEGORY_LABELS = {
  polosan: "Polosan (0-28kg)",
  semi_huge: "Semi Huge (38-39kg)",
  huge: "Huge (60-61kg)",
  titanic_70: "70kg+",
  titanic_80: "80kg+",
  titanic_90: "90kg+",
  titanic_100: "100kg+",
  titanic_110: "110kg+"
};

const MUTATION_LABELS = {
  "ever-venom": "Everchant / Venom",
  nightmare: "Nightmare",
  mega: "Mega",
  rainbow: "Rainbow",
  "giant-golem": "Giant Golem",
  ember: "Ember",
  "no-mutation": "No Mutation"
};

function stock(data) {
  return data;
}

const PRODUCTS = [
  {
    id: "bald-eagle",
    name: "Bald Eagle",
    image: "assets/pets/bald-eagle.png",
    badge: "Legendary",
    stock: stock({
      polosan: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 3]
      },
      semi_huge: {
        "ever-venom": [19000, 0],
        "nightmare": [19000, 0],
        "mega": [19000, 0],
        "rainbow": [19000, 0],
        "giant-golem": [19000, 0],
        "ember": [19000, 0],
        "no-mutation": [19000, 0]
      },
      huge: {
        "ever-venom": [36000, 0],
        "nightmare": [36000, 0],
        "mega": [36000, 0],
        "rainbow": [36000, 0],
        "giant-golem": [36000, 0],
        "ember": [36000, 0],
        "no-mutation": [36000, 0]
      },
      titanic_70: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_80: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_90: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_100: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_110: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      }
    })
  },
  {
    id: "bearded-dragon",
    name: "Bearded Dragon",
    image: "assets/pets/bearded-dragon.png",
    badge: "Divine",
    stock: stock({
      polosan: {
        "ever-venom": [11500, 0],
        "nightmare": [11500, 0],
        "mega": [11500, 0],
        "rainbow": [11500, 0],
        "giant-golem": [11500, 0],
        "ember": [11500, 0],
        "no-mutation": [11500, 0]
      },
      semi_huge: {
        "ever-venom": [20500, 0],
        "nightmare": [20500, 0],
        "mega": [20500, 0],
        "rainbow": [20500, 0],
        "giant-golem": [20500, 0],
        "ember": [20500, 0],
        "no-mutation": [20500, 0]
      },
      huge: {
        "ever-venom": [37500, 0],
        "nightmare": [37500, 0],
        "mega": [37500, 0],
        "rainbow": [37500, 0],
        "giant-golem": [37500, 0],
        "ember": [37500, 0],
        "no-mutation": [37500, 0]
      },
      titanic_70: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_80: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_90: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_100: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_110: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      }
    })
  },
  {
    id: "blip",
    name: "Blip",
    image: "assets/pets/blip.png",
    badge: "Prismatic",
    stock: stock({
      polosan: {
        "ever-venom": [13000, 0],
        "nightmare": [13000, 0],
        "mega": [13000, 0],
        "rainbow": [13000, 0],
        "giant-golem": [13000, 0],
        "ember": [13000, 0],
        "no-mutation": [13000, 0]
      },
      semi_huge: {
        "ever-venom": [22000, 0],
        "nightmare": [22000, 0],
        "mega": [22000, 0],
        "rainbow": [22000, 0],
        "giant-golem": [22000, 0],
        "ember": [22000, 0],
        "no-mutation": [22000, 0]
      },
      huge: {
        "ever-venom": [39000, 0],
        "nightmare": [39000, 0],
        "mega": [39000, 0],
        "rainbow": [39000, 0],
        "giant-golem": [39000, 0],
        "ember": [39000, 0],
        "no-mutation": [39000, 0]
      },
      titanic_70: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_80: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_90: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_100: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_110: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      }
    })
  },
  {
    id: "brontosaurus",
    name: "Brontosaurus",
    image: "assets/pets/brontosaurus.png",
    badge: "Mythical",
    stock: stock({
      polosan: {
        "ever-venom": [14500, 0],
        "nightmare": [14500, 0],
        "mega": [14500, 0],
        "rainbow": [14500, 0],
        "giant-golem": [14500, 0],
        "ember": [14500, 0],
        "no-mutation": [14500, 0]
      },
      semi_huge: {
        "ever-venom": [23500, 0],
        "nightmare": [23500, 0],
        "mega": [23500, 0],
        "rainbow": [23500, 0],
        "giant-golem": [23500, 0],
        "ember": [23500, 0],
        "no-mutation": [23500, 0]
      },
      huge: {
        "ever-venom": [40500, 0],
        "nightmare": [40500, 0],
        "mega": [40500, 0],
        "rainbow": [40500, 0],
        "giant-golem": [40500, 0],
        "ember": [40500, 0],
        "no-mutation": [40500, 0]
      },
      titanic_70: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_80: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_90: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_100: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_110: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      }
    })
  },
  {
    id: "butterfly",
    name: "Butterfly",
    image: "assets/pets/butterfly.png",
    badge: "Mythical",
    stock: stock({
      polosan: {
        "ever-venom": [16000, 0],
        "nightmare": [16000, 0],
        "mega": [16000, 0],
        "rainbow": [16000, 0],
        "giant-golem": [16000, 0],
        "ember": [16000, 0],
        "no-mutation": [16000, 0]
      },
      semi_huge: {
        "ever-venom": [25000, 0],
        "nightmare": [25000, 0],
        "mega": [25000, 0],
        "rainbow": [25000, 0],
        "giant-golem": [25000, 0],
        "ember": [25000, 0],
        "no-mutation": [25000, 0]
      },
      huge: {
        "ever-venom": [42000, 0],
        "nightmare": [42000, 0],
        "mega": [42000, 0],
        "rainbow": [42000, 0],
        "giant-golem": [42000, 0],
        "ember": [42000, 0],
        "no-mutation": [42000, 0]
      },
      titanic_70: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_80: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_90: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_100: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_110: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      }
    })
  },
  {
    id: "cockatrice",
    name: "Cockatrice",
    image: "assets/pets/cockatrice.png",
    badge: "Divine",
    stock: stock({
      polosan: {
        "ever-venom": [17500, 0],
        "nightmare": [17500, 0],
        "mega": [17500, 0],
        "rainbow": [17500, 0],
        "giant-golem": [17500, 0],
        "ember": [17500, 0],
        "no-mutation": [17500, 0]
      },
      semi_huge: {
        "ever-venom": [26500, 0],
        "nightmare": [26500, 0],
        "mega": [26500, 0],
        "rainbow": [26500, 0],
        "giant-golem": [26500, 0],
        "ember": [26500, 0],
        "no-mutation": [26500, 0]
      },
      huge: {
        "ever-venom": [43500, 0],
        "nightmare": [43500, 0],
        "mega": [43500, 0],
        "rainbow": [43500, 0],
        "giant-golem": [43500, 0],
        "ember": [43500, 0],
        "no-mutation": [43500, 0]
      },
      titanic_70: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_80: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_90: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_100: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_110: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      }
    })
  },
  {
    id: "corrupted-kitsune",
    name: "Corrupted Kitsune",
    image: "assets/pets/corrupted-kitsune.png",
    badge: "Prismatic",
    stock: stock({
      polosan: {
        "ever-venom": [24000, 0],
        "nightmare": [24000, 0],
        "mega": [24000, 0],
        "rainbow": [24000, 0],
        "giant-golem": [24000, 0],
        "ember": [24000, 0],
        "no-mutation": [24000, 0]
      },
      semi_huge: {
        "ever-venom": [33000, 0],
        "nightmare": [33000, 0],
        "mega": [33000, 0],
        "rainbow": [33000, 0],
        "giant-golem": [33000, 0],
        "ember": [33000, 0],
        "no-mutation": [33000, 0]
      },
      huge: {
        "ever-venom": [50000, 0],
        "nightmare": [50000, 0],
        "mega": [50000, 0],
        "rainbow": [50000, 0],
        "giant-golem": [50000, 0],
        "ember": [50000, 0],
        "no-mutation": [50000, 0]
      },
      titanic_70: {
        "ever-venom": [89000, 0],
        "nightmare": [89000, 0],
        "mega": [89000, 0],
        "rainbow": [89000, 0],
        "giant-golem": [89000, 0],
        "ember": [89000, 0],
        "no-mutation": [89000, 0]
      },
      titanic_80: {
        "ever-venom": [109000, 0],
        "nightmare": [109000, 0],
        "mega": [109000, 0],
        "rainbow": [109000, 0],
        "giant-golem": [109000, 0],
        "ember": [109000, 0],
        "no-mutation": [109000, 0]
      },
      titanic_90: {
        "ever-venom": [129000, 0],
        "nightmare": [129000, 0],
        "mega": [129000, 0],
        "rainbow": [129000, 0],
        "giant-golem": [129000, 0],
        "ember": [129000, 0],
        "no-mutation": [129000, 0]
      },
      titanic_100: {
        "ever-venom": [154000, 0],
        "nightmare": [154000, 0],
        "mega": [154000, 0],
        "rainbow": [154000, 0],
        "giant-golem": [154000, 0],
        "ember": [154000, 0],
        "no-mutation": [154000, 0]
      },
      titanic_110: {
        "ever-venom": [184000, 0],
        "nightmare": [184000, 0],
        "mega": [184000, 0],
        "rainbow": [184000, 0],
        "giant-golem": [184000, 0],
        "ember": [184000, 0],
        "no-mutation": [184000, 0]
      }
    })
  },
  {
    id: "dilophosaurus",
    name: "Dilophosaurus",
    image: "assets/pets/dilophosaurus.png",
    badge: "Mythical",
    stock: stock({
      polosan: {
        "ever-venom": [11500, 0],
        "nightmare": [11500, 0],
        "mega": [11500, 0],
        "rainbow": [11500, 0],
        "giant-golem": [11500, 0],
        "ember": [11500, 0],
        "no-mutation": [11500, 0]
      },
      semi_huge: {
        "ever-venom": [20500, 0],
        "nightmare": [20500, 0],
        "mega": [20500, 0],
        "rainbow": [20500, 0],
        "giant-golem": [20500, 0],
        "ember": [20500, 0],
        "no-mutation": [20500, 0]
      },
      huge: {
        "ever-venom": [37500, 0],
        "nightmare": [37500, 0],
        "mega": [37500, 0],
        "rainbow": [37500, 0],
        "giant-golem": [37500, 0],
        "ember": [37500, 0],
        "no-mutation": [37500, 0]
      },
      titanic_70: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_80: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_90: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_100: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_110: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      }
    })
  },
  {
    id: "disco-bee",
    name: "Disco Bee",
    image: "assets/pets/disco-bee.png",
    badge: "Divine",
    stock: stock({
      polosan: {
        "ever-venom": [18000, 0],
        "nightmare": [18000, 0],
        "mega": [18000, 0],
        "rainbow": [18000, 0],
        "giant-golem": [18000, 0],
        "ember": [18000, 0],
        "no-mutation": [18000, 0]
      },
      semi_huge: {
        "ever-venom": [27000, 0],
        "nightmare": [27000, 0],
        "mega": [27000, 0],
        "rainbow": [27000, 0],
        "giant-golem": [27000, 0],
        "ember": [27000, 0],
        "no-mutation": [27000, 0]
      },
      huge: {
        "ever-venom": [44000, 0],
        "nightmare": [44000, 0],
        "mega": [44000, 0],
        "rainbow": [44000, 0],
        "giant-golem": [44000, 0],
        "ember": [44000, 0],
        "no-mutation": [44000, 0]
      },
      titanic_70: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_80: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_90: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_100: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_110: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      }
    })
  },
  {
    id: "echo-frog",
    name: "Echo Frog",
    image: "assets/pets/echo-frog.png",
    badge: "Mythical",
    stock: stock({
      polosan: {
        "ever-venom": [14500, 0],
        "nightmare": [14500, 0],
        "mega": [14500, 0],
        "rainbow": [14500, 0],
        "giant-golem": [14500, 0],
        "ember": [14500, 0],
        "no-mutation": [14500, 0]
      },
      semi_huge: {
        "ever-venom": [23500, 0],
        "nightmare": [23500, 0],
        "mega": [23500, 0],
        "rainbow": [23500, 0],
        "giant-golem": [23500, 0],
        "ember": [23500, 0],
        "no-mutation": [23500, 0]
      },
      huge: {
        "ever-venom": [40500, 0],
        "nightmare": [40500, 0],
        "mega": [40500, 0],
        "rainbow": [40500, 0],
        "giant-golem": [40500, 0],
        "ember": [40500, 0],
        "no-mutation": [40500, 0]
      },
      titanic_70: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_80: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_90: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_100: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_110: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      }
    })
  },
  {
    id: "elephant",
    name: "Elephant",
    image: "assets/pets/elephant.png",
    badge: "Divine",
    stock: stock({
      polosan: {
        "ever-venom": [16000, 0],
        "nightmare": [16000, 0],
        "mega": [16000, 0],
        "rainbow": [16000, 0],
        "giant-golem": [16000, 0],
        "ember": [16000, 0],
        "no-mutation": [16000, 0]
      },
      semi_huge: {
        "ever-venom": [25000, 0],
        "nightmare": [25000, 0],
        "mega": [25000, 0],
        "rainbow": [25000, 0],
        "giant-golem": [25000, 0],
        "ember": [25000, 0],
        "no-mutation": [25000, 0]
      },
      huge: {
        "ever-venom": [42000, 0],
        "nightmare": [42000, 0],
        "mega": [42000, 0],
        "rainbow": [42000, 0],
        "giant-golem": [42000, 0],
        "ember": [42000, 0],
        "no-mutation": [42000, 0]
      },
      titanic_70: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_80: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_90: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_100: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_110: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      }
    })
  },
  {
    id: "fennec-fox",
    name: "Fennec Fox",
    image: "assets/pets/fennec-fox.png",
    badge: "Divine",
    stock: stock({
      polosan: {
        "ever-venom": [21000, 0],
        "nightmare": [21000, 0],
        "mega": [21000, 0],
        "rainbow": [21000, 0],
        "giant-golem": [21000, 0],
        "ember": [21000, 0],
        "no-mutation": [21000, 0]
      },
      semi_huge: {
        "ever-venom": [30000, 0],
        "nightmare": [30000, 0],
        "mega": [30000, 0],
        "rainbow": [30000, 0],
        "giant-golem": [30000, 0],
        "ember": [30000, 0],
        "no-mutation": [30000, 0]
      },
      huge: {
        "ever-venom": [47000, 0],
        "nightmare": [47000, 0],
        "mega": [47000, 0],
        "rainbow": [47000, 0],
        "giant-golem": [47000, 0],
        "ember": [47000, 0],
        "no-mutation": [47000, 0]
      },
      titanic_70: {
        "ever-venom": [86000, 0],
        "nightmare": [86000, 0],
        "mega": [86000, 0],
        "rainbow": [86000, 0],
        "giant-golem": [86000, 0],
        "ember": [86000, 0],
        "no-mutation": [86000, 0]
      },
      titanic_80: {
        "ever-venom": [106000, 0],
        "nightmare": [106000, 0],
        "mega": [106000, 0],
        "rainbow": [106000, 0],
        "giant-golem": [106000, 0],
        "ember": [106000, 0],
        "no-mutation": [106000, 0]
      },
      titanic_90: {
        "ever-venom": [126000, 0],
        "nightmare": [126000, 0],
        "mega": [126000, 0],
        "rainbow": [126000, 0],
        "giant-golem": [126000, 0],
        "ember": [126000, 0],
        "no-mutation": [126000, 0]
      },
      titanic_100: {
        "ever-venom": [151000, 0],
        "nightmare": [151000, 0],
        "mega": [151000, 0],
        "rainbow": [151000, 0],
        "giant-golem": [151000, 0],
        "ember": [151000, 0],
        "no-mutation": [151000, 0]
      },
      titanic_110: {
        "ever-venom": [181000, 0],
        "nightmare": [181000, 0],
        "mega": [181000, 0],
        "rainbow": [181000, 0],
        "giant-golem": [181000, 0],
        "ember": [181000, 0],
        "no-mutation": [181000, 0]
      }
    })
  },
  {
    id: "french-fry-ferret",
    name: "French Fry Ferret",
    image: "assets/pets/french-fry-ferret.png",
    badge: "Divine",
    stock: stock({
      polosan: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      semi_huge: {
        "ever-venom": [19000, 0],
        "nightmare": [19000, 0],
        "mega": [19000, 0],
        "rainbow": [19000, 0],
        "giant-golem": [19000, 0],
        "ember": [19000, 0],
        "no-mutation": [19000, 0]
      },
      huge: {
        "ever-venom": [36000, 0],
        "nightmare": [36000, 0],
        "mega": [36000, 0],
        "rainbow": [36000, 0],
        "giant-golem": [36000, 0],
        "ember": [36000, 0],
        "no-mutation": [36000, 0]
      },
      titanic_70: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_80: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_90: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_100: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_110: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      }
    })
  },
  {
    id: "golem",
    name: "Golem",
    image: "assets/pets/golem.png",
    badge: "Mythical",
    stock: stock({
      polosan: {
        "ever-venom": [11500, 0],
        "nightmare": [11500, 0],
        "mega": [11500, 0],
        "rainbow": [11500, 0],
        "giant-golem": [11500, 0],
        "ember": [11500, 0],
        "no-mutation": [11500, 0]
      },
      semi_huge: {
        "ever-venom": [20500, 0],
        "nightmare": [20500, 0],
        "mega": [20500, 0],
        "rainbow": [20500, 0],
        "giant-golem": [20500, 0],
        "ember": [20500, 0],
        "no-mutation": [20500, 0]
      },
      huge: {
        "ever-venom": [37500, 0],
        "nightmare": [37500, 0],
        "mega": [37500, 0],
        "rainbow": [37500, 0],
        "giant-golem": [37500, 0],
        "ember": [37500, 0],
        "no-mutation": [37500, 0]
      },
      titanic_70: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_80: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_90: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_100: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_110: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      }
    })
  },
  {
    id: "griffin",
    name: "Griffin",
    image: "assets/pets/griffin.png",
    badge: "Divine",
    stock: stock({
      polosan: {
        "ever-venom": [13000, 0],
        "nightmare": [13000, 0],
        "mega": [13000, 0],
        "rainbow": [13000, 0],
        "giant-golem": [13000, 0],
        "ember": [13000, 0],
        "no-mutation": [13000, 0]
      },
      semi_huge: {
        "ever-venom": [22000, 0],
        "nightmare": [22000, 0],
        "mega": [22000, 0],
        "rainbow": [22000, 0],
        "giant-golem": [22000, 0],
        "ember": [22000, 0],
        "no-mutation": [22000, 0]
      },
      huge: {
        "ever-venom": [39000, 0],
        "nightmare": [39000, 0],
        "mega": [39000, 0],
        "rainbow": [39000, 0],
        "giant-golem": [39000, 0],
        "ember": [39000, 0],
        "no-mutation": [39000, 0]
      },
      titanic_70: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_80: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_90: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_100: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_110: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      }
    })
  },
  {
    id: "headless-horseman",
    name: "Headless Horseman",
    image: "assets/pets/headless-horseman.png",
    badge: "Prismatic",
    stock: stock({
      polosan: {
        "ever-venom": [14500, 0],
        "nightmare": [14500, 0],
        "mega": [14500, 0],
        "rainbow": [14500, 0],
        "giant-golem": [14500, 0],
        "ember": [14500, 0],
        "no-mutation": [14500, 0]
      },
      semi_huge: {
        "ever-venom": [23500, 0],
        "nightmare": [23500, 0],
        "mega": [23500, 0],
        "rainbow": [23500, 0],
        "giant-golem": [23500, 0],
        "ember": [23500, 0],
        "no-mutation": [23500, 0]
      },
      huge: {
        "ever-venom": [40500, 0],
        "nightmare": [40500, 0],
        "mega": [40500, 0],
        "rainbow": [40500, 0],
        "giant-golem": [40500, 0],
        "ember": [40500, 0],
        "no-mutation": [40500, 0]
      },
      titanic_70: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_80: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_90: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_100: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_110: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      }
    })
  },
  {
    id: "hotdog-dachshund",
    name: "Hotdog Dachshund",
    image: "assets/pets/hotdog-dachshund.png",
    badge: "Legendary",
    stock: stock({
      polosan: {
        "ever-venom": [16000, 0],
        "nightmare": [16000, 0],
        "mega": [16000, 0],
        "rainbow": [16000, 0],
        "giant-golem": [16000, 0],
        "ember": [16000, 0],
        "no-mutation": [16000, 0]
      },
      semi_huge: {
        "ever-venom": [25000, 0],
        "nightmare": [25000, 0],
        "mega": [25000, 0],
        "rainbow": [25000, 0],
        "giant-golem": [25000, 0],
        "ember": [25000, 0],
        "no-mutation": [25000, 0]
      },
      huge: {
        "ever-venom": [42000, 0],
        "nightmare": [42000, 0],
        "mega": [42000, 0],
        "rainbow": [42000, 0],
        "giant-golem": [42000, 0],
        "ember": [42000, 0],
        "no-mutation": [42000, 0]
      },
      titanic_70: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_80: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_90: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_100: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_110: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      }
    })
  },
  {
    id: "ice-golem",
    name: "Ice Golem",
    image: "assets/pets/ice-golem.png",
    badge: "Prismatic",
    stock: stock({
      polosan: {
        "ever-venom": [17500, 0],
        "nightmare": [17500, 0],
        "mega": [17500, 0],
        "rainbow": [17500, 0],
        "giant-golem": [17500, 0],
        "ember": [17500, 0],
        "no-mutation": [17500, 0]
      },
      semi_huge: {
        "ever-venom": [26500, 0],
        "nightmare": [26500, 0],
        "mega": [26500, 0],
        "rainbow": [26500, 0],
        "giant-golem": [26500, 0],
        "ember": [26500, 0],
        "no-mutation": [26500, 0]
      },
      huge: {
        "ever-venom": [43500, 0],
        "nightmare": [43500, 0],
        "mega": [43500, 0],
        "rainbow": [43500, 0],
        "giant-golem": [43500, 0],
        "ember": [43500, 0],
        "no-mutation": [43500, 0]
      },
      titanic_70: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_80: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_90: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_100: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_110: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      }
    })
  },
  {
    id: "kitsune",
    name: "Kitsune",
    image: "assets/pets/kitsune.png",
    badge: "Prismatic",
    stock: stock({
      polosan: {
        "ever-venom": [20000, 0],
        "nightmare": [20000, 0],
        "mega": [20000, 0],
        "rainbow": [20000, 0],
        "giant-golem": [20000, 0],
        "ember": [20000, 0],
        "no-mutation": [20000, 0]
      },
      semi_huge: {
        "ever-venom": [29000, 0],
        "nightmare": [29000, 0],
        "mega": [29000, 0],
        "rainbow": [29000, 0],
        "giant-golem": [29000, 0],
        "ember": [29000, 0],
        "no-mutation": [29000, 0]
      },
      huge: {
        "ever-venom": [46000, 0],
        "nightmare": [46000, 0],
        "mega": [46000, 0],
        "rainbow": [46000, 0],
        "giant-golem": [46000, 0],
        "ember": [46000, 0],
        "no-mutation": [46000, 0]
      },
      titanic_70: {
        "ever-venom": [85000, 0],
        "nightmare": [85000, 0],
        "mega": [85000, 0],
        "rainbow": [85000, 0],
        "giant-golem": [85000, 0],
        "ember": [85000, 0],
        "no-mutation": [85000, 0]
      },
      titanic_80: {
        "ever-venom": [105000, 0],
        "nightmare": [105000, 0],
        "mega": [105000, 0],
        "rainbow": [105000, 0],
        "giant-golem": [105000, 0],
        "ember": [105000, 0],
        "no-mutation": [105000, 0]
      },
      titanic_90: {
        "ever-venom": [125000, 0],
        "nightmare": [125000, 0],
        "mega": [125000, 0],
        "rainbow": [125000, 0],
        "giant-golem": [125000, 0],
        "ember": [125000, 0],
        "no-mutation": [125000, 0]
      },
      titanic_100: {
        "ever-venom": [150000, 0],
        "nightmare": [150000, 0],
        "mega": [150000, 0],
        "rainbow": [150000, 0],
        "giant-golem": [150000, 0],
        "ember": [150000, 0],
        "no-mutation": [150000, 0]
      },
      titanic_110: {
        "ever-venom": [180000, 0],
        "nightmare": [180000, 0],
        "mega": [180000, 0],
        "rainbow": [180000, 0],
        "giant-golem": [180000, 0],
        "ember": [180000, 0],
        "no-mutation": [180000, 0]
      }
    })
  },
  {
    id: "koi",
    name: "Koi",
    image: "assets/pets/koi.png",
    badge: "Mythical",
    stock: stock({
      polosan: {
        "ever-venom": [11500, 0],
        "nightmare": [11500, 0],
        "mega": [11500, 0],
        "rainbow": [11500, 0],
        "giant-golem": [11500, 0],
        "ember": [11500, 0],
        "no-mutation": [11500, 0]
      },
      semi_huge: {
        "ever-venom": [20500, 0],
        "nightmare": [20500, 0],
        "mega": [20500, 0],
        "rainbow": [20500, 0],
        "giant-golem": [20500, 0],
        "ember": [20500, 0],
        "no-mutation": [20500, 0]
      },
      huge: {
        "ever-venom": [37500, 0],
        "nightmare": [37500, 0],
        "mega": [37500, 0],
        "rainbow": [37500, 0],
        "giant-golem": [37500, 0],
        "ember": [37500, 0],
        "no-mutation": [37500, 0]
      },
      titanic_70: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_80: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_90: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_100: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_110: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      }
    })
  },
  {
    id: "lion",
    name: "Lion",
    image: "assets/pets/lion.png",
    badge: "Divine",
    stock: stock({
      polosan: {
        "ever-venom": [13000, 0],
        "nightmare": [13000, 0],
        "mega": [13000, 0],
        "rainbow": [13000, 0],
        "giant-golem": [13000, 0],
        "ember": [13000, 0],
        "no-mutation": [13000, 0]
      },
      semi_huge: {
        "ever-venom": [22000, 0],
        "nightmare": [22000, 0],
        "mega": [22000, 0],
        "rainbow": [22000, 0],
        "giant-golem": [22000, 0],
        "ember": [22000, 0],
        "no-mutation": [22000, 0]
      },
      huge: {
        "ever-venom": [39000, 0],
        "nightmare": [39000, 0],
        "mega": [39000, 0],
        "rainbow": [39000, 0],
        "giant-golem": [39000, 0],
        "ember": [39000, 0],
        "no-mutation": [39000, 0]
      },
      titanic_70: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_80: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_90: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_100: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_110: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      }
    })
  },
  {
    id: "magpie",
    name: "Magpie",
    image: "assets/pets/magpie.png",
    badge: "Legendary",
    stock: stock({
      polosan: {
        "ever-venom": [14500, 0],
        "nightmare": [14500, 0],
        "mega": [14500, 0],
        "rainbow": [14500, 0],
        "giant-golem": [14500, 0],
        "ember": [14500, 0],
        "no-mutation": [14500, 0]
      },
      semi_huge: {
        "ever-venom": [23500, 0],
        "nightmare": [23500, 0],
        "mega": [23500, 0],
        "rainbow": [23500, 0],
        "giant-golem": [23500, 0],
        "ember": [23500, 0],
        "no-mutation": [23500, 0]
      },
      huge: {
        "ever-venom": [40500, 0],
        "nightmare": [40500, 0],
        "mega": [40500, 0],
        "rainbow": [40500, 0],
        "giant-golem": [40500, 0],
        "ember": [40500, 0],
        "no-mutation": [40500, 0]
      },
      titanic_70: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_80: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_90: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_100: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_110: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      }
    })
  },
  {
    id: "mimic-octopus",
    name: "Mimic Octopus",
    image: "assets/pets/mimic-octopus.png",
    badge: "Mythical",
    stock: stock({
      polosan: {
        "ever-venom": [24000, 0],
        "nightmare": [24000, 0],
        "mega": [24000, 0],
        "rainbow": [24000, 0],
        "giant-golem": [24000, 0],
        "ember": [24000, 0],
        "no-mutation": [24000, 0]
      },
      semi_huge: {
        "ever-venom": [33000, 0],
        "nightmare": [33000, 0],
        "mega": [33000, 0],
        "rainbow": [33000, 0],
        "giant-golem": [33000, 0],
        "ember": [33000, 0],
        "no-mutation": [33000, 0]
      },
      huge: {
        "ever-venom": [50000, 0],
        "nightmare": [50000, 0],
        "mega": [50000, 0],
        "rainbow": [50000, 0],
        "giant-golem": [50000, 0],
        "ember": [50000, 0],
        "no-mutation": [50000, 0]
      },
      titanic_70: {
        "ever-venom": [89000, 0],
        "nightmare": [89000, 0],
        "mega": [89000, 0],
        "rainbow": [89000, 0],
        "giant-golem": [89000, 0],
        "ember": [89000, 0],
        "no-mutation": [89000, 0]
      },
      titanic_80: {
        "ever-venom": [109000, 0],
        "nightmare": [109000, 0],
        "mega": [109000, 0],
        "rainbow": [109000, 0],
        "giant-golem": [109000, 0],
        "ember": [109000, 0],
        "no-mutation": [109000, 0]
      },
      titanic_90: {
        "ever-venom": [129000, 0],
        "nightmare": [129000, 0],
        "mega": [129000, 0],
        "rainbow": [129000, 0],
        "giant-golem": [129000, 0],
        "ember": [129000, 0],
        "no-mutation": [129000, 0]
      },
      titanic_100: {
        "ever-venom": [154000, 0],
        "nightmare": [154000, 0],
        "mega": [154000, 0],
        "rainbow": [154000, 0],
        "giant-golem": [154000, 0],
        "ember": [154000, 0],
        "no-mutation": [154000, 0]
      },
      titanic_110: {
        "ever-venom": [184000, 0],
        "nightmare": [184000, 0],
        "mega": [184000, 0],
        "rainbow": [184000, 0],
        "giant-golem": [184000, 0],
        "ember": [184000, 0],
        "no-mutation": [184000, 0]
      }
    })
  },
  {
    id: "moon-cat",
    name: "Moon Cat",
    image: "assets/pets/moon-cat.png",
    badge: "Legendary",
    stock: stock({
      polosan: {
        "ever-venom": [17500, 0],
        "nightmare": [17500, 0],
        "mega": [17500, 0],
        "rainbow": [17500, 0],
        "giant-golem": [17500, 0],
        "ember": [17500, 0],
        "no-mutation": [17500, 0]
      },
      semi_huge: {
        "ever-venom": [26500, 0],
        "nightmare": [26500, 0],
        "mega": [26500, 0],
        "rainbow": [26500, 0],
        "giant-golem": [26500, 0],
        "ember": [26500, 0],
        "no-mutation": [26500, 0]
      },
      huge: {
        "ever-venom": [43500, 0],
        "nightmare": [43500, 0],
        "mega": [43500, 0],
        "rainbow": [43500, 0],
        "giant-golem": [43500, 0],
        "ember": [43500, 0],
        "no-mutation": [43500, 0]
      },
      titanic_70: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_80: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_90: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_100: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_110: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      }
    })
  },
  {
    id: "peacock",
    name: "Peacock",
    image: "assets/pets/peacock.png",
    badge: "Legendary",
    stock: stock({
      polosan: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      semi_huge: {
        "ever-venom": [19000, 0],
        "nightmare": [19000, 0],
        "mega": [19000, 0],
        "rainbow": [19000, 0],
        "giant-golem": [19000, 0],
        "ember": [19000, 0],
        "no-mutation": [19000, 0]
      },
      huge: {
        "ever-venom": [36000, 0],
        "nightmare": [36000, 0],
        "mega": [36000, 0],
        "rainbow": [36000, 0],
        "giant-golem": [36000, 0],
        "ember": [36000, 0],
        "no-mutation": [36000, 0]
      },
      titanic_70: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_80: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_90: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_100: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_110: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      }
    })
  },
  {
    id: "peryton",
    name: "Peryton",
    image: "assets/pets/peryton.png",
    badge: "Prismatic",
    stock: stock({
      polosan: {
        "ever-venom": [16000, 0],
        "nightmare": [16000, 0],
        "mega": [16000, 0],
        "rainbow": [16000, 0],
        "giant-golem": [16000, 0],
        "ember": [16000, 0],
        "no-mutation": [16000, 0]
      },
      semi_huge: {
        "ever-venom": [25000, 0],
        "nightmare": [25000, 0],
        "mega": [25000, 0],
        "rainbow": [25000, 0],
        "giant-golem": [25000, 0],
        "ember": [25000, 0],
        "no-mutation": [25000, 0]
      },
      huge: {
        "ever-venom": [42000, 0],
        "nightmare": [42000, 0],
        "mega": [42000, 0],
        "rainbow": [42000, 0],
        "giant-golem": [42000, 0],
        "ember": [42000, 0],
        "no-mutation": [42000, 0]
      },
      titanic_70: {
        "ever-venom": [81000, 0],
        "nightmare": [81000, 0],
        "mega": [81000, 0],
        "rainbow": [81000, 0],
        "giant-golem": [81000, 0],
        "ember": [81000, 0],
        "no-mutation": [81000, 0]
      },
      titanic_80: {
        "ever-venom": [101000, 0],
        "nightmare": [101000, 0],
        "mega": [101000, 0],
        "rainbow": [101000, 0],
        "giant-golem": [101000, 0],
        "ember": [101000, 0],
        "no-mutation": [101000, 0]
      },
      titanic_90: {
        "ever-venom": [121000, 0],
        "nightmare": [121000, 0],
        "mega": [121000, 0],
        "rainbow": [121000, 0],
        "giant-golem": [121000, 0],
        "ember": [121000, 0],
        "no-mutation": [121000, 0]
      },
      titanic_100: {
        "ever-venom": [146000, 0],
        "nightmare": [146000, 0],
        "mega": [146000, 0],
        "rainbow": [146000, 0],
        "giant-golem": [146000, 0],
        "ember": [146000, 0],
        "no-mutation": [146000, 0]
      },
      titanic_110: {
        "ever-venom": [176000, 0],
        "nightmare": [176000, 0],
        "mega": [176000, 0],
        "rainbow": [176000, 0],
        "giant-golem": [176000, 0],
        "ember": [176000, 0],
        "no-mutation": [176000, 0]
      }
    })
  },
  {
    id: "phoenix",
    name: "Phoenix",
    image: "assets/pets/phoenix.png",
    badge: "Divine",
    stock: stock({
      polosan: {
        "ever-venom": [13000, 0],
        "nightmare": [13000, 0],
        "mega": [13000, 0],
        "rainbow": [13000, 0],
        "giant-golem": [13000, 0],
        "ember": [13000, 0],
        "no-mutation": [13000, 0]
      },
      semi_huge: {
        "ever-venom": [22000, 0],
        "nightmare": [22000, 0],
        "mega": [22000, 0],
        "rainbow": [22000, 0],
        "giant-golem": [22000, 0],
        "ember": [22000, 0],
        "no-mutation": [22000, 0]
      },
      huge: {
        "ever-venom": [39000, 0],
        "nightmare": [39000, 0],
        "mega": [39000, 0],
        "rainbow": [39000, 0],
        "giant-golem": [39000, 0],
        "ember": [39000, 0],
        "no-mutation": [39000, 0]
      },
      titanic_70: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_80: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_90: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_100: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_110: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      }
    })
  },
  {
    id: "raccoon",
    name: "Raccoon",
    image: "assets/pets/raccoon.png",
    badge: "Divine",
    stock: stock({
      polosan: {
        "ever-venom": [22000, 0],
        "nightmare": [22000, 0],
        "mega": [22000, 0],
        "rainbow": [22000, 0],
        "giant-golem": [22000, 0],
        "ember": [22000, 0],
        "no-mutation": [22000, 0]
      },
      semi_huge: {
        "ever-venom": [31000, 0],
        "nightmare": [31000, 0],
        "mega": [31000, 0],
        "rainbow": [31000, 0],
        "giant-golem": [31000, 0],
        "ember": [31000, 0],
        "no-mutation": [31000, 0]
      },
      huge: {
        "ever-venom": [48000, 0],
        "nightmare": [48000, 0],
        "mega": [48000, 0],
        "rainbow": [48000, 0],
        "giant-golem": [48000, 0],
        "ember": [48000, 0],
        "no-mutation": [48000, 0]
      },
      titanic_70: {
        "ever-venom": [87000, 0],
        "nightmare": [87000, 0],
        "mega": [87000, 0],
        "rainbow": [87000, 0],
        "giant-golem": [87000, 0],
        "ember": [87000, 0],
        "no-mutation": [87000, 0]
      },
      titanic_80: {
        "ever-venom": [107000, 0],
        "nightmare": [107000, 0],
        "mega": [107000, 0],
        "rainbow": [107000, 0],
        "giant-golem": [107000, 0],
        "ember": [107000, 0],
        "no-mutation": [107000, 0]
      },
      titanic_90: {
        "ever-venom": [127000, 0],
        "nightmare": [127000, 0],
        "mega": [127000, 0],
        "rainbow": [127000, 0],
        "giant-golem": [127000, 0],
        "ember": [127000, 0],
        "no-mutation": [127000, 0]
      },
      titanic_100: {
        "ever-venom": [152000, 0],
        "nightmare": [152000, 0],
        "mega": [152000, 0],
        "rainbow": [152000, 0],
        "giant-golem": [152000, 0],
        "ember": [152000, 0],
        "no-mutation": [152000, 0]
      },
      titanic_110: {
        "ever-venom": [182000, 0],
        "nightmare": [182000, 0],
        "mega": [182000, 0],
        "rainbow": [182000, 0],
        "giant-golem": [182000, 0],
        "ember": [182000, 0],
        "no-mutation": [182000, 0]
      }
    })
  },
  {
    id: "ruby-squid",
    name: "Ruby Squid",
    image: "assets/pets/ruby-squid.png",
    badge: "Divine",
    stock: stock({
      polosan: {
        "ever-venom": [16000, 0],
        "nightmare": [16000, 0],
        "mega": [16000, 0],
        "rainbow": [16000, 0],
        "giant-golem": [16000, 0],
        "ember": [16000, 0],
        "no-mutation": [16000, 0]
      },
      semi_huge: {
        "ever-venom": [25000, 0],
        "nightmare": [25000, 0],
        "mega": [25000, 0],
        "rainbow": [25000, 0],
        "giant-golem": [25000, 0],
        "ember": [25000, 0],
        "no-mutation": [25000, 0]
      },
      huge: {
        "ever-venom": [42000, 0],
        "nightmare": [42000, 0],
        "mega": [42000, 0],
        "rainbow": [42000, 0],
        "giant-golem": [42000, 0],
        "ember": [42000, 0],
        "no-mutation": [42000, 0]
      },
      titanic_70: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_80: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_90: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_100: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_110: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      }
    })
  },
  {
    id: "spider",
    name: "Spider",
    image: "assets/pets/spider.png",
    badge: "Legendary",
    stock: stock({
      polosan: {
        "ever-venom": [17500, 0],
        "nightmare": [17500, 0],
        "mega": [17500, 0],
        "rainbow": [17500, 0],
        "giant-golem": [17500, 0],
        "ember": [17500, 0],
        "no-mutation": [17500, 0]
      },
      semi_huge: {
        "ever-venom": [26500, 0],
        "nightmare": [26500, 0],
        "mega": [26500, 0],
        "rainbow": [26500, 0],
        "giant-golem": [26500, 0],
        "ember": [26500, 0],
        "no-mutation": [26500, 0]
      },
      huge: {
        "ever-venom": [43500, 0],
        "nightmare": [43500, 0],
        "mega": [43500, 0],
        "rainbow": [43500, 0],
        "giant-golem": [43500, 0],
        "ember": [43500, 0],
        "no-mutation": [43500, 0]
      },
      titanic_70: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_80: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_90: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_100: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_110: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      }
    })
  },
  {
    id: "spinosaurus",
    name: "Spinosaurus",
    image: "assets/pets/spinosaurus.png",
    badge: "Divine",
    stock: stock({
      polosan: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      semi_huge: {
        "ever-venom": [19000, 0],
        "nightmare": [19000, 0],
        "mega": [19000, 0],
        "rainbow": [19000, 0],
        "giant-golem": [19000, 0],
        "ember": [19000, 0],
        "no-mutation": [19000, 0]
      },
      huge: {
        "ever-venom": [36000, 0],
        "nightmare": [36000, 0],
        "mega": [36000, 0],
        "rainbow": [36000, 0],
        "giant-golem": [36000, 0],
        "ember": [36000, 0],
        "no-mutation": [36000, 0]
      },
      titanic_70: {
        "ever-venom": [75000, 0],
        "nightmare": [75000, 0],
        "mega": [75000, 0],
        "rainbow": [75000, 0],
        "giant-golem": [75000, 0],
        "ember": [75000, 0],
        "no-mutation": [75000, 0]
      },
      titanic_80: {
        "ever-venom": [95000, 0],
        "nightmare": [95000, 0],
        "mega": [95000, 0],
        "rainbow": [95000, 0],
        "giant-golem": [95000, 0],
        "ember": [95000, 0],
        "no-mutation": [95000, 0]
      },
      titanic_90: {
        "ever-venom": [115000, 0],
        "nightmare": [115000, 0],
        "mega": [115000, 0],
        "rainbow": [115000, 0],
        "giant-golem": [115000, 0],
        "ember": [115000, 0],
        "no-mutation": [115000, 0]
      },
      titanic_100: {
        "ever-venom": [140000, 0],
        "nightmare": [140000, 0],
        "mega": [140000, 0],
        "rainbow": [140000, 0],
        "giant-golem": [140000, 0],
        "ember": [140000, 0],
        "no-mutation": [140000, 0]
      },
      titanic_110: {
        "ever-venom": [170000, 0],
        "nightmare": [170000, 0],
        "mega": [170000, 0],
        "rainbow": [170000, 0],
        "giant-golem": [170000, 0],
        "ember": [170000, 0],
        "no-mutation": [170000, 0]
      }
    })
  },
  {
    id: "t-rex",
    name: "T-Rex",
    image: "assets/pets/t-rex.png",
    badge: "Divine",
    stock: stock({
      polosan: {
        "ever-venom": [11500, 0],
        "nightmare": [11500, 0],
        "mega": [11500, 0],
        "rainbow": [11500, 0],
        "giant-golem": [11500, 0],
        "ember": [11500, 0],
        "no-mutation": [11500, 0]
      },
      semi_huge: {
        "ever-venom": [20500, 0],
        "nightmare": [20500, 0],
        "mega": [20500, 0],
        "rainbow": [20500, 0],
        "giant-golem": [20500, 0],
        "ember": [20500, 0],
        "no-mutation": [20500, 0]
      },
      huge: {
        "ever-venom": [37500, 0],
        "nightmare": [37500, 0],
        "mega": [37500, 0],
        "rainbow": [37500, 0],
        "giant-golem": [37500, 0],
        "ember": [37500, 0],
        "no-mutation": [37500, 0]
      },
      titanic_70: {
        "ever-venom": [76500, 0],
        "nightmare": [76500, 0],
        "mega": [76500, 0],
        "rainbow": [76500, 0],
        "giant-golem": [76500, 0],
        "ember": [76500, 0],
        "no-mutation": [76500, 0]
      },
      titanic_80: {
        "ever-venom": [96500, 0],
        "nightmare": [96500, 0],
        "mega": [96500, 0],
        "rainbow": [96500, 0],
        "giant-golem": [96500, 0],
        "ember": [96500, 0],
        "no-mutation": [96500, 0]
      },
      titanic_90: {
        "ever-venom": [116500, 0],
        "nightmare": [116500, 0],
        "mega": [116500, 0],
        "rainbow": [116500, 0],
        "giant-golem": [116500, 0],
        "ember": [116500, 0],
        "no-mutation": [116500, 0]
      },
      titanic_100: {
        "ever-venom": [141500, 0],
        "nightmare": [141500, 0],
        "mega": [141500, 0],
        "rainbow": [141500, 0],
        "giant-golem": [141500, 0],
        "ember": [141500, 0],
        "no-mutation": [141500, 0]
      },
      titanic_110: {
        "ever-venom": [171500, 0],
        "nightmare": [171500, 0],
        "mega": [171500, 0],
        "rainbow": [171500, 0],
        "giant-golem": [171500, 0],
        "ember": [171500, 0],
        "no-mutation": [171500, 0]
      }
    })
  },
  {
    id: "fire-wisp",
    name: "Fire Wisp",
    image: "assets/pets/fire-wisp.png",
    badge: "Prismatic",
    stock: stock({
      polosan: {
        "ever-venom": [6000, 0],
        "nightmare": [6000, 0],
        "mega": [6000, 0],
        "rainbow": [6000, 0],
        "giant-golem": [6000, 0],
        "ember": [6000, 0],
        "no-mutation": [6000, 0]
      },
      semi_huge: {
        "ever-venom": [12000, 0],
        "nightmare": [12000, 0],
        "mega": [12000, 0],
        "rainbow": [12000, 0],
        "giant-golem": [12000, 0],
        "ember": [12000, 0],
        "no-mutation": [12000, 0]
      },
      huge: {
        "ever-venom": [15000, 0],
        "nightmare": [15000, 0],
        "mega": [15000, 0],
        "rainbow": [15000, 0],
        "giant-golem": [15000, 0],
        "ember": [15000, 0],
        "no-mutation": [15000, 0]
      },
      titanic_70: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_80: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_90: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_100: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_110: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      }
    })
  },
  {
    id: "sea-turtle",
    name: "Sea Turtle",
    image: "assets/pets/sea-turtle.png",
    badge: "Divine",
    stock: stock({
      polosan: {
        "ever-venom": [12000, 0],
        "nightmare": [12000, 0],
        "mega": [12000, 0],
        "rainbow": [12000, 0],
        "giant-golem": [12000, 0],
        "ember": [12000, 0],
        "no-mutation": [12000, 0]
      },
      semi_huge: {
        "ever-venom": [21000, 0],
        "nightmare": [21000, 0],
        "mega": [21000, 0],
        "rainbow": [21000, 0],
        "giant-golem": [21000, 0],
        "ember": [21000, 0],
        "no-mutation": [21000, 0]
      },
      huge: {
        "ever-venom": [38000, 0],
        "nightmare": [38000, 0],
        "mega": [38000, 0],
        "rainbow": [38000, 0],
        "giant-golem": [38000, 0],
        "ember": [38000, 0],
        "no-mutation": [38000, 0]
      },
      titanic_70: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_80: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_90: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_100: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      },
      titanic_110: {
        "ever-venom": [10000, 0],
        "nightmare": [10000, 0],
        "mega": [10000, 0],
        "rainbow": [10000, 0],
        "giant-golem": [10000, 0],
        "ember": [10000, 0],
        "no-mutation": [10000, 0]
      }
    })
  }

];
