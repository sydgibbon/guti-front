export interface ComputerDTO  {
    computermodels?: number;

    computertypes?: number;
    entities?: number;
    networks?: number;

    manufacturers?: number;
    locations?: number;
    autoupdatesystems?: number;
    users?: number;
    groups?:  number;
    states?:  number;
    name?: string;
    serial?: string;
    otherserial?: string;
    contact?: string;
    contact_num?: string;
    comment?: string;
    date_mod?: string;
    is_template?: boolean;
    template_name?: string;
    is_deleted?: boolean;
    is_dynamic?: boolean;
    ticket_tco?: string;
    uuid?: string;
    date_creation?: string;
    is_recursive?:  boolean;
    last_inventory_update?: string;
    users_tech?:  number;
    groups_tech?: string;
}