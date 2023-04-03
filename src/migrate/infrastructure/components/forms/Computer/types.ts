export enum FieldTypes {
  UUID = "uuid",
  NAME = "name",
  LOCATION = "locations_id",
  USER = "users_id",
  SERIAL_NUMBER = "serial",
  COMMENT = "comment",
  CONTACT = "contact",
  CONTACT_NUMBER = "contact_num",
}

export interface CreateComputer {
  name: string;
  locations_id?: string;
  users_id?: string;
  contact_num?: string;
  contact?: string;
  serial?: string;
  uuid?: string;
}
