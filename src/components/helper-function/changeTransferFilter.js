import changeValueAll from "./changeValueAll";

const changeTransferFilter = (transferFilter, idElem) => {
  const { all, counterTrueFilter, counterAllFilter } = transferFilter;

  let newObj = null;

  if (idElem === "all") {
    newObj = {
      ...transferFilter,
      all: !all,
      direct: !all,
      oneTransfer: !all,
      twoTransfer: !all,
      threeTransfer: !all,
      counterTrueFilter: !all ? 4 : 0,
    };
  } else {
    const [newCounterTrueFilter, newAll] = changeValueAll(
      transferFilter[idElem],
      counterTrueFilter,
      counterAllFilter
    );

    newObj = {
      ...transferFilter,
      all: newAll,
      counterTrueFilter: newCounterTrueFilter,
    };

    newObj[idElem] = !transferFilter[idElem];
  }
  return newObj;
};

export default changeTransferFilter;
