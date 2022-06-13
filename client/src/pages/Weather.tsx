import React from "react";

// Components
import CurrentWeather from "../components/Weather/CurrentWeather";
import Forecasts from "../components/Weather/Forecasts";

// Hooks
import { useWeather } from "../hooks/useWeather";

// MUI
import {
  Box,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@mui/material";

// Layouts
import { AppLayout } from "../layouts/AppLayout";

const Weather = (): JSX.Element => {
  const {
    weather,
    loading,
    debouncedSearchHandler,
  } = useWeather();

  const CONTENT = (
    <>
      {weather && (
        <CurrentWeather
          weather={weather}
        />
      )}
      {weather && (
        <Forecasts
          forecast={
            weather && weather.forecast
              ? weather?.forecast
                  .forecastday
              : []
          }
        />
      )}
    </>
  );
  const LOADING = (
    <Box sx={{ textAlign: "center" }}>
      <CircularProgress
        thickness={10}
        color='primary'
      />
    </Box>
  );

  const EMPTY = (
    <>
      <Box
        textAlign='center'
        marginTop={10}
      >
        <Typography
          variant='h5'
          component='h1'
        >
          Can't find location
        </Typography>
      </Box>
    </>
  );

  return (
    <AppLayout title='Weather'>
      <Container maxWidth='lg'>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            variant='h4'
            component='h1'
          >
            Weather
          </Typography>
          <Box marginLeft={2}>
            <TextField
              id='standard-search'
              label='Enter City'
              type='search'
              variant='standard'
              onChange={
                debouncedSearchHandler
              }
            />
          </Box>
        </Box>
        {!loading && weather && CONTENT}
        {!loading && !weather && EMPTY}
        {loading && LOADING}
      </Container>
    </AppLayout>
  );
};

export { Weather };
