import React from "react";
import "./filter.css";
import img from "./shape.svg";

const Filter = ({ label, name, checkedValue, onToggle }) => {

  return (
    <label className="side-filter__container" htmlFor={name}>
      <div className="side-filter__label">
        <span className="side-filter__checkmark">
          <img
            className={`side-filter__checkmark-img${
              checkedValue ? "--active" : ""
            }`}
            src={img}
            alt="checkbox"
          />
        </span>
        <input
          className="side-filter__input"
          type="checkbox"
          value=""
          id={name}
          checked={checkedValue}
          onChange={onToggle}
        />
        {label}
      </div>
    </label>
  );
};

export default Filter;
