import { AddMissionFormFieldType } from "../../models/forms";

const [
  title,
  operator,
  periapsis,
  apoapsis,
  inclination,
  date,
  vehicle,
  locationName,
  longitude,
  latitude,
  capacity,
  available,
]: AddMissionFormFieldType[] = [
  "title",
  "operator",
  "periapsis",
  "apoapsis",
  "inclination",
  "date",
  "vehicle",
  "locationName",
  "longitude",
  "latitude",
  "capacity",
  "available",
];

export const addMissionFormModel = {
  formId: "add-mission-form-model",
  formFields: {
    title: {
      name: title,
      placeholder:
        "Enter Mission Title",
      errMsg: {
        required:
          "Mission Title is required",
      },
    },
    operator: {
      name: operator,
      placeholder: "Enter Operator",
      errMsg: {
        required:
          "Operator is required",
      },
    },
    periapsis: {
      name: periapsis,
      placeholder: "Enter Periapsis",
      errMsg: {
        required:
          "Periapsis is required",
        invalid:
          "Periapsis is invalid.",
      },
    },
    apoapsis: {
      name: apoapsis,
      placeholder: "Enter apoapsis",
      errMsg: {
        required:
          "Apoapsis is required",
        invalid: "Apoapsis is invalid.",
      },
    },
    inclination: {
      name: inclination,
      placeholder: "Enter inclination",
      errMsg: {
        required:
          "Inclination is required.",
        invalid:
          "Inclination is invalid.",
      },
    },
    date: {
      name: date,
      placeholder: "Enter date",
      errMsg: {
        required: "Date is required",
      },
    },
    vehicle: {
      name: vehicle,
      placeholder: "Enter vehicle",
      errMsg: {
        required: "Vehicle is required",
      },
    },
    locationName: {
      name: locationName,
      placeholder:
        "Enter location name",
      errMsg: {
        required:
          "Location Name is required",
      },
    },
    longitude: {
      name: longitude,
      placeholder: "Enter longitude",
      errMsg: {
        required:
          "Longitude is required.",
        invalid:
          "Longitude is invalid.",
      },
    },
    latitude: {
      name: latitude,
      placeholder: "Enter latitude",
      errMsg: {
        required:
          "Latitude is required",
        invalid: "Latitude is invalid.",
      },
    },
    capacity: {
      name: capacity,
      placeholder: "Enter capacity",
      errMsg: {
        required:
          "Capacity is required",
        invalid: "Capacity is invalid.",
      },
    },
    available: {
      name: available,
      placeholder:
        "Enter available capacity",
      errMsg: {
        required:
          "Avialable capacity is required",
        invalid:
          "Available capacity is invalid.",
      },
    },
  },
};
