import { AutoUpdateSystems } from "../models/AutoUpdateSystems";
import { Entities } from "../models/Entities";
import { Groups } from "../models/Groups";
import { GroupsTech } from "../models/GroupsTech";
import { Locations } from "../models/Locations";
import { Manufacturers } from "../models/Manufacturers";
import { PhoneModels } from "../models/PhoneModels";
import { PhonePowerSupplies } from "../models/PhonePowerSupplies";
import { PhoneTypes } from "../models/PhoneTypes";
import { States } from "../models/States";
import { Users } from "../models/Users";
import { UsersTech } from "../models/UsersTech";

export interface PhoneDTO {
  id: number;
  entities: Entities;
  locations: Locations;
  phonetypes: PhoneTypes;
  phonemodels: PhoneModels;
  phonepowersupplies: PhonePowerSupplies;
  manufacturers: Manufacturers;
  users_tech: UsersTech;
  groups_tech: GroupsTech;
  users: Users;
  groups: Groups;
  autoupdatesystems: AutoUpdateSystems;
  states: States;
  name: string;
  date_mod: string;
  contact: string;
  contact_num: string;
  comment: string;
  serial: string;
  otherserial: string;
  brand: string;
  number_line: string;
  have_headset: number;
  have_hp: number;
  is_global: number;
  is_deleted: number;
  is_template: number;
  template_name: string;
  ticket_tco: string;
  is_dynamic: number;
  uuid: string;
  date_creation: string;
  is_recursive: number;
}


