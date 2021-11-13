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
  breakpoints: {
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

// $pc: 1440px;
// $notebook: 900px;
// $tablet: 720px;
// $mobile: 420px;
// $mobile-mini: 320px;
