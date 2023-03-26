import { CartridgeItemTypes } from "../models/CartridgeItemTypes";
import { Entities } from "../models/Entities";
import { GroupsTech } from "../models/GroupsTech";
import { Locations } from "../models/Locations";
import { Manufacturers } from "../models/Manufacturers";
import { UsersTech } from "../models/UsersTech";

export interface CartridgesItemsDTO {
  id:number,
  entities: Entities,
  locations: Locations,
  cartridgeitemtypes: CartridgeItemTypes,
  manufacturers: Manufacturers,
  users_tech: UsersTech,
  groups_tech: GroupsTech,
  is_recursive:number,
  name:string,
  ref:string,
  is_deleted:number,
  comment:string,
  alarm_threshold:number,
  stock_target:number,
  date_mod:string,
  date_creation:string,
  pictures:string
}

