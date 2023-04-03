import { Entities } from "./Entities";
import { Groups } from "./Groups";
import { GroupsTech } from "./GroupsTech";
import { Locations } from "./Locations";
import { Manufacturers } from "./Manufacturers";
import { OperatingSystems } from "./OperatingSystems";
import { SoftwareCategories } from "./SoftwareCategories";
import { Users } from "./Users";
import { UsersTech } from "./UsersTech";

export interface Softwares {
  id?: number;
  entities?: Entities;
  locations?: Locations;
  users_tech?: UsersTech;
  groups_tech?: GroupsTech;
  manufacturers?: Manufacturers;
  users?: Users;
  groups?: Groups;
  softwarecategories?: SoftwareCategories;
  is_recursive?: boolean;
  name?: string;
  comment?: string;
  is_update?: boolean;
  is_deleted?: boolean;
  is_template?: boolean;
  template_name?: boolean;
  date_mod?: string;
  ticket_tco?: number;
  is_helpdesk_visible?: boolean;
  is_valid?: boolean;
  date_creation?: string;
  pictures?: string;
  softwares?: number;
  operatingsystems?: OperatingSystems;
}