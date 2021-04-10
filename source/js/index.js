// import React from "react";
// import ReactDOM from "react-dom";

// import App from "./components/app/app";

// const rootElement = document.querySelector(`#root`);

// ReactDOM.render(
//     <App />,
//     rootElement
// );

const mainNav = document.querySelector(`.main-nav`);
const mainNavToggle = mainNav.querySelector(`.main-nav__toggle`);

mainNav.classList.add(`main-nav--closed`);

mainNavToggle.addEventListener(`click`, () => {
  mainNav.classList.toggle(`main-nav--closed`);
});
