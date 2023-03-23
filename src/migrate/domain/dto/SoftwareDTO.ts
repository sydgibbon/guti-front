import { Entities } from "../models/Entities";
import { Groups } from "../models/Groups";
import { GroupsTech } from "../models/GroupsTech";
import { Locations } from "../models/Locations";
import { Manufacturers } from "../models/Manufacturers";
import { SoftwareCategories } from "../models/SoftwareCategories";
import { Users } from "../models/Users";
import { UsersTech } from "../models/UsersTech";

export interface SoftwareDTO {
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
}

