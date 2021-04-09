import React from "react";
import PropTypes from "prop-types";

const MainNav = () =>{
  return (
    <nav className="main-nav">
      <div className="main-nav__container">
        <div className="main-nav__wrapper">
          <a href="index.html" className="page-header__logo">
            <picture>
              <source srcSet="img/logo-pink-white-desktop.svg" media="(min-width: 960px)" />
              <source srcSet="img/logo-pink-white-tablet.svg" media="(min-width: 660px)" />
              <img className="page-header__logo-image" src="img/logo-pink-white-mobile.svg" alt="" />
            </picture>
          </a>
          <button className="main-nav__toggle" type="button">
            <svg className="main-nav__toggle-icon main-nav__toggle-icon--cross" width="23px" height="23px">
              <use xlinkHref="#icon-menu-cross"></use>
            </svg>
            <svg className="main-nav__toggle-icon main-nav__toggle-icon--burger" width="50px" height="24px">
              <use xlinkHref="#icon-menu-burger"></use>
            </svg>
            <span className="visually-hidden">Открыть меню</span>
          </button>
        </div>
        <ul className="main-nav__list site-nav">
          <li className="site-nav__item">
            <a className="site-nav__link">Главная</a>
          </li>
          <li className="site-nav__item">
            <a className="site-nav__link" href="photo.html">Фотографии</a>
          </li>
          <li className="site-nav__item">
            <a className="site-nav__link" href="form.html">Конкурс</a>
          </li>
          <li className="site-nav__item">
            <a className="site-nav__link" href="#">HTML Academy</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainNav;
