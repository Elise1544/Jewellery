'use strict';

(function () {

  const header = document.querySelector('.header');
  const headerMenu = header.querySelector('.header__menu')
  const logo = document.querySelector('.logo');
  const cart = document.querySelector('.header__cart');

  if (header) {
    header.classList.remove('header--open');
    logo.classList.remove('logo--open');
    cart.classList.add('header__cart--close');

    headerMenu.addEventListener('click', function (evt) {
      evt.preventDefault();
      header.classList.toggle('header--open');
      logo.classList.toggle('logo--open');
      cart.classList.toggle('header__cart--close');
    });
  }

})();
