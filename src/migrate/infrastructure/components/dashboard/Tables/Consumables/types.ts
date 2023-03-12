export interface DataRow {
  name: string;
  ref: string;
  consumableitemtypes: { name: string };
  manufacturers: { name: string };
  locations: { name: string };
  id: number;
}
