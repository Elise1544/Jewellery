'use strict';

(function () {

  const wrapper = document.querySelector('.modal-wrapper');
  const filter = document.querySelector('.filter');

  if (filter) {
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

    filterForm.classList.remove('filter__form--active');

    filterTitle.addEventListener('click', function () {
      filterForm.classList.add('filter__form--active');
      filterClose.classList.add('filter__close--active');
      wrapper.classList.add('modal-wrapper--active');
    });

    filterTitle.addEventListener('keydown', function (evt) {
      if (evt.key === 'Enter') {
        filterForm.classList.add('filter__form--active');
        filterClose.classList.add('filter__close--active');
        wrapper.classList.add('modal-wrapper--active');
      }
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
  }

})();
