export interface ConsumableItemsDTO {
  id: number;
  name: string;
  ref: string;
  is_deleted: number;
  comment?: string;
  otherserial?: string;
  pictures?: string;
  entities: number;
  locations: number;
  consumableitemtypes: number;
  manufacturers: number;
  users_tech?: number;
  groups_tech?: number;
  stock_target: number;
  is_recursive?: number;
  alarm_threshold?: number;
  date_mod: any;
  date_creation: any;
}
