import axios from "axios";
export const weather = axios.create({
  baseURL:
    "https://api.weatherapi.com/v1/forecast.json",
});
