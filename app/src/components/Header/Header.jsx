import React, { useState } from "react";
import logo from "../../assets/logo/logo.svg";
import "./Header.scss";

export default function Header() {
  const [statusNav, setStatusNav] = useState(false);
  const [statusBtnProducts, setStatusBtnProducts] = useState(false);
  const [statusBtnLang, setStatusBtnLang] = useState(false);

  function handelClick() {
    if (statusNav) {
      setStatusNav(false);
    } else {
      setStatusNav(true);
    }
  }

  function clickBtnProducts() {
    if (statusBtnProducts) {
      setStatusBtnProducts(false);
    } else {
      setStatusBtnProducts(true);
    }
  }

  function clickBtnLang() {
    if (statusBtnLang) {
      setStatusBtnLang(false);
    } else {
      setStatusBtnLang(true);
    }
  }

  return (
    <header className="header-wrapper">
      <div className="header container">
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="box_burger " onClick={handelClick}>
        <div className={`burger ${statusNav && "active_burger"}`}></div>
      </div>
      <nav className={`header__navigation  ${statusNav && "header__navigation-active"}`}>
        <ul className="navigation-list">
          <li>
            <button
              onClick={clickBtnProducts}
              className={`header__navigation__btn ${statusBtnProducts && "header__navigation__btn-active"}`}
              type="button"
            >
              Продукты
            </button>
            <ul className={`products_list ${statusBtnProducts && "products_list-active"}`}>
              <li>Чат-бот</li>
              <li>KYT</li>
              <li>AML Тренинг</li>
              <li>Консалтинг</li>
              <li>Приложение AMLBot</li>
              <li>KYC</li>
              <li>Консалтинг</li>
            </ul>
          </li>
          <li>Стоимость</li>
          <li>Риски</li>
          <li>FAQ</li>
          <li>Блог</li>
          <li>Расследование</li>
        </ul>
      </nav>
      <div className="header__lang ">
        <button onClick={clickBtnLang} className={`btn_lang ${statusBtnLang && "btn_lang-active"}`} type="button">
          ru
        </button>
        <ul className={`header__lang__list ${statusBtnLang && "header__lang__list-active"}`}>
          <li>en</li>
          <li>ua</li>
          <li>es</li>
          <li>fr</li>
        </ul>
      </div>
      </div>
    </header>
  );
}
