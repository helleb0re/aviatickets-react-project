const MAX_COST = 100000;
const MAX_DURATION = 4000;

const sortByPrice = ({ price: a }, { price: b }) => {
  return a - b;
};

const sortByDuration = ({ totalDuration: a }, { totalDuration: b }) => {
  return a - b;
};

const sortByOptimal = (
  { price: a_p, totalDuration: a_d },
  { price: b_p, totalDuration: b_d }
) => {
  return (
    MAX_COST -
    b_p +
    (MAX_DURATION - b_d) -
    (MAX_COST - a_p + (MAX_DURATION - a_d))
  );
};

export { sortByPrice, sortByDuration, sortByOptimal };
