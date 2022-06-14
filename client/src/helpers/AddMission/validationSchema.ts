import * as Yup from "yup";
import { addMissionFormModel } from "./formModel";

const numberRegex = new RegExp(
  /^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$/
);

const {
  formFields: {
    apoapsis,
    available,
    capacity,
    date,
    title,
    inclination,
    latitude,
    locationName,
    longitude,
    operator,
    periapsis,
    vehicle,
  },
} = addMissionFormModel;

export const addMissionValidationSchema =
  Yup.object().shape({
    [title.name]: Yup.string().required(
      title.errMsg.required
    ),
    [locationName.name]:
      Yup.string().required(
        locationName.errMsg.required
      ),
    [operator.name]:
      Yup.string().required(
        operator.errMsg.required
      ),
    [vehicle.name]:
      Yup.string().required(
        vehicle.errMsg.required
      ),
    [latitude.name]: Yup.string()
      .matches(
        numberRegex,
        latitude.errMsg.invalid
      )
      .required(
        latitude.errMsg.required
      ),
    [longitude.name]: Yup.string()
      .matches(
        numberRegex,
        longitude.errMsg.invalid
      )
      .required(
        longitude.errMsg.required
      ),
    [inclination.name]: Yup.string()
      .matches(
        numberRegex,
        inclination.errMsg.invalid
      )
      .required(
        inclination.errMsg.required
      ),
    [periapsis.name]: Yup.string()
      .matches(
        numberRegex,
        periapsis.errMsg.invalid
      )
      .required(
        periapsis.errMsg.required
      ),
    [apoapsis.name]: Yup.string()
      .matches(
        numberRegex,
        apoapsis.errMsg.invalid
      )
      .required(
        periapsis.errMsg.required
      ),
    [capacity.name]: Yup.string()
      .matches(
        numberRegex,
        capacity.errMsg.invalid
      )
      .required(
        capacity.errMsg.required
      ),
    [available.name]: Yup.string()
      .matches(
        numberRegex,
        available.errMsg.invalid
      )
      .required(
        available.errMsg.required
      ),
    [date.name]: Yup.date().required(
      available.errMsg.required
    ),
  });
