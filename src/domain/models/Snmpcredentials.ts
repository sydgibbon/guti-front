export interface SnmpCredentials {
  id: number
  name?: string
  snmpversion?: string
  community?: string
  username?: string
  authentication?: string
  auth_passphrase?: string
  encryption?: string
  priv_passphrase?: string
  is_deleted?: number
}
