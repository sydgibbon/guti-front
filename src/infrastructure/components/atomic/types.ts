export interface SelectComponentProps {
  id: string;
  className: string;
  onChange: (value: OptionValue) => void;
}

export interface OptionValue {
  id: string;
  value?: string;
  name?: string;
  label?: string;
}

export interface AlertProps {
  alertType: string;
  message: string;
  open: boolean;
  setOpen: (value: boolean) => void;
}
