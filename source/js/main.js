'use strict';

(function () {

  // const body = document.querySelector('body');
  // const close = document.querySelector('.close');
  // const open = document.querySelector('.open');
  // const wrapper = document.querySelector('.modal-wrapper');

  // open.addEventListener('click', function (evt) {
  //   if (document.querySelector('.modal')) {
  //     const name = document.querySelector('.modal').querySelector('input[type="text"]');
  //     evt.preventDefault();
  //     document.querySelector('.modal').classList.add('modal--open');
  //     wrapper.classList.add('modal-wrapper--active');
  //     name.focus();
  //     body.classList.add('body--no-scroll');
  //   }
  // });

  // const closeModal = function () {
  //   document.querySelector('.modal').classList.remove('modal--open');
  //   wrapper.classList.remove('modal-wrapper--active');
  //   body.classList.remove('body--no-scroll');
  // };

  // close.addEventListener('click', closeModal);
  // wrapper.addEventListener('click', closeModal);

  // window.addEventListener('keydown', function (evt) {
  //   if (evt.key === 'Escape') {
  //     closeModal();
  //   }
  // });

  const header = document.querySelector('.header');
  const headerMenu = header.querySelector('.header__menu')
  const logo = document.querySelector('.logo');
  const cart = document.querySelector('.header__cart');

  document.addEventListener('DOMContentLoaded', function () {
    header.classList.remove('header--open');
    header.classList.add('header--close');
    logo.classList.remove('logo--open');
    cart.classList.add('header__cart--close');
  });

  if (header) {
    headerMenu.addEventListener('click', function (evt) {
      evt.preventDefault();
      if (header.classList.contains('header--close')) {
        header.classList.remove('header--close');
        header.classList.add('header--open');
      } else {
        header.classList.remove('header--open');
        header.classList.add('header--close');
      };
      logo.classList.toggle('logo--open');
      cart.classList.toggle('header__cart--close');
    });

    officeButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      officeButton.classList.toggle('footer__button--close');
      office.classList.toggle('office__wrap--closed');
      sectionsButton.classList.add('footer__button--close');
      sections.classList.add('sections__list--closed');
    });
  }

})();
