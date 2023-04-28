interface TextAreaProps {
  id: string;
  label?: string;
  cols?: number;
  rows?: number;
  placeholder?: string;
  required?: boolean;
}

export default function TextArea(textAreaProps: TextAreaProps) {
  const { id, label, cols, rows, placeholder, required } = textAreaProps;

  return (
    <div className="container flex flex-col gap-y-2">
      {label && (
        <label className="text-sm font-semibold container__label" htmlFor={id}>
          {label}
        </label>
      )}

      <textarea
      className="px-2 bg-gray-100 border rounded-md container__textarea"
        placeholder={placeholder}
        name={id.toLocaleLowerCase()}
        id={id}
        cols={cols ?? 10}
        rows={rows ?? 10}
        required={required}
      />
    </div>
  );
}
