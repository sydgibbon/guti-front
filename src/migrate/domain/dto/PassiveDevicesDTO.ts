import { Entities } from "../models/Entities"; 
import { GroupsTech } from "../models/GroupsTech";
import { Locations } from "../models/Locations";
import { Manufacturers } from "../models/Manufacturers";
import { PassiveDcEquipmentsModels } from "../models/PassiveDcEquipmentModels";
import { PassiveDcEquipmentTypes } from "../models/PassiveDcEquipmentTypes";
import { States } from "../models/States";
import { UsersTech } from "../models/UsersTech";

export interface PassiveDevicesDTO {
  name?: string;
  entities?: Entities;
  is_recursive?: number;
  locations?: Locations;
  serial?: string;
  otherserial?: string;
  passivedcequipmentmodels?: PassiveDcEquipmentsModels;
  passivedcequipmenttypes?: PassiveDcEquipmentTypes;
  users_tech?: UsersTech;
  groups_tech?: GroupsTech;
  is_template?: number;
  template_name?: string;
  states?: States;
  comment?: string;
  manufacturers?: Manufacturers;
  is_deleted?: boolean;
  date_mod?: string;
  date_creation?: string;
}
