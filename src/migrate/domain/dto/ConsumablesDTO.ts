import { Consumableitemtypes } from "../models/ConsumableItemTypes";
import { Entities } from "../models/Entities";
import { Groups } from "../models/Groups";
import { Locations } from "../models/Locations";
import { Manufacturers } from "../models/Manufacturers";
import { UsersTech } from "../models/UsersTech";


export interface ConsumablesDTO {
  id: number;
  ref?: string;
  name?: string;
  is_deleted?: boolean;
  comment?: string;
  otherserial?: string;
  pictures?: string;
  entities?: Entities;
  locations?: Locations;
  consumableitemtypes?: Consumableitemtypes;
  manufacturers?: Manufacturers;
  users_tech?: UsersTech;
  groups_tech?: Groups;
  stock_target?: number;
  is_recursive?: boolean;
  alarm_threshold?: number;
  date_mod?: string;
  date_creation?: string;
}
