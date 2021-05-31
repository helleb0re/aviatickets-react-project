import React from "react";
import "./moreTickets.css";

const MoreTicketsBtn = ({ moreTicketsFunc, text }) => {
  return (
    <button
      type="button"
      className="btn-more"
      id="more-tickets"
      onClick={moreTicketsFunc}
    >
      {text}
    </button>
  );
};

export default MoreTicketsBtn;
