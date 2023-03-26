import { Groups } from "../models/Groups";
import { GroupsTech } from "../models/GroupsTech";
import { Locations } from "../models/Locations";
import { Manufacturers } from "../models/Manufacturers";
import { NetworkEquipmentModels } from "../models/NetworkEquipmentModels";
import { NetworkEquipmentTypes } from "../models/NetworkEquipmentTypes";
import { Networks } from "../models/Networks";
import { States } from "../models/States";
import { Users } from "../models/Users";
import { UsersTech } from "../models/UsersTech";

export interface NetworkDevicesDTO {
  id: number;
  name?: string;
  ram?: string;
  serial?: string;
  otherserial?: string;
  contact?: string;
  contact_num?: string;
  comment?: string;
  template_name?: string;
  uudi?: string;
  sysdescr?: string;
  uptime?: string;
  entities?: number;
  users_tech?: UsersTech;
  groups_tech?: GroupsTech;
  locations?: Locations;
  networks?: Networks;
  networkequipmenttypes?: NetworkEquipmentTypes;
  networkequipmentmodels?: NetworkEquipmentModels;
  manufacturers?: Manufacturers;
  users?: Users;
  groups?: Groups;
  states?: States;
  autoupdatesystems?: number;
  snpmcredentials?: number;
  cpu?: number;
  ticket_tco?: number;
  date_mod?: string;
  date_creation?: string;
  last_inventory_update?: string;
  is_recursive?: boolean;
  is_deleted?: boolean;
  is_template?: boolean;
  is_dynamic?: boolean;
}

