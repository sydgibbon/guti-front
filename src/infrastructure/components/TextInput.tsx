interface TextInputProps {
  id: string;
  label?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  maxCharacters?: number;
  inputRef?: any;

  value?: string | number | readonly string[] | undefined;

  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

export default function TextInput(textInputProps: TextInputProps) {
  const { id, label, type, required, maxCharacters, placeholder, inputRef, value, onChange } = textInputProps;

  return (
    <div className="container flex flex-col gap-y-2">
      {label && (
        <label className="text-sm font-semibold container__label" htmlFor={id}>
          {label}
        </label>
      )}

      <input
        className="px-2 bg-gray-100 border rounded-md h-11 container__input"
        type={type ?? "text"}
        required={required}
        placeholder={placeholder}
        id={id}
        name={id.toLocaleLowerCase()}
        maxLength={maxCharacters ?? 50}
        ref={inputRef}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
