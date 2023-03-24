import { Locations } from "../../../../../domain/models/Locations";
import { Manufacturers } from "../../../../../domain/models/Manufacturers";

export interface DataRow {
  name: string;
  ref: string;
  type: string;
  manufacturers: Manufacturers;
  locations: Locations;
  cartridges: string;
}
