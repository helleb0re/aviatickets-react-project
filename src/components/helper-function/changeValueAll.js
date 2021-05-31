const changeValueAll = (elem, amountTrue, amountAll) => {
  const newAmountTrue = !elem ? amountTrue + 1 : amountTrue - 1;

  const newAll = amountAll - newAmountTrue === 0 ? true : false;

  return [newAmountTrue, newAll];
};

export default changeValueAll;
