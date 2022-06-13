import React from "react";
import { Weather } from "../models/weather";

// Services
import { getWeather } from "../services/weather";

export const useWeather = () => {
  const [city] =
    React.useState("Talisay");

  const [loading, setLoading] =
    React.useState(false);

  const [weather, setWeather] =
    React.useState<Weather | null>(
      null
    );

  const init = async () => {
    try {
      setLoading(true);
      const { data } = await getWeather(
        city
      );

      setWeather(data);
    } catch (error) {
      // @TODO: toast error
    } finally {
      setLoading(false);
    }
  };

  console.log(weather);

  React.useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    loadWeather: init,
    weather,
    loading,
  };
};
