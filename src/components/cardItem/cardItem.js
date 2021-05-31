import React from "react";

const CardItem = ({ flightInfo }) => {
  const { origin, destination, duration, arriveTime, departureTime, stops } =
    flightInfo;

  let countStopsText = `${stops.length} пересадок`;
  let stopsText = stops.join(", ");

  if (stops.length === 0) {
    countStopsText = "пересадки";
    stopsText = "отсутствуют";
  } else if (stops.length === 1) {
    countStopsText = "1 пересадка";
  } else if (stops.length < 5 && stops.length > 1) {
    countStopsText = `${stops.length} пересадки`;
  }

  return (
    <ul className="card__info-items">
      <li className="card__info-item">
        <h6 className="card__info-item-title">
          {origin} - {destination}
        </h6>
        <p className="card__info-item-text">
          {departureTime.transformDateToString()} -{" "}
          {arriveTime.transformDateToString()}
        </p>
      </li>
      <li className="card__info-item">
        <h6 className="card__info-item-title">В пути</h6>
        <p className="card__info-item-text">
          {duration.hours}ч {duration.minutes}м
        </p>
      </li>
      <li className="card__info-item">
        <h6 className="card__info-item-title">{countStopsText}</h6>
        <p className="card__info-item-text">{stopsText}</p>
      </li>
    </ul>
  );
};

export default CardItem;
