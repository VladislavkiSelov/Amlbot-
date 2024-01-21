import React from "react";
import "./ButtonArrow .scss";

export default function ButtonArrow ({ text, classBtn, handelClick }) {
  return (
    <button onClick={handelClick} className={`btn-arrow ${classBtn || ""}`}>
      {text}
    </button>
  );
}
