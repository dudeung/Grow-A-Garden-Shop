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
        mega: [10000, 5],
        rainbow: [13000, 2],
        "ever-venom": [15000, 2]
      },
      semi_huge: {
        mega: [19000, 3],
        nightmare: [22000, 2],
        ember: [24000, 1]
      },
      huge: {
        mega: [36000, 2],
        "ever-venom": [40000, 2],
        "giant-golem": [45000, 1]
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
        mega: [11500, 6],
        rainbow: [14500, 3],
        "ever-venom": [16500, 3]
      },
      semi_huge: {
        mega: [20500, 4],
        nightmare: [23500, 2],
        ember: [25500, 2]
      },
      huge: {
        mega: [37500, 3],
        "ever-venom": [41500, 3],
        "giant-golem": [46500, 1]
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
        mega: [13000, 7],
        rainbow: [16000, 4],
        "ever-venom": [18000, 2]
      },
      semi_huge: {
        mega: [22000, 5],
        nightmare: [25000, 2],
        ember: [27000, 1]
      },
      huge: {
        mega: [39000, 4],
        "ever-venom": [43000, 2],
        "giant-golem": [48000, 1]
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
        mega: [14500, 8],
        rainbow: [17500, 2],
        "ever-venom": [19500, 3]
      },
      semi_huge: {
        mega: [23500, 3],
        nightmare: [26500, 2],
        ember: [28500, 2]
      },
      huge: {
        mega: [40500, 2],
        "ever-venom": [44500, 3],
        "giant-golem": [49500, 1]
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
        mega: [16000, 5],
        rainbow: [19000, 3],
        "ever-venom": [21000, 2]
      },
      semi_huge: {
        mega: [25000, 4],
        nightmare: [28000, 2],
        ember: [30000, 1]
      },
      huge: {
        mega: [42000, 3],
        "ever-venom": [46000, 2],
        "giant-golem": [51000, 1]
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
        mega: [17500, 6],
        rainbow: [20500, 4],
        "ever-venom": [22500, 3]
      },
      semi_huge: {
        mega: [26500, 5],
        nightmare: [29500, 2],
        ember: [31500, 2]
      },
      huge: {
        mega: [43500, 4],
        "ever-venom": [47500, 3],
        "giant-golem": [52500, 1]
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
        mega: [24000, 7],
        rainbow: [27000, 2],
        "ever-venom": [29000, 2]
      },
      semi_huge: {
        mega: [33000, 3],
        nightmare: [36000, 2],
        ember: [38000, 1]
      },
      huge: {
        mega: [50000, 2],
        "ever-venom": [54000, 2],
        "giant-golem": [59000, 1]
      },
      titanic_70: {
        mega: [89000, 1],
        "ever-venom": [94000, 1]
      },
      titanic_80: {
        mega: [109000, 1]
      },
      titanic_90: {
        nightmare: [129000, 1]
      },
      titanic_100: {
        rainbow: [154000, 0]
      },
      titanic_110: {
        ember: [184000, 0]
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
        mega: [11500, 8],
        rainbow: [14500, 3],
        "ever-venom": [16500, 3]
      },
      semi_huge: {
        mega: [20500, 4],
        nightmare: [23500, 2],
        ember: [25500, 2]
      },
      huge: {
        mega: [37500, 3],
        "ever-venom": [41500, 3],
        "giant-golem": [46500, 1]
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
        mega: [18000, 5],
        rainbow: [21000, 4],
        "ever-venom": [23000, 2]
      },
      semi_huge: {
        mega: [27000, 5],
        nightmare: [30000, 2],
        ember: [32000, 1]
      },
      huge: {
        mega: [44000, 4],
        "ever-venom": [48000, 2],
        "giant-golem": [53000, 1]
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
        mega: [14500, 6],
        rainbow: [17500, 2],
        "ever-venom": [19500, 3]
      },
      semi_huge: {
        mega: [23500, 3],
        nightmare: [26500, 2],
        ember: [28500, 2]
      },
      huge: {
        mega: [40500, 2],
        "ever-venom": [44500, 3],
        "giant-golem": [49500, 1]
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
        mega: [16000, 7],
        rainbow: [19000, 3],
        "ever-venom": [21000, 2]
      },
      semi_huge: {
        mega: [25000, 4],
        nightmare: [28000, 2],
        ember: [30000, 1]
      },
      huge: {
        mega: [42000, 3],
        "ever-venom": [46000, 2],
        "giant-golem": [51000, 1]
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
        mega: [21000, 8],
        rainbow: [24000, 4],
        "ever-venom": [26000, 3]
      },
      semi_huge: {
        mega: [30000, 5],
        nightmare: [33000, 2],
        ember: [35000, 2]
      },
      huge: {
        mega: [47000, 4],
        "ever-venom": [51000, 3],
        "giant-golem": [56000, 1]
      },
      titanic_70: {
        mega: [86000, 2],
        "ever-venom": [91000, 1]
      },
      titanic_80: {
        mega: [106000, 1]
      },
      titanic_90: {
        nightmare: [126000, 1]
      },
      titanic_100: {
        rainbow: [151000, 0]
      },
      titanic_110: {
        ember: [181000, 0]
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
        mega: [10000, 5],
        rainbow: [13000, 2],
        "ever-venom": [15000, 2]
      },
      semi_huge: {
        mega: [19000, 3],
        nightmare: [22000, 2],
        ember: [24000, 1]
      },
      huge: {
        mega: [36000, 2],
        "ever-venom": [40000, 2],
        "giant-golem": [45000, 1]
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
        mega: [11500, 6],
        rainbow: [14500, 3],
        "ever-venom": [16500, 3]
      },
      semi_huge: {
        mega: [20500, 4],
        nightmare: [23500, 2],
        ember: [25500, 2]
      },
      huge: {
        mega: [37500, 3],
        "ever-venom": [41500, 3],
        "giant-golem": [46500, 1]
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
        mega: [13000, 7],
        rainbow: [16000, 4],
        "ever-venom": [18000, 2]
      },
      semi_huge: {
        mega: [22000, 5],
        nightmare: [25000, 2],
        ember: [27000, 1]
      },
      huge: {
        mega: [39000, 4],
        "ever-venom": [43000, 2],
        "giant-golem": [48000, 1]
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
        mega: [14500, 8],
        rainbow: [17500, 2],
        "ever-venom": [19500, 3]
      },
      semi_huge: {
        mega: [23500, 3],
        nightmare: [26500, 2],
        ember: [28500, 2]
      },
      huge: {
        mega: [40500, 2],
        "ever-venom": [44500, 3],
        "giant-golem": [49500, 1]
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
        mega: [16000, 5],
        rainbow: [19000, 3],
        "ever-venom": [21000, 2]
      },
      semi_huge: {
        mega: [25000, 4],
        nightmare: [28000, 2],
        ember: [30000, 1]
      },
      huge: {
        mega: [42000, 3],
        "ever-venom": [46000, 2],
        "giant-golem": [51000, 1]
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
        mega: [17500, 6],
        rainbow: [20500, 4],
        "ever-venom": [22500, 3]
      },
      semi_huge: {
        mega: [26500, 5],
        nightmare: [29500, 2],
        ember: [31500, 2]
      },
      huge: {
        mega: [43500, 4],
        "ever-venom": [47500, 3],
        "giant-golem": [52500, 1]
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
        mega: [20000, 7],
        rainbow: [23000, 2],
        "ever-venom": [25000, 2]
      },
      semi_huge: {
        mega: [29000, 3],
        nightmare: [32000, 2],
        ember: [34000, 1]
      },
      huge: {
        mega: [46000, 2],
        "ever-venom": [50000, 2],
        "giant-golem": [55000, 1]
      },
      titanic_70: {
        mega: [85000, 1],
        "ever-venom": [90000, 1]
      },
      titanic_80: {
        mega: [105000, 1]
      },
      titanic_90: {
        nightmare: [125000, 1]
      },
      titanic_100: {
        rainbow: [150000, 0]
      },
      titanic_110: {
        ember: [180000, 0]
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
        mega: [11500, 8],
        rainbow: [14500, 3],
        "ever-venom": [16500, 3]
      },
      semi_huge: {
        mega: [20500, 4],
        nightmare: [23500, 2],
        ember: [25500, 2]
      },
      huge: {
        mega: [37500, 3],
        "ever-venom": [41500, 3],
        "giant-golem": [46500, 1]
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
        mega: [13000, 5],
        rainbow: [16000, 4],
        "ever-venom": [18000, 2]
      },
      semi_huge: {
        mega: [22000, 5],
        nightmare: [25000, 2],
        ember: [27000, 1]
      },
      huge: {
        mega: [39000, 4],
        "ever-venom": [43000, 2],
        "giant-golem": [48000, 1]
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
        mega: [14500, 6],
        rainbow: [17500, 2],
        "ever-venom": [19500, 3]
      },
      semi_huge: {
        mega: [23500, 3],
        nightmare: [26500, 2],
        ember: [28500, 2]
      },
      huge: {
        mega: [40500, 2],
        "ever-venom": [44500, 3],
        "giant-golem": [49500, 1]
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
        mega: [24000, 7],
        rainbow: [27000, 3],
        "ever-venom": [29000, 2]
      },
      semi_huge: {
        mega: [33000, 4],
        nightmare: [36000, 2],
        ember: [38000, 1]
      },
      huge: {
        mega: [50000, 3],
        "ever-venom": [54000, 2],
        "giant-golem": [59000, 1]
      },
      titanic_70: {
        mega: [89000, 1],
        "ever-venom": [94000, 1]
      },
      titanic_80: {
        mega: [109000, 1]
      },
      titanic_90: {
        nightmare: [129000, 1]
      },
      titanic_100: {
        rainbow: [154000, 0]
      },
      titanic_110: {
        ember: [184000, 0]
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
        mega: [17500, 8],
        rainbow: [20500, 4],
        "ever-venom": [22500, 3]
      },
      semi_huge: {
        mega: [26500, 5],
        nightmare: [29500, 2],
        ember: [31500, 2]
      },
      huge: {
        mega: [43500, 4],
        "ever-venom": [47500, 3],
        "giant-golem": [52500, 1]
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
        mega: [10000, 5],
        rainbow: [13000, 2],
        "ever-venom": [15000, 2]
      },
      semi_huge: {
        mega: [19000, 3],
        nightmare: [22000, 2],
        ember: [24000, 1]
      },
      huge: {
        mega: [36000, 2],
        "ever-venom": [40000, 2],
        "giant-golem": [45000, 1]
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
        mega: [16000, 6],
        rainbow: [19000, 3],
        "ever-venom": [21000, 3]
      },
      semi_huge: {
        mega: [25000, 4],
        nightmare: [28000, 2],
        ember: [30000, 2]
      },
      huge: {
        mega: [42000, 3],
        "ever-venom": [46000, 3],
        "giant-golem": [51000, 1]
      },
      titanic_70: {
        mega: [81000, 2],
        "ever-venom": [86000, 1]
      },
      titanic_80: {
        mega: [101000, 1]
      },
      titanic_90: {
        nightmare: [121000, 1]
      },
      titanic_100: {
        rainbow: [146000, 0]
      },
      titanic_110: {
        ember: [176000, 0]
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
        mega: [13000, 7],
        rainbow: [16000, 4],
        "ever-venom": [18000, 2]
      },
      semi_huge: {
        mega: [22000, 5],
        nightmare: [25000, 2],
        ember: [27000, 1]
      },
      huge: {
        mega: [39000, 4],
        "ever-venom": [43000, 2],
        "giant-golem": [48000, 1]
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
        mega: [22000, 8],
        rainbow: [25000, 2],
        "ever-venom": [27000, 3]
      },
      semi_huge: {
        mega: [31000, 3],
        nightmare: [34000, 2],
        ember: [36000, 2]
      },
      huge: {
        mega: [48000, 2],
        "ever-venom": [52000, 3],
        "giant-golem": [57000, 1]
      },
      titanic_70: {
        mega: [87000, 2],
        "ever-venom": [92000, 1]
      },
      titanic_80: {
        mega: [107000, 1]
      },
      titanic_90: {
        nightmare: [127000, 1]
      },
      titanic_100: {
        rainbow: [152000, 0]
      },
      titanic_110: {
        ember: [182000, 0]
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
        mega: [16000, 5],
        rainbow: [19000, 3],
        "ever-venom": [21000, 2]
      },
      semi_huge: {
        mega: [25000, 4],
        nightmare: [28000, 2],
        ember: [30000, 1]
      },
      huge: {
        mega: [42000, 3],
        "ever-venom": [46000, 2],
        "giant-golem": [51000, 1]
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
        mega: [17500, 6],
        rainbow: [20500, 4],
        "ever-venom": [22500, 3]
      },
      semi_huge: {
        mega: [26500, 5],
        nightmare: [29500, 2],
        ember: [31500, 2]
      },
      huge: {
        mega: [43500, 4],
        "ever-venom": [47500, 3],
        "giant-golem": [52500, 1]
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
        mega: [10000, 7],
        rainbow: [13000, 2],
        "ever-venom": [15000, 2]
      },
      semi_huge: {
        mega: [19000, 3],
        nightmare: [22000, 2],
        ember: [24000, 1]
      },
      huge: {
        mega: [36000, 2],
        "ever-venom": [40000, 2],
        "giant-golem": [45000, 1]
      },
      titanic_70: {
        mega: [75000, 1],
        "ever-venom": [80000, 1]
      },
      titanic_80: {
        mega: [95000, 1]
      },
      titanic_90: {
        nightmare: [115000, 1]
      },
      titanic_100: {
        rainbow: [140000, 0]
      },
      titanic_110: {
        ember: [170000, 0]
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
        mega: [11500, 8],
        rainbow: [14500, 3],
        "ever-venom": [16500, 3]
      },
      semi_huge: {
        mega: [20500, 4],
        nightmare: [23500, 2],
        ember: [25500, 2]
      },
      huge: {
        mega: [37500, 3],
        "ever-venom": [41500, 3],
        "giant-golem": [46500, 1]
      },
      titanic_70: {
        mega: [76500, 2],
        "ever-venom": [81500, 1]
      },
      titanic_80: {
        mega: [96500, 1]
      },
      titanic_90: {
        nightmare: [116500, 1]
      },
      titanic_100: {
        rainbow: [141500, 0]
      },
      titanic_110: {
        ember: [171500, 0]
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
        "no-mutation": [6000, 10],
        mega: [8000, 5]
      },
      semi_huge: {
        mega: [12000, 3]
      },
      huge: {
        mega: [20000, 2],
        "ever-venom": [15000, 5]
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
        mega: [12000, 6],
        rainbow: [15000, 3],
        "ever-venom": [17000, 2]
      },
      semi_huge: {
        mega: [21000, 4],
        nightmare: [24000, 2],
        ember: [26000, 2]
      },
      huge: {
        mega: [38000, 3],
        "ever-venom": [42000, 3],
        "giant-golem": [47000, 1]
      }
    })
  }

];
