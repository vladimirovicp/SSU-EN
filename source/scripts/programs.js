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
let swiperPrograms2 = null;

function initSwipers() {
  // Инициализация слайдеров только при ширине экрана <= 1400px

  if (window.innerWidth < 1400) {
    swiperPrograms2 = new Swiper('.swiperPrograms2', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 'auto',
      autoHeight: true,
      breakpoints: {
        1400: {
          autoHeight: false,
        },
      },
    });

    swiperPrograms1 = new Swiper('.swiperPrograms1', {
      direction: 'horizontal',
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
  if (window.innerWidth < 1400) {
    initSwipers();
  } else {
    destroySwipers();
  }
});

// Перелистывание слайдера при ширине экрана <= 1400px

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

    accordionButtons[i].parentElement.addEventListener('transitionend', () => {
      const programNamesList = document.querySelector('.programs__list');
      programNamesList.style.height = 'auto';
    });
  });
}

/* Для ширины экрана более 1400px */

const programSwitches = document.querySelectorAll('.programs__name-item');
const programNames = document.querySelectorAll('.programs__item');

const programNamesAsButtons = () => {
  if (window.innerWidth >= 1400) {
    for (let i = 0; i < programSwitches.length; i++) {
      programSwitches[i].addEventListener('click', () => {
        removeCurrentButton();

        programSwitches.forEach((programSwitch) => {
          if (
            programSwitch.classList.contains('programs__name-item--current')
          ) {
            programSwitch.classList.remove('programs__name-item--current');
          }
        });
        programSwitches[i].classList.add('programs__name-item--current');

        programNames.forEach((programName) => {
          if (programName.classList.contains('programs__item--current')) {
            programName.classList.remove('programs__item--current');
          }
        });
        programNames[i].classList.add('programs__item--current');
      });
    }
  }
};

programNamesAsButtons();

window.addEventListener('resize', () => {
  programNamesAsButtons();
});
