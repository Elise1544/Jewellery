'use strict';

(function () {

  const faq = document.querySelector('.faq');
  const faqItems = document.querySelectorAll('.faq__item');

  if (faq) {
    for (let i = 0; i < faqItems.length; i++) {
      faqItems[i].addEventListener('click', function () {
        faqItems[i].classList.toggle('faq__item--active');
      });
    }
  }

})();
