interface SelectOptionProps {
  id: string;
  label?: string;
  options?: OptionValue[];
}
export interface OptionValue {
  id: string;
  name: string;
} 

export default function SelectOption(selectOptionProps: SelectOptionProps) {
  const { id, label, options } = selectOptionProps;

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

