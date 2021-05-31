function priceToString() {
  const priceArr = String(this.price).split("");

  for (let i = priceArr.length - 3; i > 0; i -= 3) {
    priceArr[i] = " " + priceArr[i];
  }

  const priceStr = priceArr.join("");
  priceStr.trim();
  return priceStr;
}

export default priceToString;
