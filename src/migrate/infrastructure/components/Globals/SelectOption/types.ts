import { OptionValue } from "../types";

export interface SelectOptionProps {
  id: string;
  label?: string;
  possibleOptions?: OptionValue[];
  isLoading?: boolean;
  onChange?: (value: OptionValue) => void;
}
