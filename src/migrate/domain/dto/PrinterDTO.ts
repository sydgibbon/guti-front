import { Autoupdatesystems } from "../models/Autoupdatesystems";
import { Entities } from "../models/Entities";
import { Groups } from "../models/Groups";
import { GroupsTech } from "../models/GroupsTech";
import { Locations } from "../models/Locations";
import { Manufacturers } from "../models/Manufacturers";
import { Networks } from "../models/Networks";
import { PrinterModels } from "../models/PrinterModels";
import { PrintersTypes } from "../models/PrintersTypes";
import { Snmpcredentials } from "../models/Snmpcredentials";
import { States } from "../models/States";
import { Users } from "../models/Users";
import { UsersTech } from "../models/UsersTech";

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
    entities: Entities,
    users_tech: UsersTech,
    groups_tech: GroupsTech,
    locations: Locations,
    networks: Networks,
    printertypes: PrintersTypes,
    printermodels: PrinterModels,
    manufacturers: Manufacturers,
    users: Users,
    groups: Groups,
    states: States,
    snmpcredentials: Snmpcredentials,
    autoupdatesystems: Autoupdatesystems,
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

