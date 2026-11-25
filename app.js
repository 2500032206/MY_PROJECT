const STORAGE = {
  buyers: 'harvest-home-buyers',
  farmers: 'harvest-home-farmers',
  admins: 'harvest-home-admins',
  products: 'harvest-home-products',
  orders: 'harvest-home-orders',
  cart: 'harvest-home-cart',
  session: 'harvest-home-session',
  location: 'harvest-home-location'
};

const marketLocations = ['Guntur', 'Vijayawada', 'Tenali'];

const productPhotos = {
  Vegetables: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=78',
  Fruits: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=700&q=78',
  Pulses: 'https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&w=700&q=78',
  Grains: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=700&q=78',
  Dairy: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=700&q=78',
  Spices: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=700&q=78',
  'Dry Fruits': 'https://images.unsplash.com/photo-1608797178974-15b35a64ede9?auto=format&fit=crop&w=700&q=78',
  Other: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=700&q=78'
};

const productPhotoIds = {
  'tomatoes': 19689768,
  'spinach': 8845078,
  'potatoes': 33653570,
  'red onions': 35699716,
  'carrots': 38571507,
  'okra': 28577186,
  'cauliflower': 15024100,
  'green beans': 34387471,
  'eggplant': 16732700,
  'cabbage': 18121554,
  'green chillies': 13422250,
  'cucumbers': 39154015,
  'pumpkin': 10011895,
  'bitter gourd': 37202280,
  'drumsticks': 4884808,
  'green peas': 32886995,
  'bananas': 7543209,
  'mangoes': 7543212,
  'apples': 39732801,
  'oranges': 32486612,
  'papaya': 28613331,
  'guava': 12333812,
  'pomegranate': 10816674,
  'watermelon': 13425283,
  'pineapple': 9228144,
  'lemons': 33479213,
  'chickpeas': 7656561,
  'toor dal': 36021103,
  'green gram': 7420818,
  'red lentils': 34940646,
  'black gram': 35553040,
  'kidney beans': 6316686,
  'cowpeas': 3671651,
  'pearl millet': 10738421,
  'brown rice': 8108070,
  'sona masoori rice': 8108069,
  'wheat': 54084,
  'finger millet': 8964255,
  'corn': 9457699,
  'foxtail millet': 18275951,
  'jaggery': 37863445,
  'farm milk': 1435446,
  'free-range eggs': 35589490,
  'fresh paneer': 37303315,
  almonds: 35339669,
  cashews: 36631827,
  raisins: 35166629,
  'turmeric': 7988019,
  'coriander seeds': 5988179,
  'red chilli': 7264506,
  'cumin seeds': 15352081,
  'dragon fruit': 2562547,
  dragonfruit: 2562547,
  pitaya: 2562547,
  avocado: 12956043,
  grapes: 6844554,
  grape: 6844554,
  strawberries: 277262,
  strawberry: 277262,
  broccoli: 38948397,
  garlic: 4197495,
  ginger: 4871342,
  beetroot: 7511800,
  beets: 7511800,
  'sweet potato': 36096910,
  'sweet potatoes': 36096910,
  coconut: 3986710,
  dates: 3993529,
  mushrooms: 34184852,
  'fresh mushrooms': 34184852,
  'beetroot': 7511800,
  'beetroots': 7511800,
  'strawberry': 277262,
  'strawberries': 277262,
  'green broccoli': 38948397,
  'fresh broccoli': 38948397,
  'fresh garlic': 4197495,
  'ginger root': 4871342,
  'purple sweet potatoes': 36096910,
  'fresh coconut': 3986710,
  'fresh dates': 3993529,
  pitaya: 2562547,
  dragonfruit: 2562547,
  'dragon fruit': 2562547,
  'black grapes': 6844554,
  'green grapes': 6844554,
  'red grapes': 25724454,
  avocado: 12956043,
  grapes: 6844554,
  grape: 6844554,
  broccoli: 38948397,
  garlic: 4197495,
  ginger: 4871342,
  coconut: 3986710,
  dates: 3993529,
  'sweet potatoes': 36096910,
  'sweet potato': 36096910,
  mushroom: 34184852
};
const productPhotoNames = Object.keys(productPhotoIds).sort((first, second) => second.length - first.length);
function productImageUrl(product) {
  const name = product.name.trim().toLowerCase().replace(/[^a-z0-9]+/g, ' ');
  const photoId = productPhotoIds[name] || productPhotoIds[productPhotoNames.find(photoName => name.includes(photoName))];
  if (product.image) return product.image;
  if (photoId) return `https://images.pexels.com/photos/${photoId}/pexels-photo-${photoId}.jpeg?auto=compress&cs=tinysrgb&w=700`;
  return product.photo || productPhotos[product.category];
}

const starterProducts = [
  ['Tomatoes', 'Vegetables', 38, 'kg', 28, 'Valli Farm', 'Sun-ripened, firm and full of flavour.'],
  ['Spinach', 'Vegetables', 24, 'bunch', 18, 'Green Valley Co-op', 'Tender leaves, harvested this morning.'],
  ['Potatoes', 'Vegetables', 32, 'kg', 45, 'Riverbend Growers', 'Earthy everyday potatoes, grown slowly.'],
  ['Red onions', 'Vegetables', 42, 'kg', 35, 'Valli Farm', 'Naturally sweet, cured after harvest.'],
  ['Carrots', 'Vegetables', 48, 'kg', 20, 'Hilltop Organics', 'Sweet, crisp carrots from rich soil.'],
  ['Okra', 'Vegetables', 55, 'kg', 16, 'Green Valley Co-op', 'Fresh-picked tender bhindi.'],
  ['Cauliflower', 'Vegetables', 38, 'piece', 14, 'Riverbend Growers', 'Compact white heads, picked to order.'],
  ['Green beans', 'Vegetables', 62, 'kg', 13, 'Hilltop Organics', 'Crisp beans with a clean snap.'],
  ['Eggplant', 'Vegetables', 44, 'kg', 18, 'Valli Farm', 'Glossy purple brinjals, locally grown.'],
  ['Cabbage', 'Vegetables', 30, 'piece', 21, 'Green Valley Co-op', 'Firm, leafy and wonderfully versatile.'],
  ['Green chillies', 'Vegetables', 60, 'kg', 12, 'Riverbend Growers', 'A lively kick for everyday cooking.'],
  ['Cucumbers', 'Vegetables', 35, 'kg', 19, 'Hilltop Organics', 'Cool, crunchy cucumbers.'],
  ['Pumpkin', 'Vegetables', 28, 'kg', 25, 'Valli Farm', 'Sweet-fleshed seasonal pumpkin.'],
  ['Bitter gourd', 'Vegetables', 52, 'kg', 12, 'Green Valley Co-op', 'Fresh karela with a bold bite.'],
  ['Drumsticks', 'Vegetables', 70, 'kg', 10, 'Riverbend Growers', 'Young moringa pods, tender and fresh.'],
  ['Green peas', 'Vegetables', 85, 'kg', 9, 'Hilltop Organics', 'Sweet peas, shelled to order.'],
  ['Bananas', 'Fruits', 48, 'dozen', 30, 'Valli Farm', 'Naturally ripened, sweet and satisfying.'],
  ['Mangoes', 'Fruits', 110, 'kg', 24, 'Green Valley Co-op', 'Seasonal mangoes, fragrant and golden.'],
  ['Apples', 'Fruits', 150, 'kg', 16, 'Hilltop Organics', 'Crisp orchard apples with a bright finish.'],
  ['Oranges', 'Fruits', 80, 'kg', 26, 'Riverbend Growers', 'Juicy, bright and full of sunshine.'],
  ['Papaya', 'Fruits', 55, 'piece', 13, 'Valli Farm', 'Soft-sweet papaya, picked at the right time.'],
  ['Guava', 'Fruits', 70, 'kg', 15, 'Hilltop Organics', 'Aromatic, pink-centred guavas.'],
  ['Pomegranate', 'Fruits', 145, 'kg', 11, 'Green Valley Co-op', 'Jewel-like seeds, sweet and tart.'],
  ['Watermelon', 'Fruits', 32, 'kg', 17, 'Riverbend Growers', 'Cool, refreshing and ready to share.'],
  ['Pineapple', 'Fruits', 65, 'piece', 9, 'Valli Farm', 'Golden fruit with a lively tang.'],
  ['Lemons', 'Fruits', 65, 'kg', 20, 'Green Valley Co-op', 'Thin-skinned lemons with plenty of juice.'],
  ['Chickpeas', 'Pulses', 105, 'kg', 35, 'Hilltop Organics', 'Whole desi chana, clean and sun-dried.'],
  ['Toor dal', 'Pulses', 145, 'kg', 22, 'Riverbend Growers', 'Locally grown pigeon peas, unpolished.'],
  ['Green gram', 'Pulses', 125, 'kg', 19, 'Valli Farm', 'Nutty whole moong, naturally sorted.'],
  ['Red lentils', 'Pulses', 115, 'kg', 24, 'Green Valley Co-op', 'Everyday masoor dal from local growers.'],
  ['Black gram', 'Pulses', 135, 'kg', 16, 'Hilltop Organics', 'Whole urad with its natural skin intact.'],
  ['Kidney beans', 'Pulses', 155, 'kg', 12, 'Riverbend Growers', 'Rich rajma, carefully dried and sorted.'],
  ['Cowpeas', 'Pulses', 98, 'kg', 14, 'Valli Farm', 'Earthy, protein-rich lobia.'],
  ['Pearl millet', 'Grains', 58, 'kg', 40, 'Green Valley Co-op', 'Nutritious bajra from rain-fed fields.'],
  ['Brown rice', 'Grains', 88, 'kg', 36, 'Riverbend Growers', 'Unpolished rice with its wholesome bran.'],
  ['Sona masoori rice', 'Grains', 72, 'kg', 50, 'Valli Farm', 'Light, fragrant rice grown close to home.'],
  ['Wheat', 'Grains', 48, 'kg', 48, 'Hilltop Organics', 'Clean whole wheat, stone-mill ready.'],
  ['Finger millet', 'Grains', 64, 'kg', 29, 'Green Valley Co-op', 'Mineral-rich ragi from local fields.'],
  ['Corn', 'Grains', 42, 'kg', 25, 'Riverbend Growers', 'Golden maize, naturally dried.'],
  ['Foxtail millet', 'Grains', 92, 'kg', 18, 'Valli Farm', 'A small, nourishing grain with a nutty taste.'],
  ['Jaggery', 'Grains', 78, 'kg', 15, 'Hilltop Organics', 'Unrefined cane jaggery, slow-cooked in small batches.'],
  ['Farm milk', 'Dairy', 38, 'litre', 24, 'Green Valley Co-op', 'Fresh whole milk from a small family dairy.'],
  ['Free-range eggs', 'Dairy', 72, 'dozen', 18, 'Riverbend Growers', 'Collected daily from free-range hens.'],
  ['Fresh paneer', 'Dairy', 110, 'kg', 8, 'Valli Farm', 'Soft, fresh paneer made in small batches.'],
  ['Turmeric', 'Spices', 95, 'kg', 17, 'Hilltop Organics', 'Bright, earthy turmeric, naturally dried.'],
  ['Coriander seeds', 'Spices', 125, 'kg', 14, 'Green Valley Co-op', 'Fragrant whole seeds from this season’s crop.'],
  ['Red chilli', 'Spices', 180, 'kg', 10, 'Riverbend Growers', 'Sun-dried chillies with a deep, warming heat.'],
  ['Cumin seeds', 'Spices', 210, 'kg', 9, 'Valli Farm', 'Warm, aromatic jeera from small growers.'],
  ['Almonds', 'Dry Fruits', 720, 'kg', 12, 'Hilltop Organics', 'Whole almonds, carefully sorted and packed.'],
  ['Cashews', 'Dry Fruits', 860, 'kg', 10, 'Riverbend Growers', 'Creamy whole cashews from trusted growers.'],
  ['Raisins', 'Dry Fruits', 280, 'kg', 16, 'Valli Farm', 'Naturally sweet, sun-dried raisins.'],
  ['Raw honey', 'Other', 320, 'jar', 8, 'Green Valley Co-op', 'Small-batch honey from local apiaries.'],
  ['Cold-pressed groundnut oil', 'Other', 240, 'litre', 11, 'Hilltop Organics', 'Traditional cold-pressed oil from local peanuts.']
].map((item, index) => ({
  id: `seed-${index + 1}`,
  name: item[0], category: item[1], price: item[2], unit: item[3], stock: item[4],
  locationPrices: locationPricesFor(item[0], item[2], true),
  farm: item[5], description: item[6], owner: 'market', photo: productPhotos[item[1]], active: true
}));

const saiDemoAccount = { name: 'Sai', email: 'sai@gamil.com', password: '123456' };
const adminDemoAccount = { name: 'Administrator', email: 'admin@harvesthome.com', password: 'admin123' };
const saiDemoProducts = [
  { id: 'sai-seed-dragon-fruit', name: 'Dragon fruit', category: 'Fruits', price: 110, unit: 'kg', stock: 12, description: 'Fresh dragon fruit from Sai farm.', image: '', photo: productPhotos.Fruits },
  { id: 'sai-seed-avocado', name: 'Avocado', category: 'Fruits', price: 160, unit: 'kg', stock: 9, description: 'Creamy, locally grown avocados.', image: '', photo: productPhotos.Fruits },
  { id: 'sai-seed-strawberries', name: 'Strawberries', category: 'Fruits', price: 140, unit: 'box', stock: 14, description: 'Sweet strawberries, picked fresh.', image: '', photo: productPhotos.Fruits },
  { id: 'sai-seed-broccoli', name: 'Broccoli', category: 'Vegetables', price: 85, unit: 'kg', stock: 16, description: 'Fresh green broccoli florets.', image: '', photo: productPhotos.Vegetables },
  { id: 'sai-seed-sweet-potato', name: 'Sweet potatoes', category: 'Vegetables', price: 58, unit: 'kg', stock: 20, description: 'Earthy sweet potatoes from Sai farm.', image: '', photo: productPhotos.Vegetables },
  { id: 'sai-seed-garlic', name: 'Garlic', category: 'Vegetables', price: 125, unit: 'kg', stock: 11, description: 'Fresh whole garlic bulbs.', image: '', photo: productPhotos.Vegetables },
  { id: 'sai-seed-ginger', name: 'Ginger', category: 'Spices', price: 95, unit: 'kg', stock: 13, description: 'Aromatic fresh ginger root.', image: '', photo: productPhotos.Spices },
  { id: 'sai-seed-beetroot', name: 'Beetroot', category: 'Vegetables', price: 52, unit: 'kg', stock: 17, description: 'Fresh beetroots with earthy sweetness.', image: '', photo: productPhotos.Vegetables },
  { id: 'sai-seed-coconut', name: 'Coconut', category: 'Fruits', price: 38, unit: 'piece', stock: 18, description: 'Fresh mature coconuts.', image: '', photo: productPhotos.Fruits },
  { id: 'sai-seed-dates', name: 'Dates', category: 'Fruits', price: 190, unit: 'kg', stock: 8, description: 'Naturally sweet dates.', image: '', photo: productPhotos.Fruits },
  { id: 'sai-seed-mushrooms', name: 'Mushrooms', category: 'Vegetables', price: 150, unit: 'kg', stock: 10, description: 'Fresh mushrooms harvested in small batches.', image: '', photo: productPhotos.Vegetables },
  { id: 'sai-seed-grapes', name: 'Grapes', category: 'Fruits', price: 95, unit: 'kg', stock: 15, description: 'Juicy, seedless grapes.', image: '', photo: productPhotos.Fruits }
].map(product => ({ ...product, farm: 'Sai Farm', owner: saiDemoAccount.email, active: true }));

function readStore(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return value ?? fallback;
  } catch {
    return fallback;
  }
}

function writeStore(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getSelectedLocation() {
  const savedLocation = readStore(STORAGE.location, marketLocations[0]);
  return marketLocations.includes(savedLocation) ? savedLocation : marketLocations[0];
}

function locationPricesFor(name, basePrice, useSamplePrices = false) {
  const normalizedName = String(name).trim().toLowerCase();
  if (useSamplePrices && normalizedName === 'tomatoes') return { Guntur: 25, Vijayawada: 30, Tenali: 22 };
  if (useSamplePrices && normalizedName === 'potatoes') return { Guntur: 35, Vijayawada: 40, Tenali: 32 };

  const price = Number(basePrice);
  return {
    Guntur: Math.max(1, Math.round(price * 0.95)),
    Vijayawada: Math.max(1, Math.round(price * 1.12)),
    Tenali: Math.max(1, Math.round(price * 0.88))
  };
}

function productPrice(product, location = getSelectedLocation()) {
  return Number(product.locationPrices?.[location] ?? product.price);
}

function initLocationSelector() {
  const storedLocation = readStore(STORAGE.location, marketLocations[0]);
  const selectedLocation = marketLocations.includes(storedLocation) ? storedLocation : marketLocations[0];
  writeStore(STORAGE.location, selectedLocation);
  document.querySelectorAll('[data-location-select]').forEach(select => {
    select.value = selectedLocation;
    select.addEventListener('change', () => {
      writeStore(STORAGE.location, select.value);
      document.querySelectorAll('[data-location-select]').forEach(item => { item.value = select.value; });
      window.dispatchEvent(new CustomEvent('marketlocationchange'));
    });
  });
  window.addEventListener('storage', event => {
    if (event.key !== STORAGE.location) return;
    const location = getSelectedLocation();
    document.querySelectorAll('[data-location-select]').forEach(select => { select.value = location; });
    window.dispatchEvent(new CustomEvent('marketlocationchange'));
  });
}

function normalizeProductPrices(product) {
  const hasAllLocations = marketLocations.every(location =>
    Number.isFinite(Number(product.locationPrices?.[location])) && Number(product.locationPrices[location]) > 0)
    && new Set(marketLocations.map(location => Number(product.locationPrices[location]))).size === marketLocations.length;
  return hasAllLocations ? product : {
    ...product,
    locationPrices: locationPricesFor(product.name, product.price, product.owner === 'market')
  };
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character]);
}

function getProducts() {
  const stored = readStore(STORAGE.products, null);
  if (!stored) {
    writeStore(STORAGE.products, starterProducts);
    return starterProducts;
  }
  const normalizedProducts = stored.map(normalizeProductPrices);
  if (normalizedProducts.some((product, index) => product !== stored[index])) {
    writeStore(STORAGE.products, normalizedProducts);
  }
  return normalizedProducts;
}

function ensureSaiDemoData() {
  const farmers = readStore(STORAGE.farmers, []);
  if (!farmers.some(account => account.email === saiDemoAccount.email)) {
    farmers.push(saiDemoAccount);
    writeStore(STORAGE.farmers, farmers);
  }

  const products = getProducts();
  const existingIds = new Set(products.map(product => product.id));
  const missingProducts = [
    ...starterProducts.filter(product => !existingIds.has(product.id)),
    ...saiDemoProducts.filter(product => !existingIds.has(product.id))
  ];
  if (missingProducts.length) writeStore(STORAGE.products, [...products, ...missingProducts]);

  const admins = readStore(STORAGE.admins, []);
  if (!admins.some(account => account.email === adminDemoAccount.email)) {
    admins.push(adminDemoAccount);
    writeStore(STORAGE.admins, admins);
  }
}

function getSession() {
  return readStore(STORAGE.session, null);
}

function setMessage(form, message) {
  const element = form.querySelector('.form-message');
  if (element) element.textContent = message;
}

function initAuth(page) {
  const role = page === 'farmer-login' ? 'farmer' : page === 'admin-login' ? 'admin' : 'buyer';
  const form = document.querySelector('[data-auth-form]');
  if (!form) return;

  const activeSession = getSession();
  if (activeSession?.role === role) {
    location.replace(role === 'farmer' ? 'farmer.html' : role === 'admin' ? 'admin.html' : 'buyer.html');
    return;
  }

  if (role === 'admin') {
    document.querySelectorAll('[data-auth-tab="signup"]').forEach(tab => { tab.hidden = true; });
  }

  document.querySelectorAll('[data-auth-tab]').forEach(tab => {
    tab.addEventListener('click', () => {
      const mode = tab.dataset.authTab;
      form.dataset.mode = mode;
      document.querySelectorAll('[data-auth-tab]').forEach(item => item.classList.toggle('is-active', item === tab));
      const nameField = form.querySelector('[data-field="name"]');
      nameField.hidden = mode !== 'signup';
      nameField.querySelector('input').required = mode === 'signup';
      form.querySelector('[data-submit-label]').textContent = mode === 'signup'
        ? `Create ${role === 'farmer' ? 'farmer' : 'buyer'} account`
        : role === 'farmer' ? 'Sign in to your farm' : role === 'admin' ? 'Sign in to admin' : 'Sign in to shop';
      form.querySelector('input[name="password"]').autocomplete = mode === 'signup' ? 'new-password' : 'current-password';
      setMessage(form, '');
    });
  });

  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const email = String(data.get('email')).trim().toLowerCase();
    const password = String(data.get('password'));
    const mode = form.dataset.mode;
    const accountKey = role === 'farmer' ? STORAGE.farmers : role === 'admin' ? STORAGE.admins : STORAGE.buyers;
    const accounts = readStore(accountKey, []);
    let account;

    if (mode === 'signup') {
      const name = String(data.get('name')).trim();
      if (!name) return setMessage(form, 'Please enter your name.');
      if (accounts.some(item => item.email === email)) return setMessage(form, 'An account with this email already exists. Sign in instead.');
      account = { name, email, password };
      accounts.push(account);
      writeStore(accountKey, accounts);
    } else {
      account = accounts.find(item => item.email === email && item.password === password);
      if (!account) return setMessage(form, 'Those details do not match an account. Check them or create an account.');
    }

    writeStore(STORAGE.session, { role, name: account.name, email: account.email });
    location.href = role === 'farmer' ? 'farmer.html' : role === 'admin' ? 'admin.html' : 'buyer.html';
  });
}

function requireRole(role) {
  const session = getSession();
  if (!session || session.role !== role) {
    location.replace(role === 'farmer' ? 'farmer-login.html' : role === 'admin' ? 'admin-login.html' : 'buyer-login.html');
    return null;
  }
  return session;
}

function initLogout() {
  document.querySelector('[data-logout]')?.addEventListener('click', () => {
    localStorage.removeItem(STORAGE.session);
    location.href = 'index.html';
  });
}

function money(amount) {
  return `₹${Number(amount).toLocaleString('en-IN')}`;
}

function formatDate(value) {
  return new Date(value).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

function statusClass(status) {
  if (status === 'Delivered') return 'status-delivered';
  if (status === 'Cancelled') return 'status-cancelled';
  return '';
}

function countOrderItems(orders) {
  return orders.reduce((total, order) => {
    if (order.status === 'Cancelled') return total;
    return total + (order.items || []).reduce((itemTotal, item) => itemTotal + Math.max(0, Number(item.quantity) || 0), 0);
  }, 0);
}

function initBuyer(session) {
  const name = document.querySelector('[data-account-name]');
  if (name) name.textContent = `Hi, ${session.name}`;
  initLogout();
  getProducts();

  let activeCategory = 'All';
  let showingWishlist = false;
  const search = document.querySelector('#product-search');
  const productGrid = document.querySelector('[data-product-grid]');
  const cartKey = `${STORAGE.cart}-${session.email}`;
  const wishlistKey = `harvest-home-wishlist-${session.email}`;

  function cart() { return readStore(cartKey, []); }
  function saveCart(items) { writeStore(cartKey, items); renderCart(); }
  function wishlist() { return readStore(wishlistKey, []); }
  function renderOrderCount() {
    const orders = readStore(STORAGE.orders, []).filter(order => order.buyerEmail === session.email);
    document.querySelector('[data-order-count]').textContent = countOrderItems(orders);
  }

  function renderProducts() {
    const query = search.value.trim().toLowerCase();
    const products = getProducts().filter(product => product.active && product.stock > 0)
      .filter(product => activeCategory === 'All' || product.category === activeCategory)
      .filter(product => !showingWishlist || wishlist().includes(product.id))
      .filter(product => `${product.name} ${product.category} ${product.farm}`.toLowerCase().includes(query));
    const wishlistButton = document.querySelector('[data-toggle-wishlist]');
    wishlistButton.setAttribute('aria-pressed', String(showingWishlist));
    wishlistButton.classList.toggle('is-selected', showingWishlist);
    document.querySelector('[data-wishlist-count]').textContent = wishlist().length;
    document.querySelector('[data-result-count]').textContent = `(${products.length})`;
    document.querySelector('[data-market-heading]').textContent = showingWishlist ? 'Your wishlist' : 'At the market';
    productGrid.innerHTML = products.length ? products.map(product => {
      const saved = wishlist().includes(product.id);
      const fallbackImage = productPhotos[product.category];
      return `<article class="product-card"><div class="product-image"><img class="product-photo" src="${escapeHtml(productImageUrl(product))}" data-image-fallback="${escapeHtml(fallbackImage)}" alt="${escapeHtml(product.name)}" loading="lazy"><span class="product-badge">${escapeHtml(product.category)}</span><button class="wishlist-toggle${saved ? ' is-saved' : ''}" type="button" data-toggle-product="${escapeHtml(product.id)}" aria-label="${saved ? 'Remove from' : 'Add to'} wishlist: ${escapeHtml(product.name)}" aria-pressed="${saved}" title="${saved ? 'Remove from' : 'Add to'} wishlist">${saved ? '♥' : '♡'}</button></div><div class="product-info"><p class="product-farm">From ${escapeHtml(product.farm)}</p><p class="product-location">Available in ${escapeHtml(getSelectedLocation())}</p><div class="product-name-line"><h3>${escapeHtml(product.name)}</h3><span class="product-price">${money(productPrice(product))}</span></div><p class="product-unit">per ${escapeHtml(product.unit)}</p><div class="product-bottom"><span class="stock-note">${Number(product.stock)} ${escapeHtml(product.unit)} available</span><div class="product-actions"><button class="add-button" type="button" data-add-cart="${escapeHtml(product.id)}">Add to Cart</button><button class="order-now-button" type="button" data-order-now="${escapeHtml(product.id)}">Buy Now ↗</button></div></div></div></article>`;
    }).join('') : `<div class="empty-state"><strong>${showingWishlist ? 'Your wishlist is waiting for its first pick.' : 'Nothing on this stall just yet.'}</strong>${showingWishlist ? '<button class="quiet-link" type="button" data-show-market>Browse the market →</button>' : 'Try another search or category.'}</div>`;
    productGrid.querySelectorAll('[data-image-fallback]').forEach(image => image.addEventListener('error', () => {
      image.src = image.dataset.imageFallback;
    }, { once: true }));
    productGrid.querySelectorAll('[data-toggle-product]').forEach(button => button.addEventListener('click', () => {
      const saved = new Set(wishlist());
      if (saved.has(button.dataset.toggleProduct)) saved.delete(button.dataset.toggleProduct);
      else saved.add(button.dataset.toggleProduct);
      writeStore(wishlistKey, [...saved]);
      renderProducts();
    }));
    productGrid.querySelector('[data-show-market]')?.addEventListener('click', () => {
      showingWishlist = false;
      renderProducts();
    });
    productGrid.querySelectorAll('[data-add-cart], [data-order-now]').forEach(button => button.addEventListener('click', () => {
      const productId = button.dataset.addCart || button.dataset.orderNow;
      const product = getProducts().find(item => item.id === productId);
      if (!product) return;
      const items = cart();
      const existing = items.find(item => item.productId === product.id);
      if (existing) existing.quantity = Math.min(existing.quantity + 1, Number(product.stock));
      else items.push({ productId: product.id, quantity: 1 });
      saveCart(items);
      if (button.hasAttribute('data-order-now')) openCart();
    }));
  }

  function renderCart() {
    const products = getProducts();
    const items = cart().filter(item => products.some(product => product.id === item.productId && product.active));
    const count = items.reduce((total, item) => total + Number(item.quantity), 0);
    document.querySelector('[data-cart-count]').textContent = count;
    const cartItems = document.querySelector('[data-cart-items]');
    const checkout = document.querySelector('[data-cart-checkout]');
    if (!items.length) {
      cartItems.innerHTML = '<div class="cart-empty">Your basket is taking a little breather.<br>Find something fresh at the market.</div>';
      checkout.innerHTML = '';
      return;
    }
    cartItems.innerHTML = items.map(item => {
      const product = products.find(entry => entry.id === item.productId);
      const price = productPrice(product);
      return `<article class="cart-line"><div><h3>${escapeHtml(product.name)}</h3><p>${money(price)} / ${escapeHtml(product.unit)} · ${escapeHtml(getSelectedLocation())}</p><div class="quantity-control"><button type="button" data-quantity="-1" data-product="${escapeHtml(product.id)}" aria-label="Remove one ${escapeHtml(product.name)}">−</button><span>${item.quantity}</span><button type="button" data-quantity="1" data-product="${escapeHtml(product.id)}" aria-label="Add one ${escapeHtml(product.name)}">＋</button><button class="cart-remove-item" type="button" data-remove-item="${escapeHtml(product.id)}">Remove</button></div></div><span class="cart-line-price">${money(price * item.quantity)}</span></article>`;
    }).join('');
    const total = items.reduce((sum, item) => sum + productPrice(products.find(product => product.id === item.productId)) * item.quantity, 0);
    checkout.innerHTML = `<div class="cart-total"><span>Basket total · ${escapeHtml(getSelectedLocation())}</span><span>${money(total)}</span></div><button class="button button-green" type="button" data-checkout>Place order <span aria-hidden="true">↗</span></button><p class="cart-checkout-note">Your order goes straight to the farmer.</p>`;
    cartItems.querySelectorAll('[data-quantity]').forEach(button => button.addEventListener('click', () => {
      const product = products.find(entry => entry.id === button.dataset.product);
      const updated = cart().map(item => item.productId === product.id
        ? { ...item, quantity: Math.min(Number(product.stock), item.quantity + Number(button.dataset.quantity)) }
        : item).filter(item => item.quantity > 0);
      saveCart(updated);
    }));
    cartItems.querySelectorAll('[data-remove-item]').forEach(button => button.addEventListener('click', () => saveCart(cart().filter(item => item.productId !== button.dataset.removeItem))));
    checkout.querySelector('[data-checkout]').addEventListener('click', placeOrder);
  }

  function placeOrder() {
    const products = getProducts();
    const items = cart();
    if (!items.length) return;
    const liveItems = items.map(item => ({ item, product: products.find(product => product.id === item.productId) }))
      .filter(entry => entry.product?.active && Number(entry.product.stock) >= Number(entry.item.quantity));
    if (liveItems.length !== items.length) {
      saveCart(liveItems.map(({ item }) => item));
      window.alert('Some produce is no longer available in that quantity. Please review your basket.');
      return;
    }
    const orderItems = liveItems.map(({ item, product }) => ({
      productId: product.id, name: product.name, category: product.category, unit: product.unit,
      price: productPrice(product), quantity: Number(item.quantity), farm: product.farm,
      farmerEmail: product.owner === 'market' ? '' : product.owner
    }));
    const total = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const orders = readStore(STORAGE.orders, []);
    const orderId = `HH-${Date.now().toString().slice(-7)}`;
    orders.unshift({
      id: orderId, buyerName: session.name, buyerEmail: session.email,
      items: orderItems, total, marketLocation: getSelectedLocation(), status: 'New', createdAt: new Date().toISOString()
    });
    writeStore(STORAGE.orders, orders);
    const updatedProducts = products.map(product => {
      const ordered = orderItems.find(item => item.productId === product.id);
      return ordered ? { ...product, stock: Number(product.stock) - ordered.quantity } : product;
    });
    writeStore(STORAGE.products, updatedProducts);
    writeStore(cartKey, []);
    location.href = `orders.html?placed=${encodeURIComponent(orderId)}`;
  }

  const drawer = document.querySelector('[data-cart-drawer]');
  const backdrop = document.querySelector('[data-cart-backdrop]');
  function openCart() { drawer.classList.add('is-open'); backdrop.classList.add('is-open'); drawer.setAttribute('aria-hidden', 'false'); }
  function closeCart() { drawer.classList.remove('is-open'); backdrop.classList.remove('is-open'); drawer.setAttribute('aria-hidden', 'true'); }
  document.querySelector('[data-open-cart]').addEventListener('click', openCart);
  document.querySelector('[data-close-cart]').addEventListener('click', closeCart);
  backdrop.addEventListener('click', closeCart);
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeCart(); });
  document.querySelectorAll('[data-category]').forEach(button => button.addEventListener('click', () => {
    activeCategory = button.dataset.category;
    document.querySelectorAll('[data-category]').forEach(item => item.classList.toggle('is-selected', item === button));
    renderProducts();
  }));
  document.querySelector('[data-toggle-wishlist]').addEventListener('click', () => {
    showingWishlist = !showingWishlist;
    renderProducts();
  });
  search.addEventListener('input', renderProducts);
  window.addEventListener('marketlocationchange', () => {
    renderProducts();
    renderCart();
  });
  window.addEventListener('storage', event => {
    if (event.key === STORAGE.orders) renderOrderCount();
    if ([STORAGE.products, wishlistKey].includes(event.key)) {
      renderProducts();
      renderCart();
    }
  });
  renderOrderCount();
  renderProducts();
  renderCart();
}

function initOrders(session) {
  document.querySelector('[data-account-name]').textContent = `Hi, ${session.name}`;
  initLogout();
  const container = document.querySelector('[data-order-history]');
  const confirmation = document.querySelector('[data-order-confirmation]');
  const placedOrderId = new URLSearchParams(location.search).get('placed');

  function renderOrders() {
    const orders = readStore(STORAGE.orders, []).filter(order => order.buyerEmail === session.email);
    document.querySelector('[data-order-count]').textContent = countOrderItems(orders);
    if (placedOrderId && orders.some(order => order.id === placedOrderId)) {
      confirmation.hidden = false;
      confirmation.textContent = `Order ${placedOrderId} is placed. You can remove items while its status is New.`;
    }
    container.innerHTML = orders.length ? orders.map(order => {
      const items = order.items || [];
      const cancelledItems = order.cancelledItems || [];
      const itemMarkup = items.length ? items.map(item => `<div class="order-detail-item"><div class="order-detail-product"><strong>${escapeHtml(item.name)}</strong><span>From ${escapeHtml(item.farm)} · ${item.quantity} ${escapeHtml(item.unit)} × ${money(item.price)}</span></div><span class="order-detail-subtotal">${money(item.price * item.quantity)}</span>${order.status === 'New' ? `<button class="remove-order-item" type="button" data-remove-order-item="${escapeHtml(order.id)}" data-product-id="${escapeHtml(item.productId)}">Remove item</button>` : '<span class="order-lock-note">Locked after preparation</span>'}</div>`).join('') : '<p class="order-empty-items">All items were removed. No items remain in this order.</p>';
      const removedMarkup = cancelledItems.length ? `<div class="removed-order-items"><span>Removed from this order</span><p>${cancelledItems.map(item => `${escapeHtml(item.name)} × ${item.quantity}`).join(' · ')}</p></div>` : '';
      return `<article class="order-detail-card"><div class="order-detail-header"><div><span class="section-kicker">ORDER</span><h2>${escapeHtml(order.id)}</h2><p>${formatDate(order.createdAt)}${order.marketLocation ? ` · ${escapeHtml(order.marketLocation)}` : ''}</p></div><span class="order-status ${statusClass(order.status)}">${escapeHtml(order.status)}</span></div><div class="order-detail-items">${itemMarkup}</div>${removedMarkup}<div class="order-detail-total"><span>Order total</span><strong>${money(order.total)}</strong></div></article>`;
    }).join('') : '<div class="empty-state"><strong>No orders yet.</strong>Your placed orders will appear here.</div>';

    container.querySelectorAll('[data-remove-order-item]').forEach(button => button.addEventListener('click', () => {
      const orders = readStore(STORAGE.orders, []);
      const order = orders.find(item => item.id === button.dataset.removeOrderItem && item.buyerEmail === session.email);
      if (!order || order.status !== 'New') return;
      const removed = order.items.find(item => item.productId === button.dataset.productId);
      if (!removed || !window.confirm(`Remove ${removed.name} from this order?`)) return;

      const remainingItems = order.items.filter(item => item.productId !== removed.productId);
      const cancelledItems = [...(order.cancelledItems || []), { ...removed, removedAt: new Date().toISOString() }];
      const updatedOrders = orders.map(item => item.id === order.id ? {
        ...item,
        items: remainingItems,
        cancelledItems,
        total: remainingItems.reduce((sum, current) => sum + Number(current.price) * Number(current.quantity), 0),
        status: remainingItems.length ? 'New' : 'Cancelled'
      } : item);
      const updatedProducts = readStore(STORAGE.products, []).map(product => product.id === removed.productId
        ? { ...product, stock: Number(product.stock) + Number(removed.quantity) }
        : product);
      writeStore(STORAGE.products, updatedProducts);
      writeStore(STORAGE.orders, updatedOrders);
      renderOrders();
    }));
  }

  window.addEventListener('storage', event => {
    if ([STORAGE.orders, STORAGE.products].includes(event.key)) renderOrders();
  });
  renderOrders();
}

function initFarmer(session) {
  document.querySelector('[data-account-name]').textContent = session.name;
  document.querySelector('[data-farmer-name]')?.replaceChildren(document.createTextNode(`${session.name}.`));
  initLogout();
  getProducts();
  const dialog = document.querySelector('[data-listing-dialog]');
  const form = document.querySelector('[data-listing-form]');
  const productsPage = document.body.dataset.page === 'farmer-products';

  function getFarmerOrders() {
    const productIds = new Set(getProducts().filter(product => product.owner === session.email).map(product => product.id));
    return readStore(STORAGE.orders, []).map(order => {
      const items = (order.items || []).filter(item => item.farmerEmail === session.email || productIds.has(item.productId));
      const cancelledItems = (order.cancelledItems || []).filter(item => item.farmerEmail === session.email || productIds.has(item.productId));
      if (!items.length && !cancelledItems.length) return null;
      return {
        ...order,
        items,
        cancelledItems,
        total: items.reduce((sum, item) => sum + Number(item.price) * Number(item.quantity), 0)
      };
    }).filter(Boolean);
  }

  function renderOrders() {
    const orders = getFarmerOrders();
    const activeCount = orders.filter(order => !['Delivered', 'Cancelled'].includes(order.status)).length;
    const pendingStat = document.querySelector('[data-stat-pending]');
    const salesStat = document.querySelector('[data-stat-sales]');
    const orderCount = document.querySelector('[data-farmer-order-count]');
    if (pendingStat) pendingStat.textContent = activeCount;
    if (salesStat) salesStat.textContent = orders.filter(order => order.status === 'Delivered').length;
    if (orderCount) orderCount.textContent = `(${orders.length})`;
    const container = document.querySelector('[data-farmer-orders]');
    if (!container) return;
    container.innerHTML = orders.length ? orders.map(order => {
      const items = order.items || [];
      const removed = order.cancelledItems || [];
      const itemText = items.length
        ? items.map(item => `${escapeHtml(item.name)} × ${item.quantity} (${money(item.price)}/${escapeHtml(item.unit)})`).join(' · ')
        : 'No active items remain; buyer cancelled the order.';
      const removedText = removed.length ? `<p class="order-meta">Removed by buyer: ${removed.map(item => `${escapeHtml(item.name)} × ${item.quantity}`).join(' · ')}</p>` : '';
      return `<article class="farmer-order-card"><div><div class="order-topline"><span class="order-number">${escapeHtml(order.id)}</span><span class="order-date">${formatDate(order.createdAt)}</span><span class="order-status ${statusClass(order.status)}">${escapeHtml(order.status)}</span></div><p class="order-items-text">${itemText}</p>${removedText}<p class="order-meta">Buyer: ${escapeHtml(order.buyerName)} · ${escapeHtml(order.buyerEmail)} · Total ${money(order.total)}</p></div><div class="farmer-order-actions"><select class="status-select" data-order-status="${escapeHtml(order.id)}" aria-label="Update order status"><option ${order.status === 'New' ? 'selected' : ''}>New</option><option ${order.status === 'Preparing' ? 'selected' : ''}>Preparing</option><option ${order.status === 'Ready for pickup' ? 'selected' : ''}>Ready for pickup</option><option ${order.status === 'Delivered' ? 'selected' : ''}>Delivered</option><option ${order.status === 'Cancelled' ? 'selected' : ''}>Cancelled</option></select></div></article>`;
    }).join('') : '<div class="empty-state"><strong>Your orders will find you here.</strong>When a buyer checks out, the order details will appear on this dashboard.</div>';
    container.querySelectorAll('[data-order-status]').forEach(select => select.addEventListener('change', () => {
      const updated = readStore(STORAGE.orders, []).map(order => order.id === select.dataset.orderStatus ? { ...order, status: select.value } : order);
      writeStore(STORAGE.orders, updated);
      renderOrders();
    }));
  }

  function renderInventory() {
    const products = getProducts().filter(product => product.owner === session.email && product.active);
    document.querySelectorAll('[data-stat-products]').forEach(count => { count.textContent = products.length; });
    const inventory = document.querySelector('[data-inventory]');
    if (!inventory) return;
    inventory.innerHTML = products.length ? products.map(product => `<article class="inventory-item"><img class="inventory-photo" src="${escapeHtml(productImageUrl(product))}" alt="${escapeHtml(product.name)}" loading="lazy"><div class="inventory-copy"><strong>${escapeHtml(product.name)}</strong><span>Guntur ${money(productPrice(product, 'Guntur'))} · Vijayawada ${money(productPrice(product, 'Vijayawada'))} · Tenali ${money(productPrice(product, 'Tenali'))} / ${escapeHtml(product.unit)}</span><span>${Number(product.stock)} available</span></div><button type="button" data-edit-product="${escapeHtml(product.id)}">Edit</button><button type="button" data-delete-product="${escapeHtml(product.id)}">Remove</button></article>`).join('') : '<div class="empty-state"><strong>Your stall is ready for its first listing.</strong>Add produce to make it available in the buyer market.</div>';
    inventory.querySelectorAll('[data-edit-product]').forEach(button => button.addEventListener('click', () => {
      const product = getProducts().find(item => item.id === button.dataset.editProduct);
      if (!product) return;
      form.dataset.editing = product.id;
      form.elements.namedItem('name').value = product.name;
      form.elements.namedItem('category').value = product.category;
      form.elements.namedItem('unit').value = product.unit;
      form.elements.namedItem('priceGuntur').value = productPrice(product, 'Guntur');
      form.elements.namedItem('priceVijayawada').value = productPrice(product, 'Vijayawada');
      form.elements.namedItem('priceTenali').value = productPrice(product, 'Tenali');
      form.elements.namedItem('stock').value = product.stock;
      form.elements.namedItem('description').value = product.description || '';
      setMessage(form, '');
      document.querySelector('[data-listing-heading]').textContent = 'Update your harvest.';
      document.querySelector('[data-listing-submit]').textContent = 'Save changes';
      dialog.showModal();
    }));
    inventory.querySelectorAll('[data-delete-product]').forEach(button => button.addEventListener('click', () => {
      writeStore(STORAGE.products, getProducts().map(product => product.id === button.dataset.deleteProduct ? { ...product, active: false } : product));
      renderInventory();
    }));
  }

  document.querySelector('[data-add-listing]')?.addEventListener('click', () => {
    form.reset();
    delete form.dataset.editing;
    setMessage(form, '');
    document.querySelector('[data-listing-heading]').textContent = 'List your harvest.';
    document.querySelector('[data-listing-submit]').textContent = 'Add to market';
    dialog.showModal();
  });
  document.querySelector('[data-close-listing]')?.addEventListener('click', () => {
    form.reset();
    delete form.dataset.editing;
    setMessage(form, '');
    dialog.close();
  });
  document.querySelector('[data-refresh-orders]')?.addEventListener('click', renderOrders);
  form?.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const imageFile = data.get('image');
    const locationPrices = {
      Guntur: Number(data.get('priceGuntur')),
      Vijayawada: Number(data.get('priceVijayawada')),
      Tenali: Number(data.get('priceTenali'))
    };
    if (new Set(Object.values(locationPrices)).size !== marketLocations.length) {
      setMessage(form, 'Set a different price for each location.');
      return;
    }
    const saveListing = image => {
      const products = getProducts();
      const editingId = form.dataset.editing;
      const existing = products.find(product => product.id === editingId);
      const updatedProduct = {
        ...(existing || {}),
        id: existing?.id || `farm-${Date.now()}`, name: String(data.get('name')).trim(), category: data.get('category'),
        price: locationPrices.Guntur, locationPrices, unit: data.get('unit'), stock: Number(data.get('stock')),
        farm: session.name, owner: session.email, description: String(data.get('description')).trim() || 'Fresh from the farm.',
        image: image || existing?.image || '', photo: productPhotos[data.get('category')], active: true
      };
      const updatedProducts = existing
        ? products.map(product => product.id === existing.id ? updatedProduct : product)
        : [updatedProduct, ...products];
      writeStore(STORAGE.products, updatedProducts);
      form.reset();
      delete form.dataset.editing;
      dialog.close();
      renderInventory();
    };
    if (imageFile instanceof File && imageFile.size > 0) {
      if (!imageFile.type.startsWith('image/') || imageFile.size > 2 * 1024 * 1024) {
        setMessage(form, 'Choose an image smaller than 2 MB.');
        return;
      }
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        if (typeof reader.result !== 'string') {
          setMessage(form, 'The image could not be read. Please choose another file.');
          return;
        }
        saveListing(reader.result);
      });
      reader.addEventListener('error', () => setMessage(form, 'The image could not be read. Please choose another file.'));
      reader.readAsDataURL(imageFile);
      return;
    }
    saveListing('');
  });
  window.addEventListener('storage', event => {
    if ([STORAGE.orders, STORAGE.products].includes(event.key)) {
      renderOrders();
      renderInventory();
    }
  });
  window.addEventListener('marketlocationchange', renderInventory);
  renderOrders();
  renderInventory();
}

function initAdmin(session) {
  document.querySelector('[data-account-name]').textContent = `Hi, ${session.name}`;
  initLogout();

  const productSearch = document.querySelector('[data-admin-product-search]');
  const orderSearch = document.querySelector('[data-admin-order-search]');
  const orderStatus = document.querySelector('[data-admin-order-status]');

  function renderAdmin() {
    const products = getProducts();
    const activeProducts = products.filter(product => product.active && Number(product.stock) > 0);
    const farmers = readStore(STORAGE.farmers, []);
    const buyers = readStore(STORAGE.buyers, []);
    const orders = readStore(STORAGE.orders, []);
    document.querySelector('[data-admin-stat-products]').textContent = activeProducts.length;
    document.querySelector('[data-admin-stat-orders]').textContent = orders.length;
    document.querySelector('[data-admin-stat-farmers]').textContent = farmers.length;
    document.querySelector('[data-admin-stat-buyers]').textContent = buyers.length;

    const productQuery = productSearch.value.trim().toLowerCase();
    const visibleProducts = activeProducts.filter(product =>
      `${product.name} ${product.category} ${product.farm} ${product.owner}`.toLowerCase().includes(productQuery));
    const productList = document.querySelector('[data-admin-products]');
    document.querySelector('[data-admin-products-count]').textContent = `(${visibleProducts.length})`;
    productList.innerHTML = visibleProducts.length ? visibleProducts.map(product => `<article class="admin-product-row"><img class="admin-product-photo" src="${escapeHtml(productImageUrl(product))}" alt="${escapeHtml(product.name)}" loading="lazy"><div class="admin-product-name"><strong>${escapeHtml(product.name)}</strong><span>${escapeHtml(product.category)} · ${escapeHtml(product.farm)}</span></div><span class="admin-product-owner">${escapeHtml(product.owner === 'market' ? 'Marketplace sample' : product.owner)}</span><span class="admin-product-price">${money(productPrice(product))} / ${escapeHtml(product.unit)} · ${escapeHtml(getSelectedLocation())}</span><span class="admin-product-stock">${Number(product.stock)} available</span></article>`).join('') : '<div class="empty-state"><strong>No available products match.</strong>Try another search.</div>';

    const orderQuery = orderSearch.value.trim().toLowerCase();
    const selectedStatus = orderStatus.value;
    const visibleOrders = orders.filter(order => selectedStatus === 'All' || order.status === selectedStatus)
      .filter(order => `${order.id} ${order.buyerName} ${order.buyerEmail} ${(order.items || []).map(item => `${item.name} ${item.farm} ${item.farmerEmail}`).join(' ')}`.toLowerCase().includes(orderQuery));
    const orderList = document.querySelector('[data-admin-orders]');
    document.querySelector('[data-admin-orders-count]').textContent = `(${visibleOrders.length})`;
    orderList.innerHTML = visibleOrders.length ? visibleOrders.map(order => {
      const items = order.items || [];
      const removed = order.cancelledItems || [];
      const itemLines = items.length ? items.map(item => `<li><span>${escapeHtml(item.name)} × ${Number(item.quantity)} <small>from ${escapeHtml(item.farm)}</small></span><strong>${money(Number(item.price) * Number(item.quantity))}</strong></li>`).join('') : '<li class="admin-empty-order">No active items remain</li>';
      const removedLine = removed.length ? `<p class="admin-removed-items">Removed: ${removed.map(item => `${escapeHtml(item.name)} × ${Number(item.quantity)}`).join(' · ')}</p>` : '';
      return `<article class="admin-order-card"><div class="admin-order-heading"><div><span class="section-kicker">BUYER ORDER</span><h3>${escapeHtml(order.id)}</h3><p>${formatDate(order.createdAt)}</p></div><span class="order-status ${statusClass(order.status)}">${escapeHtml(order.status)}</span></div><div class="admin-order-buyer"><strong>${escapeHtml(order.buyerName)}</strong><span>${escapeHtml(order.buyerEmail)}</span></div><ul class="admin-order-items">${itemLines}</ul>${removedLine}<div class="admin-order-total"><span>Order total</span><strong>${money(order.total)}</strong></div></article>`;
    }).join('') : '<div class="empty-state"><strong>No orders match.</strong>Buyer orders will appear here after checkout.</div>';
  }

  productSearch.addEventListener('input', renderAdmin);
  orderSearch.addEventListener('input', renderAdmin);
  orderStatus.addEventListener('change', renderAdmin);
  document.querySelector('[data-admin-clear-filters]').addEventListener('click', () => {
    orderSearch.value = '';
    orderStatus.value = 'All';
    renderAdmin();
  });
  document.querySelector('[data-admin-refresh]').addEventListener('click', renderAdmin);
  window.addEventListener('marketlocationchange', renderAdmin);
  window.addEventListener('storage', event => {
    if ([STORAGE.products, STORAGE.orders, STORAGE.farmers, STORAGE.buyers].includes(event.key)) renderAdmin();
  });
  renderAdmin();
}

const page = document.body.dataset.page;
initLocationSelector();
ensureSaiDemoData();
if (page === 'buyer-login' || page === 'farmer-login' || page === 'admin-login') initAuth(page);
if (page === 'buyer') {
  const session = requireRole('buyer');
  if (session) initBuyer(session);
}
if (page === 'orders') {
  const session = requireRole('buyer');
  if (session) initOrders(session);
}
if (page === 'farmer') {
  const session = requireRole('farmer');
  if (session) initFarmer(session);
}
if (page === 'farmer-products' || page === 'farmer-orders') {
  const session = requireRole('farmer');
  if (session) initFarmer(session);
}
if (page === 'admin') {
  const session = requireRole('admin');
  if (session) initAdmin(session);
}