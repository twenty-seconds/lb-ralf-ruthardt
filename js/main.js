/* ===== Hamburger-Menü (Pflicht-Snippet) ===== */
const hamburger   = document.getElementById('hamburger');
const mobileMenu  = document.getElementById('mobile-menu');
const menuOverlay = document.getElementById('menu-overlay');

function closeMenu() {
  hamburger.classList.remove('active');
  mobileMenu.classList.remove('open');
  menuOverlay.classList.remove('active');
  hamburger.setAttribute('aria-expanded', 'false');
  hamburger.setAttribute('aria-label', 'Menü öffnen');
  document.body.style.overflow = '';
}

function openMenu() {
  hamburger.classList.add('active');
  mobileMenu.classList.add('open');
  menuOverlay.classList.add('active');
  hamburger.setAttribute('aria-expanded', 'true');
  hamburger.setAttribute('aria-label', 'Menü schließen');
  document.body.style.overflow = 'hidden';
}

if (hamburger) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.contains('open') ? closeMenu() : openMenu();
  });
  menuOverlay.addEventListener('click', closeMenu);
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
}

/* ===== FAQ-Akkordeon ===== */
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    item.classList.toggle('open');
  });
});

/* ===== Copyright-Jahr ===== */
const yr = document.getElementById('copyright-year');
if (yr) yr.textContent = new Date().getFullYear();
