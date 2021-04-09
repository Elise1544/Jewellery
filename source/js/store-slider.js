'use strict';

(function () {

  new window.Swiper('.store__container', {
    navigation: {
      nextEl: '.store__button--next',
      prevEl: '.store__button--prev',
    },

    pagination: {
      el: '.store__pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
  });

})();
