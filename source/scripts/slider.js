import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  lazy: true,
  loopAddBlankSlides: true,
  speed: 500,

  centeredSlides: true,
  slidesPerView: 'auto',
  effect: 'coverflow',
  coverflowEffect: {
    depth: 0,
    rotate: 0,
    scale: 0.78,
    slideShadows: false,
    stretch: 17,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
