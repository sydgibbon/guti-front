export interface PduData {
  name: string | null;
  is_recursive: number | null;
  serial: string | null;
  otherserial: string | null;
  is_template: number;
  template_name: string | null;
  comment: string | null;
  is_deleted: number | null;
  date_mod: string | null;
  date_creation: string | null;
  entities: string | null;
  locations: number | null;
  pdumodels: number | null;
  users_tech: number | null;
  groups_tech: string | null;
  states: number | null;
  manufacturers: number | null;
  pdutypes: number | null;
}
