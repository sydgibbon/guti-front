import { EnclosureModels } from "../models/EnclosureModels";
import { Entities } from "../models/Entities";
import { GroupsTech } from "../models/GroupsTech";
import { Locations } from "../models/Locations";
import { Manufacturers } from "../models/Manufacturers";
import { States } from "../models/States";
import { UsersTech } from "../models/UsersTech";

export interface EnclosureDTO {
  name?: string;
  entities?: Entities;
  is_recursive?: number;
  locations?: Locations;
  serial?: string;
  otherserial?: string;
  enclosuremodels?: EnclosureModels;
  users_tech?: UsersTech;
  groups_tech?: GroupsTech;
  is_template?: number;
  template_name?: string;
  orientation?: number;
  power_supplies?: number;
  states?: States;
  comment?: string;
  manufacturers?: Manufacturers;
  is_deleted?: number;
  date_mod?: string;
  date_creation?: string;
}
