export interface DataRow {
  name: string;
  states: { name: string };
  manufacturers: { name: string };
  serial: string;
  computertypes: { name: string };
  computermodels: { name: string };
  locations: { name: string} ;
  date_mod: string;
}
