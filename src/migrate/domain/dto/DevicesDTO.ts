import { AutoUpdateSystems } from "../models/TEST";
import { Entities } from "../models/Entities";
import { Groups } from "../models/Groups";
import { GroupsTech } from "../models/GroupsTech";
import { Locations } from "../models/Locations";
import { Manufacturers } from "../models/Manufacturers";
import { PeripheralModels } from "../models/PeripheralModels";
import { PeripheralTypes } from "../models/PeripheralTypes";
import { States } from "../models/States";
import { Users } from "../models/Users";
import { UsersTech } from "../models/UsersTech";

export interface DevicesDTO {
  id: number;
  entities: Entities;
  users_tech: UsersTech;
  groups_tech: GroupsTech;
  locations: Locations;
  peripheraltypes: PeripheralTypes;
  peripheralmodels: PeripheralModels;
  manufacturers: Manufacturers;
  users: Users;
  groups: Groups;
  states: States;
  autoupdatesystems: AutoUpdateSystems;
  name: string;
  date_mod: string;
  contact: string;
  contact_num: string;
  comment: string;
  serial: string;
  otherserial: string;
  brand: string;
  is_deleted: number;
  is_global: number;
  is_template: number;
  template_name: string;
  ticket_tco: string;
  is_dynamic: number;
  uuid: string;
  date_creation: string;
  is_recursive: number;
}