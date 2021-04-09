'use strict';

(function () {

  const information = document.querySelector('.information');

  if (information) {
    const titles = document.querySelector('.information__title').querySelectorAll('h3');
    const titleDescription = titles[0];
    const titleAdditional = titles[1];
    titleDescription.style.color = '#9b9997';
    titleAdditional.style.color = '#1d1613';
    const descriptionBlock = document.querySelector('.information__block--description');
    const additionalBlock = document.querySelector('.information__block--additional');

    titleDescription.addEventListener('click', function () {
      titleDescription.style.color = '#1d1613';
      titleAdditional.style.color = '#9b9997';
      descriptionBlock.classList.add('information__block--active');
      additionalBlock.classList.remove('information__block--active');
    });

    titleAdditional.addEventListener('click', function () {
      titleDescription.style.color = '#9b9997';
      titleAdditional.style.color = '#1d1613';
      descriptionBlock.classList.remove('information__block--active');
      additionalBlock.classList.add('information__block--active');
    });
  }

})();
