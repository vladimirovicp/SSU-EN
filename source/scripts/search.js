/* Поиск по сайту */

const searchButtons = document.querySelectorAll('.search__button');
const inputMainNav = document
  .querySelector('.main-nav')
  .querySelector('.search__input');
const searchMainNavBlock = document
  .querySelector('.main-nav')
  .querySelector('.search');

// const handleClick = (event) => {
//   const searchInput =
//     event.currentTarget.parentElement.querySelector('.search__input');
//   if (!searchInput.value) {
//     event.preventDefault();
//     if (searchMainNavBlock.classList.contains('search--invisible')) {
//       searchMainNavBlock.classList.remove('search--invisible');
//       searchInput.addEventListener('transitionend', () => {
//         searchInput.focus();
//       });
//     } else {
//       searchInput.focus();
//     }
//   }
// };

// // Добавьте обработчик события
// searchButtons.forEach((searchButton) => {
//   searchButton.addEventListener('click', handleClick);
// });

// // Удалите обработчик события
// searchButtons.forEach((searchButton) => {
//   searchButton.removeEventListener('click', handleClick);
// });

searchButtons.forEach((searchButton) => {
  searchButton.addEventListener('click', (event) => {
    const searchBlock = searchButton.parentElement;
    const searchInput =
      searchButton.parentElement.querySelector('.search__input');
    if (!searchInput.value) {
      event.preventDefault();
      if (searchBlock.classList.contains('search--invisible')) {
        searchBlock.classList.remove('search--invisible');
        searchInput.addEventListener('transitionend', () => {
          searchInput.focus();
        });
      } else {
        searchInput.focus();
      }
    }
  });
});

inputMainNav.addEventListener('blur', () => {
  if (!searchMainNavBlock.classList.contains('search--invisible')) {
    searchMainNavBlock.classList.add('search--invisible');
  }
});
