import { TextInputProps } from "./types";

export default function TextInputPrimary(textInputProps: TextInputProps) {
  const { id, label, type, required, maxCharacters, placeholder, onChange } =
    textInputProps;

  const handleInputChange = (event: any) => {
    if (!onChange) return;

    onChange(event.target.value);
  };

  return (
    <div className="container flex flex-col gap-y-2">
      {label && (
        <label className="text-sm font-semibold container__label" htmlFor={id}>
          {label}
        </label>
      )}

      <input
        onChange={handleInputChange}
        className="px-2 bg-gray-100 border rounded-md h-11 container__input"
        type={type ?? "text"}
        required={required}
        placeholder={placeholder}
        id={id}
        name={id.toLocaleLowerCase()}
        maxLength={maxCharacters ?? 50}
      />
    </div>
  );
}
