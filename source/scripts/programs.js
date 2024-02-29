import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

/* Programs slider */

/* Для ширины экрана до 1400px */

const accordionButtons = document.querySelectorAll('.plus-accordion__button');

const removeCurrentButton = () => {
  accordionButtons.forEach((accordionButton) => {
    if (
      accordionButton.parentElement.classList.contains(
        'plus-accordion__inner--current'
      )
    ) {
      accordionButton.parentElement.classList.remove(
        'plus-accordion__inner--current'
      );
    }
  });
};

let swiperPrograms1 = null;
const swiperPrograms2 = new Swiper('.swiperPrograms2', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  autoHeight: true,
});

function initSwiperPrograms1() {
  // Инициализация слайдеров только при ширине экрана <= 1400px
  if (window.innerWidth <= 1400) {
    swiperPrograms1 = new Swiper('.swiperPrograms1', {
      direction: 'horizontal',
      spaceBetween: 40,
      // breakpoints: {
      //   1400: {
      //     spaceBetween: 0,
      //   },
      // },
      // loop: true,
      slidesPerView: 'auto',
      controller: {
        control: swiperPrograms2,
      },
    });
  }
}

function destroySwiperPrograms1() {
  // Уничтожение слайдеров при ширине экрана > 1400px
  if (swiperPrograms1 !== null) {
    swiperPrograms1.destroy();
    swiperPrograms1 = null;
  }
}

// Инициализация слайдеров при загрузке страницы
initSwiperPrograms1();

// Проверка инициализации слайдеров при изменении размера окна
window.addEventListener('resize', () => {
  if (window.innerWidth <= 1400) {
    initSwiperPrograms1();
  } else {
    destroySwiperPrograms1();
  }
});

const arrowPrev = document.querySelector('.programs__arrow--left');
const arrowNext = document.querySelector('.programs__arrow--right');

arrowPrev.addEventListener('click', () => {
  if (swiperPrograms1) {
    swiperPrograms1.slidePrev();
    removeCurrentButton();
  }
});

arrowNext.addEventListener('click', () => {
  if (swiperPrograms1) {
    swiperPrograms1.slideNext();
    removeCurrentButton();
  }
});

/* Управление аккордионом открывающимся на плюс */

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

/* Для ширины экрана более 1400px */

const programNames = document.querySelectorAll('.programs__name-item');
const programBachelors = document.querySelector(
  '.programs__name-item--bachelors'
);
const programMasters = document.querySelector('.programs__name-item--masters');
const programPostgraduate = document.querySelector(
  '.programs__name-item--postgraduate'
);
// const programList = document.querySelector('.programs__list');

// const replaceCurrentProgram = (element) => {
//   for (let j = 0; j < programNames.length; j++) {
//     if (programNames[j].classList.contains('programs__name-item--current')) {
//       programNames[j].classList.remove('programs__name-item--current');
//     }
//   }
//   element.classList.add('programs__name-item--current');
// };

// const programNamesAsButtons = () => {
//   const handleClick = (element, slideFunc) => {
//     swiperPrograms2[slideFunc]();
//     replaceCurrentProgram(element);
//   };

//   if (window.innerWidth >= 1400) {
//     for (let i = 0; i < programNames.length; i++) {
//       const currentProgram = programNames[i];
//       if (currentProgram.classList.contains('programs__name-item--bachelors')) {
//         programPostgraduate.addEventListener('click', () =>
//           handleClick(currentProgram, 'slidePrev')
//         );
//         programMasters.addEventListener('click', () =>
//           handleClick(currentProgram, 'slideNext')
//         );
//       }
//       if (currentProgram.classList.contains('programs__name-item--masters')) {
//         programBachelors.addEventListener('click', () =>
//           handleClick(currentProgram, 'slidePrev')
//         );
//         programPostgraduate.addEventListener('click', () =>
//           handleClick(currentProgram, 'slideNext')
//         );
//       }
//       if (
//         currentProgram.classList.contains('programs__name-item--postgraduate')
//       ) {
//         programBachelors.addEventListener('click', () =>
//           handleClick(currentProgram, 'slidePrev')
//         );
//         programMasters.addEventListener('click', () =>
//           handleClick(currentProgram, 'slideNext')
//         );
//       }
//     }
//   }
// };

// programNamesAsButtons();

const replaceCurrentProgram = () => {
  for (let j = 0; j < programNames.length; j++) {
    if (programNames[j].classList.contains('programs__name-item--current')) {
      programNames[j].classList.remove('programs__name-item--current');
    }
  }
  this.classList.add('programs__name-item--current');
};

const programNamesAsButtons = () => {
  if (window.innerWidth >= 1400) {
    for (let i = 0; i < programNames.length; i++) {
      if (
        programNames[i].classList.contains('programs__name-item--bachelors')
      ) {
        programPostgraduate.addEventListener('click', () => {
          swiperPrograms2.slidePrev();
          replaceCurrentProgram();
        });
        programMasters.addEventListener('click', () => {
          swiperPrograms2.slideNext();
          replaceCurrentProgram();
        });
      }

      if (programNames[i].classList.contains('programs__name-item--masters')) {
        programBachelors.addEventListener('click', () => {
          swiperPrograms2.slidePrev();
          replaceCurrentProgram();
        });
        programPostgraduate.addEventListener('click', () => {
          swiperPrograms2.slideNext();
          replaceCurrentProgram();
        });
      }

      if (
        programNames[i].classList.contains('programs__name-item--postgraduate')
      ) {
        programBachelors.addEventListener('click', () => {
          swiperPrograms2.slidePrev();
          replaceCurrentProgram();
        });
        programMasters.addEventListener('click', () => {
          swiperPrograms2.slideNext();
          replaceCurrentProgram();
        });
      }
    }
  }
};

programNamesAsButtons();

window.addEventListener('resize', () => {
  programNamesAsButtons();
});

// const programNamesAsButtons = () => {
//   if (window.innerWidth >= 1400) {
//     for (let i = 0; i < programNames.length; i++) {
//       programNames[i].addEventListener('click', () => {
//         for (let j = 0; j < programNames.length; j++) {
//           if (
//             programNames[j].classList.contains('programs__name-item--current')
//           ) {
//             programNames[j].classList.remove('programs__name-item--current');
//           }
//         }

//         if (
//           programNames[i].classList.contains('programs__name-item--bachelors')
//         ) {
//         }

//         if (
//           !programNames[i].classList.contains('programs__name-item--current')
//         ) {
//           programNames[i].classList.add('programs__name-item--current');
//         }

//         if (i === 0) {
//           programList.className = 'programs__list swiper-wrapper';
//         }

//         if (i === 1) {
//           programList.className =
//             'programs__list programs__list--masters swiper-wrapper';
//         }
//         if (i === 2) {
//           programList.className =
//             'programs__list programs__list--postgraduate swiper-wrapper';
//         }

//         removeCurrentButton();
//       });
//     }
//   }
// };

// programNamesAsButtons();

// window.addEventListener('resize', () => {
//   programNamesAsButtons();
// });

// ЗДЕСЬ РАЗДЕЛИТЕЛЬ

// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

// /* Programs slider */

// /* Для ширины экрана до 1400px */

// const accordionButtons = document.querySelectorAll('.plus-accordion__button');

// let swiperPrograms1 = null;
// let swiperPrograms2 = null;

// const removeCurrentButton = () => {
//   accordionButtons.forEach((accordionButton) => {
//     if (
//       accordionButton.parentElement.classList.contains(
//         'plus-accordion__inner--current'
//       )
//     ) {
//       accordionButton.parentElement.classList.remove(
//         'plus-accordion__inner--current'
//       );
//     }
//   });
// };

// function initSwipers() {
//   // Инициализация слайдеров только при ширине экрана <= 1400px
//   if (window.innerWidth <= 1400) {
//     swiperPrograms2 = new Swiper('.swiperPrograms2', {
//       direction: 'horizontal',
//       loop: true,
//       slidesPerView: 'auto',
//       autoHeight: true,
//     });

//     swiperPrograms1 = new Swiper('.swiperPrograms1', {
//       direction: 'horizontal',
//       spaceBetween: 40,
//       // breakpoints: {
//       //   1400: {
//       //     spaceBetween: 0,
//       //   },
//       // },
//       // loop: true,
//       slidesPerView: 'auto',
//       controller: {
//         control: swiperPrograms2,
//       },
//     });
//   }
// }

// function destroySwipers() {
//   // Уничтожение слайдеров при ширине экрана > 1400px
//   if (swiperPrograms1 !== null && swiperPrograms2 !== null) {
//     swiperPrograms1.destroy();
//     swiperPrograms2.destroy();
//     swiperPrograms1 = null;
//     swiperPrograms2 = null;
//   }
// }

// // Инициализация слайдеров при загрузке страницы
// initSwipers();

// // Проверка инициализации слайдеров при изменении размера окна
// window.addEventListener('resize', () => {
//   if (window.innerWidth <= 1400) {
//     initSwipers();
//   } else {
//     destroySwipers();
//   }
// });

// const arrowPrev = document.querySelector('.programs__arrow--left');
// const arrowNext = document.querySelector('.programs__arrow--right');

// arrowPrev.addEventListener('click', () => {
//   if (swiperPrograms1) {
//     swiperPrograms1.slidePrev();
//     removeCurrentButton();
//   }
// });

// arrowNext.addEventListener('click', () => {
//   if (swiperPrograms1) {
//     swiperPrograms1.slideNext();
//     removeCurrentButton();
//   }
// });

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

// /* Для ширины экрана более 1400px */

// const programNames = document.querySelectorAll('.programs__name-item');
// const programList = document.querySelector('.programs__list');

// const programNamesAsButtons = () => {
//   if (window.innerWidth >= 1400) {
//     for (let i = 0; i < programNames.length; i++) {
//       programNames[i].addEventListener('click', () => {
//         for (let j = 0; j < programNames.length; j++) {
//           if (
//             programNames[j].classList.contains('programs__name-item--current')
//           ) {
//             programNames[j].classList.remove('programs__name-item--current');
//           }
//         }

//         if (
//           !programNames[i].classList.contains('programs__name-item--current')
//         ) {
//           programNames[i].classList.add('programs__name-item--current');
//         }

//         if (i === 0) {
//           programList.className = 'programs__list swiper-wrapper';
//         }

//         if (i === 1) {
//           programList.className =
//             'programs__list programs__list--masters swiper-wrapper';
//         }
//         if (i === 2) {
//           programList.className =
//             'programs__list programs__list--postgraduate swiper-wrapper';
//         }

//         removeCurrentButton();
//       });
//     }
//   }
// };

// programNamesAsButtons();

// window.addEventListener('resize', () => {
//   programNamesAsButtons();
// });
