import { Locations } from "../models/Locations";
import { Manufacturers } from "../models/Manufacturers";
import { PeripheralModels } from "../models/PeripheralModels";
import { PeripheralTypes } from "../models/PeripheralTypes";
import { States } from "../models/States";
export interface DevicesDTO {
  id: number;
  locations: Locations;
  peripheraltypes: PeripheralTypes;
  peripheralmodels: PeripheralModels;
  manufacturers: Manufacturers;
  states: States;
  name: string;
  date_mod: string;
  contact: string;
}