import React from "react";
// Models
import { Weather } from "../../models/weather";

// MUI
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const CurrentWeather: React.FC<{
  weather: Weather | null;
}> = ({ weather }) => {
  const tempUnit = "celsius";

  const temperatureText =
    tempUnit === "celsius"
      ? `${weather?.current.feelslike_c}°C`
      : `${weather?.current.feelslike_f}°F`;

  const conditionIconURL = weather
    ? `https:${weather.current.condition.icon}`
    : "";

  return (
    <div>
      <Card
        sx={{
          display: "flex",
          marginTop: "2rem",
        }}
      >
        <Box
          sx={{
            width: "10vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={conditionIconURL}
            alt='weather-condition'
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "45vw",
          }}
        >
          <CardContent
            sx={{ flex: "1 0 auto" }}
          >
            <Typography
              component='div'
              variant='h5'
            >
              {temperatureText}
            </Typography>

            <Typography
              variant='subtitle2'
              color='text.secondary'
              component='div'
            >
              Humidity:{" "}
              {
                weather?.current
                  .humidity
              }
              %
            </Typography>
            <Typography
              variant='subtitle2'
              color='text.secondary'
              component='div'
            >
              Wind:{" "}
              {
                weather?.current
                  .wind_kph
              }{" "}
              km/h
            </Typography>
          </CardContent>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardContent
            sx={{ flex: "1 0 auto" }}
          >
            <Typography
              component='div'
              variant='h5'
            >
              {weather?.location.name},{" "}
              {weather?.location.region}
            </Typography>
            <Typography
              variant='subtitle1'
              color='text.secondary'
              component='div'
            >
              {
                weather?.current
                  .condition.text
              }
            </Typography>
            <Typography
              variant='subtitle2'
              color='text.secondary'
              component='div'
            >
              {new Date(
                Number(
                  weather?.location
                    .localtime_epoch
                ) * 1000
              ).toDateString()}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </div>
  );
};

export default CurrentWeather;
