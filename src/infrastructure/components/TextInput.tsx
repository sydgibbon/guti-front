import { useState } from "react";

interface TextInputProps {
  id: string;
  label?: string;
  type?: "string" | "number" | "color";
  placeholder?: string;
  required?: boolean;
  maxCharacters?: number;
  inputRef?: any
}


export default function TextInput(textInputProps: TextInputProps) {
  const { id, label, type, required, maxCharacters, placeholder, inputRef } = textInputProps;

  const [value, setValue] = useState<number | string>(type === "number" ? 0 : type === "color" ? "#808080" : "");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const colorPlaceholderStyle = {
    "--color-placeholder": value as string,
  } as React.CSSProperties


  return (
    <div className="container flex flex-col gap-y-2">
      {label && (
        <label className="text-sm font-semibold container__label" htmlFor={id}>
          {label}
        </label>
      )}

      {type === "color" ? (
        <div className="color-input-container" style={colorPlaceholderStyle}>
          <input
            className="container px-2 py-0 bg-gray-100 border rounded-md h-11"
            type="color"
            required={required}
            id={id}
            name={id.toLowerCase()}
            ref={inputRef}
            value={value as string}
            onChange={handleChange}
          />
        </div>
      ) : (
        <input
          className="px-2 bg-gray-100 border rounded-md h-11 container__input"
          type={type === "number" ? "number" : "text"}
          inputMode={type === "number" ? "numeric" : "text"}
          required={required}
          placeholder={placeholder}
          id={id}
          name={id.toLowerCase()}
          maxLength={maxCharacters ?? 50}
          ref={inputRef}
          value={value}
          onChange={handleChange}
        />
      )}
    </div>
  );
}
