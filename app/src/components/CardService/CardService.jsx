import React from "react";
import ButtonArrow from "../ButtonArrow/ButtonArrow ";
import "./CardService.scss";

export default function CardService({ img, titel, text, cardClass }) {
  return (
    <div className={`card-service ${cardClass || ''}`}>
      <div className="card-service__box-img">
        <img src={img} alt="#" />
      </div>
      <h3>{titel}</h3>
      <p>{text}</p>
      <ButtonArrow text="Узнать больше" />
    </div>
  );
}
