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
