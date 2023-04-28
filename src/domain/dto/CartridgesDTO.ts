import { CartridgeItemTypes } from "../models/CartridgeItemTypes";
import { Entities } from "../models/Entities";
import { GroupsTech } from "../models/GroupsTech";
import { Locations } from "../models/Locations";
import { Manufacturers } from "../models/Manufacturers";
import { UsersTech } from "../models/UsersTech";

export interface CartridgesItemsDTO {
  id: number,
  locations: Locations,
  cartridgeitemtypes: CartridgeItemTypes,
  manufacturers: Manufacturers,
  name: string,
  ref: string,
}

