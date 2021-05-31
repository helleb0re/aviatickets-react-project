import React, { useState, useEffect } from "react";
import TicketsService from "../../service/ticketsService";
import Card from "../card";
import Header from "../header";
import ItemFilter from "../itemFilter";
import SideItemFilter from "../sideItemFilter";
import Spinner from "../spinner";
import MoreTicketsBtn from "../moreTickets";
import {
  sortByDuration,
  sortByPrice,
  sortByOptimal,
} from "../helper-function/sortFunction";
import changeTransferFilter from "../helper-function/changeTransferFilter";
import transferSortFunc from "../helper-function/transferSortFunc";
import ErrorBundle from "../errorBundle";

import "./app.css";

const App = () => {
  const [ticketsData, setTicketsData] = useState([]);
  const [status, setStatus] = useState("loading");
  const [filter, setFilter] = useState({});
  const [transferFilter, setTransferFilter] = useState({
    all: true,
    direct: true,
    oneTransfer: true,
    twoTransfer: true,
    threeTransfer: true,
    counterTrueFilter: 4,
    counterAllFilter: 4,
  });
  const [amountViewTickets, setAmountViewTickets] = useState(5);

  useEffect(() => {
    const ticketsService = new TicketsService();

    ticketsService
      .getAllData()
      .then((data) => {
        setStatus("loaded");
        setFilter({
          status: "cheap",
          htmlElem: document.getElementById("filter-cheap"),
        });

        data.sort(sortByPrice);
        setTicketsData(data);
      })
      .catch((error) => {
        setStatus("error");
      });
  }, []);

  const onSetFilter = (e) => {
    if (e.target !== filter.htmlElem) {
      const newHtmlElem = document.getElementById(e.target.id);
      const newStatus = e.target.id.split("-")[1];

      filter.htmlElem.classList.remove("btn--active");
      newHtmlElem.classList.add("btn--active");

      setFilter({
        status: newStatus,
        htmlElem: newHtmlElem,
      });

      setAmountViewTickets(5);
    }
  };

  const onToggle = (e) => {
    const idElem = e.target.id;

    setTransferFilter((transferFilter) =>
      changeTransferFilter(transferFilter, idElem)
    );
  };

  let filtersCards = transferSortFunc(ticketsData, transferFilter);

  switch (filter.status) {
    case "cheap":
      filtersCards.sort(sortByPrice);
      break;
    case "fast":
      filtersCards.sort(sortByDuration);
      break;
    case "optimal":
      filtersCards.sort(sortByOptimal);
      break;
    default:
      break;
  }

  const cards = filtersCards.map((item, i) => {
    return <Card ticket={item} key={i} />;
  });

  const moreTicketsFunc = () => {
    if (cards.length < amountViewTickets + 5) {
      setAmountViewTickets(cards.length);
    } else {
      setAmountViewTickets((amountViewTickets) => amountViewTickets + 5);
    }
  };

  let inner = null;

  switch (status) {
    case "loading":
      inner = <Spinner />;
      break;
    case "loaded":
      inner = (
        <>
          <div className="row__left">
            <SideItemFilter
              filtersStatus={transferFilter}
              onToggle={onToggle}
            />
          </div>
          <div className="row__right">
            <ItemFilter onSetFilter={onSetFilter} />
            {cards.slice(0, amountViewTickets)}
            {cards.length === 0 || amountViewTickets >= cards.length ? null : (
              <MoreTicketsBtn
                moreTicketsFunc={moreTicketsFunc}
                text={
                  amountViewTickets + 5 > cards.length
                    ? "Показать оставшиеся билеты!"
                    : "Показать еще 5 билетов!"
                }
              />
            )}
          </div>
        </>
      );
      break;
    case "error":
      inner = <ErrorBundle />;
      break;
    default:
      break;
  }
  return (
    <div className="container">
      <Header />
      <div className="row">{inner}</div>
    </div>
  );
};

export default App;
