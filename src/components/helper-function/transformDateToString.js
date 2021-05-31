function transformDateToString() {
  const hoursStr =
    String(this.hours).length === 1
      ? "0" + String(this.hours)
      : String(this.hours);
  const minutesStr =
    String(this.minutes).length === 1
      ? "0" + String(this.minutes)
      : String(this.minutes);
  return `${hoursStr}:${minutesStr}`;
}

export default transformDateToString;
