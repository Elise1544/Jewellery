'use strict';

(function () {

  // главная страница
  const header = document.querySelector('.header');
  const headerMenu = header.querySelector('.header__menu')
  const logo = document.querySelector('.logo');
  const cart = document.querySelector('.header__cart');

  if (header) {
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
        }
        logo.classList.toggle('logo--open');
        cart.classList.toggle('header__cart--close');
      });
    };
  }

  const faqItems = document.querySelectorAll('.faq__item');

  if (faqItems) {
    for (let faqItem of faqItems) {
      faqItem.addEventListener('click', function () {
        faqItem.classList.toggle('faq__item--active');
      })
    }
  };

  new window.Swiper('.slider__container', {

    navigation: {
      nextEl: '.slider__button--next',
      prevEl: '.slider__button--prev'
    },

    pagination: {
      el: '.slider__pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      }
    },

    breakpoints: {
      320: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 15,
        pagination: {
          type: 'fraction',
          renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' + ' of ' + '<span class="' + totalClass + '"></span>'
          }
        }
      },
      767: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 9,
        pagination: {
          type: 'bullets',
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          }
        }
      },
      1023: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 22,
        pagination: {
          type: 'bullets',
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          }
        }
      }
    },
  });

  // страница каталога
  new window.Swiper('.store__container', {

    navigation: {
      nextEl: '.store__button--next',
      prevEl: '.store__button--prev'
    },

    pagination: {
      el: '.store__pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      }
    },

  });

  const wrapper = document.querySelector('.modal-wrapper');
  const filter = document.querySelector('.filter');

  if (filter) {
    const filterBlocks = filter.querySelectorAll('.filter__block');
    const filterNames = filter.querySelectorAll('.filter__block h3');
    const filterTitle = filter.querySelector('h2');
    const filterForm = filter.querySelector('.filter__form');
    const filterClose = filter.querySelector('.filter__close');

    document.addEventListener('DOMContentLoaded', function () {
      filterBlocks.forEach(function (filterBlock) {
        filterBlock.classList.remove('filter__block--active');
      });
    });

    for (let i = 0; i < filterNames.length; i++) {
      filterNames[i].addEventListener('click', function () {
        filterBlocks[i].classList.toggle('filter__block--active');
      });
    };

    filterTitle.addEventListener('click', function () {
      filterForm.classList.add('filter__form--active');
      filterClose.classList.add('filter__close--active');
      wrapper.classList.add('modal-wrapper--active');
    });

    const closeFilter = function () {
      filterForm.classList.remove('filter__form--active');
      filterClose.classList.remove('filter__close--active');
      wrapper.classList.remove('modal-wrapper--active');
    }

    filterClose.addEventListener('click', closeFilter);
    wrapper.addEventListener('click', closeFilter);
    window.addEventListener('keydown', function (evt) {
      if (evt.key === 'Escape') {
        closeFilter();
      }
    });
  };

  const information = document.querySelector('.information');

  if (information) {
    const titleDescription = document.querySelector('.information__title--description');
    const titleAdditional = document.querySelector('.information__title--additional');
    const descriptionBlock = document.querySelector('.information__block--description');
    const additionalBlock = document.querySelector('.information__block--additional');

    titleDescription.addEventListener('click', function () {
      titleDescription.classList.add('information__title--active');
      titleAdditional.classList.remove('information__title--active');
      descriptionBlock.classList.add('information__block--active');
      additionalBlock.classList.remove('information__block--active');
    });

    titleAdditional.addEventListener('click', function () {
      titleDescription.classList.remove('information__title--active');
      titleAdditional.classList.add('information__title--active');
      descriptionBlock.classList.remove('information__block--active');
      additionalBlock.classList.add('information__block--active');
    });
  };

  new window.Swiper('.product__pictures--slider', {
    pagination: {
      el: '.product__pagination',
      clickable: true,
      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' + ' of ' + '<span class="' + totalClass + '"></span>'
      }
    },
  });


  // модалка корзины
  const body = document.querySelector('body');
  const buttonCartMore = document.querySelector('.shopping-cart__button--more');
  const buttonCartLess = document.querySelector('.shopping-cart__button--less');
  const shoppingCartInput = document.querySelector('.shopping-cart__input');
  const modalCart = document.querySelector('.shopping-cart--modal');

  if (modalCart) {
    const buttonBuy = document.querySelector('.information__button');
    const buttonCloseCart = modalCart.querySelector('.shopping-cart__close');

    buttonBuy.addEventListener('click', function (evt) {
      evt.preventDefault();
      modalCart.classList.add('shopping-cart--active');
      wrapper.classList.add('modal-wrapper--active');
    })

    const closeCart = function () {
      modalCart.classList.remove('shopping-cart--active');
      wrapper.classList.remove('modal-wrapper--active');
    }

    buttonCloseCart.addEventListener('click', closeCart);
    wrapper.addEventListener('click', closeCart);
    window.addEventListener('keydown', function (evt) {
      if (evt.key === 'Escape') {
        closeCart();
      }
    });
  }

  document.addEventListener('click', function (evt) {
    if (evt.target === buttonCartMore) {
      if (shoppingCartInput.value < 99) {
        ++shoppingCartInput.value;
      }
    } else {
      if (shoppingCartInput.value > 1) {
        --shoppingCartInput.value;
      }
    }
  });


  // модалка входа
  const modalLogIn = document.querySelector('.log-in--modal')
  const buttonLogIn = document.querySelector('.login');
  const buttonCloseLogIn = document.querySelector('.log-in__close');

  buttonLogIn.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalLogIn.classList.add('log-in--active');
    wrapper.classList.add('modal-wrapper--active');
  });

  const closeLogIn = function () {
    modalLogIn.classList.remove('log-in--active');
    wrapper.classList.remove('modal-wrapper--active');
  };

  buttonCloseLogIn.addEventListener('click', closeLogIn);
  wrapper.addEventListener('click', closeLogIn);
  window.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
      closeLogIn();
    }
  });


})();
