export type AddMissionFormFieldType =
  | "title"
  | "operator"
  | "periapsis"
  | "apoapsis"
  | "inclination"
  | "date"
  | "vehicle"
  | "locationName"
  | "longitude"
  | "latitude"
  | "capacity"
  | "available";

export interface AddMissionForm {
  title: string;
  operator: string;
  periapsis: number;
  apoapsis: number;
  inclination: number;
  date: string | null;
  vehicle: string;
  locationName: string;
  longitude: number;
  latitude: number;
  capacity: number;
  available: number;
}
