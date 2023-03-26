export interface DataRow {
  id: number,
  name: string;
  cabletypes: { name: string };
  states: { name: string };
  users_tech: { name: string };
  otherserial: string;
  color: string;
  items_endpoint_b: number;
  items_endpoint_a: number;
  sockets_endpoint_b: number;
  sockets_endpoint_a: number;
}
