import { OptionValue } from "../types";
import { SelectOptionProps } from "./types";

export default function SelectOptionPrimary(
  selectOptionProps: SelectOptionProps
) {
  const { id, label, unselectLabel, possibleOptions, isLoading, onChange } =
    selectOptionProps;

  const handleChange = (event: any) => {
    if (!possibleOptions) return;

    const selectedOption = possibleOptions.find(
      (option) => option.value === event.target.value
    );

    if (!selectedOption) return;

    if (!onChange) return;

    onChange(selectedOption);
  };

  return (
    <div className="container flex flex-col gap-y-2">
      {label && (
        <label className="text-sm font-semibold container__label" htmlFor={id}>
          {label}
        </label>
      )}
      <select
        id={id}
        disabled={!!isLoading}
        name={id.toLocaleLowerCase()}
        onChange={handleChange}
        className="px-4 bg-gray-100 border rounded-md h-11"
      >
        <option selected value={undefined}>
          {unselectLabel ?? "-"}
        </option>
        {possibleOptions &&
          possibleOptions.map((option: OptionValue) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
      </select>
    </div>
  );
}
