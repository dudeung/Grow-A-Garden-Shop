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
         "no-mutation": [1000, 27]
      },
      semi_huge: {
         
      },
      huge: {
         
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
    "no-mutation": [8000, 0]
      },
      semi_huge: {

      },
      huge: {
"ever-venom": [18000, 1]
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
   
      },
      semi_huge: {

      },
      huge: {

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
nightmare: [1000, 40],
      },
      semi_huge: {
    
        nightmare: [2500, 20]
      
      },
      huge: {

        "ever-venom": [5000, 8]
      
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

      },
      semi_huge: {
  
      },
      huge: {
rainbow: [10000, 1]
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
 "no-mutation": [1000, 47]
      },
      semi_huge: {
 
      },
      huge: {
    "ever-venom": [8000, 2]
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
 
      },
      semi_huge: {
      
      },
      huge: {
 rainbow: [10000, 1]
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
  
      },
      semi_huge: {
 
      },
      huge: {
 rainbow: [10000, 1],
        "ever-venom": [5000, 21]
  
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
 
      },
      semi_huge: {
      
      },
      huge: {
 
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
 
      },
      semi_huge: {
 
      },
      huge: {
     
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
        mega: [10000, 1],
        rainbow: [15000, 3]
 
      },
      semi_huge: {
     
      },
      huge: {
    
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
      
      },
      semi_huge: {
  
      },
      huge: {
  
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
 
      },
      semi_huge: {
 
      },
      huge: {
 mega: [8000, 1],
        "ever-venom": [6000, 8]
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
     "no-mutation": [1000, 28]
      },
      semi_huge: {
   
      },
      huge: {
 
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
    
      },
      semi_huge: {
 
      },
      huge: {
       
        "ever-venom": [7000, 7]
 
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
 
      },
      semi_huge: {
    
      },
      huge: {
 
        "ever-venom": [6000, 3],
   
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
 
      },
      semi_huge: {
 
        "ever-venom": [4000, 4],
   
      },
      huge: {
 
        "ever-venom": [7000, 9],
     
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
     
      },
      semi_huge: {
 
      },
      huge: {
   
        "ever-venom": [7000, 5],
 
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
  
      },
      semi_huge: {
  
      },
      huge: {
        mega: [22000, 3],
     rainbow: [26000, 1]
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

      },
      semi_huge: {

      },
      huge: {
  
        "ever-venom": [6000, 21],

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
 
      },
      semi_huge: {
   
      },
      huge: {
   
        "ever-venom": [7000, 15],
 
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
 
      },
      semi_huge: {
 
    "ever-venom": [5000, 9],
    
      },
      huge: {
   
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
    
        "no-mutation": [1800, 27]
      },
      semi_huge: {

      },
      huge: {

        "ever-venom": [4000, 19],
 
      },
      titanic_70: {
 
        "ever-venom": [28000, 19]
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
 
      },
      semi_huge: {
 
      },
      huge: {
 
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
   
      },
      semi_huge: {
     
      },
      huge: {
    
        "ever-venom": [6000, 2],
    
      },
             titanic_70: {
      
        "ever-venom": [16000, 3]
      },
      titanic_80: {
        "ever-venom": [20000, 4]
      },
      titanic_90: {
        nightmare: [25000, 2]
      },
      titanic_100: {
        "ever-venom": [35000, 8]
      },
      titanic_110: {
        nightmare: [45000, 3]
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
 
      },
      semi_huge: {
   
      },
      huge: {
    
        "ever-venom": [4000, 89],
      
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
    
      },
      semi_huge: {
   
      },
      huge: {
       
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
 "no-mutation": [18000, 7]
      },
      semi_huge: {
     
      },
      huge: {
        mega: [26000, 29],
  rainbow: [30000, 7]
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
   
      },
      semi_huge: {
   
      },
      huge: {
    
        "ever-venom": [5000, 8],
 nightmare: [5000, 16]
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
    
      },
      semi_huge: {
 
      },
       titanic_70: {
        "ever-venom": [15000, 1]
      },
      titanic_80: {
        "ever-venom": [20000, 1]
      },
      huge: {
 
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
 
      },
      semi_huge: {
 
      },
      huge: {
        mega: [15000, 1],
        "ever-venom": [10000, 1],
 
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
 
      },
      semi_huge: {
    
      },
      huge: {
   
        "ever-venom": [5000, 5],
    
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
   
      },
      semi_huge: {
 
      },
      huge: {
 
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
    
      },
      titanic_100: {
        mega: [30000, 1],
 
      }
 
    })
  }

];
