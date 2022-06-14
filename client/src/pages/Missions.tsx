import React from "react";

// Components
import { ListMenu } from "../components/ListMenu";

// GraphQL
import { Mission } from "../graphql/schema";

// Layouts
import { AppLayout } from "../layouts/AppLayout";

// MUI
import {
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Button,
  Grid,
  Typography,
  Fab,
  Dialog,
  DialogTitle,
  TextField,
  DialogContent,
  DialogActions,
  Toolbar,
  Container,
  IconButton,
  Tooltip,
  Snackbar,
  Alert,
  Box,
  CircularProgress,
} from "@mui/material";
import {
  Add as AddIcon,
  FilterAlt as FilterAltIcon,
  Sort as SortIcon,
  ArrowDownward as ArrowDownwardIcon,
  ArrowUpward as ArrowUpwardIcon,
} from "@mui/icons-material";
import {
  DateTimePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

// Helpers
import { addMissionFormModel } from "../helpers/AddMission/formModel";

// Hooks
import { useAddMission } from "../hooks/useAddMission";

// Types
import { AddMissionFormFieldType } from "../models/forms";

const Missions = (): JSX.Element => {
  const { formFields } =
    addMissionFormModel;
  const {
    errors,
    getFieldHelpers,
    getFieldProps,
    handleSubmit,
    loading: creatingMissing,
    touched,
    newMissionOpen,
    setNewMissionOpen,
    handleSortDescClick,
    handleSortFieldChange,
    missions,
    handleErrClose,
    errMessage,
    sortDesc,
  } = useAddMission();

  const FieldError = (
    name: AddMissionFormFieldType
  ) => {
    return (
      <Typography
        variant='subtitle2'
        color='error'
      >
        {touched[name] &&
          errors[name] &&
          errors[name]}
      </Typography>
    );
  };

  const handleNewMissionOpen = () => {
    getFieldHelpers("date").setValue(
      null
    );
    setNewMissionOpen(true);
  };

  const handleNewMissionClose = () =>
    setNewMissionOpen(false);

  const handleTempLaunchDateChange = (
    newValue: Date | null
  ) => {
    getFieldHelpers("date").setValue(
      newValue?.toISOString()
    );
  };

  return (
    <AppLayout title='Missions'>
      <Container maxWidth='lg'>
        <Typography
          variant='h4'
          component='h1'
        >
          Solar Rocket Missions
        </Typography>

        <Toolbar disableGutters>
          <Grid
            justifyContent='flex-end'
            container
          >
            <IconButton>
              <FilterAltIcon />
            </IconButton>
            <ListMenu
              options={[
                "Date",
                "Title",
                "Operator",
              ]}
              endIcon={<SortIcon />}
              onSelectionChange={
                handleSortFieldChange
              }
            />
            <IconButton
              onClick={
                handleSortDescClick
              }
            >
              {sortDesc ? (
                <ArrowDownwardIcon />
              ) : (
                <ArrowUpwardIcon />
              )}
            </IconButton>
          </Grid>
        </Toolbar>

        {missions ? (
          <Grid container spacing={2}>
            {" "}
            {missions.map(
              (
                missions: Mission,
                key: number
              ) => (
                <Grid item key={key}>
                  <Card
                    sx={{
                      width: 275,
                      height: 200,
                    }}
                  >
                    <CardHeader
                      title={
                        missions.title
                      }
                      subheader={new Date(
                        missions.launch.date
                      ).toDateString()}
                    />
                    <CardContent>
                      <Typography
                        noWrap
                      >
                        {
                          missions.operator
                        }
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button>
                        Edit
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              )
            )}
          </Grid>
        ) : (
          <Box
            sx={{ textAlign: "center" }}
          >
            <CircularProgress />
          </Box>
        )}

        <Tooltip title='New Mission'>
          <Fab
            sx={{
              position: "fixed",
              bottom: 16,
              right: 16,
            }}
            color='primary'
            aria-label='add'
            onClick={
              handleNewMissionOpen
            }
          >
            <AddIcon />
          </Fab>
        </Tooltip>
        <Dialog
          open={newMissionOpen}
          onClose={
            handleNewMissionClose
          }
          fullWidth
          maxWidth='sm'
        >
          <DialogTitle>
            New Mission
          </DialogTitle>
          <DialogContent>
            <Grid
              container
              direction='column'
              spacing={2}
            >
              <Grid item>
                <TextField
                  {...getFieldProps(
                    formFields.title
                      .name
                  )}
                  placeholder={
                    formFields.title
                      .placeholder
                  }
                  variant='standard'
                  fullWidth
                />
                {FieldError(
                  formFields.title.name
                )}
              </Grid>

              <Grid item>
                <TextField
                  {...getFieldProps(
                    formFields.operator
                      .name
                  )}
                  placeholder={
                    formFields.operator
                      .placeholder
                  }
                  variant='standard'
                  fullWidth
                />
                {FieldError(
                  formFields.operator
                    .name
                )}
              </Grid>

              <Grid item mt={4}>
                <Typography variant='subtitle1'>
                  ORBIT
                </Typography>
              </Grid>

              <Box
                display='flex'
                pl={2}
                mt={2}
              >
                <Grid item>
                  <TextField
                    {...getFieldProps(
                      formFields
                        .periapsis.name
                    )}
                    label={
                      formFields
                        .periapsis
                        .placeholder
                    }
                    placeholder={
                      formFields
                        .periapsis
                        .placeholder
                    }
                    variant='standard'
                    fullWidth
                  />
                  {FieldError(
                    formFields.periapsis
                      .name
                  )}
                </Grid>

                <Grid item ml={1}>
                  <TextField
                    {...getFieldProps(
                      formFields
                        .apoapsis.name
                    )}
                    label={
                      formFields
                        .apoapsis
                        .placeholder
                    }
                    placeholder={
                      formFields
                        .apoapsis
                        .placeholder
                    }
                    variant='standard'
                    fullWidth
                  />
                  {FieldError(
                    formFields.apoapsis
                      .name
                  )}
                </Grid>

                <Grid item ml={1}>
                  <TextField
                    {...getFieldProps(
                      formFields
                        .inclination
                        .name
                    )}
                    label={
                      formFields
                        .inclination
                        .placeholder
                    }
                    placeholder={
                      formFields
                        .inclination
                        .placeholder
                    }
                    variant='standard'
                    fullWidth
                  />
                  {FieldError(
                    formFields
                      .inclination.name
                  )}
                </Grid>
              </Box>

              <Grid item mt={4}>
                <Typography variant='subtitle1'>
                  LAUNCH
                </Typography>
              </Grid>

              <Grid item>
                <LocalizationProvider
                  dateAdapter={
                    AdapterDateFns
                  }
                >
                  <DateTimePicker
                    minDate={new Date()}
                    minTime={new Date()}
                    label='Launch Date'
                    value={
                      getFieldProps(
                        formFields.date
                      ).value
                    }
                    onChange={
                      handleTempLaunchDateChange
                    }
                    renderInput={(
                      params
                    ) => (
                      <TextField
                        variant='standard'
                        {...params}
                      />
                    )}
                  />
                </LocalizationProvider>
              </Grid>

              <Grid item>
                <TextField
                  {...getFieldProps(
                    formFields.vehicle
                      .name
                  )}
                  placeholder={
                    formFields.vehicle
                      .placeholder
                  }
                  variant='standard'
                  fullWidth
                />
                {FieldError(
                  formFields.vehicle
                    .name
                )}
              </Grid>

              <Grid item mt={4}>
                <Typography variant='subtitle2'>
                  LOCATION
                </Typography>
              </Grid>
              <Grid item>
                <TextField
                  {...getFieldProps(
                    formFields
                      .locationName.name
                  )}
                  placeholder={
                    formFields
                      .locationName
                      .placeholder
                  }
                  variant='standard'
                  fullWidth
                />
                {FieldError(
                  formFields
                    .locationName.name
                )}
              </Grid>

              <Box
                display='flex'
                pl={2}
                mt={2}
              >
                <Grid item>
                  <TextField
                    {...getFieldProps(
                      formFields
                        .longitude.name
                    )}
                    label={
                      formFields
                        .longitude
                        .placeholder
                    }
                    placeholder={
                      formFields
                        .longitude
                        .placeholder
                    }
                    variant='standard'
                    fullWidth
                  />
                  {FieldError(
                    formFields.longitude
                      .name
                  )}
                </Grid>

                <Grid item ml={2}>
                  <TextField
                    {...getFieldProps(
                      formFields
                        .latitude.name
                    )}
                    label={
                      formFields
                        .latitude
                        .placeholder
                    }
                    placeholder={
                      formFields
                        .latitude
                        .placeholder
                    }
                    variant='standard'
                    fullWidth
                  />
                  {FieldError(
                    formFields.latitude
                      .name
                  )}
                </Grid>
              </Box>

              <Grid item mt={4}>
                <Typography
                  variant='subtitle2'
                  mb={4}
                >
                  PAYLOAD
                </Typography>
              </Grid>
              <Box
                display='flex'
                pl={2}
              >
                <Grid item>
                  <TextField
                    {...getFieldProps(
                      formFields
                        .capacity.name
                    )}
                    label={
                      formFields
                        .capacity
                        .placeholder
                    }
                    placeholder={
                      formFields
                        .capacity
                        .placeholder
                    }
                    variant='standard'
                    fullWidth
                  />
                  {FieldError(
                    formFields.capacity
                      .name
                  )}
                </Grid>
                <Grid item ml={2}>
                  <TextField
                    {...getFieldProps(
                      formFields
                        .available.name
                    )}
                    label={
                      formFields
                        .available
                        .placeholder
                    }
                    placeholder={
                      formFields
                        .available
                        .placeholder
                    }
                    variant='standard'
                    fullWidth
                  />
                  {FieldError(
                    formFields.available
                      .name
                  )}
                </Grid>
              </Box>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={
                handleNewMissionClose
              }
            >
              Cancel
            </Button>
            <Button
              onClick={() =>
                handleSubmit()
              }
              disabled={creatingMissing}
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
      <Snackbar
        open={errMessage != null}
        autoHideDuration={5000}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        onClose={handleErrClose}
      >
        <Alert
          onClose={handleErrClose}
          variant='filled'
          severity='error'
        >
          {errMessage}
        </Alert>
      </Snackbar>
    </AppLayout>
  );
};

export { Missions };
