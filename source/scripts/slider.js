import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const arrowLeft = document.querySelector('.text-slider-container__arrow--left');
const arrowRight = document.querySelector(
  '.text-slider-container__arrow--right'
);

const currentSlide = document.querySelector(
  '.text-slider-container__slide--current'
);
const lastSlide = document.querySelector('.text-slider-container__slide--last');

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
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperText = new Swiper('.swiperText', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  lazy: true,
  // loopAddBlankSlides: true,
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
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

arrowLeft.addEventListener('click', () => {
  swiperText.slidePrev();
});

arrowRight.addEventListener('click', () => {
  swiperText.slideNext();
});

const listSlides = document.querySelectorAll('.text-slider__item');
lastSlide.innerHTML = `0${listSlides.length - 1}`;

// const activeSlide = document.querySelector('.swiper-slide-active');

for (let i = 0; i < listSlides.length; i++) {
  listSlides[i].classList.contains('swiper-slide-active');
  currentSlide.innerHTML = `0${i}`;
}
