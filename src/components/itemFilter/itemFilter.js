import React from "react";
import "./itemFilter.css";

const ItemFilter = ({ onSetFilter }) => {
  return (
    <div className="btn-group" onClick={onSetFilter}>
      <button type="button" className="btn btn--active" id="filter-cheap">
        Самый дешевый
      </button>
      <button type="button" className="btn" id="filter-fast">
        Самый быстрый
      </button>
      <button type="button" className="btn" id="filter-optimal">
        Оптимальный
      </button>
    </div>
  );
};

export default ItemFilter;
