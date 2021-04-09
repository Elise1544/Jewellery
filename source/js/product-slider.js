'use strict';

(function () {

  new window.Swiper('.product__pictures--slider', {
    pagination: {
      el: '.product__pagination',
      clickable: true,
      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' + ' of ' + '<span class="' + totalClass + '"></span>'
      },
    },
  });

})();
