const mainNav = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const body = document.querySelector('.page-body');

navToggle.addEventListener('click', () => {
  if (mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    setTimeout(() => {
      mainNav.classList.add('main-nav--opened');
      body.style.overflow = 'hidden';
    }, 200);
  } else if (mainNav.classList.contains('main-nav--opened')) {
    body.style.overflowY = 'auto';
    mainNav.classList.remove('main-nav--opened');
    setTimeout(() => {
      mainNav.classList.add('main-nav--closed');
    }, 200);
  }
});

/* Переход по ссылке меню */

const navLinks = document.querySelectorAll('.main-nav__link');

const followLink = () => {
  if (window.innerWidth < 1400) {
    navLinks.forEach((navLink) => {
      // Создаем функцию-обработчик
      const clickHandler = (event) => {
        event.preventDefault();
        if (mainNav.classList.contains('main-nav--opened')) {
          body.style.overflowY = 'auto';
          mainNav.classList.remove('main-nav--opened');

          setTimeout(() => {
            mainNav.classList.add('main-nav--closed');

            setTimeout(() => {
              const targetElement = document.querySelector(
                navLink.getAttribute('href')
              );

              // Прокручиваем до целевого элемента с плавным скроллом
              if (targetElement) {
                targetElement.scrollIntoView({
                  behavior: 'smooth',
                });
              }
            }, 400);
          }, 200);
        }
      };

      navLink.addEventListener('click', clickHandler);

      // Добавляем обработчик событий для изменения размера окна
      window.addEventListener('resize', () => {
        if (window.innerWidth >= 1400) {
          // Удаляем обработчик событий, если ширина экрана больше или равна 1400px
          navLink.removeEventListener('click', clickHandler);
          if (mainNav.classList.contains('main-nav--opened')) {
            mainNav.classList.remove('main-nav--opened');
            mainNav.classList.add('main-nav--closed');
            body.style.overflowY = 'auto';
          }
        } else {
          navLink.addEventListener('click', clickHandler);
        }
      });
    });
  }
};

// Вызываем функцию первый раз
followLink();
