import { CartridgeItemTypes } from "../../../../../domain/models/CartridgeItemTypes";
import { Locations } from "../../../../../domain/models/Locations";
import { Manufacturers } from "../../../../../domain/models/Manufacturers";

export interface DataRow {
  name: string;
  ref: string;
  cartridgeitemtypes: CartridgeItemTypes; 
  manufacturers: Manufacturers;
  locations: Locations;
  cartridges: string;
}
