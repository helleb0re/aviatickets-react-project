import React from "react";
import logo from "./warning.svg";

import "./errorBundle.css";

export default function ErrorBundle() {
  return (
    <div className="error">
      <h4 className="error__title">Something was wrong :(</h4>
      <img className="error__img" src={logo} alt="error" width="200" />
      <h4 className="error__title">Try refreshing the page</h4>
    </div>
  );
}
