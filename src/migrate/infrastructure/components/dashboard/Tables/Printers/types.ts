import { Locations } from "../../../../../domain/models/Locations";
import { Manufacturers } from "../../../../../domain/models/Manufacturers";
import { PrinterModels } from "../../../../../domain/models/PrinterModels";
import { PrintersTypes } from "../../../../../domain/models/PrintersTypes";
import { States } from "../../../../../domain/models/States";

export interface DataRow {
  id: number;
  locations: Locations;
  printertypes: PrintersTypes;
  manufacturers: Manufacturers;
  states: States;
  name: string;
  date_mod: string;
  printermodels: PrinterModels;
}