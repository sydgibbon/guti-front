import { useEffect } from "react";

interface SelectOptionProps {
  id: string;
  label?: string;
  options?: OptionValue[];
  onSelect?: (selectedOption: OptionValue) => void;
  style?: React.CSSProperties | undefined;
  onChange?: (e: any) => void;
}
export interface OptionValue {
  id: string;
  name: string;
}

export default function SelectOption(selectOptionProps: SelectOptionProps) {
  const { id, options, onSelect, style, onChange } = selectOptionProps;

  return (
    <div className="container flex flex-col gap-y-2" style={style}>
      <select
        name={id.toLocaleLowerCase()}
        className="px-4 bg-gray-100 border rounded-md h-11"
        id={id}
        onChange={(event) => {
          const selectedOptionId = event.target.value;
          const selectedOption = options && options.find(option => option.id === selectedOptionId);
          if (selectedOption && onSelect) {
            onSelect(selectedOption);
          }
        }}
      >
        {options === undefined && <option value={undefined} selected>
          Unassigned
        </option>}
        {options &&
          options.map((option: OptionValue, index: number) => (
            <option key={index} value={option.id}>
              {option.name}
            </option>
          ))}
      </select>
    </div>
  );
}

