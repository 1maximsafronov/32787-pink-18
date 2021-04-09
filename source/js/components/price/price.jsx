import React from "react";
import PropTypes from "prop-types";

const Price = () => {
  return (
    <section className="price">
      <div className="price__wrapper container">
        <table className="price__table table-price">
          <tr className="table-price__title-row">
            <th className="table-price__title table-price__title--hidden"></th>
            <th className="table-price__title">
              <span className="table-price__tariff">База</span><br/>
              <span className="table-price__tariff-price">1,99 USD</span>
            </th>
            <th className="table-price__title table-price__title--hit">
              <span className="table-price__tariff">Стандарт</span><br/>
              <span className="table-price__tariff-price">3,99 USD</span>
            </th>
            <th className="table-price__title">
              <span className="table-price__tariff">Анлим</span><br/>
              <span className="table-price__tariff-price">9,99 USD</span>
            </th>
          </tr>
          <tr>
            <td className="table-price__cell table-price__subtitle">Розовый фильтр</td>
            <td className="table-price__cell">
              <p className="table-price__inner">
                <span className="table-price__inner-text">Розовый фильтр</span>
                <span className="table-price__option-status table-price__option-status--yes">Да</span>
              </p>
            </td>
            <td className="table-price__cell">
              <p className="table-price__inner">
                <span className="table-price__inner-text">Розовый фильтр</span>
                <span className="table-price__option-status table-price__option-status--yes">Да</span>
              </p>
            </td>
            <td className="table-price__cell">
              <p className="table-price__inner">
                <span className="table-price__inner-text">Розовый фильтр</span>
                <span className="table-price__option-status table-price__option-status--yes">Да</span>
              </p>
            </td>
          </tr>
          <tr>
            <td className="table-price__cell table-price__subtitle">Смайлики</td>
            <td className="table-price__cell">
              <p className="table-price__inner">
                <span className="table-price__inner-text">Смайлики</span>
                <span className="table-price__option-status table-price__option-status--no">нет</span>
              </p>
            </td>
            <td className="table-price__cell">
              <p className="table-price__inner">
                <span className="table-price__inner-text">Смайлики</span>
                <span className="table-price__option-status table-price__option-status--yes">Да</span>
              </p>
            </td>
            <td className="table-price__cell">
              <p className="table-price__inner">
                <span className="table-price__inner-text">Смайлики</span>
                <span className="table-price__option-status table-price__option-status--yes">Да</span>
              </p>
            </td>
          </tr>
          <tr>
            <td className="table-price__cell table-price__subtitle">Комментарии</td>
            <td className="table-price__cell">
              <p className="table-price__inner">
                <span className="table-price__inner-text">Комментарии</span>
                <span className="table-price__option-status table-price__option-status--no">Нет</span>
              </p>
            </td>
            <td className="table-price__cell">
              <p className="table-price__inner">
                <span className="table-price__inner-text">Комментарии</span>
                <span className="table-price__option-status table-price__option-status--no">Нет</span>
              </p>
            </td>
            <td className="table-price__cell">
              <p className="table-price__inner">
                <span className="table-price__inner-text">Комментарии</span>
                <span className="table-price__option-status table-price__option-status--yes">Да</span>
              </p>
            </td>
          </tr>
        </table>
        <div className="price__slider-toggles slider__toggles">
          <button className="slider__toggle">
            <span className="visually-hidden">1 слайд</span>
          </button>
          <button className="slider__toggle slider__toggle--active">
            <span className="visually-hidden">1 слайд</span>
          </button>
          <button className="slider__toggle">
            <span className="visually-hidden">3 слайд</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Price;
