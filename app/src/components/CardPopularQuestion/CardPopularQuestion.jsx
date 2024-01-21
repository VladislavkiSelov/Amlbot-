import React, { useState } from "react";
import "./CardPopularQuestion.scss";

export default function CardPopularQuestion({ question, text }) {
  const [activeBtn, setActiveBtn] = useState(false);

  function handelClick() {
    if (activeBtn) {
      setActiveBtn(false);
    } else {
      setActiveBtn(true);
    }
  }
  return (
    <div onClick={handelClick} className={`card-popular-question ${(activeBtn && "active-question") || ""}`}>
      <h3>{question}</h3>
      <p>{text}</p>
    </div>
  );
}
