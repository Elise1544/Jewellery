'use strict';

(function () {

  const shoppingCart = document.querySelector('.shopping-cart')
  const buttonCartMore = document.querySelector('.shopping-cart__button--more');
  const buttonCartLess = document.querySelector('.shopping-cart__button--less');
  const modalCart = document.querySelector('.shopping-cart--modal');
  const wrapper = document.querySelector('.modal-wrapper');
  const body = document.querySelector('.body');

  if (modalCart) {
    const buttonBuy = document.querySelector('.information__button');
    const buttonCloseCart = modalCart.querySelector('.shopping-cart__close');

    buttonBuy.addEventListener('click', function (evt) {
      if (document.querySelector('.shopping-cart--modal')) {
        evt.preventDefault();
        modalCart.classList.add('shopping-cart--active');
        wrapper.classList.add('modal-wrapper--active');
        body.classList.add('body--no-scroll');
      }
    })

    const closeCart = function () {
      modalCart.classList.remove('shopping-cart--active');
      wrapper.classList.remove('modal-wrapper--active');
      body.classList.remove('body--no-scroll');
    }

    buttonCloseCart.addEventListener('click', closeCart);
    wrapper.addEventListener('click', closeCart);
    window.addEventListener('keydown', function (evt) {
      if (evt.key === 'Escape') {
        closeCart();
      }
    });
  }

  if (shoppingCart) {
    const shoppingCartInput = shoppingCart.querySelector('input');

    document.addEventListener('click', function (evt) {
      if (evt.target === buttonCartMore) {
        if (shoppingCartInput.value < 99) {
          ++shoppingCartInput.value;
        }
      } else if (evt.target === buttonCartLess) {
        if (shoppingCartInput.value > 1) {
          --shoppingCartInput.value;
        }
      }
    });
  }

})();
