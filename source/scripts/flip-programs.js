/* Реализация переключения программ в блоке Programs */

const programs = document.querySelectorAll('.programs__pagination-inner');
const programsList = document.querySelector('.programs__list');

programs.forEach((product) => {
  product.addEventListener('click', () => {
    const currentProgram = document.querySelector(
      '.programs__pagination-item--current'
    );

    if (
      !product.parentNode.classList.contains(
        'programs__pagination-item--current'
      )
    ) {
      currentProgram.classList.remove('programs__pagination-item--current');
      product.parentNode.classList.add('programs__pagination-item--current');
    }

    if (product.classList.contains('programs__pagination-inner--bachelors')) {
      programsList.className = '';
      programsList.classList.add('programs__list');
    }
    if (product.classList.contains('programs__pagination-inner--masters')) {
      programsList.className = '';
      programsList.classList.add('programs__list', 'programs__list--masters');
    }
    if (
      product.classList.contains('programs__pagination-inner--postgraduate')
    ) {
      programsList.className = '';
      programsList.classList.add(
        'programs__list',
        'programs__list--postgraduate'
      );
    }
  });
});
