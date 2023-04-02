export interface DataRow {
  name: string;
  ref: string;
  cartridgeitemtypes: { name: string}; 
  manufacturers: { name: string };
  locations: { name: string };
  cartridges: string;
}
