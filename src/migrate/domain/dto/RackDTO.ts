import { Entities } from "../models/Entities";
import { GroupsTech } from "../models/GroupsTech";
import { Locations } from "../models/Locations";
import { Manufacturers } from "../models/Manufacturers";
import { States } from "../models/States";
import { UsersTech } from "../models/UsersTech";
import { Rooms } from "./Rooms";

export interface RackDTO {
  id: number;
  entities: Entities;
  locations: Locations;
  racktypes: RackTypes;
  rackmodels: RackModels;
  manufacturers: Manufacturers;
  users_tech: UsersTech;
  groups_tech: GroupsTech;
  states: States;
  dcrooms: Rooms;
  name: string;
  comment: string;
  is_recursive: number;
  serial: string;
  otherserial: string;
  width: number;
  height: number;
  depth: number;
  number_units: number;
  is_template: number;
  template_name: string;
  is_deleted: number;
  room_orientation: number;
  position: string;
  bgcolor: string;
  max_power: number;
  mesured_power: number;
  max_weight: number;
  date_mod: string;
  date_creation: string;
}

export interface RackTypes {
  id: number;
  is_recursive: number;
  name: string;
  comment: string;
  date_creation: string;
  date_mod: string;
  entities: string;
}

export interface RackModels {
  id: number;
  name: string;
  comment: string;
  product_number: string;
  date_mod: string;
  date_creation: string;
  pictures: string;
}
