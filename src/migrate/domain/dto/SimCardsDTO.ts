import { DeviceSimCardsTypes } from "../models/DeviceSimCardsTypes";
import { Entities } from "../models/Entities";
import { Manufacturers } from "../models/Manufacturers";

export interface SimCardsDTO {
  id: number;
  entities?: Entities;
  manufacturers?: Manufacturers;
  devicesimcardtypes?: DeviceSimCardsTypes;
  designation?: string;
  comment?: string;
  is_recursive?: number;
  is_deleted?: number;
  voltage?: number;
  date_mod?: string;
  date_creation?: string;
  allow_voip?: number;
}