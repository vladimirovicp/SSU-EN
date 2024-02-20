import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

/* Programs slider */

const swiperPrograms2 = new Swiper('.swiperPrograms2', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  // autoHeight: true,
});

const swiperPrograms1 = new Swiper('.swiperPrograms1', {
  // Optional parameters
  direction: 'horizontal',
  spaceBetween: 40,
  loop: true,
  slidesPerView: 'auto', // позволяет задавать высоту слайдов
  controller: {
    control: swiperPrograms2,
  },
});

const arrowPrev = document.querySelector('.programs__arrow--left');
const arrowNext = document.querySelector('.programs__arrow--right');

arrowPrev.addEventListener('click', () => {
  swiperPrograms1.slidePrev();
});

arrowNext.addEventListener('click', () => {
  swiperPrograms1.slideNext();
});

const accordionButtons = document.querySelectorAll('.plus-accordion__button');

for (let i = 0; i < accordionButtons.length; i++) {
  accordionButtons[i].addEventListener('click', () => {
    for (let j = 0; j < accordionButtons.length; j++) {
      if (
        j !== i &&
        accordionButtons[j].parentElement.classList.contains(
          'plus-accordion__inner--current'
        )
      ) {
        accordionButtons[j].parentElement.classList.remove(
          'plus-accordion__inner--current'
        );
      }
    }
    accordionButtons[i].parentElement.classList.toggle(
      'plus-accordion__inner--current'
    );
  });
}

// /* Programs slider */

// const initSwiperPrograms2 = () => {
//   const swiperPrograms2 = new Swiper('.swiperPrograms2', {
//     direction: 'horizontal',
//     loop: true,
//     slidesPerView: 'auto',
//     // autoHeight: true,
//   });
// };

// const initSwiperPrograms1 = () => {
//   const swiperPrograms1 = new Swiper('.swiperPrograms1', {
//     // Optional parameters
//     direction: 'horizontal',
//     spaceBetween: 40,
//     loop: true,
//     slidesPerView: 'auto', // позволяет задавать высоту слайдов
//     controller: {
//       control: swiperPrograms2,
//     },
//   });
// };

// const destroySwiperPrograms = (slider) => {
//   if (slider) {
//     slider.destroy(true, true);
//     slider = undefined;
//   }
// };

// const toggleSwiperPrograms = () => {
//   if (window.innerWidth <= 1400) {
//     initSwiperPrograms2();
//     initSwiperPrograms1();
//   } else {
//     destroySwiperPrograms(swiperPrograms2);
//     destroySwiperPrograms(swiperPrograms1);
//   }
// };

// toggleSwiperPrograms();

// window.addEventListener('resize', toggleSwiperPrograms);

// const arrowPrev = document.querySelector('.programs__arrow--left');
// const arrowNext = document.querySelector('.programs__arrow--right');

// arrowPrev.addEventListener('click', () => {
//   swiperPrograms1.slidePrev();
// });

// arrowNext.addEventListener('click', () => {
//   swiperPrograms1.slideNext();
// });

// const accordionButtons = document.querySelectorAll('.plus-accordion__button');

// for (let i = 0; i < accordionButtons.length; i++) {
//   accordionButtons[i].addEventListener('click', () => {
//     for (let j = 0; j < accordionButtons.length; j++) {
//       if (
//         j !== i &&
//         accordionButtons[j].parentElement.classList.contains(
//           'plus-accordion__inner--current'
//         )
//       ) {
//         accordionButtons[j].parentElement.classList.remove(
//           'plus-accordion__inner--current'
//         );
//       }
//     }
//     accordionButtons[i].parentElement.classList.toggle(
//       'plus-accordion__inner--current'
//     );
//   });
// }
