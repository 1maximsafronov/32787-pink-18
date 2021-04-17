const mainNav = document.querySelector(`.main-nav`);
const mainNavToggle = mainNav.querySelector(`.main-nav__toggle`);

mainNav.classList.remove(`main-nav--no-js`);
mainNav.classList.add(`main-nav--closed`);

mainNavToggle.addEventListener(`click`, () => {
  mainNav.classList.toggle(`main-nav--closed`);
});
