export interface SoftwareDTO {
      id: number;
      entities?: number;
      locations?: number;
      users_tech?: number;
      groups_tech?: number;
      manufacturers?: number;
      users?: number;
      groups?: number;
      softwarecategories?: boolean;
      is_recursive: boolean;
      name?: string;
      comment?: string;
      is_update: boolean;
      is_deleted: boolean;
      is_template: boolean;
      template_name?: boolean;
      date_mod?: Date;
      ticket_tco?: number;
      is_helpdesk_visible: boolean;
      is_valid: boolean;
      date_creation?: Date;
      pictures?: string;
      softwares?: number;
}

