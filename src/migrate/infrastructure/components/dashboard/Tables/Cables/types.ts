import { Cabletypes } from "../../../../../domain/models/Cabletypes";
import { States } from "../../../../../domain/models/States";
import { UsersTech } from "../../../../../domain/models/UsersTech";

export interface DataRow {
  id: number,
  name: string;
  cabletypes: Cabletypes;
  states: States;
  users_tech: UsersTech;
  otherserial: string;
  color: string;
  items_endpoint_b: number;
  items_endpoint_a: number;
  sockets_endpoint_b: number;
  sockets_endpoint_a: number;
}
