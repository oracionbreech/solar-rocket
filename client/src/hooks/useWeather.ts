import React from "react";
import {
  debounce,
  isEmpty,
} from "lodash";

// Models
import { Weather } from "../models/weather";

// Services
import { getWeather } from "../services/weather";

export const useWeather = () => {
  const [loading, setLoading] =
    React.useState(false);

  const [weather, setWeather] =
    React.useState<Weather | null>(
      null
    );

  const [search, setSearch] =
    React.useState("London");

  const changeHandler = (
    event: React.ChangeEvent<
      | HTMLInputElement
      | HTMLTextAreaElement
    >
  ) => {
    setSearch(event.target.value);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearchHandler =
    // eslint-disable-next-line react-hooks/exhaustive-deps
    React.useCallback(
      debounce(changeHandler, 300),
      []
    );

  const init = async () => {
    setWeather(null);
    setLoading(true);
    try {
      if (!isEmpty(search)) {
        const { data, status } =
          await getWeather(search);

        if (status === 200) {
          setWeather(data);
        }
      }
    } catch (error) {
      // @TODO: toast error
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return {
    loadWeather: init,
    weather,
    loading,
    debouncedSearchHandler,
  };
};
