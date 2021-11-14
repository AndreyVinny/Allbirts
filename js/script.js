let menu = document.querySelectorAll('.nav_menu'),
    burger = document.querySelector('.ham_menu'),
    body = document.querySelector('body');

burger.addEventListener('click', AddActive)

function AddActive () {
    burger.classList.toggle('active');
    menu.forEach(elem => { elem.classList.toggle('active')});
    body.classList.toggle('active');
}

let navLink = document.querySelectorAll('.nav_item');

navLink.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu () {
    burger.classList.remove('active');
    menu.forEach(elem => { elem.classList.toggle('active')})
    body.classList.toggle('active');
}
;
const swiper = new Swiper('.season-slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  keyboard: {
      enabled: true,
      onlyInViewport: true,
  },
  mousewheel: {
      sensitivity: 1,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 150,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 100,
    },
    720: {
      slidesPerView: 2,
      spaceBetween: 80,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
  },
})
;
