import { Cablestrands } from "../models/Cablestrands";
import { Cabletypes } from "../models/Cabletypes";
import { Entities } from "../models/Entities";
import { States } from "../models/States";
import { UsersTech } from "../models/UsersTech";

export interface CableDTO {
  id: number;
  entities: Entities;
  users_tech: UsersTech;
  cablestrands: Cablestrands;
  cabletypes: Cabletypes;
  states: States;
  name: string;
  is_recursive: number;
  itemtype_endpoint_a: string;
  itemtype_endpoint_b: string;
  color: string;
  otherserial: string;
  comment: string;
  date_mod: string;
  date_creation: string;
  items_endpoint_a: number;
  items_endpoint_b: number;
  socketmodels_endpoint_a: number;
  socketmodels_endpoint_b: number;
  sockets_endpoint_a: number;
  sockets_endpoint_b: number;
}
