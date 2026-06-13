const state = {
  products: PRODUCTS,
  cart: loadCart(),
  search: "",
  activeFilter: "all",
  selectedProduct: null,
  selectedCategory: null,
  selectedMutation: null,
  selectedQty: 1,
  checkoutUnique: null,
  bannerIndex: 0
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const els = {
  bannerTrack: $("#bannerTrack"),
  bannerDots: $("#bannerDots"),
  topSellerGrid: $("#topSellerGrid"),
  productGrid: $("#productGrid"),
  emptyState: $("#emptyState"),
  quickFilters: $("#quickFilters"),
  searchInput: $("#searchInput"),
  cartBadge: $("#cartBadge"),
  overlay: $("#overlay"),
  productSheet: $("#productSheet"),
  cartSheet: $("#cartSheet"),
  checkoutSheet: $("#checkoutSheet"),
  openCartBtn: $("#openCartBtn"),
  sheetPetImage: $("#sheetPetImage"),
  sheetPetName: $("#sheetPetName"),
  sheetBadge: $("#sheetBadge"),
  sheetStartPrice: $("#sheetStartPrice"),
  categoryOptions: $("#categoryOptions"),
  mutationOptions: $("#mutationOptions"),
  noMutationHint: $("#noMutationHint"),
  qtyValue: $("#qtyValue"),
  stockInfo: $("#stockInfo"),
  minusQtyBtn: $("#minusQtyBtn"),
  plusQtyBtn: $("#plusQtyBtn"),
  addToCartBtn: $("#addToCartBtn"),
  cartItems: $("#cartItems"),
  cartSubtotal: $("#cartSubtotal"),
  checkoutBtn: $("#checkoutBtn"),
  qrisImage: $("#qrisImage"),
  checkoutSubtotal: $("#checkoutSubtotal"),
  uniqueCode: $("#uniqueCode"),
  checkoutTotal: $("#checkoutTotal"),
  robloxUsername: $("#robloxUsername"),
  copyOrderBtn: $("#copyOrderBtn"),
  sendWaBtn: $("#sendWaBtn"),
  toast: $("#toast"),
  waFloatBtn: $("#waFloatBtn")
};

function init() {
  document.title = `${STORE_CONFIG.storeName} - Grow a Garden Pet`;
  els.qrisImage.src = STORE_CONFIG.qrisImage;
  renderBanners();
  renderFilters();
  renderTopSellers();
  renderProducts();
  renderCartBadge();
  bindEvents();
  autoSlideBanner();
}

function bindEvents() {
  els.searchInput.addEventListener("input", (event) => {
    state.search = event.target.value.trim().toLowerCase();
    renderProducts();
  });

  els.openCartBtn.addEventListener("click", () => openSheet("cart"));
  els.checkoutBtn.addEventListener("click", () => {
    if (!state.cart.length) return toast("Keranjang masih kosong.");
    state.checkoutUnique = randomUnique();
    openSheet("checkout");
    renderCheckout();
  });

  els.minusQtyBtn.addEventListener("click", () => setModalQty(state.selectedQty - 1));
  els.plusQtyBtn.addEventListener("click", () => setModalQty(state.selectedQty + 1));
  els.addToCartBtn.addEventListener("click", addSelectedToCart);
  els.copyOrderBtn.addEventListener("click", copyOrderSummary);
  els.sendWaBtn.addEventListener("click", sendOrderToWhatsApp);
  els.waFloatBtn.addEventListener("click", () => {
    const message = encodeURIComponent(`Halo ${STORE_CONFIG.storeName}, saya mau tanya stok pet Grow a Garden.`);
    window.open(`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${message}`, "_blank");
  });

  els.overlay.addEventListener("click", closeSheets);
  $$('[data-close-sheet]').forEach((btn) => btn.addEventListener("click", closeSheets));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeSheets();
  });
}

function renderBanners() {
  els.bannerTrack.innerHTML = STORE_CONFIG.banners.map((banner, index) => `
    <article class="banner-slide" data-banner-index="${index}">
      <img src="${banner.image}" alt="${escapeHtml(banner.title)}" />
    </article>
  `).join("");

  // modern centered carousel: compute center slide on scroll and set active
  let bannerScrollTimeout;
  els.bannerTrack.addEventListener('scroll', () => {
    clearTimeout(bannerScrollTimeout);
    const slides = $$('.banner-slide');
    const trackRect = els.bannerTrack.getBoundingClientRect();
    let closest = 0;
    let closestDistance = Infinity;
    slides.forEach((s) => {
      const rect = s.getBoundingClientRect();
      const sCenter = rect.left + rect.width / 2;
      const trackCenter = trackRect.left + trackRect.width / 2;
      const dist = Math.abs(sCenter - trackCenter);
      const idx = Number(s.dataset.bannerIndex);
      if (dist < closestDistance) { closestDistance = dist; closest = idx; }
    });
    if (closest !== state.bannerIndex) {
      state.bannerIndex = closest;
    }
    bannerScrollTimeout = setTimeout(() => updateBannerDots(), 90);
  });

  // initial active
  setTimeout(() => updateBannerDots(), 40);
}

function scrollBanner(index) {
  state.bannerIndex = index;
  const slide = els.bannerTrack.querySelector(`.banner-slide[data-banner-index="${index}"]`);
  if (!slide) return;
  const trackWidth = els.bannerTrack.clientWidth;
  const targetLeft = slide.offsetLeft - (trackWidth - slide.clientWidth) / 2;
  els.bannerTrack.scrollTo({ left: targetLeft, behavior: "smooth" });
  updateBannerDots();
}

function updateBannerDots() {
  // mark active slide
  $$('.banner-slide').forEach((slide) => {
    slide.classList.toggle('active', Number(slide.dataset.bannerIndex) === state.bannerIndex);
  });
}

function autoSlideBanner() {
  if (STORE_CONFIG.banners.length <= 1) return;
  setInterval(() => {
    const next = (state.bannerIndex + 1) % STORE_CONFIG.banners.length;
    scrollBanner(next);
  }, 4800);
}

function renderFilters() {
  const filters = [
    { id: "all", label: "Semua" },
    { id: "polosan", label: "Polosan" },
    { id: "semi_huge", label: "Semi Huge" },
    { id: "huge", label: "Huge" },
    { id: "titanic", label: "Titanic" }
  ];

  els.quickFilters.innerHTML = filters.map((filter) => `
    <button type="button" class="filter-chip ${filter.id === state.activeFilter ? "active" : ""}" data-filter="${filter.id}">${filter.label}</button>
  `).join("");

  $$('[data-filter]').forEach((btn) => {
    btn.addEventListener("click", () => {
      state.activeFilter = btn.dataset.filter;
      renderFilters();
      renderProducts();
    });
  });
}

function renderTopSellers() {
  const products = STORE_CONFIG.topSellers
    .map((id) => findProduct(id))
    .filter(Boolean)
    .slice(0, 3);

  els.topSellerGrid.innerHTML = products.map((product, index) => `
    <button type="button" class="top-card" data-open-product="${product.id}">
      <img src="${product.image}" alt="${escapeHtml(product.name)}" />
      <div>
        <span class="rank">#${index + 1} TERLARIS</span>
        <h4>${escapeHtml(product.name)}</h4>
        <p>${formatRupiah(getStartPrice(product))} • ${getTotalStock(product)} stok</p>
      </div>
    </button>
  `).join("");

  bindOpenProductButtons();
}

function renderProducts() {
  const products = state.products.filter((product) => {
    const matchSearch = product.name.toLowerCase().includes(state.search);
    const matchFilter = state.activeFilter === "all" || productMatchesFilter(product, state.activeFilter);
    return matchSearch && matchFilter;
  });

  els.productGrid.innerHTML = products.map((product) => `
    <button type="button" class="product-card" data-open-product="${product.id}">
      <div class="product-media">
        <img src="${product.image}" alt="${escapeHtml(product.name)}" loading="lazy" />
      </div>
      <div class="product-info">
        <span class="badge-pill">${escapeHtml(product.badge || "Ready")}</span>
        <h4>${escapeHtml(product.name)}</h4>
        <div class="product-meta">
          <span class="price">Mulai ${formatRupiah(getStartPrice(product))}</span>
          <span class="stock-pill">${getTotalStock(product)} stok</span>
        </div>
      </div>
    </button>
  `).join("");

  els.emptyState.hidden = products.length > 0;
  bindOpenProductButtons();
}

function productMatchesFilter(product, filter) {
  const categoryIds = Object.keys(product.stock || {});
  if (filter === "titanic") return categoryIds.some((id) => id.startsWith("titanic_"));
  return categoryIds.includes(filter);
}

function bindOpenProductButtons() {
  $$('[data-open-product]').forEach((btn) => {
    btn.addEventListener("click", () => openProduct(btn.dataset.openProduct));
  });
}

function openProduct(productId) {
  const product = findProduct(productId);
  if (!product) return;

  state.selectedProduct = product;
  state.selectedCategory = getAvailableCategories(product)[0]?.id || null;
  state.selectedMutation = null;
  state.selectedQty = 1;

  els.sheetPetImage.src = product.image;
  els.sheetPetImage.alt = product.name;
  els.sheetPetName.textContent = product.name;
  els.sheetBadge.textContent = product.badge || "Ready";
  els.sheetStartPrice.textContent = `Mulai ${formatRupiah(getStartPrice(product))}`;

  renderProductOptions();
  openSheet("product");
}

function renderProductOptions() {
  const product = state.selectedProduct;
  if (!product) return;

  const categories = getAvailableCategories(product);
  els.categoryOptions.innerHTML = categories.map((category) => `
    <button type="button" class="option-chip ${category.id === state.selectedCategory ? "active" : ""}" data-category="${category.id}">
      ${escapeHtml(getCategoryLabel(product, category.id))}
    </button>
  `).join("");

  $$('[data-category]').forEach((btn) => {
    btn.addEventListener("click", () => {
      state.selectedCategory = btn.dataset.category;
      state.selectedMutation = null;
      state.selectedQty = 1;
      renderProductOptions();
    });
  });

  const mutations = getMutationsForSelectedCategory();
  if (!state.selectedMutation && mutations.length) {
    state.selectedMutation = mutations[0].id;
  }

  els.noMutationHint.hidden = mutations.length > 0;
  els.mutationOptions.innerHTML = mutations.map((mutation) => `
    <button type="button" class="option-chip ${mutation.id === state.selectedMutation ? "active" : ""}" data-mutation="${mutation.id}">
      ${escapeHtml(MUTATION_LABELS[mutation.id] || mutation.id)}
    </button>
  `).join("");

  $$('[data-mutation]').forEach((btn) => {
    btn.addEventListener("click", () => {
      state.selectedMutation = btn.dataset.mutation;
      state.selectedQty = 1;
      renderProductOptions();
    });
  });

  renderQtyState();
}

function renderQtyState() {
  const item = getSelectedVariantItem();
  const inCartQty = getCartQtyForSelection();
  const stock = item ? item[1] : 0;
  const remaining = Math.max(0, stock - inCartQty);
  const maxCanAdd = remaining;

  if (!item) {
    els.stockInfo.textContent = "Pilih kategori dan mutasi dulu.";
    els.addToCartBtn.disabled = true;
    els.qtyValue.textContent = "1";
    return;
  }

  if (maxCanAdd <= 0) {
    state.selectedQty = 1;
    els.stockInfo.textContent = `Stock tersedia ${stock}, sudah ada ${inCartQty} di keranjang. Stock habis dipilih.`;
    els.addToCartBtn.disabled = true;
    els.minusQtyBtn.disabled = true;
    els.plusQtyBtn.disabled = true;
    els.qtyValue.textContent = "0";
    return;
  }

  if (state.selectedQty > maxCanAdd) state.selectedQty = maxCanAdd;
  if (state.selectedQty < 1) state.selectedQty = 1;

  const afterAddRemaining = Math.max(0, stock - inCartQty - state.selectedQty);
  els.stockInfo.textContent = `Stock ${stock} • di keranjang ${inCartQty} • sisa setelah tambah ${afterAddRemaining}`;
  els.qtyValue.textContent = state.selectedQty;
  els.minusQtyBtn.disabled = state.selectedQty <= 1;
  els.plusQtyBtn.disabled = state.selectedQty >= maxCanAdd;
  els.addToCartBtn.disabled = false;
  els.addToCartBtn.textContent = `Tambah ${state.selectedQty} • ${formatRupiah(item[0] * state.selectedQty)}`;
}

function setModalQty(nextQty) {
  state.selectedQty = nextQty;
  renderQtyState();
}

function addSelectedToCart() {
  const product = state.selectedProduct;
  const item = getSelectedVariantItem();
  if (!product || !item) return toast("Pilih kategori dan mutasi dulu.");

  const price = item[0];
  const stock = item[1];
  const inCartQty = getCartQtyForSelection();
  const maxCanAdd = stock - inCartQty;
  if (maxCanAdd <= 0) return toast("Stock pilihan ini sudah habis di keranjang.");

  const qtyToAdd = Math.min(state.selectedQty, maxCanAdd);
  const cartId = makeCartId(product.id, state.selectedCategory, state.selectedMutation);
  const found = state.cart.find((cartItem) => cartItem.cartId === cartId);

  if (found) {
    found.qty += qtyToAdd;
  } else {
    state.cart.push({
      cartId,
      productId: product.id,
      productName: product.name,
      image: product.image,
      category: state.selectedCategory,
      mutation: state.selectedMutation,
      price,
      stock,
      qty: qtyToAdd
    });
  }

  saveCart();
  renderCartBadge();
  renderQtyState();
  toast(`${product.name} masuk keranjang (${qtyToAdd}x).`);
}

function openSheet(name) {
  els.overlay.hidden = false;
  els.productSheet.classList.toggle("open", name === "product");
  els.cartSheet.classList.toggle("open", name === "cart");
  els.checkoutSheet.classList.toggle("open", name === "checkout");
  els.productSheet.setAttribute("aria-hidden", name !== "product");
  els.cartSheet.setAttribute("aria-hidden", name !== "cart");
  els.checkoutSheet.setAttribute("aria-hidden", name !== "checkout");

  if (name === "cart") renderCart();
  if (name === "checkout") renderCheckout();
}

function closeSheets() {
  els.overlay.hidden = true;
  [els.productSheet, els.cartSheet, els.checkoutSheet].forEach((sheet) => {
    sheet.classList.remove("open");
    sheet.setAttribute("aria-hidden", "true");
  });
}

function renderCart() {
  if (!state.cart.length) {
    els.cartItems.innerHTML = `<div class="cart-empty">Keranjang masih kosong.</div>`;
  } else {
    els.cartItems.innerHTML = state.cart.map((item) => `
      <article class="cart-item">
        <img src="${item.image}" alt="${escapeHtml(item.productName)}" />
        <div>
          <h4>${escapeHtml(item.productName)}</h4>
          <p>${escapeHtml(getCategoryLabel(findProduct(item.productId), item.category))} • ${escapeHtml(MUTATION_LABELS[item.mutation] || item.mutation)}</p>
          <div class="cart-item-bottom">
            <strong>${formatRupiah(item.price * item.qty)}</strong>
            <div class="mini-qty">
              <button data-cart-minus="${item.cartId}" aria-label="Kurangi">−</button>
              <span>${item.qty}</span>
              <button data-cart-plus="${item.cartId}" aria-label="Tambah" ${item.qty >= item.stock ? "disabled" : ""}>+</button>
            </div>
            <button class="remove-btn" data-cart-remove="${item.cartId}">Hapus</button>
          </div>
        </div>
      </article>
    `).join("");
  }

  els.cartSubtotal.textContent = formatRupiah(getSubtotal());
  els.checkoutBtn.disabled = !state.cart.length;
  bindCartButtons();
}

function bindCartButtons() {
  $$('[data-cart-plus]').forEach((btn) => btn.addEventListener("click", () => changeCartQty(btn.dataset.cartPlus, 1)));
  $$('[data-cart-minus]').forEach((btn) => btn.addEventListener("click", () => changeCartQty(btn.dataset.cartMinus, -1)));
  $$('[data-cart-remove]').forEach((btn) => btn.addEventListener("click", () => removeCartItem(btn.dataset.cartRemove)));
}

function changeCartQty(cartId, delta) {
  const item = state.cart.find((cartItem) => cartItem.cartId === cartId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) state.cart = state.cart.filter((cartItem) => cartItem.cartId !== cartId);
  if (item.qty > item.stock) item.qty = item.stock;
  saveCart();
  renderCart();
  renderCartBadge();
}

function removeCartItem(cartId) {
  state.cart = state.cart.filter((item) => item.cartId !== cartId);
  saveCart();
  renderCart();
  renderCartBadge();
}

function renderCartBadge() {
  els.cartBadge.textContent = state.cart.reduce((sum, item) => sum + item.qty, 0);
}

function renderCheckout() {
  const subtotal = getSubtotal();
  const unique = state.checkoutUnique ?? randomUnique();
  state.checkoutUnique = unique;
  els.checkoutSubtotal.textContent = formatRupiah(subtotal);
  els.uniqueCode.textContent = `+ ${formatRupiah(unique)}`;
  els.checkoutTotal.textContent = formatRupiah(subtotal + unique);
}

function copyOrderSummary() {
  const text = buildOrderSummary();
  navigator.clipboard?.writeText(text).then(() => {
    toast("Ringkasan order disalin.");
  }).catch(() => {
    toast("Gagal copy otomatis, coba kirim WA saja.");
  });
}

function sendOrderToWhatsApp() {
  const username = els.robloxUsername.value.trim();
  if (!username) return toast("Isi username Roblox dulu.");
  const message = encodeURIComponent(buildOrderSummary());
  window.open(`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${message}`, "_blank");
}

function buildOrderSummary() {
  const username = els.robloxUsername.value.trim() || "Belum diisi";
  const joinMethod = document.querySelector('input[name="joinMethod"]:checked')?.value || "Add / join lewat username";
  const subtotal = getSubtotal();
  const unique = state.checkoutUnique ?? randomUnique();
  const total = subtotal + unique;
  const orderLines = state.cart.map((item, index) => {
    const product = findProduct(item.productId);
    return `${index + 1}. ${item.productName}\n   - Berat: ${getCategoryLabel(product, item.category)}\n   - Mutasi: ${MUTATION_LABELS[item.mutation] || item.mutation}\n   - Qty: ${item.qty}\n   - Harga: ${formatRupiah(item.price * item.qty)}`;
  }).join("\n");

  return `Halo ${STORE_CONFIG.storeName}, saya mau checkout pet Grow a Garden.\n\nUsername Roblox: ${username}\nMetode join: ${joinMethod}\n${joinMethod.includes("Private") ? `Link PS: ${STORE_CONFIG.privateServerLink}\n` : ""}\nOrder:\n${orderLines}\n\nSubtotal: ${formatRupiah(subtotal)}\nAngka unik: ${formatRupiah(unique)}\nTotal transfer: ${formatRupiah(total)}\n\nSaya akan bayar via QRIS sesuai total transfer.`;
}

function getAvailableCategories(product) {
  return Object.keys(product.stock || {})
    .filter((categoryId) => Object.values(product.stock[categoryId] || {}).some((item) => item[1] > 0))
    .map((id) => ({ id, label: getCategoryLabel(product, id) }));
}

function getMutationsForSelectedCategory() {
  const product = state.selectedProduct;
  const category = state.selectedCategory;
  if (!product || !category) return [];
  const mutationMap = product.stock[category] || {};
  return Object.entries(mutationMap)
    .filter(([, item]) => item[1] > 0)
    .map(([id, item]) => ({ id, price: item[0], stock: item[1] }));
}

function getSelectedVariantItem() {
  const product = state.selectedProduct;
  if (!product || !state.selectedCategory || !state.selectedMutation) return null;
  return product.stock?.[state.selectedCategory]?.[state.selectedMutation] || null;
}

function getCartQtyForSelection() {
  const product = state.selectedProduct;
  if (!product || !state.selectedCategory || !state.selectedMutation) return 0;
  const cartId = makeCartId(product.id, state.selectedCategory, state.selectedMutation);
  const found = state.cart.find((item) => item.cartId === cartId);
  return found ? found.qty : 0;
}

function getCategoryLabel(product, categoryId) {
  // Khusus Mimic Octopus: 70kg+ diganti sesuai request.
  if (product?.id === "mimic-octopus" && categoryId === "titanic_70") return "69,4kg+ 15s";
  return CATEGORY_LABELS[categoryId] || categoryId;
}

function getStartPrice(product) {
  const prices = [];
  Object.values(product.stock || {}).forEach((mutationMap) => {
    Object.values(mutationMap || {}).forEach((item) => {
      const [price, stock] = item;
      if (stock > 0) prices.push(price);
    });
  });
  return prices.length ? Math.min(...prices) : 0;
}

function getTotalStock(product) {
  let total = 0;
  Object.values(product.stock || {}).forEach((mutationMap) => {
    Object.values(mutationMap || {}).forEach((item) => total += Number(item[1] || 0));
  });
  return total;
}

function getSubtotal() {
  return state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function findProduct(id) {
  return state.products.find((product) => product.id === id);
}

function makeCartId(productId, category, mutation) {
  return `${productId}__${category}__${mutation}`;
}

function randomUnique() {
  const min = STORE_CONFIG.uniqueNumber.min;
  const max = STORE_CONFIG.uniqueNumber.max;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formatRupiah(number) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(number || 0);
}

function saveCart() {
  localStorage.setItem("dudeung_cart", JSON.stringify(state.cart));
}

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem("dudeung_cart")) || [];
  } catch {
    return [];
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#039;",
    '"': "&quot;"
  }[char]));
}

let toastTimer;
function toast(message) {
  clearTimeout(toastTimer);
  els.toast.textContent = message;
  els.toast.classList.add("show");
  toastTimer = setTimeout(() => els.toast.classList.remove("show"), 2300);
}

init();
