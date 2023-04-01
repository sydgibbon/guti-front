export interface TextInputProps {
  id: string;
  label?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  maxCharacters?: number;
  onChange?: (value: string) => void;
}

export interface CreateComputer {
  name?: string;
  user_id?: string;
  location_id?: string;
  serial?: string;
  contact?: string;
  contact_num?: string;
  comment?: string;
  uuid?: string;
}
