// ═══════════════════════════════
// PRODUCT DATA
// ═══════════════════════════════
const products = [
  {
    id: 1, name: "iPhone 15 Pro Max", price: 5499, category: "phones",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&q=80",
    desc: "Titanium design, A17 Pro chip, 48MP camera system, Action button, USB-C with USB 3 speeds.",
    badge: "NEW", featured: true
  },
  {
    id: 2, name: "Samsung Galaxy S24 Ultra", price: 4799, category: "phones",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&q=80",
    desc: "200MP camera, built-in S Pen, Snapdragon 8 Gen 3, Galaxy AI features.",
    badge: "HOT", featured: true
  },
  {
    id: 3, name: "Google Pixel 9 Pro", price: 3299, category: "phones",
    image: "https://images.unsplash.com/photo-1598327105854-c8674faddf79?w=600&q=80",
    desc: "Google Tensor G4, advanced AI photography, Magic Eraser, 7 years of updates."
  },
  {
    id: 4, name: "OnePlus 12", price: 2599, category: "phones",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80",
    desc: "Snapdragon 8 Gen 3, 100W SuperVOOC charging, Hasselblad cameras."
  },
  {
    id: 5, name: "Samsung 65\" Neo QLED 4K", price: 4299, category: "tvs",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829e1?w=600&q=80",
    desc: "Quantum Matrix Technology, Neural Quantum Processor 4K, Dolby Atmos, HDR10+.",
    badge: "NEW", featured: true
  },
  {
    id: 6, name: "LG OLED C3 55\"", price: 5299, category: "tvs",
    image: "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=600&q=80",
    desc: "Self-lit OLED pixels, α9 AI Processor Gen6, Dolby Vision, 120Hz, perfect blacks."
  },
  {
    id: 7, name: "Sony Bravia XR A95L", price: 8999, category: "tvs",
    image: "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=600&q=80",
    desc: "QD-OLED panel, Cognitive Processor XR, XR Triluminos Max, Acoustic Surface."
  },
  {
    id: 8, name: "MacBook Pro 16\" M3 Max", price: 12999, category: "laptops",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80",
    desc: "M3 Max chip, 36GB unified memory, 22-hour battery, Liquid Retina XDR display.",
    badge: "NEW", featured: true
  },
  {
    id: 9, name: "Dell XPS 16 OLED", price: 7499, category: "laptops",
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80",
    desc: "Intel Core Ultra 9, 3.2K OLED touchscreen, 64GB DDR5, RTX 4070."
  },
  {
    id: 10, name: "HP Spectre x360 14", price: 4999, category: "laptops",
    image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=600&q=80",
    desc: "2-in-1 convertible, Intel Core Ultra 7, 2.8K OLED, 17-hour battery life."
  },
  {
    id: 11, name: "ASUS ROG Zephyrus G16", price: 6499, category: "laptops",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&q=80",
    desc: "AMD Ryzen 9, 240Hz QHD OLED, RTX 4090, ultimate gaming powerhouse.",
    badge: "HOT"
  },
  {
    id: 12, name: "Sony WH-1000XM5", price: 1299, category: "accessories",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
    desc: "Industry-leading noise cancellation, 30-hour battery, multipoint connection.",
    badge: "HOT", featured: true
  },
  {
    id: 13, name: "Apple AirPods Pro 2", price: 999, category: "accessories",
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=600&q=80",
    desc: "H2 chip, Adaptive Audio, Transparency mode, MagSafe USB-C charging."
  },
  {
    id: 14, name: "Logitech MX Master 3S", price: 449, category: "accessories",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80",
    desc: "8000 DPI, MagSpeed electromagnetic scroll, Bluetooth, works on any surface."
  },
  {
    id: 15, name: "Apple Watch Ultra 2", price: 3299, category: "accessories",
    image: "https://images.unsplash.com/photo-1583394293214-0b9a3c3ea54e?w=600&q=80",
    desc: "Titanium case, 2000 nits display, precision dual-frequency GPS, 60hr battery.",
    badge: "NEW"
  },
  {
    id: 16, name: "iPad Pro 13\" M4", price: 5499, category: "accessories",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80",
    desc: "Ultra Retina XDR OLED, M4 chip, thinnest Apple product ever, Apple Pencil Pro."
  }
];

// ═══════════════════════════════
// STORAGE HELPERS
// ═══════════════════════════════
const getCart = () => JSON.parse(localStorage.getItem('cart') || '[]');
const saveCart = (c) => { localStorage.setItem('cart', JSON.stringify(c)); updateBadge(); };
const getUser = () => JSON.parse(localStorage.getItem('currentUser') || 'null');
const getOrders = () => JSON.parse(localStorage.getItem('orders') || '[]');
const saveOrders = (o) => localStorage.setItem('orders', JSON.stringify(o));
const getWishlist = () => JSON.parse(localStorage.getItem('wishlist') || '[]');
const saveWishlist = (w) => localStorage.setItem('wishlist', JSON.stringify(w));

// ═══════════════════════════════
// CART UTILS
// ═══════════════════════════════
function addToCart(id) {
  const cart = getCart();
  const i = cart.findIndex(x => x.id === id);
  if (i > -1) cart[i].qty++;
  else cart.push({ id, qty: 1 });
  saveCart(cart);
  toast('Added to cart 🛒');
}

const cartTotal = () => getCart().reduce((s, i) => { const p = products.find(x => x.id === i.id); return s + (p ? p.price * i.qty : 0); }, 0);
const cartCount = () => getCart().reduce((s, i) => s + i.qty, 0);

function updateBadge() {
  const el = document.getElementById('cart-badge');
  if (!el) return;
  const n = cartCount();
  el.textContent = n;
  el.style.display = n ? 'flex' : 'none';
}

// ═══════════════════════════════
// WISHLIST
// ═══════════════════════════════
function toggleWishlist(id, btn) {
  let wl = getWishlist();
  const i = wl.indexOf(id);
  if (i > -1) { wl.splice(i, 1); toast('Removed from wishlist'); if (btn) { btn.textContent = '♡'; btn.classList.remove('active'); } }
  else { wl.push(id); toast('Saved to wishlist ❤️'); if (btn) { btn.textContent = '♥'; btn.classList.add('active'); } }
  saveWishlist(wl);
}

// ═══════════════════════════════
// TOAST
// ═══════════════════════════════
function toast(msg) {
  let t = document.getElementById('toast');
  if (!t) { t = document.createElement('div'); t.id = 'toast'; t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._t);
  t._t = setTimeout(() => t.classList.remove('show'), 2800);
}

// ═══════════════════════════════
// SEARCH
// ═══════════════════════════════
function doSearch() {
  const q = document.getElementById('nav-search')?.value.trim();
  if (q) window.location.href = `products.html?q=${encodeURIComponent(q)}`;
}

// ═══════════════════════════════
// AUTH GATE
// ═══════════════════════════════
function showAuthGate() {
  const gate = document.getElementById('auth-gate');
  if (gate) gate.style.display = 'flex';
}

function hideAuthGate() {
  const gate = document.getElementById('auth-gate');
  if (gate) { gate.style.opacity = '0'; gate.style.transition = 'opacity .3s'; setTimeout(() => gate.remove(), 300); }
}

function switchAuthTab(tab) {
  document.querySelectorAll('.auth-gate-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.auth-gate-panel').forEach(p => p.classList.remove('active'));
  document.querySelector(`[data-tab="${tab}"]`).classList.add('active');
  document.getElementById(`gate-panel-${tab}`).classList.add('active');
}

function gateLogin() {
  const u = document.getElementById('gate-uname').value.trim();
  const p = document.getElementById('gate-pw').value;
  const err = document.getElementById('gate-login-err');
  if (!u || !p) { err.style.display='block'; err.textContent='⚠️ Please fill in all fields.'; return; }
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const user = users.find(x => x.username === u && x.password === p);
  if (!user) { err.style.display='block'; err.textContent='❌ Invalid credentials. Try signing up first.'; return; }
  localStorage.setItem('currentUser', JSON.stringify(user));
  hideAuthGate();
  toast('Welcome back, ' + user.username + '! 👋');
  setTimeout(() => location.reload(), 400);
}

function gateSignup() {
  const fn = document.getElementById('gate-fn').value.trim();
  const un = document.getElementById('gate-un').value.trim();
  const em = document.getElementById('gate-em').value.trim();
  const pw = document.getElementById('gate-spw').value;
  const err = document.getElementById('gate-signup-err');
  if (!fn || !un || !em || !pw) { err.style.display='block'; err.textContent='⚠️ Please fill in all fields.'; return; }
  if (pw.length < 6) { err.style.display='block'; err.textContent='⚠️ Password must be at least 6 characters.'; return; }
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  if (users.find(x => x.username === un)) { err.style.display='block'; err.textContent='❌ Username already taken.'; return; }
  const user = { username: un, firstName: fn, email: em, password: pw };
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
  localStorage.setItem('currentUser', JSON.stringify(user));
  hideAuthGate();
  toast('Welcome to TechMart, ' + fn + '! 🎉');
  setTimeout(() => location.reload(), 400);
}

function continueAsGuest() {
  localStorage.setItem('guestMode', '1');
  hideAuthGate();
}

function renderAuthGate() {
  return `
  <div id="auth-gate">
    <div class="auth-gate-box">
      <div class="auth-gate-visual">
        <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=900&q=80" alt="TechMart">
        <div class="auth-gate-visual-overlay">
          <h2>Dubai's #1<br>Tech Store.</h2>
          <p>Genuine products. Unbeatable prices.<br>Fast delivery across UAE.</p>
        </div>
      </div>
      <div class="auth-gate-content">
        <div class="auth-gate-logo">TECH<em>MART</em></div>
        <div class="auth-gate-tabs">
          <button class="auth-gate-tab active" data-tab="login" onclick="switchAuthTab('login')">Sign In</button>
          <button class="auth-gate-tab" data-tab="signup" onclick="switchAuthTab('signup')">Create Account</button>
        </div>

        <!-- LOGIN PANEL -->
        <div class="auth-gate-panel active" id="gate-panel-login">
          <div class="auth-gate-title">Welcome Back 👋</div>
          <div class="auth-gate-sub">Sign in to access your account and orders</div>
          <div id="gate-login-err" style="background:rgba(232,23,43,0.08);border:1px solid rgba(232,23,43,0.25);color:#c0001a;padding:11px 14px;border-radius:8px;font-size:13px;font-weight:600;margin-bottom:16px;display:none"></div>
          <div class="form-group">
            <label>Username</label>
            <input id="gate-uname" placeholder="your_username" onkeydown="if(event.key==='Enter')gateLogin()">
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" id="gate-pw" placeholder="••••••••" onkeydown="if(event.key==='Enter')gateLogin()">
          </div>
          <button class="btn-primary" style="width:100%;justify-content:center;font-size:15px;padding:14px;margin-top:6px" onclick="gateLogin()">Sign In →</button>
          <div class="auth-gate-divider">or</div>
          <button class="btn-guest" onclick="continueAsGuest()">👤 Continue as Guest</button>
          <div style="text-align:center;margin-top:16px;font-size:13px;color:var(--muted)">New here? <a href="#" onclick="switchAuthTab('signup');return false;" style="color:var(--red);font-weight:700">Create an account →</a></div>
        </div>

        <!-- SIGNUP PANEL -->
        <div class="auth-gate-panel" id="gate-panel-signup">
          <div class="auth-gate-title">Join TechMart 🚀</div>
          <div class="auth-gate-sub">Create your account for exclusive deals and order tracking</div>
          <div id="gate-signup-err" style="background:rgba(232,23,43,0.08);border:1px solid rgba(232,23,43,0.25);color:#c0001a;padding:11px 14px;border-radius:8px;font-size:13px;font-weight:600;margin-bottom:16px;display:none"></div>
          <div class="form-group">
            <label>First Name</label>
            <input id="gate-fn" placeholder="Ahmed">
          </div>
          <div class="form-row-2">
            <div class="form-group">
              <label>Username</label>
              <input id="gate-un" placeholder="ahmed123">
            </div>
            <div class="form-group">
              <label>Email</label>
              <input type="email" id="gate-em" placeholder="you@email.com">
            </div>
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" id="gate-spw" placeholder="Min 6 characters" onkeydown="if(event.key==='Enter')gateSignup()">
          </div>
          <button class="btn-primary" style="width:100%;justify-content:center;font-size:15px;padding:14px;margin-top:6px" onclick="gateSignup()">Create Account →</button>
          <div class="auth-gate-divider">or</div>
          <button class="btn-guest" onclick="continueAsGuest()">👤 Continue as Guest</button>
        </div>
      </div>
    </div>
  </div>`;
}

function initAuthGate() {
  const user  = getUser();
  const guest = localStorage.getItem('guestMode');
  if (!user && !guest) {
    // Not authenticated — send to splash/auth flow
    window.location.replace('splash.html');
  }
}

// ═══════════════════════════════
// RENDER NAVBAR
// ═══════════════════════════════
function renderNav(activePage) {
  const user = getUser();
  const cnt = cartCount();
  return `
  <nav class="navbar" id="navbar">
    <div class="nav-inner">
      <a href="index.html" class="logo">TECH<em>MART</em></a>
      <div class="nav-links">
        <a href="index.html" class="nav-link ${activePage==='home'?'active':''}">Home</a>
        <a href="products.html?cat=all" class="nav-link ${activePage==='products'?'active':''}">Products</a>
        <a href="about.html" class="nav-link ${activePage==='about'?'active':''}">About Us</a>
      </div>
      <div class="nav-search">
        <input type="text" id="nav-search" placeholder="Search phones, laptops, TVs..." onkeydown="if(event.key==='Enter') doSearch()">
        <button class="nav-search-btn" onclick="doSearch()">🔍</button>
      </div>
      <div class="nav-actions">
        ${user
          ? `<a href="profile.html" class="nav-icon-btn"><span class="ico">👤</span>${user.username?.substring(0,8)}</a>`
          : `<a href="login.html" class="nav-icon-btn"><span class="ico">🔐</span>Login</a>`}
        <a href="cart.html" class="nav-icon-btn" style="position:relative">
          <span class="ico">🛒</span>Cart
          <span class="cart-badge" id="cart-badge" style="display:${cnt?'flex':'none'}">${cnt}</span>
        </a>
      </div>
    </div>
  </nav>`;
}

// ═══════════════════════════════
// RENDER FOOTER
// ═══════════════════════════════
function renderFooter() {
  return `
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <span class="logo">TECH<em>MART</em></span>
          <p>Dubai's premier destination for the latest technology. We bring you genuine products, expert advice, and unbeatable prices.</p>
        </div>
        <div>
          <div class="footer-col-title">Shop</div>
          <div class="footer-links">
            <a href="products.html?cat=phones" class="footer-link">Phones</a>
            <a href="products.html?cat=laptops" class="footer-link">Laptops</a>
            <a href="products.html?cat=tvs" class="footer-link">TVs</a>
            <a href="products.html?cat=accessories" class="footer-link">Accessories</a>
          </div>
        </div>
        <div>
          <div class="footer-col-title">Company</div>
          <div class="footer-links">
            <a href="about.html" class="footer-link">About Us</a>
            <a href="about.html#team" class="footer-link">Our Team</a>
            <a href="#" class="footer-link">Careers</a>
            <a href="#" class="footer-link">Press</a>
          </div>
        </div>
        <div>
          <div class="footer-col-title">Support</div>
          <div class="footer-links">
            <a href="#" class="footer-link">Help Center</a>
            <a href="#" class="footer-link">Track Order</a>
            <a href="#" class="footer-link">Returns</a>
            <a href="#" class="footer-link">Contact Us</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2025 TechMart — Dubai, UAE 🇦🇪</span>
        <div class="footer-bottom-right">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>🔒 Secure Checkout</span>
        </div>
      </div>
    </div>
  </footer>`;
}

// ═══════════════════════════════
// PRODUCT CARD
// ═══════════════════════════════
function productCard(p) {
  const wl = getWishlist();
  const liked = wl.includes(p.id);
  const badgeColor = p.badge === 'HOT' ? 'hot' : p.badge === 'NEW' ? 'new' : 'sale';
  return `
  <div class="product-card" onclick="window.location='product.html?id=${p.id}'">
    <div class="product-card-img-wrap">
      ${p.badge ? `<span class="product-badge ${badgeColor}">${p.badge}</span>` : ''}
      <button class="product-wishlist ${liked?'active':''}" onclick="event.stopPropagation();toggleWishlist(${p.id},this)" title="Wishlist">${liked?'♥':'♡'}</button>
      <img src="${p.image}" alt="${p.name}" loading="lazy">
    </div>
    <div class="product-card-body">
      <div class="product-cat">${p.category}</div>
      <div class="product-name">${p.name}</div>
      <div class="product-desc-short">${p.desc}</div>
      <div class="product-price-row">
        <div class="product-price">AED ${p.price.toLocaleString()} <sub>incl. VAT</sub></div>
      </div>
      <button class="btn-add" onclick="event.stopPropagation();addToCart(${p.id})">+ Add to Cart</button>
    </div>
  </div>`;
}

// ═══════════════════════════════
// NAVBAR SCROLL EFFECT
// ═══════════════════════════════
window.addEventListener('scroll', () => {
  const nb = document.getElementById('navbar');
  if (nb) nb.classList.toggle('scrolled', window.scrollY > 20);
});

document.addEventListener('DOMContentLoaded', () => {
  updateBadge();
  const nb = document.getElementById('navbar');
  if (nb) nb.classList.toggle('scrolled', window.scrollY > 20);
  initAuthGate();
});
