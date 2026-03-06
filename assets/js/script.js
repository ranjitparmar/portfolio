const hamburger = document.querySelector('.nav-hamburger');
const drawer = document.querySelector('.nav-drawer');

if (hamburger && drawer) {

  const drawerLinks = drawer.querySelectorAll('a[href^="#"]');

  function openDrawer() {
    hamburger.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('nav-open');
  }

  function closeDrawer() {
    hamburger.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('nav-open');
  }

  hamburger.addEventListener('click', () => {
    drawer.classList.contains('is-open') ? closeDrawer() : openDrawer();
  });

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  document.addEventListener('click', (e) => {
    if (
      drawer.classList.contains('is-open') &&
      !e.target.closest('.nav-drawer') &&
      !e.target.closest('.nav-hamburger')
    ) {
      closeDrawer();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
      closeDrawer();
      hamburger.focus();
    }
  });
}

console.log(
`👋 Hello developer!

Thanks for checking the source.

GitHub:
https://github.com/ranjitparmar

Have a great day.`
);