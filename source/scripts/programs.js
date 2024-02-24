import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

/* Programs slider */

/* Для ширины экрана до 1400px */

const accordionButtons = document.querySelectorAll('.plus-accordion__button');

let swiperPrograms1 = null;
let swiperPrograms2 = null;

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

function initSwipers() {
  // Инициализация слайдеров только при ширине экрана <= 1400px
  if (window.innerWidth <= 1400) {
    swiperPrograms2 = new Swiper('.swiperPrograms2', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 'auto',
    });

    swiperPrograms1 = new Swiper('.swiperPrograms1', {
      direction: 'horizontal',
      spaceBetween: 40,
      breakpoints: {
        1400: {
          spaceBetween: 0,
        },
      },
      loop: true,
      slidesPerView: 'auto',
      controller: {
        control: swiperPrograms2,
      },
    });
  }
}

function destroySwipers() {
  // Уничтожение слайдеров при ширине экрана > 1400px
  if (swiperPrograms1 !== null && swiperPrograms2 !== null) {
    swiperPrograms1.destroy();
    swiperPrograms2.destroy();
    swiperPrograms1 = null;
    swiperPrograms2 = null;
  }
}

// Инициализация слайдеров при загрузке страницы
initSwipers();

// Проверка инициализации слайдеров при изменении размера окна
window.addEventListener('resize', () => {
  if (window.innerWidth <= 1400) {
    initSwipers();
  } else {
    destroySwipers();
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
const programList = document.querySelector('.programs__list');

const programNamesAsButtons = () => {
  if (window.innerWidth >= 1400) {
    for (let i = 0; i < programNames.length; i++) {
      programNames[i].addEventListener('click', () => {
        for (let j = 0; j < programNames.length; j++) {
          if (
            programNames[j].classList.contains('programs__name-item--current')
          ) {
            programNames[j].classList.remove('programs__name-item--current');
          }
        }

        if (
          !programNames[i].classList.contains('programs__name-item--current')
        ) {
          programNames[i].classList.add('programs__name-item--current');
        }

        if (i === 0) {
          programList.className = 'programs__list swiper-wrapper';
        }

        if (i === 1) {
          programList.className =
            'programs__list programs__list--masters swiper-wrapper';
        }
        if (i === 2) {
          programList.className =
            'programs__list programs__list--postgraduate swiper-wrapper';
        }

        removeCurrentButton();
      });
    }
    // for (let i = 0; i < programNames.length; i++) {
    //   programNames[i].addEventListener('click', () => {
    //     for (let j = 0; j < programNames.length; j++) {
    //       if (
    //         programNames[j].classList.toggle('programs__name-item--current')
    //       ) {
    //         programNames[j].classList.remove('programs__name-item--current');
    //       }
    //     }
    //     if (!programNames[i].classList.toggle('programs__name-item--current')) {
    //       programNames[i].classList.add('programs__name-item--current');
    //     }
    //   });
    // }
  }
};

programNamesAsButtons();

window.addEventListener('resize', () => {
  programNamesAsButtons();
});

// programNames.forEach((programName) => {
//   programName.addEventListener('click', () => {
//     programNames.forEach((programName) => {})
//   });
// });

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
