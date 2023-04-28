import { Locations } from "../models/Locations";
import { Manufacturers } from "../models/Manufacturers";
import { PrinterModels } from "../models/PrinterModels";
import { PrintersTypes } from "../models/PrintersTypes";
import { States } from "../models/States";
export interface PrinterDTO {
	id: number,
	name: string,	
	locations: Locations,
	printertypes: PrintersTypes,
	printermodels: PrinterModels,
	manufacturers: Manufacturers,
	states: States,
	date_mod: string,
}

