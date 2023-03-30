export enum FieldTypes {
  NAME = "name",
  LOCATION = "location",
  USER = "user",
  ALTERNATIVE_USERNAME = "alternativeUsername",
  ALTERNATIVE_USERNAME_NUMBER = "alternativeUsernameNumber",
}

export interface CreateComputer {
  name: string;
  location?: string;
}
