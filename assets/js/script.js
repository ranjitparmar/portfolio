// ── Mobile nav toggle ──
const hamburger = document.querySelector('.nav-hamburger');
const drawer = document.querySelector('.nav-drawer');
const drawerLinks = drawer.querySelectorAll('a');

function openDrawer() {
  hamburger.classList.add('is-open');
  hamburger.setAttribute('aria-expanded', 'true');
  drawer.classList.add('is-open');
  drawer.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  hamburger.classList.remove('is-open');
  hamburger.setAttribute('aria-expanded', 'false');
  drawer.classList.remove('is-open');
  drawer.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
  const isOpen = drawer.classList.contains('is-open');
  isOpen ? closeDrawer() : openDrawer();
});

// Close drawer when a link is tapped
drawerLinks.forEach(link => {
  link.addEventListener('click', closeDrawer);
});

// Close drawer on outside tap
document.addEventListener('click', (e) => {
  if (
    drawer.classList.contains('is-open') &&
    !drawer.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    closeDrawer();
  }
});

// Close drawer on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
    closeDrawer();
    hamburger.focus();
  }
});

// Easter Egg
console.log(`
👋 Hello developer!

Thanks for checking the source.

GitHub:
https://github.com/ranjitparmar

Have a great day.
`);
