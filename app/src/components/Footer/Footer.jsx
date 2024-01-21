import React from "react";
import { ReactComponent as Logo } from "../../assets/logo/svg_logo_footer.svg";
import { ReactComponent as LogoCompany } from "../../assets/logo/logo_comp.svg";
import { ReactComponent as Star } from "../../assets/icon/star.svg";
import { ReactComponent as StarLast } from "../../assets/icon/star-last.svg";
import { ReactComponent as Telegram } from "../../assets/icon/telegram.svg";
import { ReactComponent as Medium } from "../../assets/icon/medium.svg";
import { ReactComponent as Reddit } from "../../assets/icon/reddit.svg";
import { ReactComponent as YouTube } from "../../assets/icon/youtube.svg";
import { ReactComponent as LinkedIn } from "../../assets/icon/linkedin.svg";
import { ReactComponent as TikTok } from "../../assets/icon/tiktok.svg";
import { ReactComponent as Twitter } from "../../assets/icon/free-icon-enter-1286825.svg";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top container">
        <div className="footer__logo">
          <Logo />
        </div>
        <div className="footer__address">
          <p>Safelement Limited,</p>
          <p>Unit H 3/F Shek Kok road 8, Tseung Kwan O, N.T Hong Kong,</p>
        </div>
        <div className="footer__rating">
          <LogoCompany className="footer__logo-company" />
          <div className="box_star">
            <Star />
            <Star />
            <Star />
            <Star />
            <StarLast />
          </div>
          <p className="footer__rating-text">4.5 out of 5</p>
        </div>
      </div>
      <div className="footer__bottom container">
        <div className="footer__product">
          <h4>Продукты</h4>
          <ul>
            <li>
              <a href="#">Чат-бот</a>
            </li>
            <li>
              <a href="#">KYT</a>
            </li>
            <li>
              <a href="#">AML Тренинг</a>
            </li>
            <li>
              <a href="#">Консалтинг</a>
            </li>
            <li>
              <a href="#">Приложение AMLBot</a>
            </li>
            <li>
              <a href="#">KYC</a>
            </li>
            <li>
              <a href="#">Расследование</a>
            </li>
          </ul>
        </div>
        <div className="footer__info">
          <h4>Информация</h4>
          <ul>
            <li>
              <a href="#">Риски</a>
            </li>
            <li>
              <a href="#">Поддержка</a>
            </li>
            <li>
              <a href="#">Блог</a>
            </li>
            <li>
              <a href="#">О нас</a>
            </li>
            <li>
              <a href="#">Пресс-кит</a>
            </li>
          </ul>
        </div>
        <div className="footer__normative-base">
          <h4>Нормативная база</h4>
          <ul>
            <li>
              <a href="#">Польз. соглашение</a>
            </li>
            <li>
              <a href="#">Политика конфиденциальности</a>
            </li>
          </ul>
        </div>
        <div className="footer__social-link">
          <h4>Социальные сети</h4>
          <ul>
            <li>
              <a href="#">Telegram</a>
            </li>
            <li>
              <a href="#">Medium</a>
            </li>
            <li>
              <a href="#">Пресс-кит</a>{" "}
            </li>
            <li>
              <a href="#">YouTube</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">TikTok</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
