interface ImageInputProps {
  id: string;
  label?: string;
  type?: string;
  required?: boolean;
  maxSize?: number;
  inputRef?: any;
  fileType?: string;
  multiple?: boolean;
  infoRef?: string;
  placeHolder?: string;
  btnText?: string;
}

export default function ImageInput(imageInputProps: ImageInputProps) {
  const {
    id,
    label,
    type,
    required,
    maxSize,
    inputRef,
    fileType,
    multiple,
    infoRef,
    placeHolder,
    btnText,
  } = imageInputProps;

  return (
    <div className="container flex flex-col gap-y-2">
      {label && (
        <label className="text-sm font-semibold container__label" htmlFor={id}>
          {label}
        </label>
      )}

      <div className="py-2 bg-gray-100 border rounded-md flex flex-col gap-y-2 items-center appearance-none container__image-input">
        <span className="text-sm font-semibold">
          File(s) (40 Mio max){" "}
          <a
            href={infoRef}
            title="Help"
            className="text-blue-800 font-mono text-lg"
          >
            i
          </a>
        </span>
        <span className="text-sm font-semibold">
          Drag and drop your file here, or
        </span>
        <input
          // className="appearance-none p-2 border rounded-md bg-white hover:mouse container__input"
          className="opacity-0 absolute -z-10 overflow-hidden"
          type={type ?? "file"}
          accept={fileType}
          multiple={multiple}
          required={required}
          id={id}
          name={id.toLocaleLowerCase()}
          maxLength={maxSize ?? 50}
          ref={inputRef}
        />
        <div className="py-2 divide-x divide-x-reverse">
          <label
            className="p-2 border rounded-l-md bg-white hover:bg-primary-light block"
            htmlFor={id}
          >
            {btnText}
          <span className="p-2 border rounded-r-md bg-white">algo</span>
          </label>
        </div>
      </div>
    </div>
  );
}
