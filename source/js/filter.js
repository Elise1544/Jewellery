'use strict';

(function () {

  const wrapper = document.querySelector('.modal-wrapper');
  const filter = document.querySelector('.filter');
  const body = document.querySelector('.body');

  if (document.querySelector('.filter')) {
    const filterBlocks = filter.querySelectorAll('.filter__block');
    const filterNames = filter.querySelectorAll('.filter__block h3');
    const filterTitle = filter.querySelector('h2');
    const filterForm = filter.querySelector('.filter__form');
    const filterClose = filter.querySelector('.filter__close');

    for (let i = 0; i < filterBlocks.length; i++) {
      filterBlocks[i].classList.remove('filter__block--active');
    }

    for (let i = 0; i < filterNames.length; i++) {
      filterNames[i].addEventListener('click', function () {
        filterBlocks[i].classList.toggle('filter__block--active');
      });
    }

    for (let i = 0; i < filterNames.length; i++) {
      filterNames[i].addEventListener('keydown', function (evt) {
        if (evt.key === 'Enter') {
          filterBlocks[i].classList.toggle('filter__block--active');
        }
      });
    }

    filterForm.classList.remove('filter__form--no-script');

    filterTitle.addEventListener('click', function () {
      if (filter.querySelector('.filter__form')) {
        filterForm.classList.add('filter__form--active');
        filterClose.classList.add('filter__close--active');
        wrapper.classList.add('modal-wrapper--active');
        body.classList.add('body--no-scroll');
      }
    });

    filterTitle.addEventListener('keydown', function (evt) {
      if (evt.key === 'Enter') {
        if (filter.querySelector('.filter__form')) {
          filterForm.classList.add('filter__form--active');
          filterClose.classList.add('filter__close--active');
          wrapper.classList.add('modal-wrapper--active');
          body.classList.add('body--no-scroll');
        }
      }
    });

    const closeFilter = function () {
      filterForm.classList.remove('filter__form--active');
      filterClose.classList.remove('filter__close--active');
      wrapper.classList.remove('modal-wrapper--active');
      body.classList.remove('body--no-scroll');
    }

    filterClose.addEventListener('click', closeFilter);
    wrapper.addEventListener('click', closeFilter);
    window.addEventListener('keydown', function (evt) {
      if (evt.key === 'Escape') {
        closeFilter();
      }
    });
  }

})();
