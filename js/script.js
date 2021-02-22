document.addEventListener('DOMContentLoaded', () => {

  /*burger menu*/
  const burger = document.querySelector('.burger');
  burger.addEventListener('click', () => {
    burger.classList.toggle('burger-active');

    /*show header-menu*/
    document.querySelector('.header-nav').classList.toggle('nav-active');
    document.querySelector('.index').classList.toggle('lock');
  });

  /*show search-form*/
  document.querySelector('.search_top').addEventListener('click', () => {
    document.querySelector('.search_top').classList.add('search_top-inactive');
    document.querySelector('.search-form').classList.toggle('search-form-active');
  });

  /*hide search-form*/
  document.querySelector('.close-btn').addEventListener('click', () => {
    document.querySelector('.search-form').classList.toggle('search-form-active');
    document.querySelector('.search_top').classList.remove('search_top-inactive');
  });
  /*select-menu*/
  document.querySelectorAll('.select').forEach(el => {
    const choices = new Choices(el, {
      searchEnabled: false,
      searchChoices: false,
      shouldSort: false
    });

    const customSelector = document.querySelector('.select');
    const ariaLabel = customSelector.getAttribute('aria-label');
    customSelector.closest('.choices').setAttribute('aria-label', ariaLabel);
  });

  /*custom scrollbar in select-menu*/
  document.querySelectorAll('.choices__list--dropdown').forEach(el => {
    const scrollbar = el.children;
    new SimpleBar(scrollbar[0]);
   /* new SimpleBar(el);*/
  });
});


