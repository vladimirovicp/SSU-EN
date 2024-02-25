/* Функция поиска номера текущего элемента в слайдере */

const showCurrentSlide = (list, slide) => {
  setTimeout(() => {
    for (let i = 0; i < list.length; i++) {
      if (list[i].classList.contains('swiper-slide-active')) {
        slide.textContent = `0${i + 1}`;
      }
    }
  }, 0);
};

export { showCurrentSlide };
