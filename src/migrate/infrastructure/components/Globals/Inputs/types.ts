export interface TextInputProps {
  id: string;
  label?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  maxCharacters?: number;
  onChange?: (value: string) => void;
}