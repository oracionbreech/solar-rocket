import { api } from "./api";

export const getWeather = async (
  city: string
) => api.get(`/weather?city=${city}`);
