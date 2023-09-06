export interface ConsumableItemsDTO {
  id: number;
  is_recursive?: number;
  is_deleted?: number;
  name: string;
  ref: string;
  comment: string;
  manufacturers: string;
  locations: string;
  consumableitemtypes: string;
  alarm_threshold?: number;
  stock_target: number;
  date_mod?: number;
  date_creation?: number;
  otherserial: string;
  pictures?: string;
  entities: number;
  groups_tech: number;
  users_tech: number;
}