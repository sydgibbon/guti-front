import { ChangeEvent, useEffect, useState } from "react";

interface ImageInputProps {
  id: string;
  label?: string;
  type?: string;
  required?: boolean;
  maxSize: number;
  inputRef?: any;
  fileType?: string;
  multiple?: boolean;
  infoRef?: string;
  placeHolder?: string;
  btnText?: string;
}

export default function ImageInput(imageInputProps: ImageInputProps) {
  const { id, label, type, required, maxSize, inputRef, fileType, multiple } =
    imageInputProps;

  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [fileSizeError, setFileSizeError] = useState<string | null>(null);

  useEffect(() => {
    if (selectedFiles) {

      // Create a FormData object and append each file to it
      const formData = new FormData();
      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];
        formData.append("files", file);
      }
    }
  }, [selectedFiles]);

  // File checking method
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const fileSizeLimit = maxSize ? maxSize * 1024 * 1024 : Infinity; // Convert maxSize from MB to bytes
      let exceedsLimit = false;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.size > fileSizeLimit) {
          exceedsLimit = true;
          break;
        }
      }
      if (exceedsLimit) {
        setFileSizeError(`File size exceeds the limit of ${maxSize} MB.`);
        setSelectedFiles(null);
      } else {
        setFileSizeError(null);
        setSelectedFiles(files);
      }
    }
  };

  function formatFileSize(fileSize: number) {
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(fileSize) / Math.log(1024));
    const formattedSize = (fileSize / Math.pow(1024, i)).toFixed(2);
    return `${formattedSize} ${sizes[i]}`;
  }

  return (
    <div className="container flex flex-col gap-y-2">
      {label && (
        <label className="text-sm font-semibold container__label" htmlFor={id}>
          {label}
        </label>
      )}

      <div className="py-2 bg-gray-100 border rounded-md flex flex-col gap-y-2 items-center appearance-none container__image-input">
        <span className="text-sm font-semibold">File(s) (40 MB max)</span>

        {selectedFiles && (
          <div className="text-sm">
            {Array.from(selectedFiles).map((file, index) => (
              <div key={index}>{`${file.name} - ${formatFileSize(file.size)}`}</div>
            ))}
          </div>
        )}

        <span className="text-sm font-semibold">
          Drag and drop your file here, or
        </span>
        <input
          className="appearance-none p-2 border rounded-md bg-white hover:border-red-400 container__input"
          type={type ?? "file"}
          accept={fileType}
          multiple={multiple}
          required={required}
          id={id}
          name={id.toLocaleLowerCase()}
          maxLength={maxSize}
          ref={inputRef}
          onChange={handleFileChange}
        />
        {fileSizeError && (
          <span className="text-lg font-bold text-red-500">{fileSizeError}</span>
        )}
      </div>
    </div>
  );
}
