const transferSortFunc = (arr, filtersObj) => {
  const { all, direct, oneTransfer, twoTransfer, threeTransfer } = filtersObj;

  let newArr = [];

  if (all) {
    newArr = newArr.concat(arr);
  } else {
    if (direct) {
      newArr = newArr.concat(
        arr.filter((item) => {
          return (
            item.firstFlight.stops.length === 0 &&
            item.secondFlight.stops.length === 0
          );
        })
      );
    }
    if (oneTransfer) {
      newArr = newArr.concat(
        arr.filter((item) => filterForTransferGreaterZero(item, 1))
      );
    }
    if (twoTransfer) {
      newArr = newArr.concat(
        arr.filter((item) => filterForTransferGreaterZero(item, 2))
      );
    }
    if (threeTransfer) {
      newArr = newArr.concat(
        arr.filter((item) => filterForTransferGreaterZero(item, 3))
      );
    }
  }

  return newArr;
};

const filterForTransferGreaterZero = (item, num) => {
  return (
    (item.firstFlight.stops.length === num ||
      item.secondFlight.stops.length === num) &&
    item.firstFlight.stops.length <= num &&
    item.secondFlight.stops.length <= num
  );
};

export default transferSortFunc;
