import React from "react";
import PropTypes from "prop-types";
import MainNav from "../main-nav/main-nav";

const PageHeader = () => {
  return (
    <header className="page-header">
      <MainNav />

      <section className="promo-app container">
        <h2 className="visually-hidden">Представляем вам наше приложение</h2>
        <div className="promo-app__wrapper">
          <p className="promo-app__title page-title">Взгляните на жизнь иначе!</p>
          <div className="promo-app__download">
            <a href="#" className="promo-app__download-button">Скачать приложение</a>
            <ul className="promo-app__download-list">
              <li className="promo-app__download-item">
                <a className="promo-app__download-link promo-app__download-link--ios" href="#">
                  <span className="visually-hidden">App Store</span>
                </a>
              </li>
              <li className="promo-app__download-item">
                <a className="promo-app__download-link promo-app__download-link--android" href="#">
                  <span className="visually-hidden">Play market</span>
                </a>
              </li>
              <li className="promo-app__download-item">
                <a className="promo-app__download-link promo-app__download-link--windows" href="#">
                  <span className="visually-hidden">Windows Store</span>
                </a>
              </li>
            </ul>
            <p className="promo-app__download-platform">Доступно для iPhone, iPad, Android, Windows Phone, OS X, Windows 8</p>
          </div>
        </div>
      </section>
    </header>
  );
};

export default PageHeader;
