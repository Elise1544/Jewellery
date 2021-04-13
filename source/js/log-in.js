'use strict';

(function () {

  const modalLogIn = document.querySelector('.log-in--modal');
  const buttonLogIn = document.querySelector('.login');
  const buttonCloseLogIn = document.querySelector('.log-in__close');
  const wrapper = document.querySelector('.modal-wrapper');
  const body = document.querySelector('.body');

  buttonLogIn.addEventListener('click', function (evt) {
    if (document.querySelector('.log-in--modal')) {
      const email = modalLogIn.querySelector('input[type="email"]');

      evt.preventDefault();
      modalLogIn.classList.add('log-in--active');
      wrapper.classList.add('modal-wrapper--active');
      email.focus();
      body.classList.add('body--no-scroll');
    }
  });

  const closeLogIn = function () {
    modalLogIn.classList.remove('log-in--active');
    wrapper.classList.remove('modal-wrapper--active');
    body.classList.remove('body--no-scroll');
  };

  buttonCloseLogIn.addEventListener('click', closeLogIn);
  wrapper.addEventListener('click', closeLogIn);
  window.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      closeLogIn();
    }
  });

})();
