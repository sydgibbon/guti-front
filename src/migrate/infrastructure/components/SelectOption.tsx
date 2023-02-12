interface SelectOptionProps {
  id: string;
  label?: string;
  options?: string[];
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
        <option value={undefined} selected>
          Unassigned
        </option>
        {options &&
          options.map((option: string, index: number) => (
            <option key={index} value={option.trim().toLocaleLowerCase()}>
              {option}
            </option>
          ))}
      </select>
    </div>
  );
}
