export interface PhoneDTO {
  name: string;
  contact: string;
  contact_num: string;
  comment: string;
  serial: string;
  otherserial: string;
  brand: string;
  number_line: string;
  uuid: string;
  entities: Object;
  users_tech: Object;
  groups_tech: Object;
  locations: Object;
  phonetypes: Object;
  phonemodels: Object;
  phonepowersupplies: Object;
  manufacturers: Object;
  users: Object;
  groups: Object;
  states: Object;
  autoupdatesystems: Object;
  have_headset: boolean;
  have_hp: boolean;
  is_global: boolean;
  is_deleted: boolean;
  is_template: boolean;
  is_dynamic: boolean;
  is_recursive: boolean;
  ticket_tco: number;
  date_mod: string;
  date_creation: string;
}
