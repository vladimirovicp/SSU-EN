import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

import { showCurrentSlide } from './util.js';

/* News slider */

const swiperNews = new Swiper('.swiperNews', {
  // Optional parameters
  direction: 'horizontal',
  speed: 500,
  spaceBetween: 24,
  loop: true,
  autoHeight: true,
  breakpoints: {
    1400: {
      slidesPerView: 4,
    },
  },
});

const arrowLeft = document.querySelector('.news__arrow--left');
const arrowRight = document.querySelector('.news__arrow--right');

arrowLeft.addEventListener('click', () => {
  swiperNews.slidePrev();
});

arrowRight.addEventListener('click', () => {
  swiperNews.slideNext();
});

const currentSlide = document.querySelector('.news__slide--current');
const lastSlide = document.querySelector('.news__slide--last');
const listSlides = document.querySelectorAll('.news__item');

lastSlide.textContent = `0${listSlides.length}`;

showCurrentSlide(listSlides, currentSlide);

swiperNews.on('slideChange', () => {
  showCurrentSlide(listSlides, currentSlide);
});

/* News inner-slider */

const swiperInnerNews = new Swiper('.swiperInnerNews', {
  // Optional parameters
  direction: 'horizontal',
  speed: 500,
  spaceBetween: 40,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
