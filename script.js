/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle && mainNav) {

  menuToggle.addEventListener('click', () => {

    const isOpen = mainNav.classList.toggle('open');

    menuToggle.setAttribute(
      'aria-expanded',
      isOpen.toString()
    );

  });


  document.querySelectorAll('.main-nav a').forEach(link => {

    link.addEventListener('click', () => {

      mainNav.classList.remove('open');

      menuToggle.setAttribute(
        'aria-expanded',
        'false'
      );

    });

  });

}


/* =========================
   FOOTER YEAR
========================= */

const year = document.getElementById('year');

if (year) {

  year.textContent = new Date().getFullYear();

}


/* =========================
   GO BACK TO HOME BUTTON
========================= */

const backToHome = document.querySelector('.back-to-home');

if (backToHome) {

  window.addEventListener('scroll', () => {

    if (window.scrollY > 400) {

      backToHome.classList.add('show');

    } else {

      backToHome.classList.remove('show');

    }

  });


  backToHome.addEventListener('click', () => {

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  });

}