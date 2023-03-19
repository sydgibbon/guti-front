export interface ConsumablesDTO {
  id: number;
  name: string;
  ref: string;
  is_deleted: boolean;
  comment: string;
  otherserial: string;
  pictures: string;
  entities: number;
  locations: number;
  consumableitemtypes: number;
  manufacturers: number;
  users_tech: number;
  groups_tech: number;
  stock_target: number;
  is_recursive: boolean;
  alarm_threshold: number;
  date_mod: string;
  date_creation: string;
}
