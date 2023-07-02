import { useState } from "react";

interface TextInputProps {
  id: string;
  label?: string;
  type?: "text" | "number";
  placeholder?: string;
  required?: boolean;
  maxCharacters?: number;
  inputRef?: any
  onChange?: (e: any) => void
}


export default function TextInput(textInputProps: TextInputProps) {
  const { id, label, type, required, maxCharacters, placeholder, inputRef, onChange } = textInputProps;


  return (
    <div className="w-full flex flex-col gap-y-2">
      {label && (
        <label className="text-sm font-semibold container__label" htmlFor={id}>
          {label}
        </label>
      )}

      <input
        className="px-2 bg-gray-100 border rounded-md h-11 container__input"
        type={type}
        required={required}
        placeholder={placeholder}
        id={id}
        name={id.toLocaleLowerCase()}
        maxLength={maxCharacters ?? 50}
        ref={inputRef}
        onChange={onChange}
      />
    </div>
  );
}
