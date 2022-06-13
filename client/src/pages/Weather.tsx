// Components
import CurrentWeather from "../components/Weather/CurrentWeather";

// Hooks
import { useWeather } from "../hooks/useWeather";

// MUI
import {
  Box,
  CircularProgress,
  Container,
  Fab,
  Tooltip,
  Typography,
} from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";

// Layouts
import { AppLayout } from "../layouts/AppLayout";
import Forecasts from "../components/Weather/Forecasts";

const Weather = (): JSX.Element => {
  const { weather, loading } =
    useWeather();

  const CONTENT = (
    <>
      <CurrentWeather
        weather={weather}
      />
      <Forecasts
        forecast={
          weather
            ? weather?.forecast
                .forecastday
            : []
        }
      />
      <Tooltip title='New Mission'>
        <Fab
          sx={{
            position: "fixed",
            bottom: 16,
            right: 16,
          }}
          color='primary'
          aria-label='add'
          onClick={() => {}}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
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

  return (
    <AppLayout title='Weather'>
      <Container maxWidth='lg'>
        <Typography
          variant='h4'
          component='h1'
        >
          Weather
        </Typography>
        {loading ? LOADING : CONTENT}
      </Container>
    </AppLayout>
  );
};

export { Weather };
