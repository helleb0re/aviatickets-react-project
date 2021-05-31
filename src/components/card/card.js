import React from "react";
import CardItem from "../cardItem";
import "./card.css";

const Card = ({ ticket }) => {
  const { carrier, firstFlight, secondFlight } = ticket;

  return (
    <div className="card">
      <div className="card__header">
        <span className="card__price">{ticket.priceToString()} &#8381;</span>
        <img src={`http://pics.avs.io/99/36/${carrier}.png`} alt="" />
      </div>
      <CardItem flightInfo={firstFlight} />
      <CardItem flightInfo={secondFlight} />
    </div>
  );
};

export default Card;
