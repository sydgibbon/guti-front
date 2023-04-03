import { Entities } from "../models/Entities";
import { OperatingSystems } from "../models/OperatingSystems";
import { Softwares } from "../models/Softwares";
import { States } from "../models/States";
export interface SoftwareDTO {
      id: number;
      entities: Entities;
      softwares: Softwares;
      states: States;
      operatingsystems: OperatingSystems;
      is_recursive: number;
      name: string;
      arch: string;
      comment: string;
      date_mod: string;
      date_creation: string;
}

