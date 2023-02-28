export interface DataRow {
  name: string;
  states: { name: string };
  manufacterers: { name: string };
  locations: { name: string };
  monitortypes: { name: string };
  model: { name: string };
  date_mod: string;
  contact: string;
}
