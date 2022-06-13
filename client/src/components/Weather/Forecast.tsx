import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { WeatherForecast } from "../../models/weather";
import { Grid } from "@mui/material";

const Forecast: React.FC<
  WeatherForecast
> = ({
  date_epoch,
  astro: { sunrise },
  day: {
    daily_chance_of_rain,
    condition,
    avgtemp_c,
    avghumidity,
  },
}) => {
  const conditionIconURL = `https:${condition.icon}`;

  return (
    <Grid item sm={3}>
      <Card sx={{ minWidth: 150 }}>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={conditionIconURL}
              alt=''
            />
          </Box>
          <Typography
            variant='h5'
            component='div'
            marginTop={2}
          >
            {avgtemp_c}°C
          </Typography>
          <Typography
            sx={{ mb: 1.5 }}
            color='text.secondary'
          >
            {new Date(
              Number(date_epoch) * 1000
            ).toDateString()}
          </Typography>
          <Typography
            sx={{ fontSize: 14 }}
            color='text.secondary'
          >
            {condition.text}
            {"  "}{" "}
            <b>
              {daily_chance_of_rain}%
            </b>
          </Typography>
          <Typography variant='body2'>
            Humidity{" "}
            <b>{avghumidity}%</b>
          </Typography>

          <Typography
            sx={{ mb: 1.5 }}
            color='text.secondary'
          >
            Sunrise at {sunrise}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Forecast;
