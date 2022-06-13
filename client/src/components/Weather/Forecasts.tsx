import React from "react";
import { isArray } from "lodash";
import { WeatherForecast } from "../../models/weather";
import Forecast from "./Forecast";
import { Grid } from "@mui/material";

const Forecasts: React.FC<{
  forecast: WeatherForecast[] | [];
}> = ({ forecast }) => {
  return (
    <div>
      <Grid
        container
        spacing={4}
        marginTop={2}
        justifyContent='center'
      >
        {forecast &&
          isArray(forecast) &&
          forecast.map((item) => (
            <Forecast
              {...item}
              key={item.date_epoch}
            />
          ))}
      </Grid>
    </div>
  );
};

export default Forecasts;
