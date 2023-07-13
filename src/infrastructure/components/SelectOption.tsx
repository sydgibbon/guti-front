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
  const { id, label, options, onSelect, style, onChange } = selectOptionProps;
  useEffect(() => {
    if (options && onChange && options.length > 0)
    onChange({target:{name: id,
    value: options[0].id}})
  }, [options])
  

  return (
    <div className="container flex flex-col gap-y-2" style={style}>
      {label && (
        <label className="text-sm font-semibold container__label" htmlFor={id}>
          {label}
        </label>
      )}

      <select
        name={id.toLocaleLowerCase()}
        className="px-4 bg-gray-100 border rounded-md h-11"
        id={id}
        onChange={onChange}
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

