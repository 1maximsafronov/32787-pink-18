import React from "react";
import PropTypes from "prop-types";

const PageFooter = () => {
  return (
    <footer className="page-footer">
      <div className="page-footer__wrapper">
        <a href="index.html" className="page-footer__logo">
          <picture>
            <source srcSet="img/logo-pink-blue-desktop.svg" media="(min-width: 940px)" />
            <img className="page-footer__logo-image" src="img/logo-pink-blue-mobile.svg" alt="Логотип пинк" />
          </picture>
        </a>
        <div className="page-footer__social social">
          <ul className="social__list">
            <li className="social__item">
              <a href="" className="social__link social__link--tw">
                <svg className="social__icon" width="18" height="14">
                  <use xlinkHref="#icon-twitter"></use>
                </svg>
                <span className="visually-hidden">Мы в Твиттере</span>
              </a>
            </li>
            <li className="social__item">
              <a href="" className="social__link social__link--fb">
                <svg className="social__icon" width="9" height="18">
                  <use xlinkHref="#icon-facebook"></use>
                </svg>
                <span className="visually-hidden">Страница в Фейсбуке</span>
              </a>
            </li>
            <li className="social__item">
              <a href="" className="social__link social__link--yt">
                <svg className="social__icon" width="15" height="13">
                  <use xlinkHref="#icon-youtube"></use>
                </svg>
                <span className="visually-hidden">Канал на Ютубе</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="page-footer__copyright copyright">
          <p className="copyright__text">Разработано</p>
          <a href="https://htmlacademy.ru/intensive/adaptive" className="copyright__logo">
            <svg className="copyright__image" width="26.943px" height="34.09px">
              <use xlinkHref="#logo-htmlacademy"></use>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;
