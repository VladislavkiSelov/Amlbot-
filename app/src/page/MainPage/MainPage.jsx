import React from "react";
import Button from "../../components/Button/Button";
import ButtonArrow from "../../components/ButtonArrow/ButtonArrow ";
import CardService from "../../components/CardService/CardService";
import CardEmployee from "../../components/CardEmployee/CardEmployee";
import CardPopularQuestion from "../../components/CardPopularQuestion/CardPopularQuestion";

import LogoCompany from "../../assets/logo/logo_comp-black.svg";
import { ReactComponent as Star } from "../../assets/icon/star.svg";
import { ReactComponent as Verified } from "../../assets/icon/verified.svg";
import { ReactComponent as StarLast } from "../../assets/icon/star-last.svg";
import { ReactComponent as Messenger } from "../../assets/icon/messenger.svg";
import inatba from "../../assets/icon/INATBA.webp";
import cda from "../../assets/icon/CDA.webp";
import atii from "../../assets/icon/ATII.webp";
import lsw3 from "../../assets/icon/LSW3.webp";
import eba from "../../assets/icon/EUBA.webp";
import mainImg from "../../assets/pic/cover.webp";
import SliderSwiper from "../../components/SliderSwiper/SliderSwiper";
import binance from "../../assets/icon/binance-white.aed1452d.svg";
import okx from "../../assets/icon/okx-white.32ece2b9.svg";
import huobi from "../../assets/icon/huobi-white.ef112ac0.svg";
import icon1 from "../../assets/icon/icon-1.webp";
import icon2 from "../../assets/icon/icon-2.webp";
import icon3 from "../../assets/icon/icon-3.webp";
import icon4 from "../../assets/icon/icon-4.webp";
import icon5 from "../../assets/icon/icon-5.webp";
import imgCard1 from "../../assets/icon/1.webp";
import imgCard2 from "../../assets/icon/2.webp";
import imgCard3 from "../../assets/icon/3.webp";
import imgEmployee1 from "../../assets/pic/slava-demchuk.webp";
import imgEmployee2 from "../../assets/pic/sid-panda.webp";
import imgEmployee3 from "../../assets/pic/graeme-hampton.webp";
import imgEmployee4 from "../../assets/pic/anmol-jain.webp";

import "./MainPage.scss";

export default function MainPage() {
  const arrayQustion = [
    {
      question: "Что показывает проверка адреса?",
      text: "Общий риск (в процентах) – вероятность того, что адрес связан с нелегальной деятельностью. Источники риска – известные типы сервисов, с которыми адрес взаимодействовал, и процент средств принятых с / отданных на эти сервисы, по которым рассчитывается общий риск.",
    },
    {
      question: "Что означают параметры в результатах проверки?",
      text: "AMLBot проводит проверку указанного адреса кошелька на наличие связей с известными сервисами в блокчейне. Такие сервисы AMLBot условно объединяет в группы с разным уровнем риска незаконной деятельности. В результате проверки показаны связи проверяемого адреса с этими группами в процентном соотношении. На основании всех связей выдается усредненная оценка риска, которая помогает пользователю принимать дальнейшее решение по активам.",
    },
    {
      question: "Как понимать оценку риска?",
      text: `Каждый клиент сам для себя определяет, какой процент риска для него приемлемый. Условно значения риска можно разделить так:
      - 0-25% — это чистый кошелек/транзакция;
      - 25-75% — это средний уровень риска;
      - 75%+ — такой кошелек/транзакция считаются рискованной.
      Также стоит обратить внимание на красные источники риска в подробном анализе, описанные на странице.`,
    },
    {
      question: "Как быстро пополняется баланс?",
      text: `После подтверждения транзакции баланс пополняется:
      • до 10 минут, если оплата прошла в течение суток после выставления счета,
      • до 25 минут, если оплата прошла после 24 часов с момента выставления счета. В целом BTC, ETH, USDT и фиат обрабатываются быстрее, чем другие монеты.`,
    },
    {
      question: "Что значит оценка риска в процентах?",
      text: `AMLBot находит связи проверяемого адреса с различными пользователями в блокчейне, у каждого из которых — свой условный риск. Общая оценка риска — это среднее значение по всем найденным составляющим. Например, если из 2 BTC на проверяемом кошельке 1 BTC пришел от майнинга (0% риска) и еще 1 BTC из Даркнета (100% риска), то оценка риска составит 50%.`,
    },
    {
      question: "Как AMLBot помогает защититься от блокировок?",
      text: `Проверяя кошельки контрагентов перед сделкой, вы можете отказаться от их активов, если оценка риска будет высокой. Также перед переводом средств на другие сервисы вы можете проверить адрес своего кошелька и сохранить результат (сделать скриншот).
      Если проверка показала, что у ваших активов не было связи с нелегальной деятельностью, а сервис вас заблокировал, то вы можете предоставить сохраненный результат для подтверждения чистоты своих активов.`,
    },
    {
      question: "Риск больше 50%, но я уверен, что адрес надежный. Как быть?",
      text: `Результаты проверки основаны на международных базах, которые постоянно обновляются. Поэтому адрес, который имел 0% риска вчера, сегодня мог получить или отдать актив рисковому контрагенту. В этом случае оценка риска изменится. Если вы хотите убедиться в результате и определить, в чем причина высокого риска, мы можем провести для вас детальную проверку. Для этого напишите нам на info@amlbot.com.`,
    },
    {
      question: "В чем отличие между проверкой адреса и транзакции TxID?",
      text: `Проверка адреса (кошелька) — это анализ всех когда-либо связанных с ним адресов, с которых принимались средства и на которые средства отправлялись. Проверка транзакции (нужно указать TxID) и затем вы выбираете:
      — Принимал средства (Получатель) и адрес, на который были получены средства (Deposit). В этом случае проверяются связи адресов, с которых средства поступили. Если смотреть на транзакцию в блокчейн эксплорере, то это адреса, которые стоят слева, и все, с кем они взаимодействовали до этой транзакции. 
      — Отдавал средства (Отправитель) и адрес, на который были отправлены средства (Withdrawal). Здесь проверяется кошелек (в блокчейн эксплорере он стоит справа), который получил средства, а также все его связи до этой транзакции. Таким образом при проверке TxID оцениваются риски для получателя, если выбрать приём средств, и риски для отправителя, если выбрать отправителя.`,
    },
    {
      question: "Что произойдёт, если я не успею использовать все чеки за месяц?",
      text: "Они остаются на вашем счету, и вы можете использовать их в любое время.",
    },
    {
      question: "Как часто рекомендуется проводить проверки?",
      text: `Ответ на этот вопрос зависит от вашей уникальной модели риска. Общая рекомендация заключается в том, чтобы проводить проверку AML каждый раз, когда вы взаимодействуете с неизвестным кошельком или смарт-контрактом.`,
    },
    {
      question: "Какие криптовалюты анализирует AMLBot?",
      text: `AMLBot поддерживает все основные блокчейны и токены. Мы постоянно добавляем поддержку дополнительных криптовалют. Вы всегда можете проверить актуальный список поддерживаемых криптовалют в Web Dashboard или в Web Dashboard или в API Документации.`,
    },
    {
      question: "Что если мне нужны еще проверки?",
      text: `Bы можете докупать проверки по мере необходимости. Количество проверок всегда отображается в вашей пользовательской информации.`,
    },
  ];
  return (
    <main>
      <section className="section-main container">
        <h2>Единое решение по обеспечению соответствия для криптобизнеса</h2>
        <h3>AMLBot автоматизирует AML / KYC процедуры и снижает расходы на соблюдение требований законодательства</h3>
        <img src={mainImg} alt="Единое решение по обеспечению соответствия для криптобизнеса" />
        <Button text="Запросить демо" />
        <ButtonArrow text="Для частных лиц" />
        <div className="section-main__rating">
          <img src={LogoCompany} alt="logo" className="section-main__logo-company" />
          <div className="box_star">
            <Star />
            <Star />
            <Star />
            <Star />
            <StarLast />
            <p className="section-main__rating-text">4.5 out of 5</p>
          </div>
          <p className="section-main__number-reviews">
            Based on <a href="#">66 reviews</a>
          </p>
        </div>
        <div className="section-main__participants">
          <div className="section-main__participants__titel">
            <Verified />
            <h4>Мы являемся полноправными участниками</h4>
          </div>
          <div className="section-main__participants__box-company">
            <div>
              <img src={inatba} alt="#" />
              <h5>INATBA</h5>
            </div>
            <div>
              <img src={cda} alt="#" />
              <h5>CDA</h5>
            </div>
            <div>
              <img src={atii} alt="#" />
              <h5>ATII</h5>
            </div>
            <div>
              <img src={lsw3} alt="#" />
              <h5>LSW3</h5>
            </div>
            <div>
              <img src={eba} alt="#" />
              <h5>ЕВА</h5>
            </div>
          </div>
        </div>
      </section>
      <section className="section-client container">
        <h2>Наши 300+ клиентов и партнеров</h2>
        <SliderSwiper />
      </section>
      <section className="section-completed-work">
        <div className="container">
          <h3>+$100 000 000</h3>
          <h5>Объем выявленных рискованных средств</h5>
        </div>
        <div className="container">
          <div className="box_brand">
            <div>
              <img src={binance} alt="brand" />
            </div>
            <div>
              <img src={okx} alt="brand2" />
            </div>
            <div>
              <img src={huobi} alt="brand3" />
            </div>
          </div>
          <h5>Отделы регулирования, принимающие наши AML процедуры</h5>
        </div>
        <div className="container">
          <h4>60,000+</h4>
          <h5>Проверено поставщиков услуг</h5>
        </div>
      </section>
      <section className="our-services container">
        <h3>AMLBot Сервисы</h3>
        <p>Мы предоставляем полный пакет опций для безопасной работы с криптовалютой</p>
        <div className="our-services__box-card">
          <CardService
            cardClass="card-servise-grey"
            titel="AML/KYT Скрининг"
            img={icon1}
            text="API-решения, расширяющие возможности инструментов для обеспечения соответствия требованиям AML в рамках вашей текущей системы. Все транзакции автоматически проверяются на соответствие требованиям AML и FATF и снижают риски вашего бизнеса."
          />
          <CardService
            titel="KYC для бизнеса"
            img={icon2}
            text="Оптимизированный и автоматизированный процесс верификации позволяет вашему бизнесу быстро привлекать клиентов, снижая ручные усилия и минимизируя риски идентификационного мошенничества и незаконной активности."
          />
          <CardService
            titel="AML/KYC Процедуры"
            img={icon3}
            text="Запустите свой криптовалютный проект с легкостью, простотой и уверенностью, используя наш консалтинг по вопросам AML и KYC, обеспечивающий беспрепятственное соблюдение требований и эффективное управление рисками с самого начала."
          />
          <CardService
            titel="Корпоративные счета на CEX/EMI"
            img={icon4}
            text="При помощи наших специалистов вы сможете упростить открытие корпоративного счета на CEX EMI и сосредоточиться на развитии бизнеса в криптоиндустрии."
          />
          <CardService
            titel="Блокчейн-расследования"
            img={icon5}
            text="Возврат украденой криптовалюты с помощью экспертных блокчейн-расследований, позволяющих оперативно выявить виновных и отследить средства для их эффективного возврата."
          />
        </div>
      </section>
      <section className="price-services container">
        <div className="price-services__card">
          <h2>Сколько стоит ваше спокойствие?</h2>
          <div className="check-free">
            <h5>Первая проверка — бесплатно</h5>
          </div>
          <h4>От</h4>
          <h3>$0.2</h3>
          <h6>/ за дополнительную проверку</h6>
          <ButtonArrow text="Свяжитесь с нами" />
        </div>
        <div className="price-services__content">
          <p>
            По нашей статистике,<strong> каждый четвертый кошелек — подозрительный.</strong>
          </p>
          <p>Потратив пару долларов на проверку, вы можете уберечь себя от потерь на несколько тысяч долларов.</p>
        </div>
      </section>
      <section className="description-amlBot container">
        <h2>Почему AMLBot?</h2>
        <div className="description-amlBot__card-1">
          <div>
            <img src={imgCard1} alt="#" />
          </div>
          <h3>Индивидуальный подход</h3>
          <ul>
            <li>AMLBot предлагает широкий спектр комплаенс-решений, адаптированных для каждого клиента.</li>
            <li>
              Мы уверены в том, что сможем удовлетворить ваши требования, ведь <strong> мы помогли 300+ криптовалютным организациям</strong> всех
              размеров в 25 юрисдикциях.
            </li>
          </ul>
          <Button text="Давайте обсудим" />
        </div>
        <div className="description-amlBot__card-2">
          <div>
            <img src={imgCard2} alt="#" />
          </div>
          <h3>Интегрированная платформа обеспечения соответствия</h3>
          <ul>
            <li>Мы предлагаем KYT/Wallet скрининг, KYC, AML и многое другое для крипто бизнеса.</li>
            <li>
              Оценка рисков в AMLBot основана на многочисленных источниках данных, что обеспечивает получение наиболее достоверной информации в
              отрасли.
            </li>
            <li>
              Наши удобные в использовании сервисы и решения оптимизируют процессы в компании, устраняя сложности, связанные с соблюдением требований
              провайдеров услуг.
            </li>
          </ul>
        </div>
        <div className="description-amlBot__card-3">
          <div>
            <img src={imgCard3} alt="#" />
          </div>
          <h3>Поддержка клиентов</h3>
          <h4>Мы понимаем, насколько важна быстрая и дружелюбная поддержка наших клиентов, поэтому мы всегда рядом. Поддержка 24/7.</h4>
          <p>Ответ в ночное время может занять немного больше времени</p>
          <ButtonArrow text="Связаться" />
        </div>
      </section>
      <section className="our-team container">
        <h2>Наша команда</h2>
        <div className="our-team__box-card">
          <CardEmployee img={imgEmployee1} jobTitle="Co-Founder" name="Slava Demchuk" />
          <CardEmployee img={imgEmployee2} jobTitle="Blockchain Analyst" name="Sid Panda" />
          <CardEmployee img={imgEmployee3} jobTitle="Certified AML Specialist" name="Graeme Hampton" />
          <CardEmployee img={imgEmployee4} jobTitle="Head of Investigations" name="Anmol Jain" />
        </div>
      </section>
      <section className="popular-questions container">
        <h2>Популярные вопросы</h2>
        <div className="popular-questions__box-cards">
          {arrayQustion.map((el, i) => (
            <CardPopularQuestion key={i} question={el.question} text={el.text} />
          ))}
        </div>
        <div className="communication-messenger">
          <h3>Ваш вопрос отсутствует в списке?</h3>
          <h4>Свяжитесь с нами через мессенджер. Мы на связи 24/7, поэтому любой вопрос можем решить быстро и в формате живого общения.</h4>
          <button>
            <div className="messenger-icon">
              <Messenger />
            </div>
            <div>
              <h5>Мы в мессенджере</h5>
              <h6>Ответим в течение 30 сек</h6>
            </div>
          </button>
          <p>Ответ в ночное время может занять чуть больше времени.</p>
        </div>
      </section>
    </main>
  );
}
