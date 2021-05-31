import React from "react";
import Filter from "../filter";
import "./sideItemFilter.css";

const SideItemFilter = ({ filtersStatus, onToggle }) => {
  const { all, direct, oneTransfer, twoTransfer, threeTransfer } =
    filtersStatus;

  const filters = [
    <Filter
      key={"all"}
      name={"all"}
      label={"Все"}
      checkedValue={all}
      onToggle={onToggle}
    />,
    <Filter
      key={"direct"}
      name={"direct"}
      label={"Без пересадок"}
      checkedValue={direct}
      onToggle={onToggle}
    />,
    <Filter
      key={"oneTransfer"}
      name={"oneTransfer"}
      label={"1 пересадка"}
      checkedValue={oneTransfer}
      onToggle={onToggle}
    />,
    <Filter
      key={"twoTransfer"}
      name={"twoTransfer"}
      label={"2 пересадки"}
      checkedValue={twoTransfer}
      onToggle={onToggle}
    />,
    <Filter
      key={"threeTransfer"}
      name={"threeTransfer"}
      label={"3 пересадки"}
      checkedValue={threeTransfer}
      onToggle={onToggle}
    />,
  ];

  return (
    <div className="side-filter">
      <h4 className="side-filter__title">Количество пересадок</h4>
      {filters}
    </div>
  );
};

export default SideItemFilter;
