export interface DataRow {
  name: string;
  states: { name: string };
  manufacturers: { name: string };
  locations: { name: string };
  passivedctypes: { name: string };
  model: { name: string };
  date_mod: string;
  contact: string;
}