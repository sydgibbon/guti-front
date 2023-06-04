import { useEffect } from "react";

interface SelectOptionProps {
  id: string;
  label?: string;
  options?: OptionValue[];
  value?: string | number | readonly string[] | undefined;

  onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined;

  setValue?: React.Dispatch<React.SetStateAction<any>>;
}
export interface OptionValue {
  id: string;
  name: string;
}

export default function SelectOption(selectOptionProps: SelectOptionProps) {
  const { id, label, options, value, onChange, setValue } = selectOptionProps;
  useEffect(() => {
    if (
      setValue !== undefined &&
      options !== undefined &&
      options?.length > 0
    ) {
      setValue((values : any) => ({...values, [id]: options[0].id}));
    }
  }, [options]);

  return (
    <div className="container flex flex-col gap-y-2">
      {label && (
        <label className="text-sm font-semibold container__label" htmlFor={id}>
          {label}
        </label>
      )}
      <select
        name={id.toLocaleLowerCase()}
        className="px-4 bg-gray-100 border rounded-md h-11"
        id={id}
        value={value}
        onChange={onChange}
      >
        {(options === undefined || options?.length === 0) && (
          <option value={0} selected>
            ----
          </option>
        )}
        {options !== undefined &&
          options?.length > 0 &&
          options.map((option: OptionValue, index: number) => (
            <option key={index} value={option.id}>
              {option.name}
            </option>
          ))}
      </select>
    </div>
  );
}
