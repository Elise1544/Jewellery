'use strict';

(function () {

  const information = document.querySelector('.information');
  const LIGHT_COLOR = '#9b9997';
  const DARK_COLOR = '#1d1613';

  if (information) {
    const titles = document.querySelector('.information__title').querySelectorAll('h3');
    const titleDescription = titles[0];
    const titleAdditional = titles[1];
    titleDescription.style.color = LIGHT_COLOR;
    titleAdditional.style.color = DARK_COLOR;
    const descriptionBlock = document.querySelector('.information__block--description');
    const additionalBlock = document.querySelector('.information__block--additional');

    titleDescription.addEventListener('click', function () {
      titleDescription.style.color = DARK_COLOR;
      titleAdditional.style.color = LIGHT_COLOR;
      descriptionBlock.classList.add('information__block--active');
      additionalBlock.classList.remove('information__block--active');
    });

    titleAdditional.addEventListener('click', function () {
      titleDescription.style.color = LIGHT_COLOR;
      titleAdditional.style.color = DARK_COLOR;
      descriptionBlock.classList.remove('information__block--active');
      additionalBlock.classList.add('information__block--active');
    });
  }

})();
