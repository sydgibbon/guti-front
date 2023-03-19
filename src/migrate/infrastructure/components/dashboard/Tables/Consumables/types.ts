export interface DataRow {
  ref: string;
  name: string;
  consumableitemtypes: { name: string };
  manufacturers: { name: string };
  locations: { name: string };
  id: number;
}
