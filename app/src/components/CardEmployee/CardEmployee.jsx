import React from "react";
import "./CardEmployee.scss";

export default function CardEmployee({ img, jobTitle, name }) {
  return (
    <div className="card-employee">
      <div className="card-employee__box-img">
        <img src={img} alt="#" />
      </div>
      <div className="card-employee__wrraper-content">
      <h4 className="card-employee__job-title">{jobTitle}</h4>
      <h3 className="card-employee__name">{name}</h3>
      <div className="card-employee__box-social-link"></div>
      </div>
    </div>
  );
}
