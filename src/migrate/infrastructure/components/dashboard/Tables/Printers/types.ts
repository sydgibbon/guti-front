export interface DataRow {
  id: number;
  locations: { name: string };
  printertypes: { name: string };
  manufacturers: { name: string };
  states: { name: string};
  name: string;
  date_mod: string;
  printermodels: { name: string};
}