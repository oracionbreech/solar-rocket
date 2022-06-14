import { useFormik } from "formik";
import React from "react";

// GraphQL
import fetchGraphQL from "../graphql/GraphQL";
import { Mission } from "../graphql/schema";

// Helpers
import { addMissionInitialValues } from "../helpers/AddMission/initialValues";
import { addMissionValidationSchema } from "../helpers/AddMission/validationSchema";

// Models
import { AddMissionForm } from "../models/forms";

const getMissions = async (
  sortField: SortField,
  sortDesc?: Boolean
): Promise<MissionsResponse> => {
  return await fetchGraphQL(
    `
  {
    Missions(
      sort: {
        field: ${sortField},
        desc: ${sortDesc}
      }
    ) {
      id
      title
      operator
      launch {
        date
      }
    }
  }
  `,
    []
  );
};

interface MissionsResponse {
  data: {
    Missions: Mission[];
  };
}

type SortField =
  | "Title"
  | "Date"
  | "Operator";

export const useAddMission = () => {
  const [loading, setLoading] =
    React.useState(false);

  const [missions, setMissions] =
    React.useState<Mission[] | null>(
      null
    );

  const [sortDesc, setSortDesc] =
    React.useState<boolean>(false);
  const [sortField, setSortField] =
    React.useState<SortField>("Title");

  const handleSortFieldChange = (
    event: React.SyntheticEvent,
    value: SortField
  ) => {
    setSortField(value);
  };

  const handleSortDescClick = () => {
    setSortDesc(!sortDesc);
  };

  const [
    newMissionOpen,
    setNewMissionOpen,
  ] = React.useState(false);

  const init = async () =>
    getMissions(sortField, sortDesc)
      .then(
        (result: MissionsResponse) =>
          setMissions(
            result.data.Missions
          )
      )
      .catch((err) =>
        setErrMessage(
          "Failed to load missions."
        )
      );

  React.useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortField, sortDesc]);

  const [errMessage, setErrMessage] =
    React.useState<String | null>(null);

  const handleErrClose = (
    event?:
      | React.SyntheticEvent
      | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setErrMessage(null);
  };

  const onSubmit = async (
    values: AddMissionForm
  ) => {
    setLoading(true);
    try {
      await fetchGraphQL(
        `
      mutation {
        createMission(mission: {
          title: "${values.title}",
          operator: "${values.operator}",
          orbit: {
            periapsis: ${values.periapsis},
            apoapsis: ${values.apoapsis},
            inclination: ${values.inclination}
          },
          launch: {
            date: "${values.date}"
            vehicle: "${values.vehicle}",
            location: {
              name: "${values.locationName}",
              longitude: ${values.longitude},
              latitude: ${values.latitude}
            }
          },
              payload: {
                capacity: ${values.capacity},
                available: ${values.available}
              }
            }) {
          id
        }
      }
      `,
        []
      );
      await init();
      setNewMissionOpen(false);
    } catch (error) {
      //TODO: Catch error
    } finally {
      setLoading(false);
    }
  };

  const {
    handleSubmit,
    getFieldHelpers,
    getFieldProps,
    errors,
    touched,
  } = useFormik({
    onSubmit,
    initialValues:
      addMissionInitialValues,
    validationSchema:
      addMissionValidationSchema,
  });

  return {
    handleSubmit,
    getFieldHelpers,
    getFieldProps,
    errors,
    touched,
    onSubmit,
    loading,
    newMissionOpen,
    setNewMissionOpen,
    missions,
    sortDesc,
    sortField,
    handleSortDescClick,
    handleSortFieldChange,
    errMessage,
    handleErrClose,
  };
};
