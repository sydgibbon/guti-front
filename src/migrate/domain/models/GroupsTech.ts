export interface GroupsTech {
  id: number
  name?: string
  entities_id?: number
  is_recursive?: number
  comment?: string
  ldap_field?: string
  ldap_value?: string
  ldap_group_dn?: string
  date_mod?: string
  groups_id?: number
  completename?: string
  level?: number
  ancestors_cache?: string
  sons_cache?: string
  is_requester?: number
  is_watcher?: number
  is_assign?: number
  is_task?: number
  is_notify?: number
  is_itemgroup?: number
  is_usergroup?: number
  is_manager?: number
  date_creation?: string
  permissions?: number[]
}
