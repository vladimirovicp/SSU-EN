import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

/* Main slider */

const swiperMain = new Swiper('.swiperMain', {
  // Optional parameters
  direction: 'horizontal',
  speed: 500,
  loop: true,

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

/* Text-slider */

const arrowLeft = document.querySelector('.info-template__arrow--left');
const arrowRight = document.querySelector('.info-template__arrow--right');

const currentSlide = document.querySelector('.info-template__slide--current');
const lastSlide = document.querySelector('.info-template__slide--last');

const swiperText = new Swiper('.swiperText', {
  // Optional parameters
  direction: 'horizontal',
  speed: 500,
  loop: true,
  autoHeight: true,
});

arrowLeft.addEventListener('click', () => {
  swiperText.slidePrev();
});

arrowRight.addEventListener('click', () => {
  swiperText.slideNext();
});

const listSlides = document.querySelectorAll('.text-slider__item');
lastSlide.textContent = `0${listSlides.length - 1}`;

const showCurrentSlide = () => {
  for (let i = 0; i < listSlides.length; i++) {
    if (listSlides[i].classList.contains('swiper-slide-active')) {
      currentSlide.textContent = `0${i + 1}`;
    }
  }
};

showCurrentSlide();

// swiperText.onAny(showCurrentSlide);

/* Picture-slider */

const swiperPicture1 = new Swiper('.swiperPicture1', {
  // Optional parameters
  direction: 'horizontal',
  speed: 500,
  loop: true,
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

const swiperPicture2 = new Swiper('.swiperPicture2', {
  // Optional parameters
  direction: 'horizontal',
  speed: 500,
  loop: true,
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
