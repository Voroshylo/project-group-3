document.addEventListener('DOMContentLoaded', () => {
  const openMenuBtn = document.querySelector('[data-menu-open]');
  const closeMenuBtn = document.querySelector('.close-menu');
  const mobileMenu = document.querySelector('.menu');

  function openMenu() {
    mobileMenu.classList.add('is-open');
    document.body.classList.add('no-scroll');
  }

  function closeMenu() {
    mobileMenu.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  }
  
  openMenuBtn.addEventListener('click', openMenu);
  closeMenuBtn.addEventListener('click', closeMenu);

  document.querySelectorAll('.nav-mob-menu a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
});