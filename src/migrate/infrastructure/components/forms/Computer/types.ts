export enum FieldTypes {
  NAME = "name",
  LOCATION = "location",
}

export interface CreateComputer {
  name: string;
  location?: string;
}
