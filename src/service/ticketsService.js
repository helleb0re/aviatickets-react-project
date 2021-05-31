import transformDateToString from "../components/helper-function/transformDateToString";
import priceToString from "../components/helper-function/priceToString";

export default class TicketsService {
  _apiUrl = "https://front-test.beta.aviasales.ru";
  searchId = "";

  constructor() {
    this.tickets = [];
  }

  initAppSession = async () => {
    const response = await fetch(this._apiUrl + "/search");
    const data = await response.json();
    this.searchId = data.searchId;
  };

  getPackTickets = async () => {
    const response = await fetch(
      this._apiUrl + `/tickets?searchId=${this.searchId}`
    );

    if (response.status === 500) {
      await new Promise((resolve) => setTimeout(resolve));
      this.tickets = await this.getPackTickets();
      return this.tickets;
    } else if (response.status === 200) {
      const body = await response.json();

      const bodyTransformData = this._transformData(body.tickets);

      if (!body.stop) {
        this.tickets = (await this.getPackTickets()).concat(bodyTransformData);
      } else {
        this.tickets.push(...bodyTransformData);
      }
      return this.tickets;
    }
  };

  _transformData(arr) {
    return arr.map((item) => {
      const { price, carrier, segments } = item;

      let totalDuration = 0;

      const newSegments = segments.map((item) => {
        totalDuration += item.duration;

        const date = new Date(item.date);

        const departureTime = {
          hours: date.getHours(),
          minutes: date.getMinutes(),
          transformDateToString,
        };

        const duration = {
          hours: Math.floor(item.duration / 60),
          minutes: item.duration % 60,
        };

        const departureTimeInMinutes =
          departureTime.hours * 60 + departureTime.minutes;

        const arriveTimeInMinutes = item.duration + departureTimeInMinutes;

        const arriveTime = {
          hours: Math.floor(arriveTimeInMinutes / 60) % 24,
          minutes: arriveTimeInMinutes % 60,
          transformDateToString,
        };

        return {
          ...item,
          departureTime,
          arriveTime,
          duration,
        };
      });

      const [firstFlight, secondFlight] = newSegments;

      return {
        price,
        priceToString,
        carrier,
        firstFlight,
        secondFlight,
        totalDuration,
      };
    });
  }

  getAllData = async () => {
    await this.initAppSession();
    return await this.getPackTickets();
  };
}
