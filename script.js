// --- 1. Static UI Translations Dictionary ---
const uiTranslations = {
  en: {
    nav_breakfast: '<svg class="nav-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg> Breakfast',
    nav_brunch: '<svg class="nav-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 22C6.5 22 2 17.5 2 12 2 6 6 2 12 2s10 4 10 10c0 5.5-4.5 10-10 10z"/><path d="M12 22c0 0-4-4-4-10"/></svg> Brunch',
    nav_savory: '<svg class="nav-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M3 11h18M3 6h18M3 16h18"/><path d="M5 21h14a2 2 0 002-2v-1H3v1a2 2 0 002 2z"/></svg> Savory',
    nav_evening: '<svg class="nav-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg> Evening',
    nav_drinks: '<svg class="nav-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg> Drinks',
    hero_eyebrow: 'Welcome to our place',
    hero_title: 'A menu crafted<br>with <em>love & chocolate</em>',
    tag_breakfast: 'Morning Rituals',
    title_breakfast: 'Breakfast',
    tag_brunch: 'Late Morning',
    title_brunch: 'Brunch',
    tag_savory: 'Sandwiches · Pasta · Crêpes',
    title_savory: 'Savory',
    cat_sandwiches: 'Sandwiches',
    cat_pasta: 'Pasta — Penne base',
    cat_crepes: 'Savory Crêpes',
    tag_evening: 'Evening Formulas',
    title_evening: 'Evening Formulas',
    tag_drinks: 'Drinks',
    title_drinks: 'Drinks',
    drinks_coffee: 'Coffee <small>+ 33cl water</small>',
    drinks_tea: 'Tea <small>+ 33cl water</small>',
    drinks_juices: 'Fresh Juices',
    drinks_cocktails: 'Cocktails & Smoothies',
    drinks_milkshakes: 'Milkshakes',
    footer_tagline: 'Your satisfaction is our priority',
    nav_glaces: '<svg class="nav-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 22s-4-5.5-4-9c0-3.5 2-5 4-5s4 1.5 4 5c0 3.5-4 9-4 9z"/><path d="M12 8V2"/></svg> Glaces',
    nav_desserts: '<svg class="nav-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/><path d="M2 21h20"/><path d="M7 8v2"/><path d="M12 8v2"/><path d="M17 8v2"/></svg> Desserts',
    nav_sweet_crepes: '<svg class="nav-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M2 12c5.5 0 10-4.5 10-10"/><path d="M22 12c-5.5 0-10 4.5-10 10"/></svg> Sweet Crêpes',
    tag_glaces: 'Frozen Specialties',
    title_glaces: 'Glaces',
    cat_glace_fruit: 'Fruit Ice Cream',
    cat_glace_biscuit: 'Biscuit Ice Cream',
    tag_desserts: 'Sweet Indulgence',
    title_desserts: 'Desserts',
    tag_sweet_crepes: 'Sweet Crêpes',
    title_sweet_crepes: 'Sweet Crêpes'
  },
  fr: {
    nav_breakfast: '<svg class="nav-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg> Petit-déjeuner',
    nav_brunch: '<svg class="nav-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 22C6.5 22 2 17.5 2 12 2 6 6 2 12 2s10 4 10 10c0 5.5-4.5 10-10 10z"/><path d="M12 22c0 0-4-4-4-10"/></svg> Brunch',
    nav_savory: '<svg class="nav-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M3 11h18M3 6h18M3 16h18"/><path d="M5 21h14a2 2 0 002-2v-1H3v1a2 2 0 002 2z"/></svg> Salé',
    nav_evening: '<svg class="nav-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg> Soirée',
    nav_drinks: '<svg class="nav-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg> Boissons',
    hero_eyebrow: 'Bienvenue chez nous',
    hero_title: 'Un menu préparé<br>avec <em>amour & chocolat</em>',
    tag_breakfast: 'Rituels du Matin',
    title_breakfast: 'Petit-déjeuner',
    tag_brunch: 'Matinée',
    title_brunch: 'Brunch',
    tag_savory: 'Sandwiches · Pâtes · Crêpes',
    title_savory: 'Salé',
    cat_sandwiches: 'Sandwiches',
    cat_pasta: 'Pâtes — Base Penne',
    cat_crepes: 'Crêpes Salées',
    tag_evening: 'Formules du Soir',
    title_evening: 'Formules du Soir',
    tag_drinks: 'Boissons',
    title_drinks: 'Boissons',
    drinks_coffee: 'Café <small>+ Bouteille d\'eau 33cl</small>',
    drinks_tea: 'Thé <small>+ Bouteille d\'eau 33cl</small>',
    drinks_juices: 'Jus Frais',
    drinks_cocktails: 'Cocktails & Smoothies',
    drinks_milkshakes: 'Milkshakes',
    footer_tagline: 'Votre satisfaction est notre priorité',
    nav_glaces: '<svg class="nav-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 22s-4-5.5-4-9c0-3.5 2-5 4-5s4 1.5 4 5c0 3.5-4 9-4 9z"/><path d="M12 8V2"/></svg> Glaces',
    nav_desserts: '<svg class="nav-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/><path d="M2 21h20"/><path d="M7 8v2"/><path d="M12 8v2"/><path d="M17 8v2"/></svg> Desserts',
    nav_sweet_crepes: '<svg class="nav-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M2 12c5.5 0 10-4.5 10-10"/><path d="M22 12c-5.5 0-10 4.5-10 10"/></svg> Crêpes Sucrées',
    tag_glaces: 'Spécialités Glacées',
    title_glaces: 'Glaces',
    cat_glace_fruit: 'Glace Fruit',
    cat_glace_biscuit: 'Glace Biscuit',
    tag_desserts: 'Douceurs Sucrées',
    title_desserts: 'Desserts',
    tag_sweet_crepes: 'Crêpes Sucrées',
    title_sweet_crepes: 'Crêpes Sucrées'
  }
};

// --- 2. State & Data Handling ---
let currentLang = localStorage.getItem('site_lang') || 'en';
let menuData = null;

function parseURLParams() {
  const params = new URLSearchParams(window.location.search);
  
  const langParam = params.get('lang');
  if (langParam && ['en', 'fr'].includes(langParam)) {
    currentLang = langParam;
    localStorage.setItem('site_lang', langParam); 
  }

  const tableParam = params.get('table');
  const tableNum = parseInt(tableParam, 10);
  
  if (!isNaN(tableNum) && tableNum >= 1 && tableNum <= 50) {
    const badgeEl = document.getElementById('table-badge');
    const numEl = document.getElementById('table-number');
    
    if (badgeEl && numEl) {
      numEl.textContent = tableNum;
      badgeEl.classList.remove('hidden');
      sessionStorage.setItem('current_table', tableNum);
    }
  }
}

async function init() {
  parseURLParams();
  bindLangToggles();
  setupObservers();
  
  const loadingScreen = document.getElementById('loading-screen');
  const menuSections = document.querySelectorAll('.menu-section');
  
  menuSections.forEach(section => section.style.display = 'none');
  loadingScreen.style.display = 'block';

  try {
    const res = await fetch('menu.json');
    if (!res.ok) throw new Error('Network response was not ok');
    menuData = await res.json();
    
    hideLoadingScreen(loadingScreen, menuSections);
    renderContent(currentLang);
  } catch (err) {
    console.error("Failed to load menu.json", err);
    hideLoadingScreen(loadingScreen, menuSections);
    updateStaticUI(currentLang);
  }
}

function hideLoadingScreen(loadingScreen, menuSections) {
  loadingScreen.style.display = 'none';
  menuSections.forEach(section => section.style.display = 'block');
}

function bindLangToggles() {
  const btnEn = document.getElementById('lang-en');
  const btnFr = document.getElementById('lang-fr');

  btnEn.addEventListener('click', () => switchLanguage('en'));
  btnFr.addEventListener('click', () => switchLanguage('fr'));
}

function switchLanguage(lang) {
  if (lang === currentLang) return;
  
  currentLang = lang;
  localStorage.setItem('site_lang', lang);
  
  const newUrl = new URL(window.location);
  newUrl.searchParams.set('lang', lang);
  window.history.replaceState({}, '', newUrl);

  renderContent(lang);
}

function renderContent(lang) {
  document.getElementById('lang-en').classList.toggle('active', lang === 'en');
  document.getElementById('lang-fr').classList.toggle('active', lang === 'fr');

  updateStaticUI(lang);
  updateMenuData(lang);
}

function updateStaticUI(lang) {
  const dictionary = uiTranslations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dictionary[key]) {
      el.innerHTML = dictionary[key];
    }
  });
}

function updateMenuData(lang) {
  if (!menuData || !menuData[lang]) return;

  const langData = menuData[lang];
  console.log(`\n--- Starting Translation Update for: [${lang.toUpperCase()}] ---`);
  
  Object.keys(langData).forEach(category => {
    langData[category].forEach(item => {
      const itemEl = document.querySelector(`[data-item-id="${item.id}"]`);
      if (!itemEl) {
        console.warn(`⚠️ Warning: HTML element not found for ID: ${item.id}`);
        return;
      }

      // Update Names
      const nameEl = itemEl.querySelector('.card-name, .drink-name');
      if (nameEl && item.name) {
        nameEl.textContent = item.name;
      }

      // Update Prices
      const priceEl = itemEl.querySelector('.card-price, .drink-price');
      if (priceEl && item.price_display) {
        priceEl.textContent = item.price_display;
      }

      // Update Descriptions securely
      const descEl = itemEl.querySelector('.card-desc, .drink-vars');
      if (descEl) {
        if (item.description !== undefined && item.description.trim() !== "") {
          descEl.textContent = item.description;
          descEl.style.display = ''; // Restore visibility if it was hidden
          
          // Print debug confirmation for successfully mapped descriptions
          console.log(`✅ Updated: [${item.id}] -> "${item.description.substring(0, 30)}..."`);
        } else {
          descEl.textContent = ''; 
          descEl.style.display = 'none'; // Hide element if description is empty to prevent blank gaps
        }
      }
    });
  });
}

// --- 3. Intersection Observers ---
function setupObservers() {
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.07 });

  reveals.forEach(el => io.observe(el));

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-inner a');

  const navIO = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(a => a.classList.remove('active'));
        const active = document.querySelector(`.nav-inner a[href="#${e.target.id}"]`);
        if (active) {
          active.classList.add('active');
          // Auto-scroll the nav container to keep the active item visible
          active.scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
            block: 'nearest'
          });
        }
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px' });

  sections.forEach(s => navIO.observe(s));
}

// Boot up
document.addEventListener('DOMContentLoaded', init);

document.addEventListener('DOMContentLoaded', () => {
  const footerCopyElement = document.querySelector('.footer-copy');
  if (footerCopyElement) {
    const currentYear = new Date().getFullYear();
    footerCopyElement.textContent = `© ${currentYear} Dallas Choco House. All rights reserved.`;
  }
});