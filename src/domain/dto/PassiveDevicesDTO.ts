import { Entities } from "../models/Entities";
import { Groups } from "../models/Groups";
import { Locations } from "../models/Locations";
import { Manufacturers } from "../models/Manufacturers";
import { PassiveDcEquipmentsModels } from "../models/PassiveDcEquipmentModels";
import { PassiveDcEquipmentTypes } from "../models/PassiveDcEquipmentTypes";
import { States } from "../models/States";
import { UsersTech } from "../models/UsersTech";

export interface PassiveDevicesDTO {
  id: number;
  name?: string;
}