export interface PrinterDTO {
    name:string,
    contact:string,
    contact_num:string,
    serial:string,
    otherserial:string,
    comment:string,
    template_name:string,
    uuid:string,
    sysdescr:string,
    entities:number,
    users_tech:number,
    groups_tech:number,
    locations:number,
    networks:number,
    printertypes:number,
    printermodels:number,
    manufacturers:number,
    users:number,
    groups:number,
    states:number,
    snmpcredentials:number,
    autoupdatesystems:number,
    init_pages_counter:number,
    last_pages_counter:number,
    ticket_tco:number,
    date_mod: string,
    date_creation:string,
    last_inventory_update:string,
    is_recursive:boolean,
    have_serial:boolean,
    have_parallel:boolean,
    have_usb:boolean,
    have_wifi:boolean,
    have_ethernet:boolean,
    is_deleted:boolean,
    is_global:boolean,
    is_template:boolean,
    is_dynamic:boolean,
}

