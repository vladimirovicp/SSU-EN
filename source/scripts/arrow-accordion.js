/* Переключение вкладок описания в блоках Foreigners и Residence */

const removeCurrentClass = (tabs) => {
  tabs.forEach((tab) => {
    tab.classList.remove('arrow-accordion__item--current');
  });
};

// Функция для определения высоты блока с информацией (Foreigners или Residence)

const setAccordionHeight = (item, block) => {
  requestAnimationFrame(() => {
    const description = item.querySelector('.arrow-accordion__description');
    const accordionTabsList = block.querySelector('.arrow-accordion__list');

    if (window.innerWidth >= 1400) {
      if (description.offsetHeight >= accordionTabsList.offsetHeight) {
        accordionTabsList.style.height = `${description.offsetHeight}px`;
      } else {
        accordionTabsList.style.height = 'auto';
      }
    } else {
      accordionTabsList.style.height = 'auto';
    }
  });
};

/* Переключение вкладок описания в блоке Foreigners */

const foreignersBlock = document.querySelector('.foreigners');
const accordionTabs1 = foreignersBlock.querySelectorAll(
  '.arrow-accordion__item'
);

setAccordionHeight(accordionTabs1[0], foreignersBlock);

for (let i = 0; i < accordionTabs1.length; i++) {
  accordionTabs1[i].addEventListener('click', () => {
    removeCurrentClass(accordionTabs1);
    accordionTabs1[i].classList.toggle('arrow-accordion__item--current');

    accordionTabs1[i].addEventListener(
      'transitionend',
      () => {
        const isVisible = accordionTabs1[i].getBoundingClientRect().top >= 0;
        if (!isVisible) {
          accordionTabs1[i].scrollIntoView({ behavior: 'smooth' });
        }

        setAccordionHeight(accordionTabs1[i], foreignersBlock);
      },
      { once: true }
    );
  });
}

window.addEventListener('resize', () => {
  for (let i = 0; i < accordionTabs1.length; i++) {
    if (
      accordionTabs1[i].classList.contains('arrow-accordion__item--current')
    ) {
      setAccordionHeight(accordionTabs1[i], foreignersBlock);
    }
  }
});

/* Переключение вкладок описания в блоке Residence */

const residenceBlock = document.querySelector('.residence');
const accordionTabs2 = residenceBlock.querySelectorAll(
  '.arrow-accordion__item'
);

setAccordionHeight(accordionTabs2[0], residenceBlock);

// Функция-обработчик для клика по переключателю аккордиона
for (let i = 0; i < accordionTabs2.length; i++) {
  accordionTabs2[i].addEventListener('click', () => {
    removeCurrentClass(accordionTabs2);
    accordionTabs2[i].classList.toggle('arrow-accordion__item--current');

    accordionTabs2[i].addEventListener(
      'transitionend',
      () => {
        const isVisible = accordionTabs2[i].getBoundingClientRect().top >= 0;
        if (!isVisible) {
          accordionTabs2[i].scrollIntoView({ behavior: 'smooth' });
        }

        setAccordionHeight(accordionTabs2[i], residenceBlock);
      },
      { once: true }
    );
  });
}

window.addEventListener('resize', () => {
  for (let i = 0; i < accordionTabs2.length; i++) {
    if (
      accordionTabs2[i].classList.contains('arrow-accordion__item--current')
    ) {
      setAccordionHeight(accordionTabs2[i], residenceBlock);
    }
  }
});
