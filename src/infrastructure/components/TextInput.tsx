import { useState } from "react";

interface TextInputProps {
  id: string;
  label?: string;
  type?: string | number;
  placeholder?: string;
  required?: boolean;
  maxCharacters?: number;
  inputRef?: any
}

export default function TextInput(textInputProps: TextInputProps) {
  const { id, label, type, required, maxCharacters, placeholder, inputRef } = textInputProps;

  const [value, setValue] = useState<number | string>(type === "number" ? 0 : "");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="container flex flex-col gap-y-2">
      {label && (
        <label className="text-sm font-semibold container__label" htmlFor={id}>
          {label}
        </label>
      )}

      <input
        className="px-2 bg-gray-100 border rounded-md h-11 container__input"
        type={type === "number" ? "number" : "text"}
        inputMode={type === "number" ? "numeric" : "text"}
        required={required}
        placeholder={placeholder}
        id={id}
        name={id.toLocaleLowerCase()}
        maxLength={maxCharacters ?? 50}
        ref={inputRef}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
