export interface ComputerDTO  {
    id: number;
    computertypes?: any;
    computermodels?: any;
    entities?: any;
    networks?: any;
    locations?: any;
    autoupdatesystems?: any;
    users?: any;
    groups?: any;
    states?: any;
    manufacturers?: any;
    name: string;
    serial?: any;
    otherserial: string;
    contact: string;
    contact_num: string;
    comment?: any;
    date_mod?: any;
    is_template: number;
    template_name?: any;
    is_deleted: number;
    is_dynamic: number;
    ticket_tco?: any;
    uuid: string;
    date_creation?: any;
    is_recursive: number;
    last_inventory_update?: any;
    users_tech?: any;
    groups_tech?: any;

}